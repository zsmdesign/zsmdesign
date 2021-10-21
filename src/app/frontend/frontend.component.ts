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
  illustration = 'https://picsum.photos/440';
  card = 'https://picsum.photos/320/480';

  cards = [
    { id: 0, url: 'https://picsum.photos/id/200/320/480' },
    { id: 1, url: 'https://picsum.photos/id/201/320/480' },
    { id: 2, url: 'https://picsum.photos/id/202/320/480' }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  trackByFn(index: any, item: any) {
    console.log('index: ' + index)
    console.log(item)
  }

}