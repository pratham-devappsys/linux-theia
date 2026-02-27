// import { injectable } from 'inversify';
// import {
//     CommandContribution,
//     CommandRegistry
// } from '@theia/core/lib/common';

// @injectable()
// export class DisableFileCommands implements CommandContribution {

//     registerCommands(commands: CommandRegistry): void {

//         const toDisable = [
//             'file.new',
//             'file.open'
//         ];

//         for (const id of toDisable) {
//             if (commands.getCommand(id)) {
//                 commands.unregisterCommand(id);
//                 console.log("\n\n\n\n\n\n\n\n\n\n===> id is disable:", id);
//             }
//         }

//         console.log('File commands disabled');
//     }
// }