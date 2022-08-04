import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BoxContent } from 'src/app/shared/models/boxContent.model';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  /**
   * numero righe selezionabili
   */
  selectRows: number[] = [
    5, 10, 15, 20, 25, 30, 35, 45, 50
  ];
  /**
   * numero di box selezionabili
   */
  selectBoxs: number[] = [
    5, 10, 15, 20, 25, 30, 35, 45, 50
  ];;
  /**
   * numero di righe
   */
  rowN: [][] = [[], [], [], []];
  /**
   * numero di box
   */
  boxN: BoxContent[] = [];
  /**
    * Form
    */
  public form: FormGroup;
  /**
   * temporany element selected
   */
  elementSelected: BoxContent = { ground: null, item: null, pg: null };

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      formRows: [],
      formBoxs: []
    })
  }


  ngOnInit(): void {
  }

  setRow(value: number) {
    if (this.rowN.length && value != null) {
      this.rowN.splice(0)
    };
    for (let i = 0; i < value; i++) {
      this.rowN.push([])
    }
  }

  setBox(value: number) {
    debugger
    if (this.boxN.length && value != null) {
      this.boxN.splice(0);
    };
    for (let i = 0; i < value; i++) {
      this.boxN.push({ ground: null, item: null, pg: null })
    }
  }

  setGrid() {
    this.setRow(this.form.value.formRows);
    this.setBox(this.form.value.formBoxs);
    // console.log(this.form);
  }

  setElementBox(value: BoxContent) {
    if (this.elementSelected.ground != null) {
      value.ground = this.elementSelected.ground
    };
    if (this.elementSelected.item != null) {
      value.item = this.elementSelected.item
    };
    if (this.elementSelected.pg != null) {
      value.pg = this.elementSelected.pg
    }
  }

}
