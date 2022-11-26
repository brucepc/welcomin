import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-template-description-form',
  templateUrl: './template-description-form.component.html',
  styleUrls: ['./template-description-form.component.scss']
})
export class TemplateDescriptionFormComponent {
  form: FormGroup;
  setFirstStepName = false;

  constructor(
    public readonly fb: FormBuilder
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSave() {
    this.setFirstStepName = true;
  }
}
