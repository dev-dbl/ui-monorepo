import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flpu-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar() {
    const navLinks = document.getElementById("navLinks");
    if (!navLinks) {
      return;
    }
    if (navLinks.className.includes(" hidden")) {
      navLinks.className = navLinks.className.replace(" hidden", "");
    } else {
      navLinks.className += " hidden";
    }
  }
}
