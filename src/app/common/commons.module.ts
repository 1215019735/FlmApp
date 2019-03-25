import { httpInterceptorProviders } from './httpClient/interceptor-config';
import { CoolServerStorage } from './coolStorage/cool-server-storage';
import { CoolLocalStorage } from './coolStorage/cool-local-storage';
import { CoolSessionStorage } from './coolStorage/cool-session-storage';
import { HttpClientService } from './httpClient/http';
import { PipesModule } from 'src/app/common/pipe/pipes.module';
import { ComponentModule } from './component/component.module';
import { NgModule } from '@angular/core';
import { UtilsService } from './utils/utils.service';

@NgModule({
    imports: [
        ComponentModule,
        PipesModule
    ],
    exports: [
        ComponentModule,
        PipesModule
    ],
    providers:[
        HttpClientService,
        httpInterceptorProviders,
        CoolSessionStorage,
        CoolLocalStorage,
        CoolServerStorage,
        UtilsService
    ]
})
export class CommonCoModule { }
