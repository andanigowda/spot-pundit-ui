import { Component, OnInit } from '@angular/core';
import { UrlContant } from 'src/app/constants/router.contant';
import { Router } from '@angular/router';
import { SharedListService } from 'src/app/shared-module/shared-services/shared-list.service';
import { TempleService } from '../../services/temple-service/temple.service';

@Component({
  selector: 'app-temple',
  templateUrl: './mandir.component.html',
  styleUrls: ['./mandir.component.scss'],
})
export class TempleComponent implements OnInit {
  godList: any[] = [];
  stateList: any[] = [];
  selectedState;
  templeList;

  constructor(
    private router: Router,
    private sharedListService: SharedListService,
    private templeService: TempleService
  ) {}

  ngOnInit(): void {
    this.godListMethods();
    this.getStateListApi();
  }

  getStateListApi() {
    this.sharedListService.stateListApi('US').subscribe((res) => {
      this.stateList = res;
      if (this.stateList && this.stateList.length > 0) {
        this.onChangeState(this.stateList[0]);
      }
    });
  }

  onChangeState(item) {
    this.selectedState = item.state;
    const params = {
      type: 'temple',
      country: 'US',
      state: item.state,
    };

    this.templeService.templeSearchApi(params).subscribe((res) => {
      this.templeList = res['result'];
    });
  }

  godListMethods() {
    this.godList = [
      {
        id: 1,
        title: 'Durga Temples',
        endUrl: 'durga-temples',
        image: 'Durga-Temples.png',
        paragraph:
          'Goddess Durga is worshipped as the Goddess of strength. She is known as ‘Triyambake’ (three eyed goddess).',
      },
      {
        id: 2,
        title: 'Parvathi Temples',
        endUrl: 'parvathi-temples',
        image: 'Parvathi--Temples.png',
        paragraph:
          'Goddess Parvathi is worshipped as a goddess in her own right. She is depicted as the wife of Lord Shiva as per Hindu.',
      },
      {
        id: 3,
        title: 'Ayyappa Temples',
        endUrl: 'ayyappa-temples',
        image: 'Ayyappa-Temples.png',
        paragraph:
          'Ayyappan is most plausibly worshipped in the state of Kerala, South India. He is believed to be a magical child.',
      },
      {
        id: 4,
        title: 'Ganesh Temples',
        endUrl: 'ganesh-temples',
        image: 'Ganesh-Temples.png',
        paragraph:
          'Lord Ganesh is the primary god for any Hindu puja. He is the second son of Shiva and Parvati, and younger brother.',
      },
      {
        id: 5,
        title: 'Murugan Temples',
        endUrl: 'murugan-temples',
        image: 'Murugan-Temples.png',
        paragraph:
          'Murugan is a young and most idolized deity in Tamil Nadu. He is also familiar with names like Karthikeya, Shanmukha.',
      },
      {
        id: 6,
        title: 'Ram Temples',
        endUrl: 'ram-temples',
        image: 'Ram-Temples.png',
        paragraph:
          'Lord Ram is worshipped as a prominent deity in Hinduism. Ram, born as the eldest son of Kaushalya and Dasharatha.',
      },
      {
        id: 7,
        title: 'Shiva Temples',
        endUrl: 'shiva-temples',
        image: 'Shiva-Temples.png',
        paragraph:
          'Lord Shiva holds a pivotal position in the Holy trinity. He is contemplated as the destroyer among the supreme triad.',
      },
      {
        id: 8,
        title: 'Vishnu Temples',
        endUrl: 'vishnu-temples',
        image: 'Vishnu-Temples.png',
        paragraph:
          'Lord Vishnu is venerated as the "preserver of the Universe". According to Hinduism, Lord Vishnu is famous for.',
      },
      {
        id: 9,
        title: 'Sun God Temples',
        endUrl: 'sun-god-temples',
        image: 'Sun-God-Temples.png',
        paragraph:
          'A community called Gujjars in Gujarat and Rajasthan worships the Sun God. Sun God (Surya) is considered as.',
      },
    ];
  }

  getTempleDetails(index) {
    this.router.navigate(['/' + UrlContant.TEMPLE_PROFILE_URL, index]);
  }

  onTempleDetailsPage(obj) {
    const title = obj.name.replace(/\s/g , "-");
    const url = `${obj.id}\/${title}`;
    this.router.navigate(['/' + UrlContant.TEMPLE_DETAILS_URL, url]);
  }
}
