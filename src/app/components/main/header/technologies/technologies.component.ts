import { Component, OnInit } from '@angular/core';
import { TECH } from '../../../projects/technologies.data';
import { KeyValuePipe, NgFor } from '@angular/common';
import { TechnologyObject } from '../../../../models/technology';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  technologies: TechnologyObject;
  
  constructor() { 
    this.technologies = TECH;
  }

  ngOnInit() {
  }

}
