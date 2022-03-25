import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})
export class SidenavAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair(): void {
    environment.ACESSOS_AO_ADMIN = 0;
    this.router.navigate(['/']);
  }

}
