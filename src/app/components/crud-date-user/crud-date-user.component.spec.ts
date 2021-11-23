import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDateUserComponent } from './crud-date-user.component';

describe('CrudDateUserComponent', () => {
  let component: CrudDateUserComponent;
  let fixture: ComponentFixture<CrudDateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
