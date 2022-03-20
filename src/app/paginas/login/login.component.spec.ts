import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('consegue criar component login', () => {
    expect(component).toBeTruthy();
  });

  it('componente mat-card existe', () => {
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('mat-card'));
    expect(card.componentInstance).toBeTruthy();
  });

  it('existe texto Login em mat-card-title', () => {
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('mat-card-title'));
    expect(card.nativeElement.textContent).toContain('Login');
  });

  it('existe a classe css example-card em mat-card', () => {
    const card = fixture.debugElement.query(By.css('mat-card.example-card'));
    expect(card).toBeTruthy();
  });

  it('acessa metodo login', () => {
    expect(component.login).toBeTruthy();

  });

});
