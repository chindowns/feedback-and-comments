
module.exports = function (sequelize, DataTypes) {

    const Feedback = sequelize.define("Feedback", {

        site: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isEmail: true }
        },

        feedback: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 255]
            }
        }
    });
    return Feedback
}