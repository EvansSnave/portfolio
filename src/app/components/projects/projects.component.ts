import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor() {
    this.projects = PROJECTS;
  }

  ngOnInit() {
  }

}
