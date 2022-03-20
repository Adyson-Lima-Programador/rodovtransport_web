import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesClienteComponent } from './pacotes-cliente.component';

describe('PacotesClienteComponent', () => {
  let component: PacotesClienteComponent;
  let fixture: ComponentFixture<PacotesClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
