const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

/**
 * Create new Sequelize instance
 * @const sequelize
 */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'myPal.db',
    define: {
        timestamps: true,
    },
    logging: false,
});

console.log('Testing the connection to the database...');
(async () => {
    try {
        // Test the connection to the database
        console.log('Connection to the database successful!');
        await sequelize.authenticate();

    } catch(error) {
        console.log(error);
    }
})();

const models = {};

// Import all of the models.
fs
    .readdirSync(path.join(__dirname, 'models'))
    .forEach((file) => {
        console.info(`Importing database model from file: ${file}`);
        const model = sequelize.import(path.join(__dirname, 'models', file));
        models[model.name] = model;
    });

// If available, call method to create associations.
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        console.info(`Configuring the associations for the ${modelName} model...`);
        models[modelName].associate(models);
    }
});

module.exports = {
    sequelize,
    Sequelize,
    models,
};