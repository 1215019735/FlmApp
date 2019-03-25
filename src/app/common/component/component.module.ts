import { PipesModule } from './../pipe/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule,registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import zh from '@angular/common/locales/zh';
import { SelectCityComponent } from './selectcity/selectcity.component';

registerLocaleData(zh);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ],
    declarations: [
        SelectCityComponent
    ],
    exports: [
        SelectCityComponent
    ],
    providers: []
})
export class ComponentModule { }


