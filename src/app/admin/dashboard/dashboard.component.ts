import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offer } from '../../interfaces/offer';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  offerForm!: FormGroup;

  offers: Offer[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private offersService: OffersService
  ) {}

  ngOnInit(): void {
    this.initOfferForm();
    // Initialisation des données
    // this.offers = this.offersService.getOffers();
    this.offersService.getOffers().subscribe({
      next: (offers: Offer[]) => {
        console.log('NEXT');

        this.offers = this.offers;
      },
      complete: () => {
        console.log('Observable complete');
      },
      error: (error) => {
        console.error(error);
      },
    });
    /*this.offersService
      .getOffers()
      .then((offers: Offer[]) => {
        this.offers = offers;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => console.log("It's ok"));*/
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
      // this.offers.push(offer) ;

      this.offers = this.offersService.createOffer(offer);
    } else {
      delete offer.index;
      // on modifie l'élément
      // this.offers[offerIndex] = offer;
      this.offers = this.offersService.editOffer(offer, offerIndex);
    }

    // this.offers.push(this.offerForm.value);
    this.offerForm.reset();
    console.log(this.offers);
  }

  onEditOffer(offer: Offer, index: number): void {
    // les  ... pour déconstruire l'élément
    this.offerForm.setValue({ ...offer, index });
  }

  onDeleteOffer(index: number): void {
    // this.offers.splice(index, 1);
    this.offers = this.offersService.deleteOffer(index);
  }
}
