import { Injectable } from '@angular/core';
import { PetSearch } from './pet-search.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class PetSearchService {
    private apiUrl;
    petData: any[];
    dataChanged = new Subject<any[]>();

    constructor(private http: HttpClient) { }

    searchForPets(search: PetSearch) {
       this.apiUrl = 'http://api.petfinder.com/pet.find?format=json&key=c1a3812fbdd4b9da8b77965ebb7e4dee&output=basic';
       this.apiUrl = this.apiUrl + '&location=' + search.location;
       
       if (search.age) {
        this.apiUrl = this.apiUrl + '&age=' + search.age;
       }
       
       if (search.gender) {
        this.apiUrl = this.apiUrl + '&sex=' + search.gender;
       }

       if (search.size) {
        this.apiUrl = this.apiUrl + '&size=' + search.size;
       }
      
       this.getData(this.apiUrl).subscribe(data => {
        this.petData = Array.of(data["petfinder"]["pets"]);
        this.dataChanged.next(this.petData.slice());
      })
    }

    getData(url: string) {
        return this.http.get(url)
      }
}