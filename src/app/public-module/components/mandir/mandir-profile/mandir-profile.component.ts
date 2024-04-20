import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-temple-profile',
  templateUrl: './mandir-profile.component.html',
  styleUrls: ['./mandir-profile.component.scss'],
})
export class TempleProfileComponent implements OnInit {
  data;
  godId;
  templeList: any[] = [];

  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.templeList = [
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
        title: 'Parvathi  Temples',
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

    this.activedRouter.params.subscribe((param) => {
      this.godId = param.id;
      this.templeList.forEach((item) => {
        if (item.endUrl === this.godId) {
          this.data = item;
        }
      });
    });
  }

  backToList() {
    this.location.back();
  }
}
