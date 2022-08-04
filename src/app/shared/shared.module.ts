import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { SectionButtonComponent } from './components/section-button/section-button.component';
import { NgModule } from '@angular/core';
import { ExpansionPanelHomeComponent } from './components/expansion-panel-home/expansion-panel-home.component';


const sharedComponent = [
    SectionButtonComponent,
    ExpansionPanelHomeComponent
]


@NgModule({
    declarations: [
        ...sharedComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialModule,
        ...sharedComponent
    ]
})
export class SharedModule { }