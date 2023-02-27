const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'categoryID' });
    }
  }
  Detail.init({
    detail: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};
