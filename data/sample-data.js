const mongoose = require('mongoose');

const User = require('../models/user.model');
const Address = require('../models/address.model');
const Product = require('../models/product.model');
const Category = require('../models/category.model');
const Order = require('../models/order.model');
const Comments = require('../models/comments.model');

/* initialize mongoose IDs ################################################## */

// user IDs needed for address creation
const user1 = new mongoose.mongo.ObjectId();
const user2 = new mongoose.mongo.ObjectId();
const user3 = new mongoose.mongo.ObjectId();

// address IDs needed for order creation
const address1 = new mongoose.mongo.ObjectId();
const address2 = new mongoose.mongo.ObjectId();
const address3 = new mongoose.mongo.ObjectId();

// category IDs needed for product creation
const category1 = new mongoose.mongo.ObjectId();
const category2 = new mongoose.mongo.ObjectId();
const category3 = new mongoose.mongo.ObjectId();
const category4 = new mongoose.mongo.ObjectId();

// product IDs needed for order creation
const product1 = new mongoose.mongo.ObjectId();
const product2 = new mongoose.mongo.ObjectId();
const product3 = new mongoose.mongo.ObjectId();
const product4 = new mongoose.mongo.ObjectId();
const product5 = new mongoose.mongo.ObjectId();
const product6 = new mongoose.mongo.ObjectId();
const product7 = new mongoose.mongo.ObjectId();
const product8 = new mongoose.mongo.ObjectId();
const product9 = new mongoose.mongo.ObjectId();
const product10 = new mongoose.mongo.ObjectId();
const product11 = new mongoose.mongo.ObjectId();
const product12 = new mongoose.mongo.ObjectId();
const product13 = new mongoose.mongo.ObjectId();
const product14 = new mongoose.mongo.ObjectId();

const order1 = new mongoose.mongo.ObjectId();
const comment1 = new mongoose.mongo.ObjectId();


/* CATEGORIES / Goods Groups ################################### */

const categories = [{
        _id: category1,
        name: 'Coffee',
        pic_list: ['coffee1.jpg', 'coffee2.jpg', 'coffee3.jpg', 'coffee4.jpg'],
        description: 'Kräftig geröstete Wachmacher-Bohnen zum Frühstück, ein Cappuccino zum gemütlichen Kaffeeklatsch: Unsere Kaffee-Auswahl begleitet dich von früh bis spät.'
    },
    {
        _id: category2,
        name: 'Chocolate',
        pic_list: ['chocolate1.jpg', 'chocolate2.jpg', 'chocolate3.jpg', 'chocolate4.jpg'],
        description: 'Unser Schokoladen-Regal platzt aus allen Nähten und überlässt die süße Qual der Wahl ganz dir: Tafel, Riegel, Kakaopulver oder Kuvertüre? Vollmilch, zartbitter, mit Nüssen oder gefüllt? Hier findet jeder seine Favoriten!'
    },
    {
        _id: category3,
        name: 'Whiskey',
        pic_list: ['whiskey1.jpg', 'whiskey2.jpeg', 'whiskey3.jpg', 'whiskey4.jpg'],
        description: 'Du willst einen Whisky-Kenner mit einer Rarität überraschen? Bei uns findest du die ganze Welt der edlen Spirituosen – für jede Gelegenheit!'
    }
    /*,
    {
        _id: category4,
        name: 'Watches',
        pic_list: ['url 1', 'url 2', 'url 3'],
        description: 'Golden sparkles ...'
    }*/

];




/* USERS ############################################################### */

let users = [{
        _id: user1,
        user_name: 'CP',
        user_first_name: 'Cristiano',
        user_last_name: 'Pinto',
        user_password: 'fast!',
        user_email: 'pintoCr@media-saturn.com',
        user_phone: '+49(0)841-634-5289',
        ref_fav_products: []
    },
    {
        _id: user2,
        user_name: 'SG',
        user_first_name: 'Stefan',
        user_last_name: 'Grulke',
        user_password: 'faster!',
        user_email: 'grulkeS@media-saturn.com',
        user_phone: '+49(0)841-634-5472',
        ref_fav_products: []
    },
    {
        _id: user3,
        user_name: 'DT',
        user_first_name: 'Doreen',
        user_last_name: 'Trier',
        user_password: 'witch!',
        user_email: 'trierDo@media-saturn.com',
        user_phone: '+49(0)841-634-3958',
        ref_fav_products: []
    }
];

/* ADDRESSES ############################################################### */

