import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles=null;
  constructor(private apiService:ApiService,private toastController:ToastController) {}

ionViewDidEnter(){
  this.apiService.getNews().subscribe((data)=>{
    console.log(data);
    this.articles = data['articles'];
  });
  this.showToast();
}

doRefresh(event){
console.log("Refreshing")
setTimeout(()=>{
  this.ionViewDidEnter();
  this.showToast();
  event.target.complete();
},2000);
}


async showToast(){
  const toast =await this.toastController.create({message:"News loaded successfully.", duration:2000});
  toast.present();
}

ionViewWillEnter(){
  setTimeout(()=>{
    console.log("Will enter");
    this.ionViewDidEnter();
},2000);
}
}