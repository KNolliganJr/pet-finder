import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.css']
})
export class PetListItemComponent implements OnInit {
  @Input() pet: any;
  @Input() index: number;

  ngOnInit() {
    console.log(this.pet);
  }

}
