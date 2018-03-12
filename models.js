const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr');

const { STRING, INTEGER, BOOLEAN, DATE } = Sequelize;

const Gardener = db.define('gardeners', {
    name: STRING,
    age: INTEGER
});

const Plot = db.define('plots', {
    size: INTEGER,
    shaded: BOOLEAN
});

const Vegetable = db.define('vegetables', {
    name: STRING,
    color: STRING,
    plantedOn: DATE
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});

module.exports = {
    db, Gardener, Plot, Vegetable
};
