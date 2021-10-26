import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { EventCheckoutService } from '../../../../../services/event-checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'flpu-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {

  personalData: any;
  eventData: any;

  public payPalConfig?: IPayPalConfig;
  showSuccess = false;

  constructor(private router: Router, private eventCheckoutService: EventCheckoutService) {
  }

  ngOnInit(): void {
    this.personalData = this.eventCheckoutService.getCheckoutInformation().personalData;
    this.eventData = this.eventCheckoutService.getCheckoutInformation().eventData;

    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'Aa03VWqL4nhS8w2gPNvsOX_Kmm2GroieM2hub106SVGh5jBOxzJmvuVLiHdElPYs01qEdAGvgKnw0oef',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: this.eventData.event.price,
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: this.eventData.event.price
                }
              }
            },
            items: [
              {
                name: 'Beachcamp - ' + this.eventData.event.name,
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: this.eventData.event.price,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        if (data.status === 'COMPLETED') {
          this.showSuccess = true;
          this.router.navigate([`beachcamps`]);
        } else {
          this.showSuccess = false;
          this.router.navigate([`beachteam`]);
        }
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

}
