import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario:string;
  senha:string;
  repetirSenha:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar(){
    console.log(this.usuario)
    if(this.usuario == undefined || this.senha == undefined || this.senha == undefined){
      const toast = this.toastCtrl.create({
        message: 'Preencha os campos obrigatórios.',
        position: 'top',
        duration: 3000
      });
      toast.present();
    }else{
      if(this.senha == this.repetirSenha){
        localStorage.setItem('usuario', this.usuario);
        localStorage.setItem('senha', this.senha);

        this.navCtrl.push(TabsPage);
      }else{
        const toast = this.toastCtrl.create({
          message: 'Os campos de senha não conferem.',
          position: 'top',
          duration: 3000
        });
        toast.present();
      }
    }

  }

}
