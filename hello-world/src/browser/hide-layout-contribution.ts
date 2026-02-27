import { injectable, inject } from 'inversify';
import {
    FrontendApplicationContribution,
    ApplicationShell,
        FrontendApplication
} from '@theia/core/lib/browser';

import { OutlineViewWidget } from '@theia/outline-view/lib/browser/outline-view-widget';


@injectable()
export class HideLayoutContribution implements FrontendApplicationContribution {

    @inject(ApplicationShell)
    protected readonly shell!: ApplicationShell;

    async onStart(app:FrontendApplication): Promise<void> {
        await this.shell.collapsePanel('left');
        await this.shell.collapsePanel('right');
        await this.shell.collapsePanel('bottom');

  const outline = app.shell.getWidgets('left')
            .find(widget => widget instanceof OutlineViewWidget);

            console.log("\n \n \n above removing the outline \n", outline);

        if (outline) {
            app.shell.closeWidget(outline.id);

            console.log("\n \n \n removing the outline \n", outline.id)
        }
       
    }
}