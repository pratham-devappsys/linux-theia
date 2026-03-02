const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = process.cwd();
const productionDir = path.join(rootDir, 'production');
const browserAppDir = path.join(rootDir, 'browser-app');
const pluginsDir = path.join(rootDir, 'plugins');

console.log('Preparing production build...\n');

// ------------------------------
// 1️⃣ Clean production folder
// ------------------------------
if (fs.existsSync(productionDir)) {
    console.log('Removing old production folder...');
    fs.rmSync(productionDir, { recursive: true, force: true });
}

fs.mkdirSync(productionDir);
console.log('Created production directory.\n');

// ------------------------------
// 2️⃣ Copy compiled backend (lib)
// ------------------------------
const libSource = path.join(browserAppDir, 'lib');
const libTarget = path.join(productionDir, 'lib');

if (!fs.existsSync(libSource)) {
    console.error('ERROR: browser-app/lib does not exist. Did you run build?');
    process.exit(1);
}

fs.cpSync(libSource, libTarget, { recursive: true });
console.log('Copied compiled lib folder.');

// ------------------------------
// 3️⃣ Copy and clean package.json
// ------------------------------
const browserPkgPath = path.join(browserAppDir, 'package.json');
const productionPkgPath = path.join(productionDir, 'package.json');

const browserPkg = JSON.parse(fs.readFileSync(browserPkgPath, 'utf-8'));

// Remove workspace-only deps (like hello-world)
if (browserPkg.dependencies) {
    for (const dep of Object.keys(browserPkg.dependencies)) {
        const version = browserPkg.dependencies[dep];
        if (
            version === "0.0.0" ||
            version.startsWith("file:") ||
            version.includes("workspace")
        ) {
            console.log(`Removing workspace dependency: ${dep}`);
            delete browserPkg.dependencies[dep];
        }
    }
}

// Remove devDependencies entirely
delete browserPkg.devDependencies;

// Mark as non-private
browserPkg.private = false;

// Write cleaned package.json
fs.writeFileSync(
    productionPkgPath,
    JSON.stringify(browserPkg, null, 2)
);

console.log('Created cleaned production package.json.');

// ------------------------------
// 4️⃣ Copy plugins (if exists)
// ------------------------------
if (fs.existsSync(pluginsDir)) {
    fs.cpSync(
        pluginsDir,
        path.join(productionDir, 'plugins'),
        { recursive: true }
    );
    console.log('Copied plugins folder.');
}

// ------------------------------
// 5️⃣ Install production deps
// ------------------------------
console.log('\nInstalling production dependencies...');
execSync('npm install --omit=dev', {
    cwd: productionDir,
    stdio: 'inherit'
});

console.log('\n✅ Production build ready!');
console.log('---------------------------------------');
console.log('To run:');
console.log('cd production');
console.log('node lib/backend/main.js');
console.log('---------------------------------------');