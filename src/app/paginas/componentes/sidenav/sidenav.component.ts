import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private router: Router, private observer: BreakpointObserver,
    private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdref.detectChanges();
    
  }

  sair(): void {
    environment.ACESSOS_AO_ADMIN = 0;
    environment.USUARIO_LOGADO = '';
    window.localStorage.clear;
    this.router.navigate(['/']);
  }

}
