import { Options } from '@angular-slider/ngx-slider';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  //variabili x check su ora Inizio e Fine vari menù
  startBreakfast?: string
  endBreakfast_startLunch?: string
  endLunch_startAppetizer?: string
  endAppetizer_startDinner?: string
  //---input range (4range, 3 input)
  range1 = document.getElementById('rs1')
  range2 = document.getElementById('rs2')
  range3 = document.getElementById('rs3')


  constructor() { }

  ngOnInit(): void {
  }

  /* slider HTML - CSS */
  setTime1(rangeStep: string) {
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

}
