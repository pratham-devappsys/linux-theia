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

    async onDidInitializeLayout(): Promise<void> {

        //localStorage.setItem('openfile', 'file:///home/devappsys/Documents/projects/python-theia/main.c');


const storagePath = localStorage.getItem('openfile');

const filePath =
    storagePath ??
    'file:///home/devappsys/Documents/projects/python-theia/main.c';

        try {
            const uri = new URI(filePath);

            const editor = await this.editorManager.open(uri, {
                mode: 'activate'
            });

            this.shell.activateWidget(editor.id);

            console.log('Opened file:', filePath);

        } catch (error) {
            console.error('Failed to open file:', error);
        }
    }
}