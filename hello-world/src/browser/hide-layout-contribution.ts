import { injectable, inject } from 'inversify';
import {
    FrontendApplicationContribution,
    ApplicationShell
} from '@theia/core/lib/browser';

@injectable()
export class RemoveContainersContribution implements FrontendApplicationContribution {

    @inject(ApplicationShell)
    protected readonly shell!: ApplicationShell;

    async onStart(): Promise<void> {
        console.log("Application started — closing all widgets");

     
        setTimeout(() => {
            this.shell.closeMany([...this.shell.widgets]);
        }, 500);
    }
}