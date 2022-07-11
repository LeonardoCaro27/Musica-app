import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt={
    initialSlide: 0, //slide inicial
    slidesPerView: 1, //slide por vista
    centeredSlides: true, //que las slides esten centradas
    speed: 400 // velocidad de transicion de cada slide en milisegundo
  }

  slides = [
    {
      title:"ByMusic App",
      img:"assets/images/slide5.PNG",
    },
  ]


  constructor() {}

  ngOnInit(): void {{
     
    }
  }
  
  }
