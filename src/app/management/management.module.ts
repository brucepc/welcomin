import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { TemplatesComponent } from './templates/templates.component';


@NgModule({
  declarations: [
    ManagementComponent,
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
