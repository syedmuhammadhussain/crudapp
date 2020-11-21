import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudappComponent } from './crudapp.component';

describe('CrudappComponent', () => {
  let component: CrudappComponent;
  let fixture: ComponentFixture<CrudappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
