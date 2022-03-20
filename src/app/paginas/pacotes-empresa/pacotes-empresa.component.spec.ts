import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesEmpresaComponent } from './pacotes-empresa.component';

describe('PacotesEmpresaComponent', () => {
  let component: PacotesEmpresaComponent;
  let fixture: ComponentFixture<PacotesEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
