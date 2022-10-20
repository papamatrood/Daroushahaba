import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eleve } from './eleve';
import { ELEVES } from './eleve-list';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  eleves : Eleve[] = ELEVES;
  

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  goToEleve(eleve: Eleve) {
    this.router.navigate(['/eleve', eleve.id])
  }

}
