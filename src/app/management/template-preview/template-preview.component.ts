import {Component} from '@angular/core';
import {KitStepCollection} from "../../model/kit-step";
import {WelcomeKitService} from "../../services/welcome-kit.service";
import {ActivatedRoute} from "@angular/router";
import {WelcomeKit} from "../../model/welcome-kit";

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent {
  kitId: string;
  kit: Partial<WelcomeKit> = {};

  get steps(): KitStepCollection {
    if (this.kit) {
      return this.kit.steps || [];
    }
    return [];
  }

  constructor(
    activatedRoute: ActivatedRoute,
    private welcomeKitService: WelcomeKitService
  ) {
    this.kitId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.welcomeKitService.get(this.kitId)
      .subscribe(kit => {
        this.kit = kit
      });
  }
}
