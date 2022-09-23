import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewdataComponent } from './emp-viewdata.component';

describe('EmpViewdataComponent', () => {
  let component: EmpViewdataComponent;
  let fixture: ComponentFixture<EmpViewdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpViewdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpViewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
