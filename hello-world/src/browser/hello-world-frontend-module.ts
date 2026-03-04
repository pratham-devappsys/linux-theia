import { ContainerModule } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { RemoveContainersContribution } from './hide-layout-contribution';
import { OpenSingleFileContribution } from './open-file-contribution';
// import { OpenFileContribution } from './contribution-filters';
// import { MessageClient, MessageService } from '@theia/core';


export default new ContainerModule((bind, unbind, isBound, rebind) => {
//    bind(MessageService).toDynamicValue(ctx => {
//         const client = ctx.container.get<MessageClient>(MessageClient);

//         return {
//             info: (message: string, options?: any) => client.showMessage({  text: message, options }),
//             warn: (_message: string, _options?: any) => Promise.resolve(undefined),
//             error: (_message: string, _options?: any) => Promise.resolve(undefined),
//             log: (message: string, options?: any) => client.showMessage({ text: message, options }),
//             dispose: () => {}
//         } as unknown as MessageService;
//     }).inSingletonScope();


    // bind(OpenFileContribution).toSelf().inSingletonScope();


    // bind(FrontendApplicationContribution)
    //     .toService(OpenFileContribution);
    


    bind(RemoveContainersContribution).toSelf().inSingletonScope();

    bind(FrontendApplicationContribution)
        .toService(RemoveContainersContribution);



    bind(OpenSingleFileContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution)
        .toService(OpenSingleFileContribution);



});