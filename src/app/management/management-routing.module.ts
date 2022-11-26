import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from "../com/base/base.component";
import {ManagementComponent} from "./management.component";
import {TemplateDescriptionFormComponent} from "./template-description-form/template-description-form.component";
import {TemplatePreviewComponent} from "./template-preview/template-preview.component";
import {TemplateStepFormComponent} from "./template-step-form/template-step-form.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {path: '', component: ManagementComponent},
      {path: 'new', component: TemplateDescriptionFormComponent},
      {path: ':id/edit', component: TemplateDescriptionFormComponent},
      {path: ':id/add-step/:step', component: TemplateStepFormComponent},
      {path: ':id/preview', component: TemplatePreviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule {
}
