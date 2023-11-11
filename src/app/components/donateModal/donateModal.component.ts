import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-donateModal',
  templateUrl: './donateModal.component.html',
  styleUrls: ['./donateModal.component.scss']
})
export class DonateModalComponent implements OnInit {
  lumpSum=987655873;
  selectedAmount:number=0;
  selectedIndex:number=0;
  customizeAmount:any;
  alertMessage:string='';
  donateSuccess=false;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal(){
    this.activeModal.close();
  }
  selected(index:number,amount:number){
    this.selectedIndex=index;
    this.selectedAmount=amount;
    this.alertMessage='';
  }
  donate(){
    if(this.selectedIndex==0){
      this.alertMessage='尚未選擇任何捐款方式!';
      return;
    }
    if(this.selectedIndex==4&&(this.customizeAmount==0||this.customizeAmount==null)){
      this.alertMessage='尚未輸入自訂贊助金額!';
      return;
    }
    if(this.selectedIndex==4){
      this.selectedAmount=this.customizeAmount;
    }
    this.lumpSum=this.lumpSum+this.selectedAmount;
    this.donateSuccess=true;
  }
}
