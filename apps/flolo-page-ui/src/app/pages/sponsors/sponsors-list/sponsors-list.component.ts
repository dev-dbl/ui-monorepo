import { Component, OnInit } from '@angular/core';
import { Sponsor } from '@dbl-dev/sponsors';

@Component({
  selector: 'flpu-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent implements OnInit {

  sponsors: Sponsor[];
  responsiveOptions: any[];

  constructor() {
    // this.responsiveOptions = [
    //   {
    //     breakpoint: '1024px',
    //     numVisible: 3,
    //     numScroll: 3
    //   },
    //   {
    //     breakpoint: '1023px',
    //     numVisible: 2,
    //     numScroll: 2
    //   },
    //   {
    //     breakpoint: '780px',
    //     numVisible: 1,
    //     numScroll: 1
    //   }
    // ];
  }

  ngOnInit(): void {
    this.sponsors = [
      {
        name: 'Silberpfeil Energy Drink',
        url: 'https://www.silberpfeil.com/',
        image: 'silberpfeil.png'
      },
      // {
      //   name: 'Erbsenzählerei',
      //   url: 'https://www.erbsenzaehlerei.com/',
      //   image: 'erbsenzaehlerei.png'
      // },
      // {
      //   name: 'Ateia Suncare',
      //   url: 'https://www.ateia.com/',
      //   image: 'ateia.png'
      // }
    ];
  }

}
