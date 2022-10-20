import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eleve } from '../eleve/eleve';
import { ELEVES } from '../eleve/eleve-list';

@Component({
  selector: 'app-detail-eleve',
  templateUrl: './detail-eleve.component.html',
  styleUrls: ['./detail-eleve.component.css']
})
export class DetailEleveComponent implements OnInit {

  eleves: Eleve[] = ELEVES;

  eleve: Eleve|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string|null = this.route.snapshot.paramMap.get('id');
    this.findEleve(id);
  }

  findEleve(id: string|null) {
    if (id != null) {
      this.eleve = this.eleves.find(eleve => eleve.id == +id);
    }
  }

}
