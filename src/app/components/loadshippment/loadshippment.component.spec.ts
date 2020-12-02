import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadshippmentComponent } from './loadshippment.component';

describe('LoadshippmentComponent', () => {
  let component: LoadshippmentComponent;
  let fixture: ComponentFixture<LoadshippmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadshippmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadshippmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
