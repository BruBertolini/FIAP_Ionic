import { Component } from '@angular/core';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';



/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  listaContatos = [];

  constructor(private service: RemoteServiceProvider) {
    this.getContatos(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  getContatos(): void {
    this.service.getContatos()
      .subscribe(data => this.listaContatos = data);
  }



}
