
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Coworking',
        {
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique : {
                    // args : true,
                    msg : 'Le nom doit etre unique'
                    
                }
            },

            superficy: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
            capacity: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
            price: {
                type: DataTypes.JSON,
            },
            address: {
                type: DataTypes.JSON,
            }

        },
        {
            // Other model options go here
        },
    );
}