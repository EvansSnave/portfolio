import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { FormItemComponent } from './form-item/form-item.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GalleryComponent, FormItemComponent ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
