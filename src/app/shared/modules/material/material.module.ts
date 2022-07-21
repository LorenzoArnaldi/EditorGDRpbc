import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MATERIAL API
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

const sharedMaterialModule = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedMaterialModule
  ],
  exports: [
    ...sharedMaterialModule
  ]
})
export class MaterialModule { }
