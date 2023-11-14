import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewActiveModalComponent } from '../newActiveModal/newActiveModal.component';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { DonateModalComponent } from '../donateModal/donateModal.component';
import { EmailModalComponent } from '../emailModal/emailModal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  newActive=[
    {
      title:'掃街模式開啟！帶著你的貓耳，來和我一起走！',
      date:'2023/12/24',
      describe:'街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
      img:'assets/news2.svg',
      detail:'台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。<br><p></p>在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。<br><p></p>喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。<br><p></p>為了實現這一目標，喵力翰提出了一系列具體的政策建議。<br><p></p>首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。<br><p></p>在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。<br><p></p>此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。<br><p></p>他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。<br><p></p>這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。'
    },
    {
      title:'收容所模特兒大比拼！',
      date:'2023/12/20',
      describe:'今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
      img:'assets/news3.svg',
      detail:'台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。<br><p></p>在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。<br><p></p>喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。<br><p></p>為了實現這一目標，喵力翰提出了一系列具體的政策建議。<br><p></p>首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。<br><p></p>在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。<br><p></p>此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。<br><p></p>他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。<br><p></p>這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。'
    },
    {
      title:'參與台北寵物論壇，爭取貓咪友善環境',
      date:'2023/12/26',
      describe:'炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
      img:'assets/news4.svg',
      detail:'台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。<br><p></p>在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。<br><p></p>喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。<br><p></p>為了實現這一目標，喵力翰提出了一系列具體的政策建議。<br><p></p>首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。<br><p></p>在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。<br><p></p>此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。<br><p></p>他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。<br><p></p>這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。'
    }
  ]
  options: AnimationOptions = {
    path: 'assets/loading.json',
  };
  private animationItem: any;
  destroyLoading=false;
  constructor(private modalService: NgbModal,private ngZone: NgZone) {
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const thiss=this;
    setTimeout(function(){
      if(thiss.animationItem!==undefined && thiss.animationItem!==null){
        thiss.ngZone.runOutsideAngular(() => {
          thiss.animationItem.destroy();
          //this.animationItem.destroy();
        });
      }
      thiss.destroyLoading=true;
      // AOS.refresh();
    }, 3000);
  }
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
  showNewActiveModal(index:number){
    const modalRef = this.modalService.open(NewActiveModalComponent,{scrollable: true,fullscreen:'xs',size:'90'});
    modalRef.componentInstance.newActive = {
      index:index,
      data:this.newActive
    };
  }
  showDonateModal(){
    const modalRef = this.modalService.open(DonateModalComponent,{scrollable: true,fullscreen:'xs',size:'90'});
  }
  showEmailModal(){
    const modalRef = this.modalService.open(EmailModalComponent,{scrollable: true,fullscreen:'xs',size:'90'});
  }

}
