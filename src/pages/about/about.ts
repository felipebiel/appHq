import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics/comics';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  quadrinhos = new Array<any>();

  constructor(public navCtrl: NavController,
    public comicsProvider: ComicsProvider
    ) {

  }

  ionViewDidLoad(){
    this.comicsProvider.getComics().subscribe(
      data=>{
        const response = ( data as any);
        console.log(response);
        this.quadrinhos = response.data.results;
      },
      error => {
       console.log(error);
      }
    );
  }

}
