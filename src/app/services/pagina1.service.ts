import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Pagina1Service {

  constructor(private http: HttpClient) { }

  insertCliente(url: string, body: {}){
    return this.http.post(url, body)
  }

  getClienti(url: string){
    return this.http.get(url)
  }

  deleteCliente(url:string, id: string){
    return this.http.delete(`${url}/${id}.json`)
  }

  patchCliente(url: string, id: string, body: {}){
    return this.http.patch(`${url}/${id}.json`, body)
  }
}
