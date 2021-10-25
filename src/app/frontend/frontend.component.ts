import { Component, OnInit } from '@angular/core';
import { faPlay, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

export class FrontendComponent implements OnInit {
  faPlay = faPlay;
  faCircle = faCircle;
  oJet = 'test';

  cards = [
    { id: 0, imgUrl: './assets/images/card-aimotive.jpg', order: '1' },
    { id: 1, imgUrl: './assets/images/card-oracle.jpg', order: '2' },
    { id: 2, imgUrl: './assets/images/card-designterminal.jpg', order: '3' },
    { id: 3, imgUrl: './assets/images/card-esa.jpg', order: '4' }
  ]

  sites = [
    { id: 0, imgUrl: './assets/images/site-aimotive.png', siteUrl: 'https://aimotive.com/', visible: true, title: 'aimotive', text: `During my four years at AIMOTIVE the company has grown from 16 to around 300 employees. Just as the internal management sites, the main page also had to go through a big evolution to support the needs of this dinamic change. My work related to this company is quite complex. I was not only responsible for the development and design most of the UI's, but also created the foundations of the brand's full appearance.` },
    { id: 1, imgUrl: './assets/images/site-oracle.png', siteUrl: 'https://www.oracle.com/index.html', visible: false, title: 'Oracle Corporation', text: 'Worked within Oracle Applications Labs, together with an international team across the globe. Maintained and developed cloud-based enterprise applications with the latest technologies. Actively participated in the international planning processes, before covid changed everything. Thanks to the great challenges I had, picked up quite a few tricks with Javascript and ' },
    { id: 2, imgUrl: './assets/images/site-designterminal.png', siteUrl: 'http://dt.whoops.hu/hu', visible: false, title: 'Design Terminal', text: 'Design Terminal is an innovative agency that runs business development projects in 12 countries and is also a startup accelerator. The page design turned out quite simple but reather effective. It has a complete content management side which runs on ' },
    { id: 3, imgUrl: './assets/images/site-esa.png', siteUrl: 'https://esabichu.designterminal.org/hu', visible: false, title: 'ESA BIC Hungary', text: 'This site was created on behalf of the The Europian Space Agency. The project that this site supports, are set to help space startups throughout their incubation periods and even helps to organize university and high school education programs. For the sake of simplicity and fast development I used ' }
  ]

  constructor() { }

  ngOnInit(): void {

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