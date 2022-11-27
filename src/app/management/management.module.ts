import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagementRoutingModule} from './management-routing.module';
import {ManagementComponent} from './management.component';
import {TemplatesComponent} from './templates/templates.component';
import {MatCardModule} from "@angular/material/card";
import {TemplateCardComponent} from './templates/template-card/template-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TemplateDescriptionFormComponent} from './template-description-form/template-description-form.component';
import {TemplatePreviewComponent} from './template-preview/template-preview.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {TemplateStepFormComponent} from './template-step-form/template-step-form.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatStepperModule} from "@angular/material/stepper";
import { TemplateSummaryComponent } from './template-summary/template-summary.component';
import {ClipboardModule} from "@angular/cdk/clipboard";


@NgModule({
  declarations: [
    ManagementComponent,
    TemplatesComponent,
    TemplateCardComponent,
    TemplateDescriptionFormComponent,
    TemplatePreviewComponent,
    TemplateStepFormComponent,
    TemplateSummaryComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    DragDropModule,
    MatExpansionModule,
    MatStepperModule,
    ClipboardModule
  ]
})
export class ManagementModule {
}
