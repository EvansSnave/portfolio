import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { GetDataService } from '../../services/getData.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: Item[];

  constructor(private getDataService: GetDataService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.getDataService.items$.subscribe(items => { this.items = items });
    this.getDataService.getItems().subscribe((items) => {
      this.items = items;
    });
  }
}
