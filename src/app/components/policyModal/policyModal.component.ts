import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-policyModal',
  templateUrl: './policyModal.component.html',
  styleUrls: ['./policyModal.component.scss']
})
export class PolicyModalComponent implements OnInit {
  @Input() policy:any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal(){
    this.activeModal.close();
  }

}