const addresses = [{
        _id: address1,
        type: 'home',
        street: 'Wankelstraße 5',
        zip_code: '85053',
        city: 'Ingolstadt',
        iso_country_code: 'DE',
        ref_user: user1,
        pickup_station_id: '',
        pickup_ident_no: ''
    },
    {
        _id: address2,
        type: 'invoice',
        street: 'Ferdinand-Braun-Straße 17a',
        zip_code: '85053',
        city: 'Ingolstadt',
        iso_country_code: 'DE',
        ref_user: user2,
        pickup_station_id: '',
        pickup_ident_no: ''
    },
    {
        _id: address3,
        type: 'pickup',
        street: 'Manchinger Str. 70',
        zip_code: '85053',
        city: 'Ingolstadt',
        iso_country_code: 'DE',
        ref_user: user3,
        pickup_station_id: '131',
        pickup_ident_no: '1234567890123'
    }
];

/* PRODUCTS ############################################################### */

const products = [{
        _id: product1,
        product_id: 4711,
        title: 'Trinci Espresso ganze Bohne',
        description: 'Espresso. Über Holz geröstet. Das Rösten von Kaffee, so wie es Andrea Trinci betreibt, ist beileibe keine einfache Aufgabe, sondern ein Präzisionshandwerk, das Fingerspitzengefühl und feine Sinne verlangt. Wann die Bohnen den optimalen Röstgrad haben, beurteilt Trinci vor allem über den Duft, nicht über den Geschmack. Welche Präzision er dabei an den Tag legt, zeigt sich beispielhaft am kräftig-schokoladigen Espresso, den er für Manufactum macht. Dieser folgt mustergültig dem Stil der italienischen Kaffeetradition und ist gleichzeitig vom überlieferten Stil des 1939 gegründeten Familienbetriebes Trinci geprägt. Er besteht zu 60% aus Arabica-Bohnen aus Brasilien, Äthiopien und Indien sowie zu 40% aus Robusta-Bohnen aus Indien, Indonesien und Tansania. Die Bohnen werden schonend in einem Behälter geröstet, dem ein alter holzbefeuerter Ofen die Hitze zuführt – so lange, bis sie die für den Espresso von Trinci so typischen, kräftigen, intensiv duftenden Noten entwickelt haben. Uns hat er derart überzeugt, dass er auch in unserer Gastronomie Manufactum Brot & Butter die erste Wahl ist.',
        price: 270,
        amount: 1,
        unit: 'kg',
        manufacturer: 'Trinci Torrefazione di Caffè',
        ref_category: category1,
        rating: [],
        pic_list: ['trinci_es.png']
    },
    {
        _id: product2,
        product_id: 4712,
        title: 'Anhelo Espresso Ganze Bohne',
        description: 'Espresso. Wiederbelebt. Tiefempfundener Mangel ist oft der beste Ansporn für bemerkenswerte Leistung. Luca Ferrari aus Neapel ist ein gutes Beispiel dafür. Er vermisste den für seine Heimatstadt typischen neapolitanischen Kaffee, den er von früher kannte und der allein durch seine Bohnenauswahl eine charakteristische Süße und Nussigkeit besaß, dank der er ohne weiteres "amaro", also ohne Zucker, getrunken werden konnte. Kurzerhand beschloß er, diesen Kaffee wiederzubeleben. Er mischt dazu vier Teile Arabica- mit einem Teil Robusta-Bohnen und röstet die Mischung für neapolitanische Verhältnisse eher hell – mit wahrhaft verblüffendem Ergebnis. In Deutschland bekommen Sie den Espresso von Anhelo nur bei uns. ',
        price: 312,
        amount: 1,
        unit: 'kg',
        manufacturer: 'Anhelo',
        ref_category: category1,
        rating: [],
        pic_list: ['anhelo_es.png']
    },
    {
        _id: product3,
        product_id: 4713,
        title: 'Kaffee Costa Rica Tournon',
        description: 'Süß, würzig, erdig, holziger Geschmack, ein Muss für jeden Kaffeekenner. Und von Ihrer Kaffeerösterei Kirmse garantiert nicht in Käfighaltung produziert. Die Schleichkatzen bewegen sich in freier Natur. Nachts schleichen die Luwaks über die indonesischen Kaffeeplantagen und suchen sich zum Fressen nur die allerbesten und reifsten Kaffeekirschen aus.',
        price: 39.90,
        amount: 100,
        unit: 'g',
        manufacturer: 'Kaffeerösterei Kirmse',
        ref_category: category1,
        rating: [],
        pic_list: ['kopi_luwak.jpg']
    },
    {
        _id: product4,
        product_id: 4714,
        title: 'Blue Mountain Coffee',
        description: 'Im Osten der Insel Jamaicas erhebt sich das mächtige Blue Mountain Gebirge. Hier wächst im tropischen Urwald eine der exklusivsten Kaffeeraritäten der Welt - Jamaica Blue Mountain Arabicakaffee.Das kräftige und zugleich leicht süßliche Aroma vereint sich mit einer Note von Nougatund verleiht diesem exklusiven Kaffee einen ausgewogenen Körper mit einzigartigem Charakter. Mit Echtheitszertifikat der CIB (Coffee Industry Board) exportiert. Aromasicher im Schlauchbeutel verpackt – eingenäht in einem original Kaffee-Jutesäckchen.',
        price: 37.25,
        amount: 250,
        unit: 'g',
        manufacturer: 'Coffee Roasters of Jamaica',
        ref_category: category1,
        rating: [],
        pic_list: ['blue_mountain.jpg']
    },
    {
        _id: product5,
        product_id: 4715,
        title: 'ChocoMassimo',
        description: 'Zutaten: 40 handgefertigte Pralinen (enthalten teilweise Alkohol). Dieses exklusive Holzschatzkästchen mit vier Schubladen beinhaltet eine erlesene Auswahl von vierzig handgefertigten Pralinen, mit und ohne Alkohol. Das Holzkästchen kann per Lasergravur mit einem von Ihnen gewählten Text versehen werden. Die Gravur wird auf dem Schiebedeckel anstatt der Abbildung der Kakaobohnen angebracht. Sollten Sie keine Gravur wählen, so wird auf dem Kästchen standardmäßig eine Abbildung von Kakaobohnen eingraviert.',
        price: 74.00,
        amount: 500,
        unit: 'g',
        manufacturer: 'Chocolissimo',
        ref_category: category2,
        rating: [],
        pic_list: ['choco_massimo.jpg']
    },
    {
        _id: product6,
        product_id: 4716,
        title: 'GODIVA',
        description: 'Zutaten: Belgische Pralinen. Godiva Schachtel mit verschiedenen belgischen Pralinen aus Milchschokolade, Zartbitterschokolade und weißer Schokolade mit verschiedenen Füllungen, die in Luxusgoldpapier eingewickelt sind. Godiva-Pralinen werden nach traditioneller Rezeptur aus den besten Zutaten zubereitet.',
        price: 52.95,
        amount: 500,
        unit: 'g',
        manufacturer: 'Godiva',
        ref_category: category2,
        rating: [],
        pic_list: ['godiva.jpg']
    },
    {
        _id: product7,
        product_id: 4717,
        title: 'Anthon Berg Luxury Gold',
        description: 'Zutaten: Pralinenmischung, 17-fach sortiert. Die ausgefallene Auswahl. Nicht alles muss Gold sein, was glänzt. Manchmal ist es auch eine edle Pralinenschachtel mit noch edlerem Inhalt. Die Anthon Berg Luxury Gold Box aus Dänemark  bietet Ihnen reichlich Abwechslung für luxuriöse Genussmomente. Mit dieser Mischung erhalten Sie folgende Praliné-Kreationen: Karamell-Lakritz, Gianduja-Nougat, Passionsfrucht-Trüffel, Haselnuss-Trüffel, Karamell mit Meersalz, Cappuccino-Trüffel, Erdbeer-Trüffel ,Karamell mit Amaretto, Kakao-Karamell, Orangenmarzipan, Zwetschgen-Dessert, Marzipan-Nougat-Traum u.v.m.',
        price: 19.99,
        amount: 800,
        unit: 'g',
        manufacturer: 'Anthon Berg',
        ref_category: category2,
        rating: [],
        pic_list: ['anthon_berg.jpg']
    },
    {
        _id: product8,
        product_id: 4718,
        title: 'Lauensteiner Auslese',
        description: 'Zutaten: 33-fach sortiert, mit Alkohol. Eine Auswahl feinster handgefertigter Trüffel- und Pralinenspezialitäten finden Schokoladenliebhaber in der Lauensteiner Auslese. 33 verschiedene Sorten, wie z.B.  Zwetschgenwasser-, Schwarzwälder-Kirsch-Trüffel oder Mandelnougat-Krokant-Praline gibt es auf drei Lagen zu entdecken.',
        price: 57.00,
        amount: 1300,
        unit: 'g',
        manufacturer: 'Lauenstein Confiserie',
        ref_category: category2,
        rating: [],
        pic_list: ['lauenstein.jpg']
    },
    {
        _id: product9,
        product_id: 4719,
        title: 'Johnnie Walker Blue Label Ghost And Rare Port Ellen',
        description: 'Bei der Kreation von Johnnie Walker Blue Label Ghost und Rare Port Ellen mischte Jim den begehrten Ghost Whisky von Port Ellen, Caledonian und Carsebridge mit fünf unglaublich seltenen Malts aus Mortlach, Dailuaine, Cragganmore, Blair Athol und Oban. Das Ergebnis ist ein Whisky mit cremigen Vanilleschichten und gewellten Wellen aus wachsartigen Zitrusfrüchten, reichem Malz und Noten von tropischen Früchten – perfekt abgestimmt durch die besondere maritime Rauchigkeit von Port Ellen, die übrig bleibt, der lange und warme Abgang.',
        price: 378,
        amount: 0.7,
        unit: 'l',
        manufacturer: 'Johnnie Walker',
        ref_category: category3,
        rating: [],
        pic_list: ['blue_label.jpg']
    },
    {
        _id: product10,
        product_id: 4720,
        title: 'Suntory Yamazaki Whisky 12 Years',
        description: 'Zutaten: Whisky 43% Dieser Single Malt Whisky reifte in drei unterschiedlichen Eichenfässern: Amerikanisch, Spanisch und Japanisch. Das macht die Whiskys aus der Suntory-Brennerei unverwechselbar. Das Tal des Yamazaki am Berg Tennozan auf der Insel Honshu war 1923 die Geburtsstätte des japanischen Whiskys.Im Aroma zeigt sich der angenehme Körper des Yamazaki 12 Jahre mit starken Vanille-Noten, Trockenfrüchten und Honig. Am Gaumen delikat und angenehm mild, präsentiert sich sein Finale mittellang, sehr angenehm und trocken mit Holzaromen.',
        price: 117,
        amount: 700,
        unit: 'ml',
        manufacturer: 'Suntory Yamazaki',
        ref_category: category3,
        rating: [],
        pic_list: ['suntory.jpg']
    },
    {
        _id: product11,
        product_id: 4721,
        title: 'Johnnie Walker Odyssey Triple Malt Blended Whisky',
        description: 'Zutaten: Whisky 40%  Der Odyssey Whisky ist ein Premium Malt aus der Deluxe Range von John Walker & Sons. Dieser wurde zu Ehren von Sir Alexander Walker, dem Enkel des Firmengründers John Walker kreiert. Der Triple Malt besteht aus drei erlesenen Single Malts. Die ganze besondere Rarität kommt in einem edlen Glas Dekanter in einer außergewöhnlichen Verpackung daher. Darin ist ein bewegliches Metallrad installiert, welches die Flasche immer aufrecht hält, damit kein Tropfen des wertvollen Inhaltes verloren geht. Der Odyssey duftet kraftvoll und animierend, mit der Süße von Karamell, Honig und Beeren. Am Gaumen ist John Walker & Sons Odyssey Triple Malt Blended Whisky vollmundig und einladend, mit dem frischen Geschmack von Zitrusfrüchten, von gerösteten Walnüssen und Karamell, sowie einem Hauch von Meersalz. Der Abgang ist elegant, weich und seine Rauchnoten scheinen ewig anzuhalten. Der Johnnie Walker Odyssey ist ein Meisterwerk, das Sammlerherzen höher schlagen lässt.',
        price: 705,
        amount: 700,
        unit: 'ml',
        manufacturer: 'Johnnie Walker',
        ref_category: category3,
        rating: [],
        pic_list: ['odyssee_triple.jpg']
    },
    {
        _id: product12,
        product_id: 4722,
        title: 'Chivas Regal Ultis',
        description: 'Zutaten: Whisky 40%  Ultis ist die erste malta gemischt von Chivas Regal. Eine mischung aus fünf single malts Speyside - Alt a \' Bhainne, Braeval, Longmorn, Strathisla und Tormore - das ist ein whisky abgerundet, komplex und voller geschmack. Vista Goldene farbe. Nase Geruch honig reichen, zimt, pfirsich und krümelig fudge. Mund Geschmack rund, komplex, volles aroma, birnen escalfadas, clementinen und einem Hauch von khaki.',
        price: 119.99,
        amount: 0.7,
        unit: 'l',
        manufacturer: 'Chivas',
        ref_category: category3,
        rating: [],
        pic_list: ['chivas.png']
    },
    {
        _id: product13,
        product_id: 4723,
        title: 'Dalmore 18 Years',
        description: 'Dalmore \'The 18\': Dieser über 18 Jahre alte Whisky wird 14 Jahre in amerikanischer Weißeiche gelagert, danach 3 Jahre in spanischen Matusalem Sherry Fässern und zum Schluss noch weitere 12 Monate in aufrecht stehenden Sherry Fässern. In der Farbe ist dieser klassische Dalmore walnussbraun. Das Aroma wird dominiert von Pinie, Zitronengras und Zimt. Im Mund entwickelt sich ein Universum aus Schokolade, Vanille, kolumbianischem Kaffee, Trüffel und Rosmarin, das dann in einen lange anhaltenden Nachklang aus Veilchen und Jasmin übergeht.',
        price: 97.50,
        amount: 700,
        unit: 'ml',
        manufacturer: 'The Dalmore',
        ref_category: category3,
        rating: [],
        pic_list: ['dalmore.png']
    },
    {
        _id: product14,
        product_id: 4724,
        title: 'Macallan Whisky Maker\'s Edition',
        description: 'Zutaten: Whisky 42,8%  Dieser Ausdruck enthält eine rare whisky-destillat aus der Gerste angebaut in der eigenen Brennerei und gealtert in Fässern und Sherry Fässern - Bourbon aus amerikanischer weiß-eiche. Ist in Flaschen zu 42,8% der Lautstärke, der Favorit von Bob Dalgarno, und hält, je nach Dalgarno, dem traditionellen Geschmack von The Macallan. Vista In einem Glas Whisky ist hell goldbraun. Nase Würzig und süß. Wir finden Noten von frischen Früchten und Ingwer, abgerundet mit der süße des Bonbons. Es gibt auch Noten von Marmelade, Kakao und Orangenschale. Mund Ölige und dick. Wir finden saftige Früchte und Gerste reift. Noten von Zeder, Sherry und Karamell. Hauch von Zitrusfrüchten, Honig und Gewürzen wie Zimt, Muskat und Nelken. Anhaltend und würzig. Mit einem Hauch leicht geräucherten.',
        price: 91.90,
        amount: 0.7,
        unit: 'l',
        manufacturer: 'The Macallan',
        ref_category: category3,
        rating: [],
        pic_list: ['macallan.jpg']
    }
];



