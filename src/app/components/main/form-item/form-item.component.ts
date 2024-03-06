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
      title: '',
      price: 0,
      year: 1000,
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
    console.log(this.form);
  }

  onImagePicked(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files?.length) {
      const file: File | null = target.files[0];
      this.form.patchValue({ book:{ image: file }});
    }
  }

}
