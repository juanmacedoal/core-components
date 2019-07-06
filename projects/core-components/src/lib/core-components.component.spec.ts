import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponentsComponent } from './core-components.component';

describe('CoreComponentsComponent', () => {
  let component: CoreComponentsComponent;
  let fixture: ComponentFixture<CoreComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
