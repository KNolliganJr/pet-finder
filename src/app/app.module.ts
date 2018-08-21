import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs'


import { AppComponent } from './app.component';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetSearchService } from './pet-search/pet-search.service';
import { PetListItemComponent } from './pet-search/pet-list-item/pet-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PetSearchComponent,
    PetListComponent,
    PetListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppComponent, PetSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
