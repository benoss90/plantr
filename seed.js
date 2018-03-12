const { db, Gardener, Plot, Vegetable } = require('./models');

// let veggiesPromise;

db.sync({force: true})
  .then(() => {
      console.log('DB synced!');
  })
  .then(() => {
      const veggie1 = Vegetable.create({
          name: 'Carrot',
          color: 'Orange',
          plantedOn: new Date()
      });
      const veggie2 = Vegetable.create({
        name: 'Cucumber',
        color: 'Green',
        plantedOn: new Date()
      });
      const veggie3 = Vegetable.create({
        name: 'Lettuce',
        color: 'Green',
        plantedOn: new Date()
      });

      veggiesPromise = Promise.all([veggie1, veggie2, veggie3]);

      return veggiesPromise;
  })
  .then((veggies) => {
    const gardener1 = Gardener.create({
        name: 'Ragheed',
        age: 37,
        favoriteVegetableId: veggies[0].id
    });
    const gardener2 = Gardener.create({
        name: 'Benito',
        age: 28,
        favoriteVegetableId: veggies[1].id
    });

    return Promise.all([gardener1, gardener2, veggies]);


  })
  .then((arr) => {
    console.log(arr)
    db.close()
  })
  .catch(err => {
    console.log('Something went wrong');
    console.error(err);
    db.close();
  });
