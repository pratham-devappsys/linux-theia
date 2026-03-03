// import { injectable } from 'inversify';
// import { FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser';
// import { CommandRegistry } from '@theia/core/lib/common';

// @injectable()
// export class DisableRunBarContribution implements FrontendApplicationContribution {

//     onStart(app: FrontendApplication): void {
//         const registry = app.commandRegistry as CommandRegistry;

//         // List of common Run/Debug command IDs
//         const commandsToDisable = [
//             'workbench.action.debug.start',
//             'workbench.action.debug.run',
//             'workbench.action.debug.continue',
//             'workbench.action.terminal.runTask'
//         ];

//         for (const id of commandsToDisable) {
//             if (registry.isRegistered(id)) {
//                 registry.unregisterCommand(id);  // completely disable the command
//             }
//         }
//     }
// }