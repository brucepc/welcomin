import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from "./base/base.component";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterOutlet,
  ]
})
export class ComModule {
}
