import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: {
      en: 'Authentic Chicken Kabsa',
      ar: 'كبسة الدجاج الأصلية',
    },
    description: {
      en: 'A traditional and aromatic Saudi Arabian rice dish, featuring fragrant spices, tender chicken, and fluffy basmati rice. A true centerpiece for any gathering.',
      ar: 'طبق أرز سعودي تقليدي وعطري، يتميز بالبهارات الفواحة والدجاج الطري وأرز البسمتي الهش. طبق رئيسي مثالي لأي مناسبة.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1594530466345-bdd52026a2f7?q=80&w=1964&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/n3Hn9_H3fWk',
    prepTime: '25 min',
    cookTime: '1 hr 15 min',
    servings: 6,
    rating: 4.9,
    ingredients: {
      en: [
        '1 whole chicken, cut into 8 pieces',
        '3 cups basmati rice, washed and soaked',
        '2 large onions, finely chopped',
        '4 cloves garlic, minced',
        '1/4 cup vegetable oil',
        '2 tomatoes, grated',
        '3 tbsp tomato paste',
        '1 tbsp Kabsa spice mix',
        '2 dried limes (loomi)',
        '1 cinnamon stick',
        '4 cardamom pods',
        '4 cloves',
        'Salt to taste',
        'Toasted almonds and raisins for garnish'
      ],
      ar: [
        '1 دجاجة كاملة، مقطعة إلى 8 قطع',
        '3 أكواب أرز بسمتي، مغسول ومنقوع',
        '2 بصلة كبيرة، مفرومة ناعماً',
        '4 فصوص ثوم، مهروسة',
        '1/4 كوب زيت نباتي',
        '2 حبة طماطم، مبشورة',
        '3 ملاعق كبيرة معجون طماطم',
        '1 ملعقة كبيرة بهارات كبسة',
        '2 حبة لومي (ليمون أسود مجفف)',
        '1 عود قرفة',
        '4 حبات هيل',
        '4 حبات قرنفل',
        'ملح حسب الرغبة',
        'لوز محمص وزبيب للتزيين'
      ],
    },
    instructions: {
      en: [
        'In a large pot, heat the oil and sauté the onions until golden. Add garlic and cook for another minute.',
        'Add the chicken pieces and brown on all sides.',
        'Stir in the grated tomatoes, tomato paste, Kabsa spices, dried limes, cinnamon, cardamom, cloves, and salt.',
        'Add enough hot water to cover the chicken. Bring to a boil, then reduce heat, cover, and simmer for 45-50 minutes until chicken is tender.',
        'Remove the chicken from the pot and place it on a baking sheet. Broil in the oven for 5-10 minutes until the skin is crispy.',
        'Measure the broth in the pot and add water if needed to make about 4.5 cups. Bring to a boil.',
        'Drain the soaked rice and add it to the boiling broth. Cook on low heat, covered, for 15-20 minutes until the rice is fluffy.',
        'Serve the rice on a large platter, top with the broiled chicken, and garnish with toasted almonds and raisins.'
      ],
      ar: [
        'في قدر كبير، سخن الزيت وشوح البصل حتى يصبح ذهبياً. أضف الثوم واطهه لمدة دقيقة إضافية.',
        'أضف قطع الدجاج وحمرها من جميع الجوانب.',
        'أضف الطماطم المبشورة، معجون الطماطم، بهارات الكبسة، اللومي، القرفة، الهيل، القرنفل، والملح.',
        'أضف ماء ساخنًا كافيًا لتغطية الدجاج. اتركه يغلي، ثم خفف النار، غطِّ القدر، واتركه على نار هادئة لمدة 45-50 دقيقة حتى ينضج الدجاج.',
        'ارفع الدجاج من القدر وضعه على صينية خبز. ضعه تحت الشواية في الفرن لمدة 5-10 دقائق حتى يصبح جلده مقرمشًا.',
        'قم بقياس المرق في القدر وأضف الماء إذا لزم الأمر ليصبح حوالي 4.5 أكواب. اتركه يغلي.',
        'صفِّ الأرز المنقوع وأضفه إلى المرق المغلي. اطهه على نار خفيفة، مغطى، لمدة 15-20 دقيقة حتى يصبح الأرز هشًا.',
        'قدم الأرز في طبق كبير، ضع فوقه الدجاج المشوي، وزينه باللوز المحمص والزبيب.'
      ],
    },
    reviews: [
      { id: 1, author: 'Mona K.', rating: 5, comment: 'Tasted just like my grandmother\'s recipe! The spices were perfect.' },
      { id: 2, author: 'Ahmed', rating: 5, comment: 'An amazing recipe, the chicken was so tender. A new family favorite!' }
    ]
  },
  {
    id: '2',
    title: {
      en: 'Gooey Cinnamon Rolls (Sinabon)',
      ar: 'سينابون رولز طرية ولذيذة',
    },
    description: {
      en: 'Indulge in these incredibly soft, fluffy, and gooey cinnamon rolls, generously topped with a rich and tangy cream cheese frosting. The ultimate comfort dessert.',
      ar: 'استمتع بلفائف القرفة الهشة والطرية والغنية بالنكهة، مع طبقة سخية من كريمة الجبن الغنية والحامضة. أفضل حلوى مريحة على الإطلاق.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1974&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/f6ZpWwD3T5w',
    prepTime: '2 hr',
    cookTime: '25 min',
    servings: 12,
    rating: 4.8,
    ingredients: {
      en: [
        'For the Dough: 1 cup warm milk, 2 1/4 tsp instant yeast, 1/2 cup granulated sugar, 1 egg, 1/3 cup melted butter, 3 1/2 cups all-purpose flour, 1 tsp salt.',
        'For the Filling: 1/2 cup softened butter, 1 cup brown sugar, 2 tbsp ground cinnamon.',
        'For the Frosting: 4 oz cream cheese, 1/4 cup softened butter, 1 1/2 cups powdered sugar, 1/2 tsp vanilla extract.'
      ],
      ar: [
        'للعجينة: 1 كوب حليب دافئ، 2 و 1/4 ملعقة صغيرة خميرة فورية، 1/2 كوب سكر حبيبات، 1 بيضة، 1/3 كوب زبدة مذابة، 3 و 1/2 كوب دقيق لجميع الأغراض، 1 ملعقة صغيرة ملح.',
        'للحشوة: 1/2 كوب زبدة طرية، 1 كوب سكر بني، 2 ملعقة كبيرة قرفة مطحونة.',
        'للتغطية: 4 أونصات (113 جم) جبنة كريمية، 1/4 كوب زبدة طرية، 1 و 1/2 كوب سكر بودرة، 1/2 ملعقة صغيرة خلاصة فانيليا.'
      ],
    },
    instructions: {
      en: [
        'In a large bowl, combine warm milk, yeast, and sugar. Let sit for 5 minutes. Whisk in the egg and melted butter.',
        'Add flour and salt, and mix until a soft dough forms. Knead for 5-7 minutes until smooth. Place in a greased bowl, cover, and let rise for 1.5 hours.',
        'Roll the dough out into a large rectangle. Spread the softened butter over the dough.',
        'In a small bowl, mix brown sugar and cinnamon. Sprinkle this mixture evenly over the buttered dough.',
        'Roll the dough up tightly into a log. Cut into 12 equal-sized rolls and place in a greased baking dish.',
        'Cover and let the rolls rise for 30 minutes. Preheat oven to 375°F (190°C).',
        'Bake for 20-25 minutes, or until golden brown.',
        'While baking, beat all frosting ingredients together until smooth. Spread generously over the warm rolls and serve.'
      ],
ar: [
        'في وعاء كبير، اخلط الحليب الدافئ والخميرة والسكر. اتركها لمدة 5 دقائق. اخفق البيضة والزبدة المذابة.',
        'أضف الدقيق والملح، واخلط حتى تتكون عجينة طرية. اعجنها لمدة 5-7 دقائق حتى تصبح ناعمة. ضعها في وعاء مدهون بالزيت، غطها، واتركها ترتفع لمدة 1.5 ساعة.',
        'افرد العجينة على شكل مستطيل كبير. ادهن الزبدة الطرية فوق العجينة.',
        'في وعاء صغير، اخلط السكر البني والقرفة. رش هذا الخليط بالتساوي فوق العجينة المدهونة بالزبدة.',
        'لف العجينة بإحكام على شكل أسطوانة. قطعها إلى 12 لفة متساوية الحجم وضعها في طبق خبز مدهون بالزيت.',
        'غطها واترك اللفائف ترتفع لمدة 30 دقيقة. سخن الفرن إلى 190 درجة مئوية (375 درجة فهرنهايت).',
        'اخبزها لمدة 20-25 دقيقة، أو حتى تصبح ذهبية اللون.',
        'أثناء الخبز، اخفق جميع مكونات التغطية معًا حتى تصبح ناعمة. ادهنها بسخاء فوق اللفائف الدافئة وقدمها.'
      ],
    },
    reviews: [
        { id: 1, author: 'BakerPro', rating: 5, comment: 'These are dangerously good! So soft and fluffy, and the frosting is perfect.' },
        { id: 2, author: 'SweetTooth', rating: 4, comment: 'Great recipe! Mine took a little longer to bake but they turned out delicious.' }
    ]
  },
];