/* ORDERS ############################################################### */

const order = {
    _id: order1,
    order_id: 815,
    ref_user: user3,
    payment_provider: 'VISA',
    product_list: [{
            product_ref: product1,
            amount: 4
        },
        {
            product_ref: product2,
            amount: 2
        },
    ],
    ref_address: [address3],
    total_price: 850
}

/* COMMENTS ################################################################ */

let comments = [{
    _id: comment1,
    title: 'disgusting stuff!',
    ref_user: user1,
    ref_product: product1,
    description: 'Kann ich ueberhaupt nicht empfehlen...',
    ref_comment: '',
    timestamp: 1571317091372
}];


/* create categories with products ################################################################# */

categories.forEach((category) => {

    Category.findOne({
            name: category.name
        })
        .then((result) => {
            if (!result) {
                Category.create(category, (err) => {
                    if (err) {
                        throw (err)
                    }
                    console.log(`***** Has been missing, created the missing category: `, category.name)

                    products.filter(product => product.ref_category === category._id)
                        .forEach(product => {
                            Product.create(product, (err) => {
                                if (err) {
                                    throw (err)
                                }
                                console.log(`***** created the following product for this category: `, product.title)
                            })
                        })


                });
            }
        })
        .catch(err => console.log('### Category lookup failed due to: ', err))
})



/* create users with address each ############################################################# */

users.forEach((user, index) => {

    //console.log('### Such mich: ', user.user_name);

    User.findOne({
            user_name: user.user_name
        })
        .then(result => {

            if (!result) {

                User.create(user, (err) => {
                    if (err) {
                        throw (err)
                    }
                    console.log(`***** Has been missing, created the missing user: `, user.user_first_name)

                    Address.create(addresses[index], (err) => {
                        if (err) {
                            throw (err)
                        }
                        console.log(`***** added address for the given user: `, addresses[index].street)
                    })

                });
            }
        })
        .catch(err => console.log('### User lookup failed due to: ', err))
})