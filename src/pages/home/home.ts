import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics/comics';
import { HomeDetalhePage } from '../home-detalhe/home-detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ComicsProvider
  ]
})
export class HomePage {

  personagens = new Array<any>();

  constructor(public navCtrl: NavController,
    public comicsProvider: ComicsProvider
    ) {

  }

  ionViewDidLoad(){

    this.comicsProvider.getCharacters().subscribe(
      data=>{
        //console.log(data.data.results);
        const response = ( data as any);
        this.personagens = response.data.results;
      },
      error => {
       console.log(error);
      }
    );
  }

  detalhes(id:number){
    //console.log(id);
    this.navCtrl.push(HomeDetalhePage, { id: id});
  }

}
