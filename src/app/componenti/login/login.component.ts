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

  constructor(private authService: AuthService, private router: Router){

  }
  ngOnInit(): void {
  }

  // signIn(form: NgForm){
  //   // const email = form.value.email
  //   // const password = form.value.password
  //   // chiamare authservice
  //   if(!form.valid){
  //     return false;
  //   }
  //   let result = this.auth.signIn(form.value.email, form.value.password);
  //   if (result) {
  //     this.router.navigate(['']);
  //   }
  //   return true;
  // }


  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    // chiamare authservice
    this.authService.signIn(email, password)
    .subscribe((data: any) => {
      console.log(data)

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))

      console.log(this.authService.user)
      this.router.navigate([''])
    })
    form.reset();

  }
}
