import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-button',
  templateUrl: './section-button.component.html',
  styleUrls: ['./section-button.component.scss']
})
export class SectionButtonComponent implements OnInit {
  @Input() icona: string = '';
  @Input() link: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSection() {
    this.router.navigate([this.link], { relativeTo: this.route })
  }
}
