import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-progress-copied',
  templateUrl: './progress-copied.component.html',
  styleUrls: ['./progress-copied.component.scss']
})
export class ProgressCopiedComponent implements OnInit {
  //variabili x check su ora Inizio e Fine vari menù
  startBreakfast?: string
  endBreakfast_startLunch?: string
  endLunch_startAppetizer?: string
  endAppetizer_startDinner?: string
  //x prendere la referenza dell'html da spostare
  inputLeft: HTMLInputElement | null = null
  inputRight: HTMLInputElement | null = null
  thumbLeft: HTMLInputElement | null = null
  thumbRight: HTMLInputElement | null = null
  range: HTMLInputElement | null = null


  constructor() { }

  ngOnInit(): void {
    this.inputLeft = document.getElementById("input-left")! as HTMLInputElement
    this.inputRight = document.getElementById("input-right")! as HTMLInputElement
    this.thumbLeft = document.querySelector(".slider > .thumb.left")! as HTMLInputElement
    this.thumbRight = document.querySelector(".slider > .thumb.right")! as HTMLInputElement
    this.range = document.querySelector(".slider > .range")! as HTMLInputElement
  }


  setLeftValue() {
    var _this= this.inputLeft
    var min = parseInt(_this!.getAttribute('min')!)// 0
    var max = parseInt(_this!.getAttribute('max')!)// 100

    var value = Math.min(parseInt(_this!.value), parseInt(this.inputRight!.value)-1)

    _this!.value = Math.min(parseInt(_this!.value), parseInt(this.inputRight!.value)-1).toString() 
    var percent = ((parseInt(_this!.value) - min)/(max - min)*100)

      this.thumbLeft!.style.left = percent+"%"
      this.range!.style.left = percent+"%"
  }

  setRightValue() {
    var _this= this.inputRight
    var min = parseInt(_this!.getAttribute('min')!)// 0
    var max = parseInt(_this!.getAttribute('max')!)// 100

    var value = Math.max(parseInt(_this!.value), parseInt(this.inputLeft!.value)-1)

    _this!.value = Math.max(parseInt(_this!.value), parseInt(this.inputLeft!.value)+1).toString() 
    var percent = ((parseInt(_this!.value) - min)/(max - min)*100)

      this.thumbRight!.style.right = (100 - percent)+"%"
      this.range!.style.right = (100- percent)+"%"
  }


    // 1 input range 
    setStartColazione(rangeStep: string) {
      //valorizzo l'ora in locale
        switch (rangeStep) {
          case "10":
            this.endBreakfast_startLunch = "9:00"
            break;
          case "20":
            this.endBreakfast_startLunch = "9:30"
            break;
          case "30":
            this.endBreakfast_startLunch = "10:00"
            break;
          case "40":
            this.endBreakfast_startLunch = "10:30"
            break;
  
          default:
            break;
        }
        console.log("value = " + rangeStep)
        console.log(typeof(rangeStep))
  
        console.log(this.endBreakfast_startLunch)
  
      //imposto il valore minimo agli altri cursori successivi
  /*     if(parseInt(rangeStep) >= parseInt(this.range2?.getAttribute('value')!) ){
        this.range2?.setAttribute('value', rangeStep)
        console.log(this.range2?.getAttribute('value'))
        console.log(this.range3?.getAttribute('value'))
      } */
  
    }

    //2 input range
    setEndColaz_startPranzo(rangeStep: string){

    }

    //3 input range
    setEndPranzo_startAperitivo(rangeStep: string){

    }

    // 4 input range
    setEndAperitivo_startCena(rangeStep: string){

    }

    // 5 input range
    setEndCena(rangeStep: string){

    }


    setBubbleValue(value: number){
      let bubble = document.getElementById('bubble')
      bubble!.innerText = value.toString()
    }

}


