import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReplyComponent} from './reply.component';
import {BaseComponent} from "../com/base/base.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {path: '', component: ReplyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplyRoutingModule {
}
