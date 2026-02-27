import { injectable, inject } from 'inversify';
import {
    FrontendApplicationContribution,
    ApplicationShell
} from '@theia/core/lib/browser';

@injectable()
export class HideLayoutContribution implements FrontendApplicationContribution {

    @inject(ApplicationShell)
    protected readonly shell!: ApplicationShell;

    async onStart(): Promise<void> {
        await this.shell.collapsePanel('left');
        await this.shell.collapsePanel('right');
        await this.shell.collapsePanel('bottom');


       
    }
}