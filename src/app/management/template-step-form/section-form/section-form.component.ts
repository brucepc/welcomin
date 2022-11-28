import {Component} from '@angular/core';
import {KitStepSection} from "../../../model/kit-step-section";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SectionFormComponent
    }
  ]
})
export class SectionFormComponent implements ControlValueAccessor {
  onChange = (value: any) => {
  }
  onTouched = () => {
  }
  touched = false;

  section!: Partial<KitStepSection>;

  ngOnInit() {
  }

  onSave(value: any) {
    this.section.content = value;
    this.onChange(this.section);
  }

  writeValue(section: Partial<KitStepSection>) {
    console.log(section);
    this.section = section;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
