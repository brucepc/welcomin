import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {WelcomeKit} from "../../model/welcome-kit";
import {WelcomeKitService} from "../../services/welcome-kit.service";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  items: Observable<WelcomeKit[]>;

  constructor(
    private readonly welcomeKitService: WelcomeKitService
  ) {
    this.items = this.welcomeKitService.getAll();
  }
}
