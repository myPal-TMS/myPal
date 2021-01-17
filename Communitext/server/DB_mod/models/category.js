
const Sequelize = require('sequelize');

/**
 * Module Categories initialize the Categories table model
 * @namespace Categories
 * @extends Sequelize.Model
 */
module.exports = (sequelize) => {
    class Categories extends Sequelize.Model {}
    Categories.init({
            CategoryID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Please provide a value for "CategoryID"'
                    },
                    notNull: {
                        msg: 'Please provide a value for "CategoryID"'
                    }
                }
            },
            catName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'Please provide a value for "catName"'
                    },
                    notNull: {
                        msg: 'Please provide a value for "catName"'
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

    Categories.associate = (models) => {
        // Associations
        Categories.hasMany(models.SubCategories, {
            foreignKey: 'CategoryID',
        });
    };

    return Categories;
};