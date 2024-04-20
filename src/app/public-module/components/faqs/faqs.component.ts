import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})

export class FAQsComponent implements OnInit {

  faqList = [];

  constructor() {}

  ngOnInit(): void {

    this.faqList = [
      {
        isExpand: true,
        que: '1. Does Hinduism have only one God (Monotheistic)?',
        ans:
          'Well if you ask Google it will reply “Hinduism has only one god”. Some records specify that there are 33 million gods in Hindu tradition. But to the belief, apart from Brahma, Vishnu and Shiva there are infinite number of gods worshipped by Indians.',
      },
      {
        isExpand: false,
        que: '2. What are the Holy books of Hinduism?',
        ans:
          'Mahabharata, Bhagavad Gita, Ramayana, Vedas and Upanishads are considered to be the Holy books of Hinduism.',
      },
      {
        isExpand: false,
        que: '3. Who is a Pandit?',
        ans:
          'Pandit is the person performing rituals for the pujas. He is trained with the mantras to be chanted for the puja. He knows the custom of the puja and the purpose.',
      },
      {
        isExpand: false,
        que: '4. What is puja?',
        ans:
          'In Hinduism, puja (pooja, poojah etc) are ceremonial for worship. This could range from daily rites in the home to elaborate temple rituals.',
      },
      {
        isExpand: false,
        que: '5. Do all Hindus do puja?',
        ans:
          'Yes, most true devotees of the Hindu religion do puja for the well being of their family.',
      },
      {
        isExpand: false,
        que: '6. Can I do the puja by myself?',
        ans:
          'Yes the puja can be performed individually. However, traditionally it is recommended to perform a puja with a pandit to follow vedic traditions.',
      },
      {
        isExpand: false,
        que: '7. How many types of puja should I perform?',
        ans:
          'There are a plethora of puja(s) one can perform. Usually, a relevant puja is recommended by a pandit.',
      },
      {
        isExpand: false,
        que: '8. Should I be present during the puja?',
        ans:
          'As mentioned earlier, it is highly recommended to attend the puja in person. However, given the circumstances, one may attend the puja virtually.',
      },
      {
        isExpand: false,
        que: '9. Can I do outdoor pujas?',
        ans: 'Yes - one may perform pujas outdoors.',
      },
      {
        isExpand: false,
        que: '10. How to book a pandit through FP?',
        ans:
          'You can search for pandits/temples by entering your Zip code. Further, you can apply the distance filter to further narrow down your search. For more details read <a>how it works',
      },
      {
        isExpand: false,
        que: '11. Does FP charge any fees for booking pandits?',
        ans:
          'No, FP doesn’t charge any fees for booking pandits. The website is completely free for all users.',
      },
      {
        isExpand: false,
        que: '12. How many days in advance do I need to book a pandit?',
        ans:
          'There is no standard time period for booking a pandit. However, we suggest you book a pandit minimum 48 hours in advance to ensure the availability of nearby pandit.',
      },
      {
        isExpand: false,
        que: '13. Is there a booking advance to be paid to the pandit?',
        ans:
          'Yes, 50% of the pandit fees needs to be paid to confirm the booking. The balance payment can be done on the day of the puja to the pandit.',
      },
      {
        isExpand: false,
        que: '14. Will I get a refund if I cancel the booking?',
        ans: 'The terms of the refund will be provided by the pandit.',
      },
      {
        isExpand: false,
        que: '15. Will I get a refund if I’m not satisfied with the Pandit?',
        ans:
          'The terms of the refund will be provided by the pandit. We do recommend you share your experience with the pandit/temple by providing constructive feedback on our review page here.',
      },
      {
        isExpand: false,
        que:
          '16. Can I change the date of the puja after I have booked a pandit on FP?',
        ans:
          'Yes, you can change the date of the puja by working with the Pandit/Temples schedule, in most cases an additional amount of $50-$100 is usually charged. Additionally we cannot guarantee the availability of the same pandit for the changed date.',
      },
      {
        isExpand: false,
        que: '17. How much time does a Puja/ Havan takes to complete?',
        ans:
          'Pujas usually are 30 to 90 minutese and depends on the puja being performed.',
      },
      {
        isExpand: false,
        que: '18. List of Items needed for a puja?',
        ans: '',
      },
      {
        isExpand: false,
        que: '19. What All Materials Will Pandit ji Bring Along with Him?',
        ans:
          'The pandit will bring Puja Samagri items unless the family hosting the puja has made arrangements for the Samagri.',
      },
      {
        isExpand: false,
        que: '20. Do I Need to Pay Any Extra Dakshina To Pandit ji?',
        ans: 'No, the Dakshana includes all fees for the puja.',
      },
      {
        isExpand: false,
        que: '21. Do I Need to Pay Extra for The Travel Charge?',
        ans:
          'Travel charges may apply if the pandit is performing a puja that is out of the coverage area or an international destination.',
      },
      {
        isExpand: false,
        que: '22. What Will I Do If the Pandit Is Not Coming on Time?',
        ans:
          'Pandits will usually arrive before the designated time. In the event of weather, or unforeseen circumstances the pandit may arrive late.',
      },
    ];
  }

  onToggleQuestions(index) {
    this.faqList[index].isExpand = !(this.faqList[index].isExpand);
  }
}
