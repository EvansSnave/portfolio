import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from './projects.data';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChildren("leftBtn") leftBtnList: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChildren("images") imagesList: QueryList<ElementRef<HTMLUListElement>>;
  @ViewChildren("rightBtn") rightBtnList: QueryList<ElementRef<HTMLButtonElement>>;

  projects: Project[];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.projects = PROJECTS;
    this.leftBtnList = this.elementRef.nativeElement;
    this.rightBtnList = this.elementRef.nativeElement;
    this.imagesList = this.elementRef.nativeElement;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.leftBtnList.forEach((leftBtn, index) => {
      this.renderer.listen(leftBtn.nativeElement, 'click', () => {
        const imageElement = this.imagesList.get(index)?.nativeElement;
        if (imageElement) {
          imageElement.scrollLeft -= 800;
        }
      });
    });

    this.rightBtnList.forEach((rightBtn, index) => {
      this.renderer.listen(rightBtn.nativeElement, 'click', () => {
        const imageElement = this.imagesList.get(index)?.nativeElement;
        if (imageElement) {
          imageElement.scrollLeft += 800;
        }
      })
    })
  }
}
