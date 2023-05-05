import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../componenti/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIKey = 'AIzaSyC0RDWnAESjeKgjsXuK8T3yRHHexuxi7l4'
  signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`
  isLoggedIn = true;
  isAdmin = true;
  user!: User;


  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggedIn
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  createUser(email: string, id:string, token: string, expirationDate: Date){
    this.user = new User(email, id, token, expirationDate)
    this.isLoggedIn = true
  }

  // isLoggedIn(){
  //   this.isLogged = !!localStorage.getItem('token');
  //   return this.isLogged;
  // }


  // signIn(email: string, password: string) {
  //   localStorage.setItem('token', email)
  //   return true;
  // }


  signUp(email: string, password: string){
    return this.http.post(this.signUpUrl, {email: email, password: password, returnSecureToken: true})
  }

  signIn(email: string, password: string){
    return this.http.post(this.signInUrl, {email: email, password: password, returnSecureToken: true})
  }

   logout() {
    this.isLoggedIn = false
    localStorage.removeItem('user')
    // this.user = null
  }

}
