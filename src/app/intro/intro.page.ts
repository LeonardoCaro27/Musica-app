import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{

  slideOpt={
    initialSlide: 0, //slide inicial
    slidesPerView: 1, //slide por vista
    centeredSlides: true, //que las slides esten centradas
    speed: 400 // velocidad de transicion de cada slide en milisegundo
  }

  slides = [
    {
      title:"Bienvenido a",
      subtitle: "ByMusic App",
      img:"assets/images/Slide1.PNG",
      description:"La mejor aplicacion para reproducir y buscar tus canciones favoritas.",
      icon:"apps-outline"
    },

    {
      title:"Introducción",
      subtitle: "¿Que es ByMusic?",
      img:"assets/images/slide2.PNG",
      description:"ByMusic es una App que nos permite reproducir contenido musicales tanto archivos almacenados en el dispositivo como desde un flujo de datos que llega a través de Internet."
    , icon:"play-circle-outline"  
    },
    {
      title:"Siguiente paso",
      subtitle: "Registro",
      img:"assets/images/slide3.PNG",
      description:"Se invita a realizar el registro a ByMusic App, presionando el boton de registro que aparece en la pantalla principal de la App."
    , icon:"newspaper-outline"
    },
    {
      title:"Por último",
      subtitle: "A escuchar música",
      img:"assets/images/slide4.PNG",
      description:"Una vez terminado el registro podra comenzar a utilizar la App ByMusic."
    , icon:"musical-notes-outline"
    }
  ]
  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
   }
ngOnInit(): void {

}
  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login");
  }

}