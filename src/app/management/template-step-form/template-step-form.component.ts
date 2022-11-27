import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {KitStepSection, KitStepSectionPartialCollection, KitStepSectionType} from "../../model/kit-step-section";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-template-step-form',
  templateUrl: './template-step-form.component.html',
  styleUrls: ['./template-step-form.component.scss']
})
export class TemplateStepFormComponent {
  isTitleFormDone = false;
  readonly step: number;
  stepTitleForm: FormGroup;
  sections: KitStepSectionPartialCollection = [
    {
      order: 1,
      type: KitStepSectionType.PARAGRAPH,
      content: `Lorem ipsum dolor sit amet consectetur. Amet in quis consequat sed ut tempus quis orci. Ultricies vitae
            ornare
            eget nisl augue lacus nibh. Felis nibh mauris aliquam massa diam metus. Adipiscing diam vulputate augue
            ultrices.`
    },
  ];
  previewKitLink: any[] = [];

  get hasSection(): boolean {
    return this.sections.length > 0;
  }

  get kitTitle() {
    return 'Devs coming to Portugal kit';
  }

  get stepName(): string {
    return this.stepTitleForm.value.title;
  }

  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute
  ) {
    this.stepTitleForm = this.buildForm();
    this.step = this.route.snapshot.params['step'];
    this.previewKitLink = ['../..', 'preview']
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required]]
    })
  }

  submitTitleForm() {
    if (this.stepTitleForm.valid) {
      this.isTitleFormDone = true;
    }
  }

  addNewSection() {
    this.sections.push({
      order: this.sections.length,
      type: KitStepSectionType.EMPTY
    })
  }

  deleteSection(section: Partial<KitStepSection>) {
    if (section.order) {
      this.sections = this.sections.splice(section.order, 1);
    }
  }

  drop($event: CdkDragDrop<Partial<KitStepSection>, any>) {
    moveItemInArray(this.sections, $event.previousIndex, $event.currentIndex);
    this.sections.forEach((item, index) => {
      item.order = index;
    })
  }
}
