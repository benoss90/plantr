const { db, Gardener, Plot, Vegetable } = require('./models');

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
      return Promise.all([veggie1, veggie2, veggie3]);
  })
  .then(() => db.close())
  .catch(err => {
    console.log('Something went wrong');
    console.error(err);
    db.close();
  });