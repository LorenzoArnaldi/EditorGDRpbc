import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './features/characters/characters.component';
import { CombatComponent } from './features/combat/combat.component';
import { EditorComponent } from './features/editor/editor.component';
import { HomeComponent } from './features/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'character', component: CharactersComponent },
  { path: 'combat', component: CombatComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
