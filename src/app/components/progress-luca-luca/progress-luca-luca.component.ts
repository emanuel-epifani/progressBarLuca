import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { TimeSection } from 'src/app/models/time-section';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-progress-luca-luca',
  templateUrl: './progress-luca-luca.component.html',
  styleUrls: ['./progress-luca-luca.component.scss']
})
export class ProgressLucaLucaComponent implements OnInit {
  bubble1s! : HTMLElement
  bubble1e! : HTMLElement
  bubble2s! : HTMLElement
  bubble2e! : HTMLElement
  bubble3s! : HTMLElement
  bubble3e! : HTMLElement
  bubble4s! : HTMLElement
  bubble4e! : HTMLElement


  constructor(
    private global : GlobalService
  ) { }

  ngOnInit(): void {
    this.inputLeftFirst = document.getElementById("input-left-first") as HTMLInputElement;
    this.inputRightFirst = document.getElementById("input-right-first") as HTMLInputElement;
    this.thumbLeftFirst = document.querySelector(".slider > .thumb.left.first") as HTMLElement;
    this.thumbRightFirst = document.querySelector(".slider > .thumb.right.first") as HTMLElement;
    this.rangeFirst = document.querySelector(".slider > .range.first") as HTMLElement;
    this.inputLeftSecond = document.getElementById("input-left-second") as HTMLInputElement;
    this.inputRightSecond = document.getElementById("input-right-second") as HTMLInputElement;
    this.thumbLeftSecond = document.querySelector(".slider > .thumb.left.second") as HTMLElement;
    this.thumbRightSecond = document.querySelector(".slider > .thumb.right.second") as HTMLElement;
    this.rangeSecond = document.querySelector(".slider > .range.second") as HTMLElement;
    this.inputLeftThird = document.getElementById("input-left-third") as HTMLInputElement;
    this.inputRightThird = document.getElementById("input-right-third") as HTMLInputElement;
    this.thumbLeftThird = document.querySelector(".slider > .thumb.left.third") as HTMLElement;
    this.thumbRightThird = document.querySelector(".slider > .thumb.right.third") as HTMLElement;
    this.rangeThird = document.querySelector(".slider > .range.third") as HTMLElement;
    this.inputLeftFourth = document.getElementById("input-left-fourth") as HTMLInputElement;
    this.inputRightFourth = document.getElementById("input-right-fourth") as HTMLInputElement;
    this.thumbLeftFourth = document.querySelector(".slider > .thumb.left.fourth") as HTMLElement;
    this.thumbRightFourth = document.querySelector(".slider > .thumb.right.fourth") as HTMLElement;
    this.rangeFourth = document.querySelector(".slider > .range.fourth") as HTMLElement;
    this.bubble1s = document.getElementById('bubble1s') as HTMLElement
    this.bubble2s = document.getElementById('bubble2s') as HTMLElement
    this.bubble3s = document.getElementById('bubble3s') as HTMLElement
    this.bubble4s = document.getElementById('bubble4s') as HTMLElement
    this.bubble1e = document.getElementById('bubble1e') as HTMLElement
    this.bubble2e = document.getElementById('bubble2e') as HTMLElement
    this.bubble3e = document.getElementById('bubble3e') as HTMLElement
    this.bubble4e = document.getElementById('bubble4e') as HTMLElement
  }


  // creo le 4 fasce orarie
  section1: TimeSection = {
    start: "00:00",
    end: "06:00"
  }
  section2: TimeSection = {
    start: "06:00",
    end: "12:00"
  }
  section3: TimeSection = {
    start: "12:00",
    end: "18:00"
  }
  section4: TimeSection = {
    start: "18:00",
    end: "24:00"
  }


  clickLink(menu: Menu) {
    document.location.replace(menu.link);
  }


  inputLeftFirst : HTMLInputElement | null = null;
  inputRightFirst : HTMLInputElement | null = null;
  thumbLeftFirst : HTMLElement | null = null;
  thumbRightFirst : HTMLElement | null = null;
  rangeFirst : HTMLElement | null = null;
  inputLeftSecond : HTMLInputElement | null = null;
  inputRightSecond : HTMLInputElement | null = null;
  thumbLeftSecond : HTMLElement | null = null;
  thumbRightSecond : HTMLElement | null = null;
  rangeSecond : HTMLElement | null = null;
  inputLeftThird : HTMLInputElement | null = null;
  inputRightThird : HTMLInputElement | null = null;
  thumbLeftThird : HTMLElement | null = null;
  thumbRightThird : HTMLElement | null = null;
  rangeThird : HTMLElement | null = null;
  inputLeftFourth : HTMLInputElement | null = null;
  inputRightFourth : HTMLInputElement | null = null;
  thumbLeftFourth : HTMLElement | null = null;
  thumbRightFourth : HTMLElement | null = null;
  rangeFourth : HTMLElement | null = null;

