import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
