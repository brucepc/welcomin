import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {KitStepPartialCollection} from "../../model/kit-step";
import {WelcomeKitService} from "../../services/welcome-kit.service";
import {ActivatedRoute} from "@angular/router";
import {WelcomeKit} from "../../model/welcome-kit";

@Component({
  selector: 'app-template-summary',
  templateUrl: './template-summary.component.html',
  styleUrls: ['./template-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateSummaryComponent {

  private kitId: string;
  kit!: WelcomeKit;

  get replyURL(): string {
    return this.kit ? `${location.origin}/${this.kit.id}` : '';
  }

  get steps(): KitStepPartialCollection {
    return this.kit ? this.kit.steps : [];
  }

  get kitTitle(): string {
    return this.kit ? this.kit.title : '';
  }

  constructor(
    activatedRoute: ActivatedRoute,
    private welcomeKitService: WelcomeKitService,
    private cdr: ChangeDetectorRef
  ) {
    this.kitId = activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.welcomeKitService.get(this.kitId)
      .subscribe({
        next: wk => {
          this.kit = wk;
          this.cdr.markForCheck()
        }
      });
  }
}
