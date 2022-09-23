import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewformComponent } from './emp-viewform.component';

describe('EmpViewformComponent', () => {
  let component: EmpViewformComponent;
  let fixture: ComponentFixture<EmpViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpViewformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
