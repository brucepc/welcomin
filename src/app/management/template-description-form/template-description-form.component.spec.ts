import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDescriptionFormComponent } from './template-description-form.component';

describe('TemplateDescriptionFormComponent', () => {
  let component: TemplateDescriptionFormComponent;
  let fixture: ComponentFixture<TemplateDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDescriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
