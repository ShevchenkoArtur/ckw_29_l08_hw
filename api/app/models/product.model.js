module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    vendor: {
      type: Sequelize.STRING
    },
    typeProduct: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    }
  });

  return Product;
};
