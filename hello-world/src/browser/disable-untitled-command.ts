// import { injectable } from 'inversify';
// import {
//     CommandContribution,
//     CommandRegistry
// } from '@theia/core/lib/common';

// @injectable()
// export class DisableUntitledCommand implements CommandContribution {

//     registerCommands(commands: CommandRegistry): void {

//         const id = 'workspace.newUntitledFile';

//         if (commands.getCommand(id)) {
//             commands.unregisterCommand(id);
//         }
//     }
// }   