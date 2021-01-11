const Sequelize = require('sequelize')

const db_sequel = new Sequelize({
    dialect: 'sqlite',
    storage: 'myPal.db',
    define: {
        timestamps: false,
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


Category.hasMany(SubCategory, {foreignKey: 'categoryID'})
SubCategory.belongsTo(Category)
SubCategory.hasMany(Sentence, {foreignKey: "subcatID"})
Sentence.belongsTo(SubCategory)




module.exports = {
  models: {
    Category: Category,
    Subcategory: SubCategory,
    Sentence: Sentence
  },
}
