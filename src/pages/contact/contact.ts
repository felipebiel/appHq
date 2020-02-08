import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics/comics';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  eventos = new Array<any>();

  constructor(public navCtrl: NavController,
    public comicsProvider: ComicsProvider
    ) {

  }

  ionViewDidLoad(){
    this.comicsProvider.getEvents().subscribe(
      data=>{
        const response = (data as any);
        this.eventos = response.data.results;
      },
      error => {
       console.log(error);
      }
    );
  }

}
