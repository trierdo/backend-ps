const mongoose = require('mongoose');

const User = require('../models/user.model');
const Address = require('../models/address.model');
const Product = require('../models/product.model');
const Category = require('../models/category.model');
const Order = require('../models/order.model');
const Comments = require('../models/comments.model');

/* initialize mongoose IDs ################################################## */

const user1 = new mongoose.mongo.ObjectId();
const user2 = new mongoose.mongo.ObjectId();
const user3 = new mongoose.mongo.ObjectId();
const address1 = new mongoose.mongo.ObjectId();
const address2 = new mongoose.mongo.ObjectId();
const address3 = new mongoose.mongo.ObjectId();
const product1 = new mongoose.mongo.ObjectId();
const product2 = new mongoose.mongo.ObjectId();
const product3 = new mongoose.mongo.ObjectId();
const product4 = new mongoose.mongo.ObjectId();
const category1 = new mongoose.mongo.ObjectId();
const category2 = new mongoose.mongo.ObjectId();
const category3 = new mongoose.mongo.ObjectId();
const order1 = new mongoose.mongo.ObjectId();
const comment1 = new mongoose.mongo.ObjectId();


/* CATEGORIES / Goods Groups ################################### */

const categories = [{
    _id: category1,
    name: 'Coffee',
    pic_list: ['url 1', 'url 2', 'url 3'],
    description: 'The finest coffee specialties ...'
}
/*,
{
    _id: category2,
    name: 'Chocolate',
    pic_list: ['url 1', 'url 2', 'url 3'],
    description: 'The finest chocolate specialties ...'
},
{
    _id: category3,
    name: 'Whiskey',
    pic_list: ['url 1', 'url 2', 'url 3'],
    description: 'The finest smoke flavours ...'
},
{
    _id: category3,
    name: 'Watches',
    pic_list: ['url 1', 'url 2', 'url 3'],
    description: 'Golden sparkles ...'
}
*/
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

console.log(users);

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
        description: 'Süß, würzig, erdig, holziger Geschmack, ein Muss für jeden Kaffeekenner.Und von Ihrer Kaffeerösterei Kirmse garantiert nicht in Käfighaltung produziert. Die Schleichkatzen bewegen sich in freier Natur. Nachts schleichen die Luwaks über die indonesischen Kaffeeplantagen und suchen sich zum Fressen nur die allerbesten und reifsten Kaffeekirschen aus.',
        price: 39.90,
        amount: 100,
        unit: 'g',
        manufacturer: 'Kaffeeroesterei Kirmse',
        ref_category: category1,
        rating: [],
        pic_list: ['anhelo_es.png']
    },
    {
        _id: product4,
        product_id: 4714,
        title: 'Blue Mountain Coffee',
        description: 'Im Osten der Insel Jamaicas erhebt sich das mächtige Blue Mountain Gebirge. Hier wächstim tropischen Urwald eine der exklusivsten Kaffeeraritäten der Welt - Jamaica Blue Mountain Arabicakaffee.Das kräftige und zugleich leicht süßliche Aroma vereint sich mit einer Note von Nougatund verleiht diesem exklusiven Kaffee einen ausgewogenen Körper mit einzigartigemCharakter. Mit Echtheitszertifikat der CIB (Coffee Industry Board) exportiert.Aromasicher im Schlauchbeutel verpackt – eingenäht in einem original Kaffee-Jutesäckchen.',
        price: 37.25,
        amount: 250,
        unit: 'g',
        manufacturer: 'Coffee Roasters of Jamaica',
        ref_category: category1,
        rating: [],
        pic_list: ['anhelo_es.png']
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
            product_ref: product1,
            amount: 4
        },
    ],
    ref_address: [address3],
    total_price: 850
}

/* COMMENTS ##################################################################################### */

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
                    console.log(`***** Has been missing, created the missing category: `, category)

                    products.forEach(product => {
                        Product.create(product, (err) => {
                            if (err) {
                                throw (err)
                            }
                            console.log(`***** created the following product for this category: `, product)
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
            //console.log(result, '#### ist das Result');

            if (!result) {

                User.create(user, (err) => {
                    if (err) {
                        throw (err)
                    }
                    console.log(`***** Has been missing, created the missing user: `, user)

                        Address.create(addresses[index], (err) => {
                            if (err) {
                                throw (err)
                            }
                            console.log(`***** added address for the given user: `, addresses[index])
                        }) 
                    
                });
            }
        })
        .catch(err => console.log('### User lookup failed due to: ', err))
})

