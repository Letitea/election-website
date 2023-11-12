import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiperOptions } from 'swiper/types';
import { PolicyModalComponent } from '../policyModal/policyModal.component';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  // @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  data=[
  {
    title:'喵的保障',
    oriDescription:'為毛孩子謀福利!推動寵物保障方案',
    description:'為毛孩子謀福利!<br>推動寵物保障方案',
    img:'assets/policy1.svg',
    detail:''
  },
  {
    title:'喵的教育',
    oriDescription:'推廣寵物飼養教育，讓愛更加專業',
    description:'推廣寵物飼養教育，<br>讓愛更加專業',
    img:'assets/policy2.svg',
    detail:''
  },
  {
    title:'喵的福利',
    oriDescription:'打造休閒天堂！推廣寵物休閒與娛樂場所',
    description:'打造休閒天堂！<br>推廣寵物休閒與娛樂場所',
    img:'assets/policy3.svg',
    detail:''
  }
]
  index = 1;

  swiperConfig2: SwiperOptions = {
    // autoplay: {
    //   delay: 600,
    //   disableOnInteraction: false
    // },
    speed: 800,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 2,
    // initialSlide: 1,
    // cssMode:false,
    // navigation:true,
    spaceBetween:40,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows : false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  constructor(private modalService: NgbModal,private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiper.nativeElement.swiper.slideNext();
    // this.changeDetectorRef.detectChanges();
    // this.swiper.nativeElement.swiper.set
    // this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
  openModal(index:number){
    const modalRef = this.modalService.open(PolicyModalComponent,{scrollable: true,fullscreen:'xs',size:'90'});
    modalRef.componentInstance.policy = {
      index:index,
      data:this.data
    };
  }

}
