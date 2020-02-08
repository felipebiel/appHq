import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private usuario: string;
  private senha: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  sendCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  login() {
    //console.log(this.usuario);

    if (this.usuario == localStorage.getItem('usuario') && this.senha == localStorage.getItem('senha')) {
      this.navCtrl.push(TabsPage);
    } else {
      const toast = this.toastCtrl.create({
        message: 'Usuário inválido',
        position: 'top',
        duration: 3000
      });
      toast.present();
    }
  }

}
