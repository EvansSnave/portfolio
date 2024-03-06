import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/getData.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  form: FormGroup;

  constructor(private dataService: GetDataService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      title: 'kevin',
      price: 0,
      year: 1001,
      author: 'kevin',
      rating: 1,
      description: 'Dummy book',
      user_id: 1,
      image: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const formData = new FormData();
    formData.set('book[title]', this.form.get('title')?.value);
    formData.set('book[price]', this.form.get('price')?.value);
    formData.set('book[year]', this.form.get('year')?.value);
    formData.set('book[author]', this.form.get('author')?.value);
    formData.set('book[rating]', this.form.get('rating')?.value);
    formData.set('book[description]', this.form.get('description')?.value);
    formData.set('book[user_id]', this.form.get('user_id')?.value);
    formData.set('book[image]', this.form.get('image')?.value);
    this.dataService.postData(formData).subscribe();
  }

  onImagePicked(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files?.length) {
      const file: File | null = target.files[0];
      this.form.patchValue({ image: file });
    };
  }

}
