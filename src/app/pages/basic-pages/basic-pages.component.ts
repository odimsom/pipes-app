import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-pages.component.html',
})
export default class BasicPagesComponent {

  public nameLower = signal<string>('francisco daniel castro borrome - odimsom');
  public nameUpper = signal<string>('FRANCISCO DANIEL CASTRO BORROME - ODIMSOM');
  public fullName = signal<string>('fRaNcIsCo dAnIeL cAsTrO bOrRoMe - oDiMsOm');

  public Date = signal(new Date());

  public tickingDateEffect = effect((cleanupinterval) => {
    const interval = setInterval(() => {
      this.Date.set(new Date);
    }, 1000);


    cleanupinterval(() => {
      clearInterval(interval);
    })
  })


}
