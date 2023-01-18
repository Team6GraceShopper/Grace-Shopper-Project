'use strict';

const {
  db,
  models: { User, Products , Cart},
} = require('../server/db');
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'cody11',
      password: '123',
      firstName: 'cody',
      lastName: 'doug',
      email: 'cd@gmail.com',
      phoneNumber: '222-222-2222',
      address: '234 main st.',
    }),
    User.create({
      username: 'bob232',
      password: '123',
      firstName: 'bob',
      lastName: 'low',
      email: 'bl@gmail.com',
      phoneNumber: '333-333-3333',
      address: '44 left curve alley.',
    }),
  ]);

  //Creating Products
  const products = await Promise.all([
    Products.create({
      name: 'Rockwell Automation’s Retro Encabulator',
      price: 299,
      imgUrl:
        'productImages/Rockwell-Automation-Retro-Encabulator.png',
      inStock: true,
      description: 'Super dope tell all your friends about it',
      quantity: 28,
      category: 'A',
      rating: 8,
    }),
    Products.create({
      name: '3000 Netse Land Parcel',
      price: 99999,
      imgUrl: 'productImages/3000-Netse-Land-Parcel.png',
      inStock: true,
      description: 'totally rad your friends moms will love you',
      quantity: 10,
      category: 'B',
      rating: 10,
    }),
    Products.create({
      name: 'Budapest Alien Spaceship',
      price: 99999,
      imgUrl: 'productImages/budapest_alienship.png',
      inStock: true,
      description: 'totally rad your friends moms will love you',
      quantity: 10,
      category: 'B',
      rating: 10,
    }),
    Products.create({
      name: '3761 Tarma Beemoa Truck',
      price: 199,
      imgUrl:
        'productImages/3761-Tarmac-Beemoa-Truck-(9982111-miles).png',
      inStock: false,
      description: "Doesn't hold your emotional baggage",
      quantity: 15,
      category: 'C',
      rating: 9,
    }),
    Products.create({
      name: '3987 Miola Tantu (9857700-miles)',
      price: 2999,
      imgUrl: 'productImages/3987-Miola-Tantu-(9857700-miles).png',
      inStock: true,
      description: 'Great Vehicle , driven it for eons',
      quantity: 1,
      category: 'A',
      rating: 7,
    }),
    Products.create({
      name: '3999 Olk Vatum VR',
      price: 199,
      imgUrl: 'productImages/3999-Olk-Vatum-VR.png',
      inStock: false,
      description: 'Every purchase comes with a free kiss from Mr. Beast',
      quantity: 15,
      category: 'C',
      rating: 9,
    }),
    Products.create({
      name: 'Space Jeep',
      price: 199,
      imgUrl: 'productImages/spacejeep.png',
      inStock: false,
      description: 'Every purchase space jeep comes with a free kiss from Mr. Beast',
      quantity: 15,
      category: 'C',
      rating: 9,
    }),
    Products.create({
      name: 'Alan Aly Cail Arcade Machine',
      price: 300,
      imgUrl: 'productImages/Alan-Aly-Cail-Arcade-Machine.png',
      inStock: true,
      description:
        'Vintage Alan Aly , bought it off a guy in 3788 at a liquor store',
      quantity: 8,
      category: 'A',
      rating: 6,
    }),
    Products.create({
      name: 'Ambifacent Lunar Wayneshaft',
      price: 300,
      imgUrl: 'productImages/Ambifacient-Lunar-Wayneshaft.png',
      inStock: true,
      description: 'The perfect bludgeoning weapon against home invaders',
      quantity: 6,
      category: 'B',
      rating: 7,
    }),
    Products.create({
      name: 'Space Suit',
      price: 12,
      imgUrl: 'productImages/Axios-Shirt.png',
      inStock: true,
      description:
        'Allowing you to eat whatever you want without gaining any weight',
      quantity: 1,
      category: 'B',
      rating: 9,
    }),
    Products.create({
      name: 'Chroma Jacket',
      price: 12,
      imgUrl: 'productImages/Chroma-Jacket.png',
      inStock: true,
      description:
        'Barely worn, theres a stain on the back but you can barely see it',
      quantity: 17,
      category: 'C',
      rating: 6,
    }),
    Products.create({
      name: 'Beautiful Dewa Home',
      price: 300,
      imgUrl: 'productImages/Beautiful-Dewa-Home.png',
      inStock: true,
      description:
        '3 bdrm, 10 bath, Xinu style home in the great neighborhood of Catartar. ',
      quantity: 1,
      category: 'B',
      rating: 9,
    }),
    Products.create({
      name: 'Hyperbolic Time Chamber',
      price: 989000,
      imgUrl: 'productImages/hyperbolic_time_chamber.png',
      inStock: true,
      description:
        'Train in the hyperbolic time chamber to become the strongest in the universe',
      quantity: 1,
      category: 'B',
      rating: 6,
    }),
    Products.create({
      name: 'Skull Tanker',
      price: 300,
      imgUrl: 'productImages/skulltanker.png',
      inStock: true,
      description:
        "It's a skull, it's a tanker, it's a skull tanker! What more could you want?",
      quantity: 9,
      category: 'B',
      rating: 7,
    }),
    Products.create({
      name: 'Desk',
      price: 300,
      imgUrl: 'productImages/Desk.png',
      inStock: true,
      description:
        "Every kid's favorite chocalate milk! Except there's no milk!",
      quantity: 9,
      category: 'B',
      rating: 7,
    }),
    Products.create({
      name: 'Differential Girdlespring',
      price: 25,
      imgUrl: 'productImages/Differential-Girdlespring.png',
      inStock: true,
      description: '2/7 girdlespring , comes with acuator',
      quantity: 100,
      category: 'B',
      rating: 7,
    }),
    Products.create({
      name: 'Faly Pot Pants',
      price: 20,
      imgUrl: 'productImages/Faly-Pot-Pants.png',
      inStock: true,
      description: 'Size 300nm, Worn once',
      quantity: 1,
      category: 'B',
      rating: 6,
    }),
    Products.create({
      name: 'Fan',
      price: 15,
      imgUrl: 'productImages/Fan.png',
      inStock: true,
      description: 'industrial mete fan',
      quantity: 10,
      category: 'B',
      rating: 8,
    }),
    Products.create({
      name: 'Flubergasten Toal',
      price: 25,
      imgUrl: 'productImages/Flubergasten-Toal.png',
      inStock: true,
      description: 'It works bro',
      quantity: 900,
      category: 'B',
      rating: 9,
    }),
    Products.create({
      name: 'Ethereum Crystal',
      price: 300,
      imgUrl: 'productImages/Linux_ethereum_4k.png',
      inStock: true,
      description: 'Linux Ethereum 4k',
      quantity: 1,
      category: 'B',
      rating: 6,
    }),
    Products.create({
      name: 'Futuristic SpaceX',
      price: 300,
      imgUrl: 'productImages/spaceship1.png',
      inStock: true,
      description: 'SpaceX',
      quantity: 1,
      category: 'B',
      rating: 7,
    }),
    Products.create({
      name: 'Space Minerals',
      price: 300,
      imgUrl: 'productImages/spaceMinerals1.png',
      inStock: true,
      description: 'Space Minerals',
      quantity: 1,
      category: 'B',
      rating: 6,
    }),
    Products.create({
      name: 'Futuristic SpaceShipXY',
      price: 300,
      imgUrl: 'productImages/spaceship_8K.png',
      inStock: true,
      description: 'SpaceXY',
      quantity: 1,
      category: 'B',
      rating: 7,
    }),
    Products.create({
      name: 'Bumble Mech',
      price: 300,
      imgUrl: 'productImages/mech.png',
      inStock: true,
      description: 'Bumble Mech',
      quantity: 1,
      category: 'B',
      rating: 6,
    }),

    
  ]);

  const cart = await Promise.all([
    Cart.create({
      total: 2,
    })

  ])

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      bob: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

