import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddformComponent } from './emp-addform.component';

describe('EmpAddformComponent', () => {
  let component: EmpAddformComponent;
  let fixture: ComponentFixture<EmpAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
