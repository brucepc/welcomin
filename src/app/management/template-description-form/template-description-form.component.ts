import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {WelcomeKitService} from "../../services/welcome-kit.service";
import {WelcomeKit} from "../../model/welcome-kit";

@Component({
  selector: 'app-template-description-form',
  templateUrl: './template-description-form.component.html',
  styleUrls: ['./template-description-form.component.scss']
})
export class TemplateDescriptionFormComponent {
  // private itemDoc: AngularFirestoreDocument<WelcomeKit>;
  form: FormGroup;
  setFirstStepName = false;
  isSaving = false;
  private kitId: string;
  private kit: Partial<WelcomeKit> = {};

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private welcomeKitService: WelcomeKitService
  ) {
    this.form = this.buildForm();
    this.kitId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.kitId) {
      this.welcomeKitService.get(this.kitId)
        .subscribe({
          next: value => {
            this.kit = value;
            this.form.patchValue(value);
          }
        })
    }
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSave() {
    const kit = {
      ...this.kit,
      ...this.form.value
    };
    this.isSaving = true;
    const successFn = () => {
      this.router.navigate(['/', 'management', kit.id, 'add-step', 1])
    };
    const doneFn = () => this.isSaving = false;

    if (this.kit.id) {
      this.welcomeKitService.update(kit as WelcomeKit & { id: string })
        .then(successFn)
        .finally(doneFn)
    } else {
      this.welcomeKitService.add(kit)
        .then(successFn)
        .finally(doneFn)
    }
  }
}
