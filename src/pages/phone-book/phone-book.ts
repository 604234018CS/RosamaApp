import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Sama', telephone: '0888342938', imageUrl: ''},
                  {name: 'Sama', telephone: '0888342938', imageUrl: ''},
                  {name: 'Sama', telephone: '0888342938', imageUrl: ''},
                  {name: 'Sama', telephone: '0888342938', imageUrl: ''},
                  {name: 'Sama', telephone: '0888342938', imageUrl: ''}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

}//end class
