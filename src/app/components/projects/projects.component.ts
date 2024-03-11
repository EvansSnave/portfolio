import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild("leftBtn") leftBtn: ElementRef<HTMLButtonElement>;
  @ViewChild("images") images: ElementRef<HTMLUListElement>;
  @ViewChild("rightBtn") rightBtn: ElementRef<HTMLButtonElement>;

  projects: Project[];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.projects = PROJECTS;
    this.leftBtn = this.elementRef.nativeElement;
    this.rightBtn = this.elementRef.nativeElement;
    this.images = this.elementRef.nativeElement;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.leftBtn && this.images) {
      this.renderer.listen(this.leftBtn.nativeElement, 'click', () => {
        this.images.nativeElement.scrollLeft -= 800;
      });
    }
    if (this.rightBtn && this.images) {
      this.renderer.listen(this.rightBtn.nativeElement, 'click', () => {
        this.images.nativeElement.scrollLeft += 800;
      })
    }
  }
}
