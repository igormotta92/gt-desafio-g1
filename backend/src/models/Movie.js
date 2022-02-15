const { Model, DataTypes } = require('sequelize');

class Movie extends Model {

  static get _name() {
    return 'Movies';
  }

  static init(sequelize) { //recebe a conexão do banco de dados
    return super.init({
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      hooks: {
        beforeValidate: (self, options) => {
        },
        beforeCreate: (self, options) => {
        },
        beforeUpdate: (self, options) => {
        },
      },
      sequelize,
      defaultScope: {
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt',
          ]
        },
      },
    });
  }

  static associate(models) {
  }

}

module.exports = Movie;
