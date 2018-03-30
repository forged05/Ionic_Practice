import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: any[];
  
  constructor(public navCtrl: NavController) {
    this.items = [];
    for(let i = 0; i < 10; i++ ){
      this.items.push({
        text: 'OAO '+ i,
        id: i
      });
    }
  }

  itemSelected(item){
    // alert(item.text);
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
