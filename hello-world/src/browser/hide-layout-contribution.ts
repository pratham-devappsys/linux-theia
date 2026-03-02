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


        console.log('Removing LEFT, RIGHT, BOTTOM containers from the UI');
        
        const left = this.shell.getWidgets('left');
        left.forEach(widget => widget.dispose());


        const main = this.shell.getWidgets('main');
        main.forEach(widget => widget.dispose());

        // Remove RIGHT sidebar container
        const right = this.shell.getWidgets('right');
        right.forEach(widget => widget.dispose());

        // Remove BOTTOM panel container
        const bottom = this.shell.getWidgets('bottom');
        bottom.forEach(widget => widget.dispose());
    }
}