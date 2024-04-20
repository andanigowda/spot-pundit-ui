import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hindu-glossary',
  templateUrl: './hindu-glossary.component.html',
  styleUrls: ['./hindu-glossary.component.scss'],
})
export class HinduGlossaryComponent implements OnInit {
  filterList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  dataList;
  filteredDataList: any[] = [];
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.initialization();
   }

  initialization() {
    this.dataList = [
      {
        title: 'Ahimsa',
        description:
          '"Without Harm" The moral precept of not harming living beings, practiced in Hinduism, Buddhism, and Jainism.',
      },
      {
        title: 'Aruna',
        description: 'The charioteer of Vivasvan the Sun God.',
      },
      {
        title: 'Aryans',
        description:
          'The Indo-European people, related to the early Iranian people, who spoke an ancient form of Sanskrit and brought the Vedas to the Indian subcontinent.',
      },
      {
        title: 'Asura',
        description: 'A demon or evil being.',
      },
      {
        title: 'Atharvaveda',
        description:
          'One of the books of the Vedas, which includes hymns to the various deities, as well as incantations and spells.',
      },
      {
        title: 'Atman',
        description:
          'The soul, which is everlasting and is subject to transmigration(meaning upon death, it moves to another body). See also, Brahman.',
      },
      {
        title: 'Avatar',
        description:
          'An incarnation of a god on earth, usually in humans, but sometimes in animal, form. The God Vishnu is known for having ten incarnations, the most widely known being Rama, Krishna, and the Buddha (in Hindu mythology).',
      },
      {
        title: 'Bali',
        description:
          'An act of violent sacrifices, such as an animal, made to a deity.Currently limited almost exclusively in the area of Calcutta to theGoddess Kali.',
      },
      {
        title: 'Bhagavad-Gita',
        description: "Sanskrit for 'Song of the Lord'",
      },
      {
        title: 'Bhagavan',
        description: 'Bhagavan is a term used to refer to a god.',
      },
      {
        title: 'Bhakti',
        description:
          'Personal devotion to a particular chosen deity in anthropomorphic form. Bhakti has replaced sacrificial rites as the major function of modern Hinduism and is part of what distinguishes it from traditional Vedism.',
      },
      {
        title: 'Bhooloka',
        description: 'The earth, and one of the three lokas.',
      },
      {
        title: 'Boon',
        description:
          'A wish usually granted by a god to any person. However, in Thai, the word boon means merit, as in the word "tham-boon" (making merit).',
      },
      {
        title: 'Brahma',
        description: 'Hindu god of creation',
      },
      {
        title: 'Brahmacharya',
        description:
          "The first phase of a person's life where he goes to live with his guru to learn the different studies.",
      },
      {
        title: 'Brahman',
        description:
          'Not to be confused with the God Brahma, Brahman is a Universal Souland is often just translated as God. The main concern of Hinduism isthe relationship of the soul (Atman) with the Universal Soul(Brahman).',
      },
      {
        title: 'Brahmin / Brahmana',
        description:
          'A member of the preaching and praying class of humans. The highest group in Hindu caste, they are called upon to perform rituals. The year usually employed by families, sometimes as teachers, but are not the temple servants that attend to public temples.',
      },
      {
        title: 'Caste',
        description: "means, 'race'",
      },
      {
        title: 'Darshan',
        description:
          '"Seeing" A devotional act in which the devotee looks at the idol, andit is understood that the idol looks back at the devotee. When used by devotees of Amma, receiving Darshan means to be embraced by her.',
      },
      {
        title: 'Deva / Devi / Devataa',
        description:
          'The masculine, feminine, and plural forms of the word for god or immortal.',
      },
      {
        title: 'Dharma',
        description:
          'Often translated as the Truth or the Laws of Nature. It is synonymous with the word religion among Hindus, who often refer to their religious beliefs as dharma.',
      },
      {
        title: 'Dhaumya',
        description:
          'A great sage who had three disciples - Aruni, Upamanyu, and Veda.',
      },
      {
        title: 'Diya',
        description: 'A lamp that is lit when performing puja.',
      },
      {
        title: 'Diwali',
        description:
          'The Festival of Lights, which takes place in the fall, and is dedicated to different deities.',
      },
      {
        title: 'Ganesha',
        description:
          'The god of good fortune, commonly identified for his elephant head.',
      },
      {
        title: 'Ganga',
        description:
          'A holy river in Northern India, believed to be a goddess by Hindus.',
      },
      {
        title: 'Gayatri Mantra',
        description: 'A revered mantra in Hinduism, found in the Yajur Veda.',
      },
      {
        title: 'Grihastha',
        description:
          'The second of the four phases (Purushartha) of a man, when a person gets married and settles down in life and begets children.',
      },
      {
        title: 'Guru',
        description: 'A spiritual teacher.',
      },
      {
        title: 'Hare Krishna',
        description:
          'A vernacular term to describe followers of Lord Krishna and who are members of the International Society of Krishna Consciousness.',
      },
      {
        title: 'Holi',
        description:
          'A festival in the spring dedicated to Lord Krishna. It is known as the Festival Of Colors, and colored water and powder are often thrown by revelers.',
      },
      {
        title: 'Jiva',
        description:
          "in Hinduism, refers to the physical/psychological/social 'self' which acts, but which is not eternal",
      },
      {
        title: 'Karma',
        description:
          'The law of cause and effect. Not to be confused with the Kama, which is an amorous love.',
      },
      {
        title: 'Krishna',
        description:
          'Incarnation of the Hindu god Vishnu, who appears as a main character in the Bhagavad-Gita',
      },
      {
        title: 'Kshatriya',
        description:
          'A member of the warrior class of human beings. Most of the rulers and kings are from this class.',
      },
      {
        title: 'Linga / Lingam',
        description:
          'A stone phallus representing the regenerative powers of the God Shiva,and sometimes featuring an anthropomorphic depiction of Shiva.',
      },
      {
        title: 'Mahabharata',
        description:
          'One of the most influential texts in Hinduism, it is an Indian epic,said to be the longest poem ever written. The main story focuses on the conflicts and subsequent battle between two sets of cousins, who are descended from the legendary founder of India (referred to as Bharat). The amount of Hindu philosophy that is examined in the epic is so vast that some scholars are fond of saying that, "If it doesn\'t exist in the Mahabharata, then it doesn\'t exist."',
      },
      {
        title: 'Mandala',
        description:
          'More commonly found in the Tantric schools of Hinduism, it is a geometrical representation of the presence of a deity or God.',
      },
      {
        title: 'Manav',
        description:
          'A term for human beings. Believed to be the first human created byGod. (Pronounced Ma-noot in Thai.)',
      },
      {
        title: 'Mantra',
        description: 'A sacred religious prayer.',
      },
      {
        title: 'Maya',
        description: 'Hindu concept of false or illusory reality',
      },
      {
        title: 'Meditation',
        description:
          'focused, disciplined concentration intended to enable an experience of the sacred',
      },
      {
        title: 'Moksha',
        description:
          'Liberation, or Freedom, from the endless cycle of births known asSamsara. It is also the release from the cycle of death and rebirth inIndian religions',
      },
      {
        title: 'Paatal',
        description:
          'Also termed as the nether world, it is the underground world and is one of the three lokas.',
      },
      {
        title: 'Puja(pooja)',
        description: 'The ritualistic worship of a deity.',
      },
      {
        title: 'Rig Veda',
        description: '',
      },
      {
        title: 'Rishi',
        description:
          'Also termed as Sadhu, stands for an ascetic who is supposed to be above worldly pleasures. They possess great powers due to their extreme asceticism. They stay in deep forests and are in constant meditation. (Pronounced as Reu-See in Thai).',
      },
      {
        title: 'Samaveda',
        description:
          'A rearrangement of sections of the Rig Veda in chant form.',
      },
      {
        title: 'Samsara',
        description:
          "The endless cycle of birth and death, which one seeks release from for the soul to be joined with Brahman. See also Moksha. Sanskrit for 'the cycle of rebirth'",
      },
      {
        title: 'Samskaras',
        description: "Rites of passages that mark phases of one's life.",
      },
      {
        title: 'Satyagraha',
        description:
          'Seizing by the truth. The act of passive resistance espoused by Gandhi in dealing with the British colonial powers.',
      },
      {
        title: 'Seva',
        description:
          '"Service" Similar to puja, but the word Seva is used when referring to worship devoted to a deity in the lineage of Lord Vishnu',
      },
      {
        title: 'Shraap',
        description: 'A synonym for a curse, which comes true.',
      },
      {
        title: 'Shakti',
        description: 'Energy, associated with the female deities.',
      },
      {
        title: 'Shiva',
        description: 'Hindu god of destruction and rejuvenation',
      },
      {
        title: 'Sutra',
        description: 'A book of knowledge',
      },
      {
        title: 'Swarga',
        description:
          'A synonym for heaven, one of the three lokas or worlds. (Pronounced as Sawan in Thai.)',
      },
      {
        title: 'Untouchables',
        description:
          "in traditional Hindu society, those 'below' the caste system, and thus not embers of any of the four castes. Also called 'outcasts.'Mahatma Gandhi called the untouchables Harijan, which means 'children of God.'",
      },
      {
        title: 'Upanishads',
        description:
          'A collection of some of the most influential Hindu texts, dealing with philosophy and mysticism. Where the Vedas were concerned primarily with the rituals and sacrifices, the Upanishads focused on the relationship between the Supreme God (Brahman), deities, and man.',
      },
      {
        title: 'Vedas',
        description:
          'The ancient scriptures of Hinduism were written in four major volumes,with the Rig Veda being the most significant. They are the source of the majority of Hindu beliefs. The Vedas were the beliefs of the Indo-Aryan tribes that settled into India, supplanting much of the traditional culture.',
      },
      {
        title: 'Vishnu',
        description: 'Hindu god of preservation and love',
      },
      {
        title: 'Yajurveda',
        description:
          'One book of the early Vedas which describes a sacrificial formula to be used in performing rites to the deities.',
      },
      {
        title: 'Yoga',
        description:
          '"To join, to yoke oneself to" Not just a system of exercises, yoga means to join oneself to God through mental discipline. It is one of the major spiritual paths.',
      },
    ];

    this.dataList.filter(item => {
      if(item.title.charAt(0).toLowerCase() === 'a') {
        this.filteredDataList.push(item);
      }
    });
  }

  onChangeData(itemTitle, index) {
    this.filteredDataList = [];
    this.selectedIndex = index;
    this.dataList.filter(item => {
      if(item.title.charAt(0).toLowerCase() === itemTitle) {
        this.filteredDataList.push(item);
      }
    });
  }
}
