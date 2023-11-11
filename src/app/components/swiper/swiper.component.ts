import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiperCard } from 'src/app/models/Swiper-Card';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { PolicyModalComponent } from '../policyModal/policyModal.component';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  // contents: SwiperCard[] = [
  //   {
  //     title: 'Computer',
  //     description: 'Description about computer...',
  //     url: 'https://picsum.photos/id/1/640/480',
  //   },
  //   {
  //     title: 'Building',
  //     description: 'Building description...',
  //     url: 'https://picsum.photos/id/101/640/480',
  //   }, {
  //     title: 'Glass over a computer',
  //     description: 'Description of a glass over a computer',
  //     url: 'https://picsum.photos/id/201/640/480',
  //   }, {
  //     title: 'Autumn',
  //     description: 'Description about autumn leaves',
  //     url: 'https://picsum.photos/id/301/640/480',
  //   }, {
  //     title: 'Balloon',
  //     description: 'Coloured balloon',
  //     url: 'https://picsum.photos/id/401/640/480',
  //   },
  // ];

  data=[
  {
    title:'喵的保障',
    oriDescription:'為毛孩子謀福利!推動寵物保障方案',
    description:'為毛孩子謀福利!<br>推動寵物保障方案',
    img:'../../../assets/policy1.svg',
    detail:''
  },
  {
    title:'喵的教育',
    oriDescription:'推廣寵物飼養教育，讓愛更加專業',
    description:'推廣寵物飼養教育，<br>讓愛更加專業',
    img:'../../../assets/policy2.svg',
    detail:''
  },
  {
    title:'喵的福利',
    oriDescription:'打造休閒天堂！推廣寵物休閒與娛樂場所',
    description:'打造休閒天堂！<br>推廣寵物休閒與娛樂場所',
    img:'../../../assets/policy3.svg',
    detail:''
  }
]
  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  }

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  }


  swiperConfig2: SwiperOptions = {
    autoplay: {
      delay: 600,
      disableOnInteraction: false
    },
    speed: 800,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 2,
    initialSlide: 1,
    spaceBetween:40,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows : true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  constructor(private modalService: NgbModal) { }
  ngAfterViewInit() {
    // this.swiper.nativeElement.swiper.activeIndex = this.index;
    // this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    // this.index = swiper.detail[0].activeIndex;
  }
  openModal(index:number){
    const modalRef = this.modalService.open(PolicyModalComponent,{scrollable: true,fullscreen:'sm',size:'90'});
    modalRef.componentInstance.policy = {
      index:index,
      data:this.data
    };
  }

}
