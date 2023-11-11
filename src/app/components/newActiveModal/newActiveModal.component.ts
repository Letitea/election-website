import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newActiveModal',
  templateUrl: './newActiveModal.component.html',
  styleUrls: ['./newActiveModal.component.scss']
})
export class NewActiveModalComponent implements OnInit {
  @Input() newActive:any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // console.log(this.newActive)
  }
  closeModal(){
    this.activeModal.close();
  }

}
