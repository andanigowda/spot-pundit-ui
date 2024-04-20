import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-puja-recipes-details',
  templateUrl: './puja-recipes-details.component.html',
  styleUrls: ['./puja-recipes-details.component.scss'],
})
export class PujaRecipesDetailsComponent implements OnInit {
  data;
  godId;
  pujaRecipeList: any[] = [];

  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.pujaRecipeList = [
      {
        id: 1,
        title: 'Suji Ka Halwa',
        image: 'suji-ka-halwa.png',
        ingredients:
          '⅓ cup ghee <br/> ½ cup sooji/rava/semolina <br/> 10 to 12 cashews <br/> 1 teaspoon chironji <br/> 2 tablespoons raisins (kishmish) <br/> Edible camphor (optional) <br/> ⅓ cup sugar <br/>',
        preparation:
          '1. Heat ⅓ cup ghee in a kadai or a thick bottomed pan. Keep the flame to a low or medium-low. Use a heavy pan or else there is a risk of the suji getting burnt. When the ghee is getting heated, at the same time keep sugar and water to boil in a pan on a different burner. Steps are mentioned below under the heading “Making sugar solution for halwa“. <br/> 2. Add ½ cup sooji (rava or semolina). Use a fine variety of sooji and not the coarser variety. <br/> 3. Also add 10 to 12 cashews (kaju) halved or whole. <br/> 4. Mix very well and start frying the sooji and cashews. <br/> 5. Keep on stirring the sooji so that the grains do not stick to the pan and are fried evenly. <br/> 6. Roast sooji till you can see the ghee getting separated and when you see the cashews getting golden. The color of the suji or rava should not become brown. There will also be a fragrant aroma of suji and ghee in your kitchen. Frying suji takes approx 7 to 8 minutes on a low flame. this step is important because if sooji is not roasted well then you will not get perfect texture in the halwa. There will be slight raw taste in the sooji halwa. <br/> <b>Handy tip</b> – note that by the time the cashews get golden, the suji will also be fried well. So keep on stirring and wait for the cashews to get golden. <br/> 7. When the suji is fried well, then add 1 teaspoon chironji (optional), 2 tablespoons raisins (kishmish) and a pinch of edible camphor (optional). <br/> 8. Next add ½ teaspoon cardamom powder (4 to 5 green cardamoms, powdered in a mortar-pestle, husks discarded). You can also add sliced almonds or pistachios. <br/> 9. Mix well. <br/> 10. When you keep the sooji for roasting in the ghee, at the same time, take ⅓ cup sugar in another pan or saucepan. <br/> 11. Pour 1.25 cups of water. <br/> 12. Keep the pan on a stove top on a medium-low to medium flame. Stir so that the sugar dissolves.<br/> 13. Bring the water+sugar solution to a boil.<br/> 14. Once you stir the raisins, cardamom powder and chironji, then pour the boiling & bubbling sugar solution in the ghee-sooji mixture slowly, with continuous stirring. Pour carefully, as the mixture sizzles and splutters.<br/> 15. Mix very well so that lumps are formed. Break the lumps if any with a spoon.<br/> 16. The sooji grains will begin to absorb the water and swell.<br/> 17. The mixture will start thickening. Keep on stirring often.<br/> 18. In the photo below, the sooji halwa mixture has thickened but still soft, moist and the consistency is like that of pudding.<br/> 19. Once all the water is absorbed, you will notice the change in the texture. The ghee also will be visible at the sides.<br/> 20. Keep stirring and cooking till you get the final texture like the below picture. All the water should be absorbed and the halwa will leave the sides of the pan. If you want to make slices, then immediately pour the sooji halwa mixture in a greased pan or tray. Spread evenly and when warm or cooled, cut into diamond-shaped or square slices.<br/> 21. Serve suji ka halwa hot or warm or at the room temperature. Leftover suji halwa can be refrigerated. Before serving warm in a small pan or in a microwave.<br/>',
      },
      {
        id: 2,
        title: 'Moong Dal Ladoo',
        image: 'moong-dal-ladoo.png',
        ingredients:
          '1 cup moong dal1 cup moong dal <br /> ¼ cup ghee / clarified butter¼ cup ghee / clarified butter <br /> ½ cup sugar½ cup sugar <br /> 3 pods cardamom3 pods cardamom <br /> 2 tbsp cashew / kaju, chopped2 tbsp cashew / kaju, chopped <br /> 2 tbsp almonds / badam, chopped2 tbsp almonds / badam, chopped <br /> 7 pistachios7 pistachios',
        preparation:
          '1. Firstly, in a pan dry roast 1 cup moong dal on low flame. <br /> 2. Roast for 15-20 minutes or until moong dal turns golden and aromatic. <br /> 3. Cool completely and blend to a fine powder. <br /> 4. Transfer the moong dal powder into kadai. <br /> 5. Add ¼ cup ghee and roast on low flame. <br /> 6. Continue to roast for 10 minutes or until the mixture turns golden brown. <br /> 7. Transfer to a bowl and cool slightly. <br /> 8. Now prepare powdered sugar by blending ½ cup sugar and 3 pods cardamom. <br /> 9. Transfer the powdered sugar over the mixture and mix well. <br /> 10. Crumble a mix well making a moist flour. <br /> 11. Now prepare a ball sized ladoo and garnish with pistachios. <br /> 12. Finally, enjoy moong dal ladoo or store in an airtight container and serve for 2 weeks.',
      },
      {
        id: 3,
        title: 'Kaju Katli',
        image: 'kaju-katli.png',
        ingredients:
          '1 cup cashews <br /> ½ cup sugar <br /> ¼ cup water <br /> 1/8 th tsp cardamom powder / elaichi powder <br /> 1 tsp ghee, clarified butter <br /> silver vark / saffron - optional',
        preparation:
          '1. Firstly, in a small mixer jar, take 1 cup cashews. <br /> 2. Furthermore, grind to smooth powder. keep aside. <br /> 3. Now in a non stick pan, take ½ cup of sugar along with ¼ cup of water. <br /> 4. Keep the flame on low and keep on stirring to form syrup. <br /> 5. Stir the sugar syrup till it forms 1 string consistency. <br /> 6. Now sieve the ground cashew powder. <br /> 7. Remember to keep the flame on low all the time and give a good mix. <br /> 8. Add cardamom / saffron and continue to mix till it starts releasing from the pan. <br /> 9. Once the cashew paste turns to dough leaving the pan add a tsp of ghee. <br /> 10. Continue to mix till the ghee melts completely and cashew dough is formed leaving the pan. <br /> 11. Switch off the stove. and grease the butter paper with ghee. <br /> 12. Transfer the cashew dough onto the butter paper. <br /> 13. Grease your hand with little ghee and knead for 30 seconds. <br /> 14. Once you get smooth dough, cover with butter paper. <br /> 15. Take a plate and press to form a uniform layer.<br /> 16. Then roll the dough with a rolling-pin, adjusting the thickness according to your choice.',
      },
      {
        id: 4,
        title: 'Gajar Halwa',
        image: 'gajar-ka-halwa.png',
        ingredients:
          '1 kg carrot1 kg carrot <br /> ¼ cup ghee / clarified butter¼ cup ghee / clarified butter <br /> 10 cashew / kaju, chopped10 cashew / kaju, chopped <br /> 10 almonds / badam, chopped10 almonds / badam, chopped <br /> 3 cup milk3 cup milk <br /> ¾ cup sugar¾ cup sugar <br /> ½ cup khoya / mawa½ cup khoya / mawa <br /> ¼ tsp cardamom powder¼ tsp cardamom powder',
        preparation:
          '1. Firstly, peel the skin of carrot and grate finely. keep aside. <br /> 2. In a large kadai heat ¼ cup ghee and fry 10 cashew, 10 almonds. <br /> 3. Fry until it turns golden brown. keep aside. <br /> 4. In the same ghee add grated carrot and saute well. <br /> 5. Saute for 5 minutes or until it changes colour slightly. <br /> 6. Now pour 3 cup milk and give a good stir. <br /> 7. Boil for 10 minutes stirring occasionally. <br /> 8. Continue to boil until the carrots are cooked well and milk reduces. <br /> 9. Once the milk thickens completely, add ¾ cup sugar. <br /> 10. Mix well and cook until the sugar dissolves and thickens. <br /> 11. Cook until the halwa thickens and ghee releases from sides. <br /> 12. Now turn off the flame and ½ cup khoya, ¼ tsp cardamom powder and fried nuts. <br /> 13. Mix well making sure everything is well combined. <br /> 14. Finally, enjoy gajar ka halwa or carrot halwa chilled or warm. <br />',
      },
      {
        id: 5,
        title: 'Aate Ki Pinni / Panjiri',
        image: 'aate-ki-pinnie.png',
        ingredients:
          '1 cup (225 gram) ghee / clarified butter1 cup (225 gram) ghee / clarified butter <br /> ¼ cup (50 gram) edible gum / gond¼ cup (50 gram) edible gum / gond <br /> ¼ cup (45 gram) almond / badam¼ cup (45 gram) almond / badam <br /> ¼ cup (45 gram) cashew / kaju¼ cup (45 gram) cashew / kaju <br /> 2 tbsp (30 gram) raisins / kishmish2 tbsp (30 gram) raisins / kishmish <br /> ½ cup (10 gram) makhana / lotus seed½ cup (10 gram) makhana / lotus seed <br /> 1½ cup (225 gram) wheat flour / atta1½ cup (225 gram) wheat flour / atta <br /> ¼ cup (15 gram) dry coconut / kopra, grated¼ cup (15 gram) dry coconut / kopra, grated <br /> ¼ cup (35 gram) muskmelon seeds / magaz¼ cup (35 gram) muskmelon seeds / magaz <br /> ½ tsp ginger powder½ tsp ginger powder <br /> ¼ tsp cardamom powder¼ tsp cardamom powder <br /> 1 cup (140 gram) powdered sugar1 cup (140 gram) powdered sugar',
        preparation:
          '1. Firstly, in a pan take ¼ cup ghee and add ¼ cup edible gum (gond). <br /> 2. Roast on low flame until the gond puffs up and turns crystal. <br /> 3. Drain off over the plate and transfer to a bowl. <br /> 4. With the help of small cup, crush the gond to a coarse powder. keep aside. <br /> 5. In the same pan add ¼ cup almond, ¼ cup cashew and 2 tbsp raisins. <br /> 6. Roast on low flame until nuts turn crunchy and golden brown. <br /> 7. Cool completely, and transfer to a blender. <br /> 8. Blend to a coarse powder by pulsing 3-4 times. <br /> 9. Transfer the coarse dry fruit powder to the same bowl. <br /> 10. Now in the same pan, roast ½ cup makhana until they turn golden and crisp. <br /> 11. Blend to a coarse powder by pulsing 3-4 times. <br />',
      },
      {
        id: 6,
        title: 'Makhane Ki Kheer',
        image: 'makhana-kheer.png',
        ingredients:
          'For Makhane ki Kheer <br /> 1 cup lotus seeds (makhana) <br /> 2 tbsp ghee <br /> 5 cups full-fat milk <br /> 3/4 cup sugar <br /> a few saffron (kesar) strands <br /> 1/2 tsp nutmeg (jaiphal) powder <br /> For The Garnish <br /> 1 tbsp pistachio slivers',
        preparation:
          '1. To make makhane ki kheer, heat the ghee in a broad non-stick pan, add the lotus seeds and sauté on a medium flame for 3 to 4 minutes or till they turn crisp. <br /> 2. Remove from the flame, allow it to cool and blend in a mixer to a coarse powder. Keep aside. <br /> 3. Boil the milk in a deep non-stick pan, add the sugar, mix well and cook on a high flame for 2 minutes or till the sugar dissolves, while stirring continuously. <br /> 4. Reduce the flame to medium, add the coarsely crushed lotus seeds, mix well and cook for 19 minutes or till the milk has reduced to half, while stirring and scraping the sides of the pan occasionally. <br /> 5. Add the saffron and nutmeg powder, mix well and cook on a medium flame for 1 more minute. <br /> 6. Switch off the flame and allow to cool completely. <br /> 7. Refrigerate the makhane ki kheer for at least 1 hour and serve chilled garnished with pistachios. <br />',
      },
      {
        id: 7,
        title: 'Choorma Ladoo',
        image: 'choorma-ladoo.png',
        ingredients:
          '1 1/2 cups coarse whole wheat flour <br /> 4 tbsp ghee 1/4 cup grated dry coconut <br /> 2 tbsp sesame seeds <br /> ghee for deep-frying <br /> 3/4 cup chopped jaggery <br /> 1 tbsp milk, optional <br /> poppy seeds (khus-khus) for rolling',
        preparation:
          '1. Heat 1 tbsp of ghee in a broad non-stick pan, add the coconut and sesame seeds and sauté on a medium flame for 2 minutes. Keep aside. <br /> 2. To make churma ladoo, combine the whole wheat flour and ½ cup of water in a deep bowl and knead into a stiff dough. <br /> 3. Divide the dough into 8 equal portions and shape each portion into the shape of your fist and press with your fingers in the centre of each portion to make an indentation. <br /> 4. Heat the ghee in a deep non-stick kadhai and deep-fry 4 dough portions at a time, on a medium flame for 20 minutes or till they turn golden brown in colour from all the sides. Drain on an absorbent paper and allow them to cool. <br /> 5. Repeat step 4 to deep-fry 4 more dough portions. <br /> 6. Once cooled, break them into pieces and blend in a mixer to a fine powder. Keep aside. <br /> 7. Heat the remaining 3 tbsp of ghee in a broad non-stick pan, add the jaggery and 1 tbsp of water, mix well and cook on a slow flame for 3 to 4 minutes, while stirring continuously. Keep the churma aside. <br /> 8. Combine the churma, melted jaggery and coconut-sesame seeds mixture in a deep bowl and mix very well. Allow the mixture to cool slightly. <br /> 9. Divide the mixture into 11 equal portions and shape each portion into a round ball and roll in the poppy seeds till they are evenly coated from all the sides. <br /> 10. Serve the churma ladoo immediately or store in an air-tight container. <br />',
      },
      {
        id: 8,
        title: 'Kesari Bhaat',
        image: 'kesari-bhaat.png',
        ingredients:
          '2 tbsp + ¼ cup ghee / clarified butter2 tbsp + ¼ cup ghee / clarified butter <br /> 10 cashews / kaju, halves10 cashews / kaju, halves <br /> 1 tbsp raisins / kishmish / dry grapes1 tbsp raisins / kishmish / dry grapes <br /> ½ cup bombay rava / sooji / semolina, fine½ cup bombay rava / sooji / semolina, fine <br /> 1 cup water1 cup water <br /> ¾ cup sugar, add ½-1 cup depending on your choice¾ cup sugar, add ½-1 cup depending on your choice <br /> 2 tbsp saffron water / kesari2 tbsp saffron water / kesari <br /> ¼ tsp cardamom power / elachi powder¼ tsp cardamom power / elachi powder',
        preparation:
          '1. Firstly, heat 2 tbsp ghee / clarified butter and roast 10 cashews, 1 tbsp raisins on low flame. <br /> 2. Once the cashews turn golden brown, keep aside. <br /> 3. Now in the same ghee roast ½ cup bombay rava. use fine / coarse variety rava. <br /> 4. Roast on low flame for 5 minutes or till it turns aromatic. keep aside. <br /> 5. In a large kadai boil 1 cup water. <br /> 6. Keeping the flame on low, add in ½ cup roasted bombay rava. <br /> 7. Stir continuously till the rava absorbs water and no lumps are formed. <br /> 8. Further add ¾ cup sugar (add ½-1 cup depending on sweetness you prefer). <br /> 9. Keeping the flame on low, stir well till the sugar dissolves. <br /> 10. Furthermore add 2 tbsp saffron water or kesari food colour. (soak few treads of saffron in 2 tbsp of warm water for 15 minutes) <br /> 11. Also and ¼ cup ghee and stir continuously. <br /> 12. Make sure the mixture is combined well and no lumps are present. <br /> 13. Cover and simmer for 2 minutes or till rava gets cooked well completely. <br /> 14. Additionally add roasted cashews, raisins and ¼ tsp cardamom power. <br />',
      },
      {
        id: 9,
        title: 'Ghevar',
        image: 'ghevar.png',
        ingredients:
          'FOR BATTER <br /> ½ cup ghee / clarified butter½ cup ghee / clarified butter <br /> 1 block ice1 block ice <br /> 2 cup maida / plain flour / refined flour2 cup maida / plain flour / refined flour <br /> ½ cup milk, chilled½ cup milk, chilled <br /> 3 cup water, chilled3 cup water, chilled <br /> 1 tsp lemon juice1 tsp lemon juice <br /> FOR SUGAR SYRUP <br /> 1 cup sugar1 cup sugar <br /> ¼ cup water¼ cup water <br /> OTHER INGREDIENTS <br /> oil / ghee for deep fryingoil / ghee for deep frying <br /> dry fruits, for garnishingdry fruits, for garnishing <br /> ¼ tsp cardamom powder / elachi powder¼ tsp cardamom powder / elachi powder <br /> silver vrak for garnishingsilver vrak for garnishing',
        preparation:
          '1. Firstly, take ½ cup ghee and rub with ice block. <br /> 2. Now add 2 cup maida and crumble well. <br /> 3. Further, add ½ cup chilled milk and give a rough mix. <br /> 4. Additionally, add 3 cup of chilled water, 1 tsp lemon juice and make a smooth flowing consistency <br /> 5. Pour the 2 tbsp of batter keeping a good distance from hot oil. <br /> 6. The batter will splatter and later the froth subsides. repeat 10-15 times <br /> 7. Pull the ghevar out once cooked, and drain off the oil completely. <br /> 8. Pour the sugar syrup over ghevar, garnish with chopped nuts and sprinkle cardamom powder. <br /> 9. Finally, garnish the ghevar with silver vrak or rabri and ready to serve. <br />',
      },
      {
        id: 10,
        title: 'Gulgule',
        image: 'gulgule.png',
        ingredients:
          '½ cup jaggery½ cup jaggery <br /> 1 cup water1 cup water <br /> 1½ cup wheat flour / atta1½ cup wheat flour / atta <br /> ½ tsp fennel / saunf, crushed½ tsp fennel / saunf, crushed <br /> ¼ tsp cardamom powder¼ tsp cardamom powder <br /> ¼ tsp baking soda¼ tsp baking soda <br /> oil, for fryingoil, for frying',
        preparation:
          '1. Firstly, in a large bowl take ½ cup jaggery and ½ cup water. <br /> 2. Whisk and dissolve the jaggery. <br /> 3. Now add 1½ cup wheat flour, ½ tsp fennel, ¼ tsp cardamom powder and ¼ tsp baking soda. <br /> 4. Mix well making sure all the spices are well combined. <br /> 5. Further, add ½ cup more water and mix well. <br /> 6. Beat for 2 minutes or until the batter turns smooth and silky. <br /> 7. Cover and rest for 30 minutes or more to get soft and fluffy gulgula. <br /> 8. After 30 minutes, beat the batter again for a minute making sure the batter has enough airy texture. <br /> 9. Dip the hand in the water and scoop a tbsp of batter. <br /> 10. Drop into hot oil making sure a round ball-sized shaped is attained. <br /> 11. Stir occasionally and fry on medium flame until it turns dark golden brown. <br /> 12. Drain off making sure all the oil is drained off. <br /> 13. Finally, enjoy gulgula hot or store in an airtight container and have for 2-3 days. <br />',
      },
      {
        id: 11,
        title: 'Coconut Barfi',
        image: 'coconut-barfi.png',
        ingredients:
          '3 cup coconut, grated3 cup coconut, grated <br /> 2 cup sugar2 cup sugar <br /> ½ cup milk½ cup milk <br /> 2 tbsp cream, optional2 tbsp cream, optional <br /> ¼ tsp cardamom powder / elachi powder¼ tsp cardamom powder / elachi powder',
        preparation:
          '1. Firstly, take 3 cup freshly grated coconut into large kadai. <br /> 2. Add 2 cup sugar and ½ cup milk. <br /> 3. Mix well on medium flame until sugar dissolves completely. <br /> 4. Keep stirring till the mixture starts to thicken. (takes approx. 10 minutes) <br /> 5. Now add 2 tbsp cream. <br /> 6. Continue to cook on medium flame stirring continuously. <br /> 7. The mixture starts to thicken after 20 minutes. <br /> 8. And after 25 minutes, coconut mixture will start to separate from pan. <br /> 9. Continue to cook until the mixture starts to hold the shape. <br /> 10. Now add ¼ tsp cardamom powder and mix well. <br /> 11. Transfer the prepared dough into a greased plate lined with baking paper. <br /> 12. Set well forming a block. <br /> 13. Allow to set for 10 minute, or till it sets completely yet warm. <br /> 14. Now unmould and cut into pieces. <br /> 15. Finally, serve coconut burfi / nariyal barfi or store in airtight container for a week in refrigerator.',
      },
    ];

    this.activedRouter.params.subscribe((param) => {
      this.godId = JSON.parse(param.id);
      this.pujaRecipeList.forEach((item) => {
        if (item.id === this.godId) {
          this.data = item;
        }
      });
    });
  }

  backToList() {
    this.location.back();
  }
}