  /* movimento DA sx */
  moveLeft (index: number){
    switch(index){
      case 1:
      if(this.inputLeftFirst && this.inputRightFirst && this.thumbLeftFirst && this.rangeFirst){
        let min = parseInt(this.inputLeftFirst.min);
        let max = parseInt(this.inputLeftFirst.max);
        this.inputLeftFirst.value = (Math.min(parseInt(this.inputLeftFirst.value), parseInt(this.inputRightFirst.value) - 2)).toString();
        let valueNum = parseInt(this.inputLeftFirst.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbLeftFirst.style.left = percent + "%";
        this.rangeFirst.style.left = percent + "%";
        this.section1.start = this.getTimeMenu(valueNum)
        //inserisco nella bolla la scritta dell'ora, lo sposto della stessa % dell'input mosso, e lo mostro
        this.bubble1s.style.left = percent + "%";
        this.bubble1s.innerHTML = this.section1.start.toString()
        if(this.bubble1s.style.display != "block"){
          this.hideBubble()
          this.bubble1s.style.display = "block"
        }
      }
      break;
      case 2:
      if(this.inputLeftSecond && this.inputRightSecond && this.inputRightFirst && this.thumbLeftSecond && this.rangeSecond){
        let min = parseInt(this.inputLeftSecond.min);
        let max = parseInt(this.inputLeftSecond.max);
        this.inputLeftSecond.value = (Math.max(Math.min(parseInt(this.inputLeftSecond.value), parseInt(this.inputRightSecond.value) - 2), parseInt(this.inputRightFirst.value))).toString();
        let valueNum = parseInt(this.inputLeftSecond.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbLeftSecond.style.left = percent + "%";
        this.rangeSecond.style.left = percent + "%";
        this.section2.start = this.getTimeMenu(valueNum)
        this.bubble2s.style.left = percent + "%";
        this.bubble2s.innerHTML = this.section2.start.toString()
        if(this.bubble2s.style.display != "block"){
          this.hideBubble()
          this.bubble2s.style.display = "block"
        }
      }
      break;
      case 3:
      if(this.inputLeftThird && this.inputRightThird  && this.inputRightSecond && this.thumbLeftThird && this.rangeThird){
        let min = parseInt(this.inputLeftThird.min);
        let max = parseInt(this.inputLeftThird.max);
        this.inputLeftThird.value = (Math.max(Math.min(parseInt(this.inputLeftThird.value), parseInt(this.inputRightThird.value) - 2), parseInt(this.inputRightSecond.value))).toString();
        let valueNum = parseInt(this.inputLeftThird.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbLeftThird.style.left = percent + "%";
        this.rangeThird.style.left = percent + "%";
        this.section3.start = this.getTimeMenu(valueNum)
        this.bubble3s.style.left = percent + "%";
        this.bubble3s.innerHTML = this.section3.start.toString()
        if(this.bubble3s.style.display != "block"){
          this.hideBubble()
          this.bubble3s.style.display = "block"
        }
      }
      break;
      case 4:
      if(this.inputLeftFourth && this.inputRightFourth && this.inputRightThird && this.thumbLeftFourth && this.rangeFourth){
        let min = parseInt(this.inputLeftFourth.min);
        let max = parseInt(this.inputLeftFourth.max);
        this.inputLeftFourth.value = (Math.max(Math.min(parseInt(this.inputLeftFourth.value), parseInt(this.inputRightFourth.value) - 2), parseInt(this.inputRightThird.value))).toString();
        let valueNum = parseInt(this.inputLeftFourth.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbLeftFourth.style.left = percent + "%";
        this.rangeFourth.style.left = percent + "%";
        this.section4.start = this.getTimeMenu(valueNum)
        this.bubble4s.style.left = percent + "%";
        this.bubble4s.innerHTML = this.section4.start.toString()
        if(this.bubble4s.style.display != "block"){
          this.hideBubble()
          this.bubble4s.style.display = "block"
        }
      }
      break;
    }
    }

  /* movimento DA dx */
  moveRight (index: number){
    switch(index){
      case 1:
      if(this.inputLeftFirst && this.inputLeftSecond && this.inputRightFirst && this.thumbRightFirst && this.rangeFirst){
        let min = parseInt(this.inputRightFirst.min);
        let max = parseInt(this.inputRightFirst.max);
        this.inputRightFirst.value = (Math.min(Math.max(parseInt(this.inputRightFirst.value), parseInt(this.inputLeftFirst.value) + 2), parseInt(this.inputLeftSecond.value))).toString();
        let valueNum = parseInt(this.inputRightFirst.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbRightFirst.style.right = (100 - percent) + "%";
        this.rangeFirst.style.right = (100 - percent) + "%";
        this.section1.end = this.getTimeMenu(valueNum)
        this.bubble1e.style.left = percent + "%";
        this.bubble1e.innerHTML = this.section1.end.toString()
        if(this.bubble1e.style.display != "block"){
          this.hideBubble()
          this.bubble1e.style.display = "block"
        }
      }
      break;
      case 2:
      if(this.inputLeftSecond && this.inputLeftThird && this.inputRightSecond && this.thumbRightSecond && this.rangeSecond){
        let min = parseInt(this.inputRightSecond.min);
        let max = parseInt(this.inputRightSecond.max);
        this.inputRightSecond.value = (Math.min(Math.max(parseInt(this.inputRightSecond.value), parseInt(this.inputLeftSecond.value) + 2), parseInt(this.inputLeftThird.value))).toString();
        let valueNum = parseInt(this.inputRightSecond.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbRightSecond.style.right = (100 - percent) + "%";
        this.rangeSecond.style.right = (100 - percent) + "%";
        this.section2.end = this.getTimeMenu(valueNum)
        this.bubble2e.style.left =percent + "%";
        this.bubble2e.innerHTML = this.section2.end.toString()
        if(this.bubble2e.style.display != "block"){
          this.hideBubble()
          this.bubble2e.style.display = "block"
        }
      }
      break;
      case 3:
      if(this.inputLeftThird && this.inputLeftFourth && this.inputRightThird && this.thumbRightThird && this.rangeThird){
        let min = parseInt(this.inputRightThird.min);
        let max = parseInt(this.inputRightThird.max);
        this.inputRightThird.value = (Math.min(Math.max(parseInt(this.inputRightThird.value), parseInt(this.inputLeftThird.value) + 2), parseInt(this.inputLeftFourth.value))).toString();
        let valueNum = parseInt(this.inputRightThird.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbRightThird.style.right = (100 - percent) + "%";
        this.rangeThird.style.right = (100 - percent) + "%";
        this.section3.end = this.getTimeMenu(valueNum)
        this.bubble3e.style.left = percent + "%";
        this.bubble3e.innerHTML = this.section3.end.toString()
        if(this.bubble3e.style.display != "block"){
          this.hideBubble()
          this.bubble3e.style.display = "block"
        }
      }
      break;
      case 4:
      if(this.inputLeftFourth && this.inputRightFourth && this.thumbRightFourth && this.rangeFourth){
        let min = parseInt(this.inputRightFourth.min);
        let max = parseInt(this.inputRightFourth.max);
        this.inputRightFourth.value = (Math.max(parseInt(this.inputRightFourth.value), parseInt(this.inputLeftFourth.value) + 2)).toString();
        let valueNum = parseInt(this.inputRightFourth.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.thumbRightFourth.style.right = (100 - percent) + "%";
        this.rangeFourth.style.right = (100 - percent) + "%";
        this.section4.end = this.getTimeMenu(valueNum)
        this.bubble4e.style.left = percent + "%";
        this.bubble4e.innerHTML = this.section4.end.toString()
        if(this.bubble4e.style.display != "block"){
          this.hideBubble()
          this.bubble4e.style.display = "block"
        }
      }
      break;
    }
  }

  //al click prendo i dati di start & end degli oggetti section1,2,3,4 e li salvo, e li invio al service globale
  saveChosenTime(){
    this.global.saveChosenTime(this.section1!,this.section2!, this.section3!, this.section4!)
    console.log(
      this.section1,
      this.section2,
      this.section3,
      this.section4
    );
    
  }

  getTimeMenu(value: number): string{

    switch(value){
      case 0: 
      return "00:00"
      case 1: 
      return "00:30"
      case 2:
      return "01:00"
      case 3:
      return "01:30"
      case 4: 
      return "02:00"
      case 5: 
      return "02:30"
      case 6: 
      return "03:00"
      case 7: 
      return "03:30"
      case 8: 
      return "04:00"
      case 9: 
      return "04:30"
      case 10: 
      return "05:00"
      case 11: 
      return "05:30"
      case 12: 
      return "06:00"
      case 13: 
      return "06:30"
      case 14: 
      return "07:00"
      case 15: 
      return "07:30"
      case 16: 
      return "08:00"
      case 17: 
      return "08:30"
      case 18: 
      return "09:00"
      case 19: 
      return "09:30"
      case 20: 
      return "10:00"
      case 21: 
      return "10:30"
      case 22: 
      return "11:00"
      case 23: 
      return "11:30"
      case 24: 
      return "12:00"
      case 25: 
      return "12:30"
      case 26: 
      return "13:00"
      case 27: 
      return "13:30"
      case 28: 
      return "14:00"
      case 29: 
      return "14:30"
      case 30: 
      return "15:00"
      case 31: 
      return "15:30"
      case 32: 
      return "16:00"
      case 33: 
      return "16:30"
      case 34: 
      return "17:00"
      case 35: 
      return "17:30"
      case 36: 
      return "18:00"
      case 37: 
      return "18:30"
      case 38: 
      return "19:00"
      case 39: 
      return "19:30"
      case 40: 
      return "20:00"
      case 41: 
      return "20:30"
      case 42:
      return "21:00"
      case 43: 
      return "21:30"
      case 44: 
      return "22:00"
      case 45: 
      return "22:30"
      case 46: 
      return "23:00"
      case 47: 
      return "23:30"
      default:
        return ""
    }
  }

  //mostro la bubble che sto cliccando e nascondo tutte le altre
  hideBubble(){
    this.bubble1s.style.display = "none"
    this.bubble1e.style.display = "none"
    this.bubble2s.style.display = "none"
    this.bubble2e.style.display = "none"
    this.bubble3s.style.display = "none"
    this.bubble3e.style.display = "none"
    this.bubble4s.style.display = "none"
    this.bubble4e.style.display = "none"
  }



}


