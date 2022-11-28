import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {
  KitStepSection,
  KitStepSectionCollection,
  KitStepSectionPartialCollection,
  KitStepSectionType
} from "../../model/kit-step-section";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {WelcomeKitService} from "../../services/welcome-kit.service";
import {WelcomeKit} from "../../model/welcome-kit";
import {KitStep} from "../../model/kit-step";

@Component({
  selector: 'app-template-step-form',
  templateUrl: './template-step-form.component.html',
  styleUrls: ['./template-step-form.component.scss']
})
export class TemplateStepFormComponent {
  isTitleFormDone = false;
  readonly stepOrder: number;
  step: Partial<KitStep> = {};
  stepTitleForm: FormGroup;
  sections: KitStepSectionPartialCollection = [];
  private kitId: string;
  private welcomeKit!: WelcomeKit;

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
    private welcomeKitService: WelcomeKitService,
    private readonly activatedroute: ActivatedRoute,
    private readonly router: Router,
    public fb: FormBuilder
  ) {
    this.stepTitleForm = this.buildForm();
    this.stepOrder = parseInt(this.activatedroute.snapshot.params['step']);
    this.previewKitLink = ['../..', 'preview']
    this.kitId = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit() {
    const subs = this.welcomeKitService.get(this.kitId)
      .subscribe({
        next: (wk: WelcomeKit) => {
          this.welcomeKit = wk;
          const found = (wk.steps || []).find(s => s.order === this.stepOrder);
          if (found) {
            this.step = found;
            this.sections = (found.sections || []) as KitStepSectionPartialCollection;
            this.stepTitleForm.patchValue({title: this.step?.name});
          }
          subs.unsubscribe();
        }
      })
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required]]
    })
  }

  submitTitleForm() {
    if (this.stepTitleForm.valid) {
      this.step = this.step.name ? this.step : {
        name: this.stepName,
        order: this.stepOrder,
        sections: []
      } as Partial<KitStep>;

      this.welcomeKitService.putStep(this.welcomeKit as any, this.step)
        .then(() => {
          this.isTitleFormDone = true;
        });
    }
  }

  addNewSection() {
    this.sections.push({
      order: this.sections.length,
      type: KitStepSectionType.EMPTY
    })
  }

  deleteSection(section: Partial<KitStepSection>) {
    console.log(section);
    if (section.order) {
      this.sections.splice(section.order, 1);
      if (section.type !== KitStepSectionType.EMPTY) {
        this.onSectionChange();
      }
    }
  }

  drop($event: CdkDragDrop<Partial<KitStepSection>, any>) {
    moveItemInArray(this.sections, $event.previousIndex, $event.currentIndex);
    this.sections.forEach((item, index) => {
      item.order = index;
    });
    this.onSectionChange();
  }

  onSectionChange() {
    this.step.sections = this.sections as KitStepSectionCollection;
    console.log(this.welcomeKit);
    return this.welcomeKitService.putStep(this.welcomeKit as any, this.step)
      .then();
  }

  addNewStep() {
    this.onSectionChange()
      .then(() => this.router.navigate(['./..', this.welcomeKit.steps.length + 1]))
  }
}
