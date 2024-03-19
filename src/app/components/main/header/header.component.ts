import { Component, OnInit } from '@angular/core';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TechnologiesComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
