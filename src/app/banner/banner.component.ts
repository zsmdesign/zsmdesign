import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerVideo: any;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.bannerVideo = document.getElementById("heroVideo");

      if(this.bannerVideo.muted){
        this.bannerVideo.muted = false;
      } else {
        this.bannerVideo.muted = true;
        this.bannerVideo.play()
      }
    }, 200);
  }

}