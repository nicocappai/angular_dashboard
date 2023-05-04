import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = true;

  constructor() { }

  isLoggedIn(){
    this.isLogged = !!localStorage.getItem('token');
    return this.isLogged;
  }


  signIn(email: string, password: string) {
    localStorage.setItem('token', email)
    return true;
  }


  logout() {
    localStorage.removeItem('token');
    this.isLogged = false;
  }
}
