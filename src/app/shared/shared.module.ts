import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    SearchComponent,
    CardCharacterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    SearchComponent,
    CardCharacterComponent,
    RouterModule
  ]
})
export class SharedModule { }
