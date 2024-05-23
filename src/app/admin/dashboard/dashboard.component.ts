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
      index: [0],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      brand: '',
      model: '',
      description: '',
      price: 0,
    });
  }
  onSubmitOfferForm(): void {
    console.log(this.offerForm.invalid);
    // on récupère l'index du formulaire
    const offerIndex = this.offerForm.value.index;
    // on récupère les info de l'élément
    let offer = this.offerForm.value;

    if (offerIndex == null || offerIndex == undefined) {
      delete offer.index;
      this.offers.push(offer);
    } else {
      delete offer.index;
      // on modifie l'élément
      this.offers[offerIndex] = offer;
    }

    // this.offers.push(this.offerForm.value);
    this.offerForm.reset();
    console.log(this.offers);
  }

  onEditOffer(offer: any, index: number): void {
    // les  ... pour déconstruire l'élément
    this.offerForm.setValue({ ...offer, index });
  }
}
