
module.exports = function (sequelize, DataTypes) {

    const Feedback = sequelize.define("Feedback", {

        site: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        email: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        feedback: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [2, 300]
            }
        }
    });
    return Feedback
}