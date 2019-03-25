import { WorkspaceComponent } from './workspace.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
      {
            path: '',
            component: WorkspaceComponent,
            children: [
                  { path: '', redirectTo: 'home', pathMatch: 'full' },
                  { path: 'home', loadChildren: './home/home.module#HomeModule' }

            ]
      }
];

export const routing = RouterModule.forChild(appRoutes);