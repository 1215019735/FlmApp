import { DatePipe } from './date.pipe';
import { CityPipe } from './city.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        DatePipe
    ],
    exports: [
        CityPipe,
        DatePipe
    ]
})
export class PipesModule { }
