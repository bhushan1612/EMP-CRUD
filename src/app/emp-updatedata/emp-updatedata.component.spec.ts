import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdatedataComponent } from './emp-updatedata.component';

describe('EmpUpdatedataComponent', () => {
  let component: EmpUpdatedataComponent;
  let fixture: ComponentFixture<EmpUpdatedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUpdatedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpUpdatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
