import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesDeleteComponent } from './pacotes-delete.component';

describe('PacotesDeleteComponent', () => {
  let component: PacotesDeleteComponent;
  let fixture: ComponentFixture<PacotesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
