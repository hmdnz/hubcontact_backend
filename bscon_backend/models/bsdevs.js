module.exports = (sequelize, DataTypes) => {
  const bsdevs = sequelize.define("bsdevs", {
    FirstName: { type: DataTypes.STRING, allowNull: false },
    MiddleName: { type: DataTypes.STRING, allowNull: true },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Address: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING, allowNull: false },
    Twitter: { type: DataTypes.STRING, allowNull: true },
    Instagram: { type: DataTypes.STRING, allowNull: true },
    Linkedin: { type: DataTypes.STRING, allowNull: true },
    Whatsapp: { type: DataTypes.STRING, allowNull: true },
    NextofKin: { type: DataTypes.STRING, allowNull: false },
    EmergencyNum: { type: DataTypes.STRING, allowNull: false },
    Github: { type: DataTypes.STRING, allowNull: false },
    SpeacialNeeds: { type: DataTypes.STRING, allowNull: true },
    Allergies: { type: DataTypes.STRING, allowNull: true },
    Stack: { type: DataTypes.STRING, allowNull: false },
    Image: { type: DataTypes.STRING, allowNull: false },
  });
  return bsdevs;
};
