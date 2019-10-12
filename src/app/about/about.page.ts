import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  changedText="This is default text.";
  count:number = 1;

  constructor() { }

  ngOnInit() {
  }

  changeText(){
    this.count++;
    this.changedText="Glocalizing The Uberization Of Logistics Ecosystem.";
  }


}
