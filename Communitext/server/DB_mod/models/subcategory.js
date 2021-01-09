const Sequelize = require('sequelize');

/**
 * Module Subcategory initialize the Subcategories table model
 * @namespace Subcategories
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
                    notEmpty: {
                        msg: 'Please provide a value for "ID"'
                    },
                    notNull: {
                        msg: 'Please provide a value for "ID"'
                    }
                }
            },

            subName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Please provide a value for "subcategory name"'
                    },
                    notNull: {
                        msg: 'Please provide a value for "title"'
                    }
                }
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
        SubCategory.hasMany(models.Sentences, {
            foreignKey: 'subCategoryID'
        });

    };

    return SubCategory;
};