
const Sequelize = require('sequelize');

/**
 * Module Categories initialize the Categories table model
 * @namespace Categories
 * @extends Sequelize.Model
 */
module.exports = (sequelize) => {
    class Category extends Sequelize.Model {}
    Category.init({
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

    Category.associate = (models) => {
        // Associations
        Category.hasMany(models.SubCategory, {
            foreignKey: 'categoryID',
        });
    };

    return Category;
};