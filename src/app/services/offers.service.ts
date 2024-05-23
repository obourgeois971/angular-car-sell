import { Injectable } from '@angular/core';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private offers: Offer[] = [
    {
      title: 'Nouvelle annonce',
      brand: 'Renault',
      model: 'Kangoo',
      description: 'Hello world',
      price: 1500,
    },
  ];

  constructor() {}

  getOffers(): Offer[] {
    return this.offers;
  }

  createOffer(offer: Offer): Offer[] {
    this.offers.push(offer);
    return this.offers;
  }

  editOffer(offer: Offer, index: number): Offer[] {
    this.offers[index] = offer;
    return this.offers;
  }

  deleteOffer(offerIndex: number): Offer[] {
    this.offers.splice(offerIndex, 1); // on en supprime que 1 seul
    return this.offers;
  }
}
