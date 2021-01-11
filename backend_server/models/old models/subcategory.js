const Sequelize = require('sequelize');

/**
 * Module Subcategory initialize the Subcategories table model
 * @namespace Subcategory
 * @extends Sequelize.Model
 */
module.exports = (sequelize) => {
    class SubCategory extends Sequelize.Model {}
    SubCategory.init({

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

        },
        {
            sequelize
        });

    SubCategory.associate = (models) => {
        // Associations
        SubCategory.belongsTo(models.Category, {
            foreignKey: 'categoryID',
        });
        SubCategory.hasMany(models.Sentence, {
            foreignKey: 'subCategoryID'
        });

    };

    return SubCategory;
};