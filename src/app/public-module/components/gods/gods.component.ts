import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlContant } from 'src/app/constants/router.contant';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.scss'],
})

export class GodsComponent implements OnInit {
  godList: any[] = [];

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.godList = [
      {
        id: 1,
        title: 'Lord Shiva',
        endUrl: 'lord-shiva',
        image: 'shiva.png',
        paragraph: 'Lord Shiva holds a pivotal position in the Holy trinity. He is contemplated as the destroyer among the supreme triad...'
      },
      {
        id: 2,
        title: 'Lord Ram',
        endUrl: 'lord-ram',
        image: 'rama.png',
        paragraph: 'Lord Ram is worshipped as a prominent deity in Hinduism. Ram, born as the eldest son of Kaushalya and Dasharatha...'
      },
      {
        id: 3,
        title: 'Lord Ganesh',
        endUrl: 'lord-ganesh',
        image: 'ganesh.png',
        paragraph: 'Lord Ganesh is the primary god for any Hindu puja. He is the second son of Shiva and Parvati, and younger brother...'
      },
      {
        id: 4,
        title: 'Lord Vishnu',
        endUrl: 'lord-vishnu',
        image: 'krishna.png',
        paragraph: 'Lord Vishnu is venerated as the “preserver of the Universe. According to Hinduism, Lord Vishnu is famous for...'
      },
      {
        id: 5,
        title: 'Lord Murugan',
        endUrl: 'lord-murugan',
        image: 'murugan.png',
        paragraph: 'Murugan is a young and most idolized deity in Tamil Nadu. He is also familiar with names like Karthikeya, Shanmukha...'
      },
      {
        id: 6,
        title: 'Goddess Parvathi',
        endUrl: 'goddess-parvathi',
        image: 'parvati.png',
        paragraph: 'Goddess Parvathi is worshipped as a goddess in her own right. She is depicted as the wife of Lord Shiva as per Hindu...'
      },
      {
        id: 7,
        title: 'Goddess Durga',
        endUrl: 'goddess-durga',
        image: 'durga.png',
        paragraph: 'Goddess Durga is worshipped as the Goddess of strength. She is known as ‘Triyambake’ (three eyed goddess)...'
      },
      {
        id: 8,
        title: 'Sun Gods',
        endUrl: 'sun-gods',
        image: 'sunGod.jpg',
        paragraph: 'A community called Gujjars in Gujarat and Rajasthan worships the Sun God. Sun God (Surya) is considered as...'
      },
      {
        id: 9,
        title: 'Devi Saraswati',
        endUrl: 'devi-saraswati',
        image: 'goddess-saraswati.png',
        paragraph: 'Knowledge is true power. To be blessed with this power you should please Goddess Saraswati who is ...'
      },
      {
        id: 10,
        title: 'Lord Hanuman',
        endUrl: 'lord-hanuman',
        image: 'lord-hanuman.png',
        paragraph: "This is the meditation mantra of Lord Hanuman. If you chant this sloka with sincere devotion..."
      },
      {
        id: 11,
        title: 'Lord Krishna',
        endUrl: 'lord-krishna',
        image: 'lord-krishna.png',
        paragraph: "Lord Vishnu, the preserver of this universe, has incarnated as ten avatars (Dashaavatara) to implement dharma..."
      },
      {
        id: 12,
        title: 'Lord Lakshmi Narasimha',
        endUrl: 'lord-lakshmi-narasimha',
        image: 'lord-lakshmi-narasimha.png',
        paragraph: "Among the holy trinity, Lord Mahavishnu has an intense purpose of protecting the universe towards social..."
      },
      {
        id: 13,
        title: 'Lord Venkateswara',
        endUrl: 'lord-venkateswara',
        image: 'lord-venkateswara.png',
        paragraph: "Lord Venkateswara is the magnificent form of Lord Mahavishnu, the preserver of this universe..."
      },
      {
        id: 14,
        title: 'Ayyappa Swamy',
        endUrl: 'ayyappa-swamy',
        image: 'ayyappa-swamy.png',
        paragraph: "Among the Gods, are you aware of which God strictly follows Brahmacharya ? Are you curious to know about..."
      },
      {
        id: 15,
        title: 'Lord Shani',
        endUrl: 'lord-shani',
        image: 'lord-shani.png',
        paragraph: "This is the powerful Shanidev Maha-mantra, which glorifies the majestic form of Lord Shani..."
      },
      {
        id: 16,
        title: 'Sai Baba',
        endUrl: 'sai-baba',
        image: 'sai-baba.png',
        paragraph: "Sri Sai Baba is contemplated as one of the pronounced saints in India. He is also referred to as..."
      },
      {
        id: 17,
        title: 'Sri Satyanarayana Swamy',
        endUrl: 'sri-satyanarayan-swamy',
        image: 'sri-satyanarayana-swamy.png',
        paragraph: "The Supreme Almighty incarnates in various forms to save the righteousness in this universe..."
      },
      {
        id: 18,
        title: 'Sri Lakshmana',
        endUrl: 'sri-lakshmana',
        image: 'god-lakshman.png',
        paragraph: "Have you read Ramayana? You should know about the priceless epic of India. The great..."
      },
      {
        id: 19,
        title: 'Lord Brahma',
        endUrl: 'lord-brahma',
        image: 'lord-brahma.png',
        paragraph: "n Hinduism, people firmly believe in the prominence of the Holy Trinity. Among the sacred..."
      },
      {
        id: 20,
        title: 'Goddess Padmavathi',
        endUrl: 'goddess-padmavathi',
        image: 'Goddess-Padmavathi.png',
        paragraph: "Goddess Padmavati is the magnificent form of Goddess Mahalakshmi, the Goddess of wealth..."
      },
      {
        id: 21,
        title: 'Goddess Lakshmi Devi',
        endUrl: 'goddess-lakshmi-devi',
        image: 'goddess-lakshmi-devi.png',
        paragraph: "hant this propitious mantra with great obeisance. Goddess Lakshmi Devi will bless us with prosperity..."
      },
      {
        id: 22,
        title: 'Annamma aka kali mata',
        endUrl: 'annamma-aka-kali-mata',
        image: 'annamma-devi.png',
        paragraph: "Mother nature manifested in diverse forms to rescue humankind from sinfulness. Goddess Kali..."
      },
      {
        id: 23,
        title: "Goddess Sita",
        endUrl: 'goddess-sita',
        image: "goddess-sita.png",
        paragraph: "India’s priceless Epic Ramayana is one of the sacred texts in Hinduism. It is an everlasting source..."
      },
      {
        id: 24,
        title: "Goddess Meenakshi",
        endUrl: 'goddess-meenakshi',
        image: "goddess-meenakshi.png",
        paragraph: "Goddess Parvati manifests in different forms in this Universe. Goddess Meenakshi is a deity..."
      },
      {
        id: 25,
        title: "Goddess Gayatri Devi",
        endUrl: 'goddess-gayatri-devi',
        image: "goddess-gayatri-devi.png",
        paragraph: "Do you know the importance of this mantra? Let’s chant this precious mantra called. the Gayatri mantra..."
      },
      {
        id: 26,
        title: "Goddess Bhudevi",
        endUrl: 'goddess-bhudevi',
        image: "goddess-bhudevi.png",
        paragraph: "As you all know, our home planet is the Earth. Earth provides a secure environment from which all life..."
      },
      {
        id: 27,
        title: "Goddess Annapoorneshwari",
        endUrl: 'goddess-annapoorneshwari',
        image: "goddess-annapoorneshwari-devi.png",
        paragraph: "Do you respect food? Respect the food we eat because it is equivalent to God. Avoid squandering food..."
      },
      {
        id: 28,
        title: "Lord Matsya",
        endUrl: 'lord-matsya',
        image: "lord-matsya.png",
        paragraph: "Matsya (Sanskrit: 'Fish') is one of the ten avatars (incarnations of the Hindu god Vishnu). Vishnu appeared..."
      },
      {
        id: 29,
        title: "Lord Chandra",
        endUrl: 'lord-chandra',
        image: "lord-chandra.png",
        paragraph: "Hinduism has many gods and goddesses associated with natural elements. Lord Chandra, one of these..."
      }
    ];

    this.godList.sort((a, b) => a.title.localeCompare(b.title));
  }

  onOpenGodDetails(index) {
    this.router.navigate(['/' + UrlContant.GODS_DETAILS_URL, index]);
  }
}
