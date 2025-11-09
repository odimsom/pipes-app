import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-pages.component.html',
})
export default class BasicPagesComponent {

  public nameLower = signal<string>('francisco daniel castro borrome - odimsom');
  public nameUpper = signal<string>('FRANCISCO DANIEL CASTRO BORROME - ODIMSOM');
  public fullName = signal<string>('fRaNcIsCo dAnIeL cAsTrO bOrRoMe - oDiMsOm');


}
