import { Injectable } from '@angular/core';
import { TimeSection } from 'src/app/models/time-section';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
menutTimesection1?: TimeSection //orari primo menu
menutTimesection2?: TimeSection //orari secondo menu
menutTimesection3?: TimeSection //orari terzo menu
menutTimesection4?: TimeSection //orari quarto menu

  constructor() { }



  saveChosenTime(a: TimeSection,b: TimeSection,c: TimeSection,d: TimeSection,){
    this.menutTimesection1 = a
    this.menutTimesection2 = b
    this.menutTimesection3 = c
    this.menutTimesection4 = d 
  }
}
