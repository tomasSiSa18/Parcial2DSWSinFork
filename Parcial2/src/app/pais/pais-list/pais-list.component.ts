import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent implements OnInit{

  paises: Array<Pais> = [];
  anioMinimo: number = 0;
  paisMinimo!: Pais;

  constructor(private paisService: PaisService) { }

  getPaises() {

    this.paisService.getPaises().subscribe(apiPaises => {

      this.paises = apiPaises;

      for(let i = 0; i < apiPaises.length; i++){

        let pais = apiPaises[i];
        let tiempoFundacion = 2024 - pais.formation_year;
        if(this.anioMinimo == 0) {

          this.anioMinimo = tiempoFundacion;
          this.paisMinimo = pais;

        } else if(tiempoFundacion > this.anioMinimo){

          this.anioMinimo = tiempoFundacion;
          this.paisMinimo = pais;

        }

      }

    });

  }

  ngOnInit(): void {
      
    this.getPaises();

  }

}
