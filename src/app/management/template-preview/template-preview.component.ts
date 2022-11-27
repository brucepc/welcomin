import {Component} from '@angular/core';
import {KitStepSectionType} from "../../model/kit-step-section";
import {KitStepCollection} from "../../model/kit-step";

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent {
  steps: KitStepCollection = [
    {
      name: 'Consulado',
      order: 0,
      sections: [
        {
          order: 0,
          type: KitStepSectionType.PARAGRAPH,
          content: 'Testando 123'
        }
      ]
    },
    {
      name: 'Portugal Documents',
      order: 1,
      sections: [
        {
          order: 0,
          type: KitStepSectionType.PARAGRAPH,
          content: 'Pagrafo 2'
        }
      ]
    }
  ]

}
