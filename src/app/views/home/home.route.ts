import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [{
      path: '',
      component: HomeComponent,
      children: [
            {
                  path: '',
                  children: [
                        { path: '', component: IndexComponent },
                        { path: 'index', component: IndexComponent }
                  ]
            }
      ]
}];

export const routing = RouterModule.forChild(appRoutes);
