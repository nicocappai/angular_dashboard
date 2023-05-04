import { Component, OnInit } from '@angular/core';
import { Pagina1Service } from 'src/app/services/pagina1.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit{

  clienti: any
  constructor(private services: Pagina1Service){}

  ngOnInit(): void {

  }

}
