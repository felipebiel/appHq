import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics/comics';

/**
 * Generated class for the HomeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-detalhe',
  templateUrl: 'home-detalhe.html',
})
export class HomeDetalhePage {

  id:any;
  nome:string;
  descricao:string;
  thumbnail:string;
  historias:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public comicsProvider: ComicsProvider
    ) {
    this.id = navParams.get('id');
      
  }

  ionViewDidLoad() {

    //console.log(this.id);

    this.comicsProvider.getCharater(this.id).subscribe(
      data=>{
        const response = (data as any);

        this.nome = response.data.results[0].name;
        this.descricao = response.data.results[0].description;
        this.thumbnail = response.data.results[0].thumbnail.path+'.'+response.data.results[0].thumbnail.extension;
        this.historias = response.data.results[0].stories.items;
      },
      error => {
       console.log(error);
      }
    )
  }

}
