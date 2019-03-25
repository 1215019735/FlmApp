import { CommonCoModule } from './../common/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { routing } from "./workspace.route";

@NgModule({
      imports: [
            CommonModule,
            routing,
            CommonCoModule
      ],
      declarations: [
            WorkspaceComponent,
      ],
      providers:[]
})
export class WorkspaceModule { }
