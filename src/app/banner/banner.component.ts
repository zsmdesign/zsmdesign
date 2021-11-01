import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerVideo: any;
  mobileMenuActive = false;
  faBars = faBars;
  faTimes = faTimes;
  
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

  mobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}