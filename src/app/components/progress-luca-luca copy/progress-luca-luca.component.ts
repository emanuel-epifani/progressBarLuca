import { Component, OnInit } from '@angular/core';
import { TimeoutErrorCtor } from 'rxjs/internal/operators/timeout';
import { Menu } from 'src/app/models/menu';
import { TimeSection } from 'src/app/models/time-section';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-progress-luca-luca',
  templateUrl: './progress-luca-luca-copy.component.html',
  styleUrls: ['./progress-luca-luca-copy.component.scss']
})
export class ProgressLucaLucaProvaComponent implements OnInit {

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


  bubble1s! : HTMLElement;
  bubble1e! : HTMLElement;
  bubble2s! : HTMLElement;
  bubble2e! : HTMLElement;
  bubble3s! : HTMLElement;
  bubble3e! : HTMLElement;
  bubble4s! : HTMLElement;
  bubble4e! : HTMLElement;

  // array contenente tutte e 4 le sezioni della progress bar 
  arraySections : TimeSection[] = []

  constructor(
    private global : GlobalService
  ) { }

  ngOnInit(): void {

    // genera le variabili corrispondenti all'input ed al thumb di inizio e di fine di ogni range, anche lui salvato nella rispettiva variabile 
    // 1
    this.inputLeftFirst = document.getElementById("input-left-first") as HTMLInputElement;
    this.inputRightFirst = document.getElementById("input-right-first") as HTMLInputElement;
    this.thumbLeftFirst = document.querySelector(".slider > .thumb.left.first") as HTMLElement;
    this.thumbRightFirst = document.querySelector(".slider > .thumb.right.first") as HTMLElement;
    this.rangeFirst = document.querySelector(".slider > .range.first") as HTMLElement;
    // 2
    this.inputLeftSecond = document.getElementById("input-left-second") as HTMLInputElement;
    this.inputRightSecond = document.getElementById("input-right-second") as HTMLInputElement;
    this.thumbLeftSecond = document.querySelector(".slider > .thumb.left.second") as HTMLElement;
    this.thumbRightSecond = document.querySelector(".slider > .thumb.right.second") as HTMLElement;
    this.rangeSecond = document.querySelector(".slider > .range.second") as HTMLElement;
    // 3
    this.inputLeftThird = document.getElementById("input-left-third") as HTMLInputElement;
    this.inputRightThird = document.getElementById("input-right-third") as HTMLInputElement;
    this.thumbLeftThird = document.querySelector(".slider > .thumb.left.third") as HTMLElement;
    this.thumbRightThird = document.querySelector(".slider > .thumb.right.third") as HTMLElement;
    this.rangeThird = document.querySelector(".slider > .range.third") as HTMLElement;
    // 4
    this.inputLeftFourth = document.getElementById("input-left-fourth") as HTMLInputElement;
    this.inputRightFourth = document.getElementById("input-right-fourth") as HTMLInputElement;
    this.thumbLeftFourth = document.querySelector(".slider > .thumb.left.fourth") as HTMLElement;
    this.thumbRightFourth = document.querySelector(".slider > .thumb.right.fourth") as HTMLElement;
    this.rangeFourth = document.querySelector(".slider > .range.fourth") as HTMLElement;

    // le variabili delle bubbles vengono valorizzate qui e non fuori dall'onInit() per questioni di timing? 
    this.bubble1s = document.getElementById('bubble1s') as HTMLElement
    this.bubble2s = document.getElementById('bubble2s') as HTMLElement
    this.bubble3s = document.getElementById('bubble3s') as HTMLElement
    this.bubble4s = document.getElementById('bubble4s') as HTMLElement
    this.bubble1e = document.getElementById('bubble1e') as HTMLElement
    this.bubble2e = document.getElementById('bubble2e') as HTMLElement
    this.bubble3e = document.getElementById('bubble3e') as HTMLElement
    this.bubble4e = document.getElementById('bubble4e') as HTMLElement

    this.arraySections.push(this.section1,this.section2,this.section3,this.section4)




    /* ----------------setto distanza range dietro i BOTTONI, x averla = a come sarà nonappena trascinero il bottone ------------------ */
    
    //from LEFT
    //this.rangeFirst.style.left = "calc("+ percent + "% -"+" 5px)";

    //from RIGHT
    //this.rangeFirst.style.right = "calc("+ (100- percent) + "% -"+" 35px)";

    /* 1range Right */
    let value1e = 11
    let min1e = parseFloat(this.inputRightFirst!.min);
    let max1e = parseFloat(this.inputRightFirst!.max);
    let percent1e = ((value1e - min1e) / (max1e - min1e)) * 100;
    this.rangeFirst.style.right = "calc("+ (100- percent1e) + "% -"+" 25px)";


    /* 2range Left */
    let value2s = 12
    let min2s = parseFloat(this.inputLeftSecond!.min);
    let max2s = parseFloat(this.inputLeftSecond!.max);
    let percent2s = ((value2s - min2s) / (max2s - min2s)) * 100;
    this.rangeSecond.style.left = "calc("+ percent2s + "% -"+" 5px)";


    /* 2range Right */
    let value2e = 23
    let min2e = parseFloat(this.inputRightSecond!.min);
    let max2e = parseFloat(this.inputRightSecond!.max);
    let percent2e = ((value2e - min2e) / (max2e - min2e)) * 100;
    this.rangeSecond.style.right = "calc("+ (100- percent2e) + "% -"+" 15px)";

    /* 3range Left */
    let value3s = 24
    let min3s = parseFloat(this.inputLeftThird!.min);
    let max3s = parseFloat(this.inputLeftThird!.max);
    let percent3s = ((value3s - min3s) / (max3s - min3s)) * 100;
    this.rangeThird.style.left = "calc("+ percent3s + "% -"+" 15px)";

    /* 3range Right */
    let value3e = 35
    let min3e = parseFloat(this.inputRightThird!.min);
    let max3e = parseFloat(this.inputRightThird!.max);
    let percent3e = ((value3e - min3e) / (max3e - min3e)) * 100;
    this.rangeThird.style.right = "calc("+ (100- percent3e) + "% -"+" 10px)";

    /* 4range Left */
    let value4s = 36
    let min4s = parseFloat(this.inputLeftFourth!.min);
    let max4s = parseFloat(this.inputLeftFourth!.max);
    let percent4s = ((value4s - min4s) / (max4s - min4s)) * 100;
    this.rangeFourth.style.left = "calc("+ percent4s + "% -"+" 20px)";

    /* 4range Right */
    let value4e = 48
    let min4e = parseFloat(this.inputRightFourth!.min);
    let max4e = parseFloat(this.inputRightFourth!.max);
    let percent4e = ((value4e - min4e) / (max4e - min4e)) * 100;
    this.rangeFourth.style.right = "calc("+ (100- percent4e) + "% -"+" 0px)";
    


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


  /* movimento DA sx */
  moveLeft (index: number){

    switch(index){
      case 1:
      if(this.inputLeftFirst && this.inputRightFirst && this.rangeFirst){
        //inputLeftFirst ecc sn quelli VERI degli input, ma che andranno sotto invisibili
        let min = parseFloat(this.inputLeftFirst.min);
        let max = parseFloat(this.inputLeftFirst.max);
        // assegna al punto di sx del primo input un valore == al minimo tra il valore di sè stesso e quello del punto di dx 
        this.inputLeftFirst.value = (Math.min(parseFloat(this.inputLeftFirst.value), parseFloat(this.inputRightFirst.value) - 1)).toString();

        let valueNum = parseFloat(this.inputLeftFirst.value);

        // esegue la differenza tra il valore effettivo del punto di sx ed il suo minimo / differenza tra suo max e min, il tutto * 100
        // in questo modo calcola in percentuale lo spazio che c'è tra l'inizio ed il punto
        var percent = ((valueNum - min) / (max - min)) * 100;
        
        //this.thumbLeftFirst.style.left = "calc("+ percent + "%-"+"- 20px)";
        this.rangeFirst.style.left = "calc("+ percent + "% -"+" 0px)";
        
        // assegna al valore di start della prima sezione temporale un valore, richiamando il metodo getTimeMenu e passandogli come parametro il valore del punto di sx 
        this.section1.start = this.getTimeMenu(valueNum);

        //inserisco nella bolla la scritta dell'ora, lo sposto della stessa % dell'input mosso, e lo mostro
        this.bubble1s.innerHTML = this.section1.start.toString();
        this.bubble1s.style.left = percent + "%";
        if(this.bubble1s.style.display != "block"){
          this.hideBubble();
          this.bubble1s.style.display = "block";
        }
      }
      break;
      case 2:
      if(this.inputLeftSecond && this.inputRightSecond && this.inputRightFirst && this.rangeSecond){
        let min = parseFloat(this.inputLeftSecond.min);
        let max = parseFloat(this.inputLeftSecond.max);
        this.inputLeftSecond.value = (Math.max(Math.min(parseFloat(this.inputLeftSecond.value), parseFloat(this.inputRightSecond.value) - 1), parseFloat(this.inputRightFirst.value)+1)).toString();
        let valueNum = parseFloat(this.inputLeftSecond.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.rangeSecond.style.left = "calc("+ percent + "% -"+" 10px)";
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
      if(this.inputLeftThird && this.inputRightThird  && this.inputRightSecond && this.rangeThird){
        let min = parseFloat(this.inputLeftThird.min);
        let max = parseFloat(this.inputLeftThird.max);
        this.inputLeftThird.value = (Math.max(Math.min(parseFloat(this.inputLeftThird.value), parseFloat(this.inputRightThird.value) - 1), parseFloat(this.inputRightSecond.value)+1)).toString();
        let valueNum = parseFloat(this.inputLeftThird.value);
        var percent = ((valueNum - min) / (max - min)) * 100;

        this.rangeThird.style.left = "calc("+ percent + "% -"+" 20px)";
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
      if(this.inputLeftFourth && this.inputRightFourth && this.inputRightThird && this.rangeFourth){
        let min = parseFloat(this.inputLeftFourth.min);
        let max = parseFloat(this.inputLeftFourth.max);
        this.inputLeftFourth.value = (Math.max(Math.min(parseFloat(this.inputLeftFourth.value), parseFloat(this.inputRightFourth.value) - 1), parseFloat(this.inputRightThird.value)+1)).toString();
        let valueNum = parseFloat(this.inputLeftFourth.value);
        var percent = ((valueNum - min) / (max - min)) * 100;

        this.rangeFourth.style.left = "calc("+ percent + "% -"+" 25px)";
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
      if(this.inputLeftFirst && this.inputLeftSecond && this.inputRightFirst && this.rangeFirst){
        let min = parseFloat(this.inputRightFirst.min);
        let max = parseFloat(this.inputRightFirst.max);
        this.inputRightFirst.value = (Math.min(Math.max(parseFloat(this.inputRightFirst.value), parseFloat(this.inputLeftFirst.value) + 1), parseFloat(this.inputLeftSecond.value) -1 )).toString();
        let valueNum = parseFloat(this.inputRightFirst.value);
        var percent = ((valueNum - min) / (max - min)) * 100;

        //this.rangeFirst.style.right = (100 - percent) + "%";
        //this.rangeFirst.style.right = (100 - percent) + "%";
        this.rangeFirst.style.right = "calc("+ (100- percent) + "% -"+" 25px)";
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
      if(this.inputLeftSecond && this.inputLeftThird && this.inputRightSecond && this.rangeSecond){
        let min = parseFloat(this.inputRightSecond.min);
        let max = parseFloat(this.inputRightSecond.max);
        this.inputRightSecond.value = (Math.min(Math.max(parseFloat(this.inputRightSecond.value), parseFloat(this.inputLeftSecond.value) + 1), parseFloat(this.inputLeftThird.value)-1)).toString();
        let valueNum = parseFloat(this.inputRightSecond.value);
        var percent = ((valueNum - min) / (max - min)) * 100;
        this.rangeSecond.style.right = "calc("+ (100- percent) + "% -"+" 20px)";
        this.section2.end = this.getTimeMenu(valueNum)
        
        this.bubble2e.style.left = percent + "%";
        this.bubble2e.innerHTML = this.section2.end.toString()
        if(this.bubble2e.style.display != "block"){
          this.hideBubble()
          this.bubble2e.style.display = "block"
        }
      }
      break;
      case 3:
      if(this.inputLeftThird && this.inputLeftFourth && this.inputRightThird && this.rangeThird){
        let min = parseFloat(this.inputRightThird.min);
        let max = parseFloat(this.inputRightThird.max);
        this.inputRightThird.value = (Math.min(Math.max(parseFloat(this.inputRightThird.value), parseFloat(this.inputLeftThird.value) + 1), parseFloat(this.inputLeftFourth.value)-1)).toString();
        let valueNum = parseFloat(this.inputRightThird.value);
        var percent = ((valueNum - min) / (max - min)) * 100;

        this.rangeThird.style.right = "calc("+ (100- percent) + "% -"+" 15px)";
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
      if(this.inputLeftFourth && this.inputRightFourth && this.rangeFourth){
        let min = parseFloat(this.inputRightFourth.min);
        let max = parseFloat(this.inputRightFourth.max);
        this.inputRightFourth.value = (Math.max(parseFloat(this.inputRightFourth.value), parseFloat(this.inputLeftFourth.value) + 1)).toString();
        let valueNum = parseFloat(this.inputRightFourth.value);
        var percent = ((valueNum - min) / (max - min)) * 100;

        this.rangeFourth.style.right = "calc("+ (100- percent) + "% -"+" 0px)";
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

  //al click prendo i dati di start & end degli oggetti section1,2,3,4, li salvo, e li invio al service globale
  saveChosenTime(){
    this.global.saveChosenTime(this.section1!,this.section2!, this.section3!, this.section4!)
    console.log( this.section1, this.section2, this.section3, this.section4 ); 
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
      case 48:
        return "00:00"
      default:
        return ""
    }
  }

  setSpacing(value: number): number{

    switch(value){
      case 0: 
      return (100/47)*0
      case 1: 
      return (100/47)*1
      case 2:
      return (100/47)*2
      case 3:
      return (100/47)*3
      case 4: 
      return (100/47)*4
      case 5: 
      return (100/47)*5
      case 6: 
      return (100/47)*6
      case 7: 
      return (100/47)*7
      case 8: 
      return (100/47)*8
      case 9: 
      return (100/47)*9
      case 10: 
      return (100/47)*10
      case 11: 
      return (100/47)*11
      case 12: 
      return (100/47)*12
      case 13: 
      return (100/47)*13
      case 14: 
      return (100/47)*14
      case 15: 
      return (100/47)*15
      case 16: 
      return (100/47)*16
      case 17: 
      return (100/47)*17
      case 18: 
      return (100/47)*18
      case 19: 
      return (100/47)*19
      case 20: 
      return (100/47)*20
      case 21: 
      return (100/47)*21
      case 22: 
      return (100/47)*22
      case 23: 
      return (100/47)*23
      case 24: 
      return (100/47)*24
      case 25: 
      return (100/47)*25
      case 26: 
      return (100/47)*26
      case 27: 
      return (100/47)*27
      case 28: 
      return (100/47)*28
      case 29: 
      return (100/47)*29
      case 30: 
      return (100/47)*30
      case 31: 
      return (100/47)*31
      case 32: 
      return (100/47)*32
      case 33: 
      return (100/47)*33
      case 34: 
      return (100/47)*34
      case 35: 
      return (100/47)*35
      case 36: 
      return (100/47)*36
      case 37: 
      return (100/47)*37
      case 38: 
      return (100/47)*38
      case 39: 
      return (100/47)*38
      case 40: 
      return (100/47)*40
      case 41: 
      return (100/47)*41
      case 42:
      return (100/47)*42
      case 43: 
      return (100/47)*43
      case 44: 
      return (100/47)*44
      case 45: 
      return (100/47)*45
      case 46: 
      return (100/47)*46
      case 47: 
      return (100/47)*47
      default:
        return 0
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

  
  clickLink(menu: Menu) {
    document.location.replace(menu.link);
  }


}