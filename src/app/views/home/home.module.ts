import { CommonCoModule } from './../../common/commons.module';
import { HttpClientService } from './../../common/httpClient/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './home.route';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    CommonCoModule,
  ],
  declarations: [
        IndexComponent,
        HomeComponent
      ],
  providers:[
      HttpClientService
    ]
})
export class HomeModule { }
