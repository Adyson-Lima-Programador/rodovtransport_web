import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
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

  constructor(private router: Router, private observer: BreakpointObserver) { }

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
    
  }

  sair(): void {
    environment.ACESSOS_AO_ADMIN = 0;
    environment.USUARIO_LOGADO = '';
    this.router.navigate(['/']);
  }

}
