import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  public isLoggedIn = false

  constructor( private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}
