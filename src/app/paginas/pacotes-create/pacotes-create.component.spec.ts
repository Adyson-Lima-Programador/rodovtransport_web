import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesCreateComponent } from './pacotes-create.component';

describe('PacotesCreateComponent', () => {
  let component: PacotesCreateComponent;
  let fixture: ComponentFixture<PacotesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
