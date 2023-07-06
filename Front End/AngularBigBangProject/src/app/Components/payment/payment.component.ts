import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private router:Router) { }
  amount: any
  handler: any = null;
  ngOnInit() {

    this.loadStripe();
  }
  count:number=0

  pay() {
    this.amount = 1;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        console.log(token)
        alert('Payment Succesfull !!!');
      }
    });

    handler.open({
      name: 'HEAVEN LIFE',
      description: 'ENTER VALID DETAILS',
      amount: this.amount * 20000
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'sk_test_51NHRGFSBZq2dXUQYF5GTGT9yJBBFd6J5OXpAa9eQ2LZrabpPDaTzTpZ2vYUBIHjSdihCqXFM9NsMBjqKMt03ePni00g3jehmoF',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment Success!!');
            if(this.count==0)
            this.router.navigate([''])
          }
        });

      }
      

      window.document.body.appendChild(s);
 
    }
  }



}
