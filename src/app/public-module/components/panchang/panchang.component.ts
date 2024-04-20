import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panchang',
  templateUrl: './panchang.component.html',
  styleUrls: ['./panchang.component.scss'],
})
export class PanchangComponent implements OnInit {
  panchangData = [
    {
      label: 'January 2022',
      content: [
        {
          img: 'assets/img/panchang/PapmochaniEkadashi.png',
          title: 'Pausha Putrada Ekadashi',
          subTitle: 'January 13, 2022, Thursday',
          description: 'Pausha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/MakaraSankranti.png',
          title: 'Makara Sankranti',
          subTitle: 'January 14, 2022, Friday',
          description: 'Dhanu to Makara transit of Sun',
        },
        {
          img: 'assets/img/panchang/Pongal.png',
          title: 'Pongal',
          subTitle: 'January 14, 2022, Friday',
          description: 'on Makara Sankranti day',
        },
        {
          img: 'assets/img/panchang/Pausha.png',
          title: 'Pausha Purnima',
          subTitle: 'January 17, 2022, Monday',
          description: 'Pausha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/SakatChauth.png',
          title: 'Sakat Chauth',
          subTitle: 'January 21, 2022, Friday',
          description: 'Magha, Krishna Chaturthi',
        },
        {
          img: 'assets/img/panchang/ShattilaEkadashi.png',
          title: 'Shattila Ekadashi',
          subTitle: 'January 28, 2022, Friday',
          description: 'Magha, Krishna Ekadashi',
        },
      ],
    },

    {
      label: 'February 2022',
      content: [
        {
          img: 'assets/img/panchang/MauniAmavas.png',
          title: 'Mauni Amavas',
          subTitle: 'February 1, 2022, Tuesday',
          description: 'Magha, Krishna Amavasya',
        },
        {
          img: 'assets/img/panchang/VasantPanchami.png',
          title:
            'Vasant Panchami',
          subTitle: 'February 5, 2022, Saturday',
          description: 'Magha, Shukla Panchami',
        },
        {
          img: 'assets/img/panchang/RathaSaptami.png',
          title: 'Ratha Saptami',
          subTitle: 'February 7, 2022, Monday',
          description: 'Magha, Shukla Saptami',
        },
        {
          img: 'assets/img/panchang/BhishmaAshtami.png',
          title:
            'Bhishma Ashtami',
          subTitle: 'February 8, 2022, Tuesday',
          description: 'Magha, Shukla Ashtami',
        },
        {
          img: 'assets/img/panchang/JayaEkadashi.png',
          title:
            'Jaya Ekadashi',
          subTitle: 'February 12, 2022, Saturday',
          description: 'Magha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/KumbhaSankranti.png',
          title:
            'Kumbha Sankranti',
          subTitle: 'February 13, 2022, Sunday',
          description: 'Makara to Kumbha transit of Sun',
        },
        {
          img: 'assets/img/panchang/MaghaPurnima.png',
          title:
            'Magha Purnima',
          subTitle: 'February 16, 2022, Wednesday',
          description: 'Magha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/VijayaEkadashi.png',
          title:
            'Vijaya Ekadashi',
          subTitle: 'February 26, 2022, Saturday',
          description: 'Phalguna, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/GaunaVijayaEkadashi.png',
          title:
            'Gauna Vijaya Ekadashi',
          subTitle: 'February 27, 2022, Sunday',
          description: 'Phalguna, Krishna Ekadashi',
        },
      ],
    },

    {
      label: 'March 2022',
      content: [
        {
          img: 'assets/img/panchang/MahaShivaratri.png',
          title:
            'Maha Shivaratri',
          subTitle: 'March 1, 2022, Tuesday',
          description: 'Phalguna, Krishna Chaturdashi',
        },
        {
          img: 'assets/img/panchang/MeenaSankranti.png',
          title:
            'Meena Sankranti',
          subTitle: 'March 14, 2022, Monday',
          description: 'Kumbha to Meena transit of Sun',
        },
        {
          img: 'assets/img/panchang/AmalakiEkadashi.png',
          title:
            'Amalaki Ekadashi',
          subTitle: 'March 14, 2022, Monday',
          description: 'Phalguna, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/ChhotiHoli.png',
          title:
            'Chhoti Holi',
          subTitle: 'March 17, 2022, Thursday',
          description: 'Phalguna, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/HolikaDahan.png',
          title:
            'Holika Dahan',
          subTitle: 'March 17, 2022, Thursday',
          description: 'Phalguna, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/Holi.png',
          title: 'Holi',
          subTitle: 'March 18, 2022, Friday',
          description: 'Chaitra, Krishna Pratipada',
        },
        {
          img: 'assets/img/panchang/PhalgunaPurnima.png',
          title:
            'Phalguna Purnima',
          subTitle: 'March 18, 2022, Friday',
          description: 'Phalguna, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/SheetalaAshtami.png',
          title:
            'Sheetala Ashtami',
          subTitle: 'March 25, 2022, Friday',
          description: 'Chaitra, Krishna Ashtami',
        },
        {
          img: 'assets/img/panchang/Basoda.png',
          title: 'Basoda',
          subTitle: 'March 25, 2022, Friday',
          description: 'Chaitra, Krishna Ashtami',
        },
        {
          img: 'assets/img/panchang/PapmochaniEkadashi.png',
          title:
            'Papmochani Ekadashi',
          subTitle: 'March 28, 2022, Monday',
          description: 'Chaitra, Krishna Ekadashi',
        },
      ],
    },

    {
      label: 'April 2022',
      content: [
        {
          img: 'assets/img/panchang/Ugadi.png',
          title: 'Ugadi',
          subTitle: 'April 2, 2022, Saturday',
          description: 'Chaitra, Shukla Pratipada',
        },
        {
          img: 'assets/img/panchang/GudiPadwa.png',
          title: 'Gudi Padwa',
          subTitle: 'April 2, 2022, Saturday',
          description: 'Chaitra, Shukla Pratipada',
        },
        {
          img: 'assets/img/panchang/ChaitraNavratri.png',
          title:
            'Chaitra Navratri',
          subTitle: 'April 2, 2022, Saturday',
          description: 'Chaitra, Shukla Pratipada',
        },
        {
          img: 'assets/img/panchang/GauriPuja.png',
          title: 'Gauri Puja',
          subTitle: 'April 4, 2022, Monday',
          description: 'Chaitra, Shukla Tritiya',
        },
        {
          img: 'assets/img/panchang/Gangaur.png',
          title: 'Gangaur',
          subTitle: 'April 4, 2022, Monday',
          description: 'Chaitra, Shukla Tritiya',
        },
        {
          img: 'assets/img/panchang/YamunaChhath.png',
          title:
            'Yamuna Chhath',
          subTitle: 'April 7, 2022, Thursday',
          description: 'Chaitra, Shukla Shashthi',
        },
        {
          img: 'assets/img/panchang/RamaNavami.png',
          title: 'Rama Navami',
          subTitle: 'April 10, 2022, Sunday',
          description: 'Chaitra, Shukla Navami',
        },
        {
          img: 'assets/img/panchang/SwaminarayanJayanti.png',
          title:
            'Swaminarayan Jayanti',
          subTitle: 'April 10, 2022, Sunday',
          description: 'Chaitra, Shukla Navami',
        },
        {
          img: 'assets/img/panchang/KamadaEkadashi.png',
          title:
            'Kamada Ekadashi',
          subTitle: 'April 12, 2022, Tuesday',
          description: 'Chaitra, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/MeshaSankranti.png',
          title:
            'Mesha Sankranti',
          subTitle: 'April 14, 2022, Thursday',
          description: 'Meena to Mesha transit of Sun',
        },
        {
          img: 'assets/img/panchang/SolarNewYear.png',
          title:
            'Solar New Year',
          subTitle: 'April 14, 2022, Thursday',
          description: 'first day of Hindu Solar calendar',
        },
        {
          img: 'assets/img/panchang/HanumanJayanti.png',
          title:
            'Hanuman Jayanti',
          subTitle: 'April 16, 2022, Saturday',
          description: 'Chaitra, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/ChaitraPurnima.png',
          title:
            'Chaitra Purnima',
          subTitle: 'April 16, 2022, Saturday',
          description: 'Chaitra, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/VaruthiniEkadashi.png',
          title:
            'Varuthini Ekadashi',
          subTitle: 'April 26, 2022, Tuesday',
          description: 'Vaishakha, Krishna Ekadashi',
        },
      ],
    },

    {
      label: 'May 2022',
      content: [
        {
          img: 'assets/img/panchang/SuryaGrahanAnshika.png',
          title:
            'Surya Grahan *Anshika',
          subTitle: 'May 1, 2022, Sunday',
          description: 'occurs during Amavasya',
        },
        {
          img: 'assets/img/panchang/ParashuramaJayanti.png',
          title:
            'Parashurama Jayanti',
          subTitle: 'May 3, 2022, Tuesday',
          description: 'Vaishakha, Shukla Tritiya',
        },
        {
          img: 'assets/img/panchang/AkshayaTritiya.png',
          title:
            'Akshaya Tritiya',
          subTitle: 'May 3, 2022, Tuesday',
          description: 'Vaishakha, Shukla Tritiya',
        },
        {
          img: 'assets/img/panchang/GangaSaptami.png',
          title: 'Ganga Saptami',
          subTitle: 'May 8, 2022, Sunday',
          description: 'Vaishakha, Shukla Saptami',
        },
        {
          img: 'assets/img/panchang/SitaNavami.png',
          title: 'Sita Navami',
          subTitle: 'May 10, 2022, Tuesday',
          description: 'Vaishakha, Shukla Navami',
        },
        {
          img: 'assets/img/panchang/MohiniEkadashi.png',
          title:
            'Mohini Ekadashi',
          subTitle: 'May 12, 2022, Thursday',
          description: 'Vaishakha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/NarasimhaJayanti.png',
          title:
            'Narasimha Jayanti',
          subTitle: 'May 14, 2022, Saturday',
          description: 'Vaishakha, Shukla Chaturdashi',
        },
        {
          img: 'assets/img/panchang/VrishabhaSankranti.png',
          title:
            'Vrishabha Sankranti',
          subTitle: 'May 15, 2022, Sunday',
          description: 'Mesha to Vrishabha transit of Sun',
        },
        {
          img: 'assets/img/panchang/BuddhaPurnima.png',
          title:
            'Buddha Purnima',
          subTitle: 'May 16, 2022, Monday',
          description: 'Vaishakha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/ChandraGrahanPurna.png',
          title:
            'Chandra Grahan *Purna',
          subTitle: 'May 16, 2022, Monday',
          description: 'occurs during Purnima',
        },
        {
          img: 'assets/img/panchang/VaishakhaPurnima.png',
          title:
            'Vaishakha Purnima',
          subTitle: 'May 16, 2022, Monday',
          description: 'Vaishakha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/NaradaJayanti.png',
          title:
            'Narada Jayanti',
          subTitle: 'May 17, 2022, Tuesday',
          description: 'Jyeshtha, Krishna Pratipada',
        },
        {
          img: 'assets/img/panchang/AparaEkadashi.png',
          title:
            'Apara Ekadashi',
          subTitle: 'May 26, 2022, Thursday',
          description: 'Jyeshtha, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/VatSavitriVrat.png',
          title:
            'Vat Savitri Vrat',
          subTitle: 'May 30, 2022, Monday',
          description: 'Jyeshtha, Krishna Amavasya',
        },
        {
          img: 'assets/img/panchang/ShaniJayanti.png',
          title:
            'Shani Jayanti',
          subTitle: 'May 30, 2022, Monday',
          description: 'Jyeshtha, Krishna Amavasya',
        },
      ],
    },

    {
      label: 'June 2022',
      content: [
        {
          img: 'assets/img/panchang/GangaDussehra.png',
          title:
            'Ganga Dussehra',
          subTitle: 'June 9, 2022, Thursday',
          description: 'Jyeshtha, Shukla Dashami',
        },
        {
          img: 'assets/img/panchang/NirjalaEkadashi.png',
          title:
            'Nirjala Ekadashi',
          subTitle: 'June 10, 2022, Friday',
          description: 'Jyeshtha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/GaunaNirjalaEkadashi.png',
          title:
            'Gauna Nirjala Ekadashi',
          subTitle: 'June 11, 2022, Saturday',
          description: 'Jyeshtha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/VatPurnimaVrat.png',
          title:
            'Vat Purnima Vrat',
          subTitle: 'June 14, 2022, Tuesday',
          description: 'Jyeshtha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/JyeshthaPurnima.png',
          title:
            'Jyeshtha Purnima',
          subTitle: 'June 14, 2022, Tuesday',
          description: 'Jyeshtha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/MithunaSankranti.png',
          title:
            'Mithuna Sankranti',
          subTitle: 'June 15, 2022, Wednesday',
          description: 'Vrishabha to Mithuna transit of Sun',
        },
        {
          img: 'assets/img/panchang/YoginiEkadashi.png',
          title:
            'Yogini Ekadashi',
          subTitle: 'June 24, 2022, Friday',
          description: 'Ashadha, Krishna Ekadashi',
        },
      ],
    },

    {
      label: 'July 2022',
      content: [
        {
          img: 'assets/img/panchang/JagannathRathyatra.png',
          title:
            'Jagannath Rathyatra',
          subTitle: 'July 1, 2022, Friday',
          description: 'Ashadha, Shukla Dwitiya',
        },
        {
          img: 'assets/img/panchang/DevshayaniEkadashi.png',
          title:
            'Devshayani Ekadashi',
          subTitle: 'July 10, 2022, Sunday',
          description: 'Ashadha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/GuruPurnima.png',
          title:
            'Guru Purnima',
          subTitle: 'July 13, 2022, Wednesday',
          description: 'Ashadha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/AshadhaPurnima.png',
          title:
            'Ashadha Purnima',
          subTitle: 'July 13, 2022, Wednesday',
          description: 'Ashadha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/KarkaSankranti.png',
          title:
            'Karka Sankranti',
          subTitle: 'July 16, 2022, Saturday',
          description: 'Mithuna to Karka transit of Sun',
        },
        {
          img: 'assets/img/panchang/KamikaEkadashi.png',
          title:
            'Kamika Ekadashi',
          subTitle: 'July 24, 2022, Sunday',
          description: 'Shravana, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/HariyaliTeej.png',
          title: 'Hariyali Teej',
          subTitle: 'July 31, 2022, Sunday',
          description: 'Shravana, Shukla Tritiya',
        },
      ],
    },

    {
      label: 'August 2022',
      content: [
        {
          img: 'assets/img/panchang/NagPanchami.png',
          title:
            'Nag Panchami',
          subTitle: 'August 2, 2022, Tuesday',
          description: 'Shravana, Shukla Panchami',
        },
        {
          img: 'assets/img/panchang/ShravanaPutradaEkadashi.png',
          title:
            'Shravana Putrada Ekadashi',
          subTitle: 'August 8, 2022, Monday',
          description: 'Shravana, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/RakshaBandhan.png',
          title:
            'Raksha Bandhan',
          subTitle: 'August 11, 2022, Thursday',
          description: 'Shravana, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/Rakhi.png',
          title: 'Rakhi',
          subTitle: 'August 11, 2022, Thursday',
          description: 'Shravana, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/Varalakshmi Vrat.png',
          title:
            'Varalakshmi Vrat',
          subTitle: 'August 12, 2022, Friday',
          description: 'before Shravana Purnima',
        },
        {
          img: 'assets/img/panchang/GayatriJayanti.png',
          title:
            'Gayatri Jayanti',
          subTitle: 'August 12, 2022, Friday',
          description: 'Shravana, Shukla Purnima',
        },

        {
          img: 'assets/img/panchang/ShravanaPurnima.png',
          title:
            'Shravana Purnima',
          subTitle: 'August 12, 2022, Friday',
          description: 'Shravana, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/KajariTeej.png',
          title:
            'Kajari Teej',
          subTitle: 'August 14, 2022, Sunday',
          description: 'Bhadrapada, Krishna Tritiya',
        },
        {
          img: 'assets/img/panchang/SimhaSankranti.png',
          title:
            'Simha Sankranti',
          subTitle: 'August 17, 2022, Wednesday',
          description: 'Karka to Simha transit of Sun',
        },
        {
          img: 'assets/img/panchang/JanmashtamiSmarta.png',
          title:
            'Janmashtami *Smarta',
          subTitle: 'August 18, 2022, Thursday',
          description: 'Bhadrapada, Krishna Ashtami',
        },
        {
          img: 'assets/img/panchang/JanmashtamiISKCON.png',
          title:
            'Janmashtami *ISKCON',
          subTitle: 'August 19, 2022, Friday',
          description: 'Bhadrapada, Krishna Ashtami',
        },
        {
          img: 'assets/img/panchang/AjaEkadashi.png',
          title:
            'Aja Ekadashi',
          subTitle: 'August 23, 2022, Tuesday',
          description: 'Bhadrapada, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/HartalikaTeej.png',
          title:
            'Hartalika Teej',
          subTitle: 'August 30, 2022, Tuesday',
          description: 'Bhadrapada, Shukla Tritiya',
        },
        {
          img: 'assets/img/panchang/GaneshChaturthi.png',
          title:
            'Ganesh Chaturthi',
          subTitle: 'August 31, 2022, Wednesday',
          description: 'Bhadrapada, Shukla Chaturthi',
        },
      ],
    },

    {
      label: 'September 2022',
      content: [
        {
          img: 'assets/img/panchang/RishiPanchami.png',
          title:
            'Rishi Panchami',
          subTitle: 'September 1, 2022, Thursday',
          description: 'Bhadrapada, Shukla Panchami',
        },
        {
          img: 'assets/img/panchang/RadhaAshtami.png',
          title:
            'Radha Ashtami',
          subTitle: 'September 4, 2022, Sunday',
          description: 'Bhadrapada, Shukla Ashtami',
        },
        {
          img: 'assets/img/panchang/ParsvaEkadashi.png',
          title:
            'Parsva Ekadashi',
          subTitle: 'September 6, 2022, Tuesday',
          description: 'Bhadrapada, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/Onam.png',
          title:
            'Onam',
          subTitle: 'September 8, 2022, Thursday',
          description: 'Sun in Simha & Shravana Nakshatra',
        },
        {
          img: 'assets/img/panchang/GaneshVisarjan.png',
          title:
            'Ganesh Visarjan',
          subTitle: 'September 9, 2022, Friday',
          description: 'Bhadrapada, Shukla Chaturdashi',
        },
        {
          img: 'assets/img/panchang/AnantChaturdashi.png',
          title:
            'Anant Chaturdashi',
          subTitle: 'September 9, 2022, Friday',
          description: 'Bhadrapada, Shukla Chaturdashi',
        },
        {
          img: 'assets/img/panchang/PitrupakshaBegins.png',
          title:
            'Pitrupaksha Begins',
          subTitle: 'September 10, 2022, Saturday',
          description: 'Ashwina, Krishna Pratipada',
        },
        {
          img: 'assets/img/panchang/BhadrapadaPurnima.png',
          title:
            'Bhadrapada Purnima',
          subTitle: 'September 10, 2022, Saturday',
          description: 'Bhadrapada, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/VishwakarmaPuja.png',
          title:
            'Vishwakarma Puja',
          subTitle: 'September 17, 2022, Saturday',
          description: 'on Kanya Sankranti day',
        },
        {
          img: 'assets/img/panchang/KanyaSankranti.png',
          title:
            'Kanya Sankranti',
          subTitle: 'September 17, 2022, Saturday',
          description: 'Simha to Kanya transit of Sun',
        },
        {
          img: 'assets/img/panchang/IndiraEkadashi.png',
          title:
            'Indira Ekadashi',
          subTitle: 'September 21, 2022, Wednesday',
          description: 'Ashwina, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/SarvaPitruAmavasya.png',
          title:
            'Sarva Pitru Amavasya',
          subTitle: 'September 25, 2022, Sunday',
          description: 'Ashwina, Krishna Amavasya',
        },
        {
          img: 'assets/img/panchang/NavratriBegins.png',
          title:
            'Navratri Begins',
          subTitle: 'September 26, 2022, Monday',
          description: 'Ashwina, Shukla Pratipada',
        },
      ],
    },

    {
      label: 'October 2022',
      content: [
        {
          img: 'assets/img/panchang/SaraswatiAvahan.png',
          title:
            'Saraswati Avahan',
          subTitle: 'October 2, 2022, Sunday',
          description: 'Ashwina, Mula Nakshatra',
        },
        {
          img: 'assets/img/panchang/SaraswatiPuja.png',
          title:
            'Saraswati Puja',
          subTitle: 'October 3, 2022, Monday',
          description: 'Ashwina, Purva Ashadha Nakshatra',
        },
        {
          img: 'assets/img/panchang/DurgaAshtami.png',
          title:
            'Durga Ashtami',
          subTitle: 'October 3, 2022, Monday',
          description: 'Ashwina, Shukla Ashtami',
        },
        {
          img: 'assets/img/panchang/MahaNavami.png',
          title: 'Maha Navami',
          subTitle: 'October 4, 2022, Tuesday',
          description: 'Ashwina, Shukla Navami',
        },
        {
          img: 'assets/img/panchang/Vijayadashami.png',
          title:
            'Vijayadashami',
          subTitle: 'October 5, 2022, Wednesday',
          description: 'Ashwina, Shukla Dashami',
        },
        {
          img: 'assets/img/panchang/Dussehra.png',
          title: 'Dussehra',
          subTitle: 'October 5, 2022, Wednesday',
          description: 'Ashwina, Shukla Dashami',
        },
        {
          img: 'assets/img/panchang/PapankushaEkadashi.png',
          title:
            'Papankusha Ekadashi',
          subTitle: 'October 6, 2022, Thursday',
          description: 'Ashwina, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/KojagaraPuja.png',
          title:
            'Kojagara Puja',
          subTitle: 'October 9, 2022, Sunday',
          description: 'Ashwina, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/SharadPurnima.png',
          title:
            'Sharad Purnima',
          subTitle: 'October 9, 2022, Sunday',
          description: 'Ashwina, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/AshwinaPurnima.png',
          title:
            'Ashwina Purnima',
          subTitle: 'October 9, 2022, Sunday',
          description: 'Ashwina, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/KarwaChauth.png',
          title:
            'Karwa Chauth',
          subTitle: 'October 13, 2022, Thursday',
          description: 'Kartika, Krishna Chaturthi',
        },
        {
          img: 'assets/img/panchang/AhoiAshtami.png',
          title:
            'Ahoi Ashtami',
          subTitle: 'October 17, 2022, Monday',
          description: 'Kartika, Krishna Ashtami',
        },
        {
          img: 'assets/img/panchang/TulaSankranti.png',
          title:
            'Tula Sankranti',
          subTitle: 'October 17, 2022, Monday',
          description: 'Kanya to Tula transit of Sun',
        },
        {
          img: 'assets/img/panchang/GovatsaDwadashi.png',
          title:
            'Govatsa Dwadashi',
          subTitle: 'October 21, 2022, Friday',
          description: 'Kartika, Krishna Dwadashi',
        },
        {
          img: 'assets/img/panchang/RamaEkadashi.png',
          title:
            'Rama Ekadashi',
          subTitle: 'October 21, 2022, Friday',
          description: 'Kartika, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/Dhanteras.png',
          title:
            'Dhanteras',
          subTitle: 'October 22, 2022, Saturday',
          description: 'Kartika, Krishna Trayodashi',
        },
        {
          img: 'assets/img/panchang/KaliChaudas.png',
          title:
            'Kali Chaudas',
          subTitle: 'October 23, 2022, Sunday',
          description: 'Kartika, Krishna Chaturdashi',
        },
        {
          img: 'assets/img/panchang/LakshmiPuja.png',
          title:
            'Lakshmi Puja',
          subTitle: 'October 24, 2022, Monday',
          description: 'Kartika, Krishna Amavasya',
        },
        {
          img: 'assets/img/panchang/NarakChaturdashi.png',
          title:
            'Narak Chaturdashi',
          subTitle: 'October 24, 2022, Monday',
          description: 'Kartika, Krishna Chaturdashi',
        },
        {
          img: 'assets/img/panchang/Diwali.png',
          title: 'Diwali',
          subTitle: 'October 24, 2022, Monday',
          description: 'Kartika, Krishna Amavasya',
        },
        {
          img: 'assets/img/panchang/SuryaGrahanAnshika.png',
          title:
            'Surya Grahan *Anshika',
          subTitle: 'October 25, 2022, Tuesday',
          description: 'occurs during Amavasya',
        },
        {
          img: 'assets/img/panchang/GovardhanPuja.png',
          title:
            'Govardhan Puja',
          subTitle: 'October 26, 2022, Wednesday',
          description: 'Kartika, Shukla Pratipada',
        },
        {
          img: 'assets/img/panchang/BhaiyaDooj.png',
          title:
            'Bhaiya Dooj',
          subTitle: 'October 26, 2022, Wednesday',
          description: 'Kartika, Shukla Dwitiya',
        },
        {
          img: 'assets/img/panchang/ChhathPuja.png',
          title:
            'Chhath Puja',
          subTitle: 'October 30, 2022, Sunday',
          description: 'Kartika, Shukla Shashthi',
        },
      ],
    },

    {
      label: 'November 2022',
      content: [
        {
          img: 'assets/img/panchang/KansaVadh.png',
          title:
            'Kansa Vadh',
          subTitle: 'November 3, 2022, Thursday',
          description: 'Kartika, Shukla Dashami',
        },
        {
          img: 'assets/img/panchang/DevutthanaEkadashi.png',
          title:
            'Devutthana Ekadashi',
          subTitle: 'November 4, 2022, Friday',
          description: 'Kartika, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/TulasiVivah.png',
          title:
            'Tulasi Vivah',
          subTitle: 'November 5, 2022, Saturday',
          description: 'Kartika, Shukla Dwadashi',
        },
        {
          img: 'assets/img/panchang/ChandraGrahanPurna.png',
          title:
            'Chandra Grahan *Purna',
          subTitle: 'November 8, 2022, Tuesday',
          description: 'occurs during Purnima',
        },
        {
          img: 'assets/img/panchang/KartikaPurnima.png',
          title:
            'Kartika Purnima',
          subTitle: 'November 8, 2022, Tuesday',
          description: 'Kartika, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/KalabhairavJayanti.png',
          title:
            'Kalabhairav Jayanti',
          subTitle: 'November 16, 2022, Wednesday',
          description: 'Margashirsha, Krishna Ashtami',
        },
        {
          img: 'assets/img/panchang/VrishchikaSankranti.png',
          title:
            'Vrishchika Sankranti',
          subTitle: 'November 16, 2022, Wednesday',
          description: 'Tula to Vrishchika transit of Sun',
        },
        {
          img: 'assets/img/panchang/UtpannaEkadashi.png',
          title:
            'Utpanna Ekadashi',
          subTitle: 'November 20, 2022, Sunday',
          description: 'Margashirsha, Krishna Ekadashi',
        },
        {
          img: 'assets/img/panchang/VivahPanchami.png',
          title:
            'Vivah Panchami',
          subTitle: 'November 28, 2022, Monday',
          description: 'Margashirsha, Shukla Panchami',
        },
      ],
    },

    {
      label: 'December 2022',
      content: [
        {
          img: 'assets/img/panchang/GitaJayanti.png',
          title:
            'Gita Jayanti',
          subTitle: 'December 3, 2022, Saturday',
          description: 'Margashirsha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/MokshadaEkadashi.png',
          title:
            'Mokshada Ekadashi',
          subTitle: 'December 3, 2022, Saturday',
          description: 'Margashirsha, Shukla Ekadashi',
        },
        {
          img: 'assets/img/panchang/DattatreyaJayanti.png',
          title:
            'Dattatreya Jayanti',
          subTitle: 'December 7, 2022, Wednesday',
          description: 'Margashirsha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/MargashirshaPurnima.png',
          title:
            'Margashirsha Purnima',
          subTitle: 'December 8, 2022, Thursday',
          description: 'Margashirsha, Shukla Purnima',
        },
        {
          img: 'assets/img/panchang/DhanuSankranti.png',
          title:
            'Dhanu Sankranti',
          subTitle: 'December 16, 2022, Friday',
          description: 'Vrishchika to Dhanu transit of Sun',
        },
        {
          img: 'assets/img/panchang/SaphalaEkadashi.png',
          title:
            'Saphala Ekadashi',
          subTitle: 'December 19, 2022, Monday',
          description: 'Pausha, Krishna Ekadashi',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
