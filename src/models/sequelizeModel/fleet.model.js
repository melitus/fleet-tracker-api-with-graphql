import Sequelize from 'sequelize'

const db = new Sequelize('fleet', null, null, {
  dialect: 'sqlite',
  storage: './fleet.sqlite'
})

const fleetModel = db.define('fleet', {
  fleetname: { type: Sequelize.STRING, allowNull: false },
  fleetinfo: { type: Sequelize.STRING, allowNull: false },
  contactname: { type: Sequelize.STRING, allowNull: false },
  longitude: { type: Sequelize.Number, allowNull: false },
  latitude: { type: Sequelize.Number, allowNull: false },
  category: { type: Sequelize.ENUM('car', 'truck'), allowNull: false },
  trackingnumber: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4
  }
})

export default fleetModel
