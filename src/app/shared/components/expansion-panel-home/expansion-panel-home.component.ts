import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-home',
  templateUrl: './expansion-panel-home.component.html',
  styleUrls: ['./expansion-panel-home.component.scss']
})
export class ExpansionPanelHomeComponent implements OnInit {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() intTitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
