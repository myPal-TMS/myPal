
const Sequelize = require('sequelize');

/**
 * Module Sentence initialize the Sentences table model
 * @namespace Subcategories
 * @extends Sequelize.Model
 */
module.exports = (sequelize) => {
    class Sentence extends Sequelize.Model {}
    Sentence.init({

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
        },
        {
            sequelize
        });

    Sentence.associate = (models) => {
        // Associations:
        Sentence.belongsTo(models.SubCategory, {
            foreignKey: 'subCategoryID',
        });

    };

    return Sentence;
};