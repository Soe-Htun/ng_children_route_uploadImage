import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenaccComponent } from './childrenacc.component';

describe('ChildrenaccComponent', () => {
  let component: ChildrenaccComponent;
  let fixture: ComponentFixture<ChildrenaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
