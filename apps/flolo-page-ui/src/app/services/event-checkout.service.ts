import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Event } from '@dbl-dev/events';

@Injectable({
  providedIn: 'root'
})
export class EventCheckoutService {

  checkoutInformation = {
    eventData: {
      event: new Event()
    },
    personalData: {
      firstName: '',
      lastName: '',
      email: '',
      comment: null
    }
  };

  constructor() { }

  private checkoutComplete = new Subject<any>();

  chekoutComplete$ = this.checkoutComplete.asObservable();

  getCheckoutInformation() {
    return this.checkoutInformation;
  }

  setCheckoutInformation(checkoutInformation: any) {
    this.checkoutInformation = checkoutInformation;
  }

  complete() {
    this.checkoutComplete.next(this.checkoutInformation);
  }
}
