module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        name: {type: DataTypes.STRINg, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false}, 
        password: {type: DataTypes.STRING, allowNull: false},
        imageUrl: {type: DataTypes.STRING, allowNull: true}
    })

    return User;
}