import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pagina1Service } from 'src/app/services/pagina1.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit{

  homeform!: FormGroup

  constructor(private services: Pagina1Service){
  }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      nazione: new FormControl(null, Validators.required)
    });

  }

  onSubmit(){
    console.log(this.homeform);
    this.services.insertCliente(
      'https://angular-dashboard-aa33c-default-rtdb.europe-west1.firebasedatabase.app/clienti.json',
      { nome: this.homeform.value.nome , email: this.homeform.value.email, nazione: this.homeform.value.nazione}
    ).subscribe(data => {
      console.log(data);

    })
  }



}
