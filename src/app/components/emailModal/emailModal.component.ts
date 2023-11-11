import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-emailModal',
  templateUrl: './emailModal.component.html',
  styleUrls: ['./emailModal.component.scss']
})
export class EmailModalComponent implements OnInit {
  alertMessage:string='';
  submitSuccess=false;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal(){
    this.activeModal.close();
  }
  submit(){
    this.submitSuccess=true;
  }
}
