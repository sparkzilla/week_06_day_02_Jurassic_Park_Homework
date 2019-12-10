const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {

        dino1 = new Dinosaur('T-rex', 'carnivore', 50);
        dino2 = new Dinosaur('Stegasaurus', 'herbivore', 20);
        dino3 = new Dinosaur('Raptor', 'carnivore', 150);
        dino4 = new Dinosaur('Raptor', 'carnivore', 120);

        park1 = new Park('Jurassic Park', 35, [dino1, dino2], 365);
        park2 = new Park('Jurassic World', 40, [dino1, dino2, dino3], 365);
        park3 = new Park('Jurassic Land', 50, [dino1, dino2, dino3, dino4], 365);

  });

  it('should have a name', function () {
  const actual = park1.name;
  assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
  const actual = park1.ticketPrice;
  assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function () {
  const actual = park1.dinosaurs.length;
  assert.deepStrictEqual(actual, 2);
  });

  it('should add a dinosaur to its collection', function() {
  park1.addDinosaur(dino3);
  const actual = park1.dinosaurs.length;
  assert.deepStrictEqual(actual, 3);
  });

  it('should remove a dinosaur from its collection', function() {
  park2.removeDinosaur(dino2);
  const actual = park2.dinosaurs.length;
  assert.deepStrictEqual(actual, 2);
  });

  it('should find the dinosaur that attracts the most visitors', function() {
  const actual = park2.mostPopularDinosaur();
  assert.deepStrictEqual(actual, "Raptor");
  });

  it('should find all dinosaurs of a particular species', function() {
  const species_count = park3.species("Raptor");
  const actual = species_count.length;
  assert.deepStrictEqual(actual, 2);
  });

  it('should calculate the total number of visitors per day', function() {
  const actual = park2.totalVisitorsDay();
  assert.strictEqual(actual, 220);
  });

  it('should calculate the total number of visitors per year', function() {
  const actual = park2.totalVisitorsYear();
  assert.strictEqual(actual, 80300);
  });

  it('should be able to calculate total revenue for one year', function() {
  const actual = park1.totalRevenueYear();
  assert.strictEqual(actual, 894250);
  });

});
