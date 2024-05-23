import { Injectable } from '@angular/core';
import { Offer } from '../interfaces/offer';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private offers: Offer[] = [
    {
      title: 'nouvelle annonce',
      brand: 'Renault',
      model: 'Kangoo',
      description: 'Hello world',
      price: 1500,
    },
  ];

  offerSubject: BehaviorSubject<Offer[]> = new BehaviorSubject(<Offer[]>[]);

  constructor() {}

  /*getOffers(): Promise<Offer[]> {
    // return this.offers;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.offers.length === 0) {
          reject(new Error('No offer register'));
        }
        resolve(this.offers);
      }, 3000);
    });
  }*/

  dispacheOffers() {
    this.offerSubject.next(this.offers);
  }

  // getOffers(): Observable<Offer[]> {
  /*return new Observable((observer) => {
      if (this.offers.length === 0) {
        observer.error(new Error('No offer registered'));
      }
      setInterval(() => {
        observer.next(this.offers);
        observer.complete();
      }, 1000);
    });*/

  // }

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
