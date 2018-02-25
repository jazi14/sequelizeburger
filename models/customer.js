module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Customer.associate = function(models) {
        models.Customer.belongsTo(models.Author, {
            onDelete: "Cascade",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Customer;
}