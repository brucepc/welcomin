import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStepFormComponent } from './template-step-form.component';

describe('TemplateStepFormComponent', () => {
  let component: TemplateStepFormComponent;
  let fixture: ComponentFixture<TemplateStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStepFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
