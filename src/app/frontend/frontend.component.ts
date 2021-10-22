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
  illustration = 'https://picsum.photos/440';
  card = 'https://picsum.photos/320/480';

  cards = [
    { id: 0, imgUrl: 'https://picsum.photos/id/200/320/480', order: '1' },
    { id: 1, imgUrl: 'https://picsum.photos/id/201/320/480', order: '2' },
    { id: 2, imgUrl: 'https://picsum.photos/id/202/320/480', order: '3' },
    { id: 3, imgUrl: 'https://picsum.photos/id/203/320/480', order: '4' }
  ]

  sites = [
    { id: 0, imgUrl: 'https://picsum.photos/id/200/440/440', siteUrl: 'blank', visible: true, title: 'A Site Name', text: 'Does everybody know that pig named Lorem Ipsum? Shes a disgusting pig, right? Lorem Ipsum is FAKE TEXT! An extremely credible source has called my office and told me that Lorem Ipsums birth certificate is a fraud. Lorem Ipsum is FAKE TEXT! That other text? Sadly, it’s no longer a 10. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.' },
    { id: 1, imgUrl: 'https://picsum.photos/id/201/440/440', siteUrl: 'blank', visible: false, title: 'B Site Name', text: 'The best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is the single greatest threat. We are not – we are not keeping up with other websites. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.' },
    { id: 2, imgUrl: 'https://picsum.photos/id/202/440/440', siteUrl: 'blank', visible: false, title: 'C Site Name', text: 'Some people have an ability to write placeholder text… It’s an art you’re basically born with. You either have it or you don’t. All of the words in Lorem Ipsum have flirted with me – consciously or unconsciously. That’s to be expected. Look at these words. Are they small words? And he referred to my words.' },
    { id: 3, imgUrl: 'https://picsum.photos/id/203/440/440', siteUrl: 'blank', visible: false, title: 'D Site Name', text: 'We have so many things that we have to do better… and certainly ipsum is one of them. An ‘extremely credible source’ has called my office and told me that Lorem Ipsum’s birth certificate is a fraud. I don’t think anybody knows it was Russia that wrote Lorem Ipsum, but I don’t know, maybe it was. It could be Russia.' }
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