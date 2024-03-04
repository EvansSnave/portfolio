import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  itemForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    user_id: new FormControl('', Validators.required),
    image_url: new FormControl(null as File | null, Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemForm);
  }

  submitImage(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.itemForm.patchValue({ image_url: file })
  }
}
