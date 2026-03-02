// import { injectable } from 'inversify';
// import { FileNavigatorContribution } from '@theia/navigator/lib/browser/navigator-contribution';
// import { CommandRegistry } from '@theia/core/lib/common';
// import { CommonCommands } from '@theia/core/lib/browser';

// @injectable()
// export class CustomExplorerContribution extends FileNavigatorContribution {

//     override registerCommands(registry: CommandRegistry): void {
//         super.registerCommands(registry);

//         registry.unregisterCommand(CommonCommands.CLOSE_ALL_MAIN_TABS.id);

//         registry.registerCommand(CommonCommands.CLOSE_ALL_MAIN_TABS, {
//             execute: () => {
//                 console.log("Intercepted Close All");

//                 this.shell.closeMany([...this.shell.widgets]);
//             }
//         });
//     }
// }