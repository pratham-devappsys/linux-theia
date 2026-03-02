import { ContainerModule } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';

// import { registerFilters } from './contribution-filters';
import { RemoveContainersContribution } from './hide-layout-contribution';
import { OpenSingleFileContribution } from './open-file-contribution';

export default new ContainerModule((bind, unbind, isBound, rebind) => {

  bind(FrontendApplicationContribution)
        .to(RemoveContainersContribution)
        .inSingletonScope();



    bind(OpenSingleFileContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(OpenSingleFileContribution);



});