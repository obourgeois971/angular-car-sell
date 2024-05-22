import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  offerForm!: FormGroup;

  offers: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initOfferForm();
  }

  initOfferForm(): void {
    this.offerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      brand: '',
      model: '',
      description: '',
      price: 0,
    });
  }
  onSubmitOfferForm(): void {
    console.log(this.offerForm.invalid);
    this.offers.push(this.offerForm.value);
    this.offerForm.reset();
    console.log(this.offers);
  }
}
