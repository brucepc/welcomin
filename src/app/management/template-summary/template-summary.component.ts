import {Component} from '@angular/core';
import {KitStepPartialCollection} from "../../model/kit-step";

@Component({
  selector: 'app-template-summary',
  templateUrl: './template-summary.component.html',
  styleUrls: ['./template-summary.component.scss']
})
export class TemplateSummaryComponent {
  steps: KitStepPartialCollection = [
    {name: 'Welcome to Integer Consulting', order: 1},
    {name: 'Consular Bureaucracy', order: 2},
    {name: 'Lorem ipsum dolor sit amet', order: 3},
    {name: 'Lorem ipsum dolor sit amet', order: 4},
    {name: 'Lorem ipsum dolor sit amet', order: 5},
  ]
}
