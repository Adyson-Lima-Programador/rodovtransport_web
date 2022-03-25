import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesUpdateComponent } from './pacotes-update.component';

describe('PacotesUpdateComponent', () => {
  let component: PacotesUpdateComponent;
  let fixture: ComponentFixture<PacotesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
