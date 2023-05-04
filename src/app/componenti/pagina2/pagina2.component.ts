import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pagina1Service } from 'src/app/services/pagina1.service';
import { PeriodicElement } from '../model/periodicElement.model';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit{

  dataSource: PeriodicElement[] = []


  clienti : any

  constructor(private services: Pagina1Service){
  }

 ngOnInit(): void {
  this.services.getClienti('https://angular-dashboard-aa33c-default-rtdb.europe-west1.firebasedatabase.app/clienti.json')
  .subscribe((data: any) => {
    // console.log(data);
    // console.log(Object.keys(data));
    this.clienti = Object.keys(data).map((key) => {
      data[key]['id'] = key
      return data [key]})
    console.log(this.clienti);
  })
  }

  onSubmit(){

  }

  onDeleteCliente() {
    this.services.deleteCliente('https://angular-dashboard-aa33c-default-rtdb.europe-west1.firebasedatabase.app/clienti', '-NUWnYLadrXAI5x2eVP7')
    .subscribe(data => {
      console.log(data);

      })
    }

    onPatchCliente(){
      this.services.patchCliente('https://angular-dashboard-aa33c-default-rtdb.europe-west1.firebasedatabase.app/clienti', '-NUWpaZrBZoLO3EmwUCw', {email: 'prova@prova.com'})
      .subscribe(data => {
        console.log(data);

      })
    }

}
