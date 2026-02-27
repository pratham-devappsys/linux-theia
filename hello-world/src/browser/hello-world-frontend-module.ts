import { ContainerModule } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
// import { CommandContribution } from '@theia/core/lib/common';

import { HideLayoutContribution } from './hide-layout-contribution';
import { OpenSingleFileContribution } from './open-file-contribution';
// import { DisableFileCommands } from './disable-file-commands';
// import { DisableUntitledCommand } from './disable-untitled-command';

export default new ContainerModule(bind => {

    bind(HideLayoutContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(HideLayoutContribution);

    bind(OpenSingleFileContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(OpenSingleFileContribution);

    // bind(DisableFileCommands).toSelf().inSingletonScope();
    // bind(CommandContribution).toService(DisableFileCommands);


//     bind(DisableUntitledCommand).toSelf().inSingletonScope();
// bind(CommandContribution).toService(DisableUntitledCommand);

});