import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';
import { CombatComponent } from './combat/combat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';



@NgModule({
  declarations: [
    HomeComponent,
    EditorComponent,
    CombatComponent,
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    EditorComponent
  ]
})
export class FeaturesModule { }
