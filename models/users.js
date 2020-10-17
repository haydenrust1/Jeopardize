module.exports = function (sequelize, DataTypes) {
    let Users = sequelize.define('users', {
        username: DataTypes.STRING
    })

    return Users;
}