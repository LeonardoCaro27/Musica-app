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
      title:"Titulo 1",
      subtitle: "Sub titulo 1",
      icon:"musical-note-outline",
      img:"assets/images/slide1.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },

    {
      title:"Titulo 2",
      subtitle: "Sub titulo 2",
      icon:"play-circle-outline",
      img:"assets/images/slide2.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title:"Titulo 3",
      subtitle: "Sub titulo 3",
      icon:"musical-notes-outline",
      img:"assets/images/slide3.jpeg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title:"Titulo 4",
      subtitle: "Sub titulo 4",
      icon:"radio-outline",
      img:"assets/images/slide4.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]
  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
   }
ngOnInit(): void {
  this.showe().then(x=>{
    //console.log(x)
    if (x){
      this.router.navigateByUrl("/home")
    }
  })
}
async showe(){
  const show = await this.storage.get("isIntroShowed")
  return show
}

  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

}
