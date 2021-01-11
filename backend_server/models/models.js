const Sequelize = require('sequelize')

const db_sequel = new Sequelize({
    dialect: 'sqlite',
    storage: 'myPal.db',
    define: {
        timestamps: true,
    },
    logging: false,
})

console.log('Testing the connection to the database...');
(async () => {
  try {
    // Test the connection to the database
    console.log('Connection to the database successful!_!');
    await db_sequel.authenticate();

  } catch(error) {
    console.log(error);
  }
})();

const Category = db_sequel.define('category', {
  CategoryID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  catName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  images: {
    type: Sequelize.TEXT,
  },
})

const SubCategory = db_sequel.define('subcategory', {
  SubCategoryID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  subName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  images: {
    type: Sequelize.TEXT,
  },

})

const Sentence = db_sequel.define('sentences', {
  SentenceID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  sentence: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
})


Category.hasMany(SubCategory, {foreignKey: 'campusId'})
SubCategory.belongsTo(Category)
SubCategory.hasMany(Sentence)
Sentence.belongsTo(SubCategory)
//
// const sync = async () => {
//   await db_sequel.sync({force: true})
//   const [hunter, johnjay, nyu] = await Promise.all([
//     Category.create({
//       name: 'Hunter College',
//       imageUrl:
//         'http://www.hunter.cuny.edu/admissions/repository/images/classic-hunter-nyc-cabs.jpg',
//       address: 'idk street',
//       description: 'descr1',
//     }),
//     Category.create({
//       name: 'John Jay',
//       imageUrl:
//         'https://www.collegeconsensus.com/wp-content/uploads/2016/12/CUNY-John-Jay-College-Criminal-Justice.jpg',
//       address: 'idk street1',
//       description: 'descr2',
//     }),
//     Category.create({
//       name: 'NYU',
//       imageUrl:
//         'https://steinhardt.nyu.edu/sites/default/files/styles/facebook/public/2019-08/nyc_school_buildings_9G0-WrtQ.jpg?h=6413f173&itok=w7Y5nRcZ',
//       address: 'idk street2',
//       description: 'descr3',
//     }),
//   ])
//   await Promise.all([
//     SubCategory.create({
//       firstName: 'stanley',
//       lastName: 'lim',
//       email: 'asdas@gmail.com',
//       GPA: 4.0,
//       campusId: hunter.id,
//     }),
//     SubCategory.create({
//       firstName: 'stanley1',
//       lastName: 'lim1',
//       email: 'asdas1@gmail.com',
//       GPA: 0.0,
//       campusId: hunter.id,
//     }),
//     SubCategory.create({
//       firstName: 'guywithfirstname',
//       lastName: 'guywithlastname',
//       email: 'guywithemail@gmail.com',
//       GPA: 3.0,
//       campusId: nyu.id,
//     }),
//     SubCategory.create({
//       firstName: 'toyinwithfirstname',
//       lastName: 'toyinwithlastname',
//       email: 'toyinwithemail@gmail.com',
//       GPA: 4.0,
//       campusId: johnjay.id,
//     }),
//   ])
// }

module.exports = {
  sync,
  models: {
    Campus: Category,
    Student: SubCategory,
  },
}
