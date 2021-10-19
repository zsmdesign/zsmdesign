import { Component, OnInit, HostListener } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})

@HostListener('window:scroll', ['$event'])

export class VideosComponent implements OnInit {
  faCircle = faCircle;
  svgTrigger: any; 

  docViewTop: any;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
    this.svgTrigger = document.querySelectorAll('#sunriseTrigger');
  }

  onScroll = (event: any): void => {
    if (this.isScrolledIntoView(this.svgTrigger[0])) {
      $('#svgTrigger').addClass('sunrise');
    }
  }

  isScrolledIntoView(elem: any) {
      this.docViewTop = $(window).scrollTop();
      let docViewBottom = this.docViewTop + $(window).height();
      let elemTop = $(elem).offset()?.top;
      let elemHeight = $(elem).height();
      let elemBottom;
  
      if(elemHeight && elemTop) {
        elemBottom = elemTop + elemHeight
      }
  
      if(elemBottom && elemTop) {
        console.log((elemBottom <= docViewBottom))
        console.log((elemTop >= this.docViewTop))


        return ((elemBottom <= docViewBottom) && (elemTop >= this.docViewTop));
      } else return false

    }
}