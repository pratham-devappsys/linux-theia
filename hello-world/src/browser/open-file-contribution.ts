    // import { injectable, inject } from 'inversify';
    // import {
    //     FrontendApplicationContribution,
    //     ApplicationShell
    // } from '@theia/core/lib/browser';
    // import { EditorManager } from '@theia/editor/lib/browser';
    // import {URI} from '@theia/core/lib/common/uri';

    // @injectable()
    // export class OpenSingleFileContribution implements FrontendApplicationContribution {

    //     @inject(EditorManager)
    //     protected readonly editorManager!: EditorManager;

    //     @inject(ApplicationShell)
    //     protected readonly shell!: ApplicationShell;

    //     async onDidInitializeLayout(): Promise<void> {

    //         // localStorage.setItem('openfile', 'file:///home/devappsys/Documents/projects/linux-theia/dummy/main.c');  //for testing 


    // const storagePath = localStorage.getItem('openfile');

    // const filePath =
    //     storagePath ??
    //     'file:///home/devappsys/Documents/projects/linux-theia/dummy/main.c';

    //         try {
    //             const uri = new URI(filePath);

    //             const editor = await this.editorManager.open(uri, {
    //                 mode: 'activate'
    //             });

    //             this.shell.activateWidget(editor.id);

    //             console.log('Opened file:', filePath);

    //         } catch (error) {
    //             console.error('Failed to open file:', error);
    //         }
    //     }
    // }



//     import { injectable, inject } from 'inversify';
// import {
//     FrontendApplicationContribution,
//     ApplicationShell
// } from '@theia/core/lib/browser';
// import { EditorManager } from '@theia/editor/lib/browser';
// import URI from '@theia/core/lib/common/uri';

// @injectable()
// export class OpenSingleFileContribution implements FrontendApplicationContribution {

//     @inject(EditorManager)
//     protected readonly editorManager!: EditorManager;

//     @inject(ApplicationShell)
//     protected readonly shell!: ApplicationShell;

//     async onDidInitializeLayout(): Promise<void> {



//         const storagePath = localStorage.getItem('openfile');

//         const filePath =
//             storagePath ??
//             'file:///home/devappsys/Documents/projects/linux-theia/dummy/main.c';

//         try {

//             for (const widget of this.editorManager.all) {
//                 console.log("closing opened file ")
//     widget.dispose();
// }

//             for (const widget of this.shell.mainPanel.widgets()) {
//                 console.log("closing opened file ")
//                 widget.dispose();
//             }

//             console.log("inside onDidInitializeLayout, opening file: ", filePath);

//             const uri = new URI(filePath);

//             const editor = await this.editorManager.open(uri, {
//                 mode: 'activate'
//             });

//             this.shell.activateWidget(editor.id);

//             console.log('Opened file:', filePath);

//         } catch (error) {
//             console.error('Failed to open file:', error);
//         }
//     }
// }









import { injectable, inject } from 'inversify';
import {
    FrontendApplicationContribution,
    ApplicationShell
} from '@theia/core/lib/browser';
import { EditorManager } from '@theia/editor/lib/browser';
import URI from '@theia/core/lib/common/uri';

@injectable()
export class OpenSingleFileContribution implements FrontendApplicationContribution {

    @inject(EditorManager)
    protected readonly editorManager!: EditorManager;

    @inject(ApplicationShell)
    protected readonly shell!: ApplicationShell;

onStart(): void {

    window.addEventListener('message', async (event) => {

        if (!event.data || event.data.type !== 'OPEN_FILE') {
            return;
        }

        const filePath = event.data.path;

        console.log("Received postMessage to open file:", filePath);

        try {

            for (const widget of this.editorManager.all) {
                widget.close();
            }

            const uri = new URI(filePath);

            const editor = await this.editorManager.open(uri, {
                mode: 'activate'
            });

            this.shell.activateWidget(editor.id);

            console.log("Opened file via postMessage:", filePath);

        } catch (err) {
            console.error(err);
            console.error('Failed to open file via postMessage:', err);
        }
    });
}
}