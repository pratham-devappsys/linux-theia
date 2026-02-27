// import { injectable, inject } from 'inversify';
// import {
//     FrontendApplicationContribution,
//     ApplicationShell
// } from '@theia/core/lib/browser';

// @injectable()
// export class DisableOutlineContribution implements FrontendApplicationContribution {

//     @inject(ApplicationShell)
//     protected readonly shell!: ApplicationShell;

//     async onStart(): Promise<void> {


//         const outline = this.shell.getWidgets('right');
//         if(outline){
//             this.shell.close();
//         }
        
     
//     }
// }