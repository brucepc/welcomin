import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent {
  @Input()
  template: any;

  get routerLink(): Array<any> {
    if (this.template && this.template.id) {
      return ['.', this.template.id, 'edit'];
    }
    return ['.', 'new'];
  }

  @HostBinding("class.add-template")
  get isEmpty() {
    return !this.template;
  }

}
