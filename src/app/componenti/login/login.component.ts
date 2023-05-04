import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router){

  }
  ngOnInit(): void {
  }

  signIn(form: NgForm){
    // const email = form.value.email
    // const password = form.value.password
    // chiamare authservice
    if(!form.valid){
      return false;
    }
    let result = this.auth.signIn(form.value.email, form.value.password);
    if (result) {
      this.router.navigate(['']);
    }
    return true;
  }
}
