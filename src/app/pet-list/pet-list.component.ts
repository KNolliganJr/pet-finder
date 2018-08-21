import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PetSearchService } from 'src/app/pet-search/pet-search.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  petList: any[];
  subscription: Subscription;

  constructor(private petSearchService: PetSearchService) { }

  ngOnInit() {
    this.subscription = this.petSearchService.dataChanged.subscribe(
      (petList: any[]) => {
        this.petList = petList;
      }
    );
  }

}
