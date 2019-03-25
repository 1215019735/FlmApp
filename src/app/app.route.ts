
import { RouterModule, Routes } from '@angular/router';

import { MyLayerComponent } from './common/component/mylayer/mylayer.component';

import { LoginComponent } from './login/login.component';
import { RegisteComponent } from './registe/registe.component';
import { MessageComponent } from './message/message.component';
import { FilterComponent } from './views/home/filter/filter.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'mylayer',
        component: MyLayerComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registe',
        component: RegisteComponent
    },
    {
        path: 'message',
        component: MessageComponent
    },
    {
        path: 'filter',
        component: FilterComponent
    },
    {
        path: 'workspace',
        loadChildren: './views/workspace.module#WorkspaceModule'
    },
    {
        path: '**', // fallback router must in the last
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
