import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options:BarcodeScannerOptions;
  encodText:string="";
  encodeData:any={};
  scannerData:any={};

  public paramsParaSegPag:any = [];
  
 public scanData :any= {};
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }
  scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });         
}    
OpenSelectMap( ) {
    
    this.paramsParaSegPag = {
      name: "Hola",img: "Hola",
      id: 6238
    };/*names: string, ims: string, ids: number
    this.paramsParaSegPag = {
      name:names,img: ims,
      id: ids    
    };*/

    this.navCtrl.push(LyMapGralPage,  this.paramsParaSegPag);
  }
   
  
}
