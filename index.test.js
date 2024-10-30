const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  let testBand;
  let testMusician;
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
    testBand = await Band.create({ name: "foo", genre: "bar" });
    testMusician = await Musician.create({ name: "foo", genre: "bar" });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    expect(testBand.name).toBe("foo");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    expect(testMusician.name).toBe("foo");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    await testBand.update({ name: "foobar" });
    expect(testBand.name).toBe("foobar");
  });

  test("can update a Musician", async () => {
    await testMusician.update({ name: "foobar" });
    expect(testMusician.name).toBe("foobar");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    await testBand.destroy();
    const deletedBand = await Band.findByPk(testBand.id);
    expect(deletedBand).toBeNull();
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    await testMusician.destroy();
    const deletedMusician = await Musician.findByPk(testMusician.id);
    expect(deletedMusician).toBeNull();
  });
});
