import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Pagina1Service {

  constructor(private http: HttpClient, private AuthService: AuthService) { }

  insertCliente(url: string, body: {}){
    return this.http.post(url, body)
  }

  getClienti(url: string){
    return this.http.get(`${url}?auth=${this.AuthService.user.token}`)
  }

  deleteCliente(url:string, id: string){
    return this.http.delete(`${url}/${id}.json`)
  }

  patchCliente(url: string, id: string, body: {}){
    return this.http.patch(`${url}/${id}.json`, body)
  }
}
