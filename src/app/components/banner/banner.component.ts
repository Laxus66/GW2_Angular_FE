import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  ngOnInit() {
    var carouselItems = document.getElementsByClassName('carousel-item');
    var currentSlide = 0;
    var totalSlides = carouselItems.length;

    setInterval(() => {
      carouselItems[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % totalSlides;
      carouselItems[currentSlide].classList.add('active');
    }, 5000);
  }

}
