
module.exports = function (sequelize, DataTypes) {

    const Feedback = sequelize.define("Feedback", {

        site: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isEmail: true }
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