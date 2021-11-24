import { Component, OnInit } from '@angular/core';
import { faPlay, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})

export class FrontendComponent implements OnInit {
  faPlay = faPlay;
  faCircle = faCircle;

  cards = [
    { id: 0, imgUrl: './assets/images/card-aimotive.jpg', order: '1' },
    { id: 1, imgUrl: './assets/images/card-oracle.jpg', order: '2' },
    { id: 2, imgUrl: './assets/images/card-adris.jpg', order: '3' },
    { id: 3, imgUrl: './assets/images/card-esa.jpg', order: '4' }
  ]

  sites = [
    { id: 0, imgUrl: './assets/images/site-aimotive.jpg', siteUrl: 'https://aimotive.com/', visible: true, title: 'aimotive', text: `During my four years at AIMOTIVE the company has grown from 16 to around 300 employees. Just as the internal management sites, the main page also had to go through a big evolution to support the needs of this dinamic change. My work related to this company is quite complex. I was not only responsible for developing and designing most of the UI's, but also created the foundations of the brand's full appearance.` },
    { id: 1, imgUrl: './assets/images/site-oracle.jpg', siteUrl: 'https://www.oracle.com/index.html', visible: false, title: 'Oracle Corporation', text: 'Worked within Oracle Applications Labs, together with an international team across the globe. Maintained and developed cloud-based enterprise applications with the latest technologies. Actively participated in the international planning processes, before covid changed everything. Thanks to the great challenges I had, managed to pick up quite a few tricks with Javascript and ' },
    { id: 2, imgUrl: './assets/images/site-adris.jpg', siteUrl: 'https://adriskitchen.hu/', visible: false, title: `Adri'sKitchen`, text: 'This project turned out quite a complex one. Careful and detailed planning was really important to save time, later in the development phase. The site has many features that does not meet the eyes at first, such as timed content or a sweepstake module for social media. The overall feel for the site turned out really good in my opinion.' },
    { id: 3, imgUrl: './assets/images/site-esa.jpg', siteUrl: 'https://esabichu.designterminal.org/hu', visible: false, title: 'ESA BIC Hungary', text: 'This site was created on behalf of the The Europian Space Agency. The project that this site supports, are set to help space startups throughout their incubation periods and even helps to organize university and high school education programs. For the sake of simplicity and fast development I used ' }
  ]

  constructor() { }

  ngOnInit(): void {
    //console.log(Hammer)
  }

  rollNext() {
    let cardLength = this.cards.length.toString();

    for(let i in this.cards) {
      let currentCardOrder = parseInt(this.cards[i].order);

      if((currentCardOrder - 1) === 0) {
        this.cards[i].order = cardLength;
      } else {
        this.cards[i].order = (currentCardOrder - 1).toString();
      }
    }

    let siteLength = this.sites.length;

    for(let j in this.sites) {
      let index = parseInt(j);

      if(this.sites[j].visible) {
        if((index + 1) > (siteLength - 1)) {
          this.sites[siteLength - 1].visible = false;
          this.sites[0].visible = true;
        } else {
          this.sites[j].visible = false;
          this.sites[index + 1].visible = true;
        }
        break
      }
    }
  }

  rollBack() {
    for(let i in this.cards) {
      let currentCardOrder = parseInt(this.cards[i].order);

      if(currentCardOrder === 4) {
        this.cards[i].order = '1';
      } else {
        this.cards[i].order = (currentCardOrder + 1).toString();
      }
    }

    let siteLength = this.sites.length;

    for(let j in this.sites) {
      let index = parseInt(j);

      if(this.sites[j].visible) {
        if(index === 0) {
          this.sites[j].visible = false;
          this.sites[siteLength - 1].visible = true;
        } else {
          this.sites[j].visible = false;
          this.sites[index - 1].visible = true;
        }
        break
      }
    }
  }
}