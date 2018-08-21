import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetSearchService } from './pet-search.service';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {
  petSearch: FormGroup;
  petData: any[];
  petList: any[];

  constructor(private petSearchService: PetSearchService) { }

  onSubmit() {
    this.petSearchService.searchForPets(this.petSearch.value);
  }

  ngOnInit() {
    let petLocation = '';
    let petSize = '';
    let petGender = '';
    let petAge = '';

    this.petSearch = new FormGroup({
      'location': new FormControl(petLocation, Validators.required),
      'gender': new FormControl(petGender),
      'age': new FormControl(petAge),
      'size': new FormControl(petSize)
    });
  }

}
