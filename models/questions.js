module.exports = function (sequelize, DataTypes) {
    //Defines table and columns
    let Questions = sequelize.define('jeopardize_Q', {
        episodeNum: {
            type: DataTypes.STRING,
        },
        airDate: {
            type: DataTypes.INT,
        },
        roundType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Questions;
}