import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)},
  {path: ':templateId', loadChildren: () => import('./reply/reply.module').then(m => m.ReplyModule)},
  {path: '', redirectTo: 'management', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
