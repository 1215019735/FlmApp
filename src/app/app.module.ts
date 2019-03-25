import { CommonCoModule } from './common/commons.module';
import { LoginService } from './login/service/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.route';

import { LoginComponent } from './login/login.component';
import { RegisteComponent } from './registe/registe.component';
import { MessageComponent } from './message/message.component';
import { MyLayerComponent } from './common/component/mylayer/mylayer.component';
import { FilterComponent } from './views/home/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteComponent,
    MessageComponent,
    MyLayerComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonCoModule,
    routing,
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
