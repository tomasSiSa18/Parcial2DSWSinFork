import { Component, Input } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrl: './pais-detail.component.css'
})
export class PaisDetailComponent {

  @Input() selectedPais!: Pais;

}
