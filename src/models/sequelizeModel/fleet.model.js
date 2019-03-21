import Sequelize from 'sequelize'

const db = new Sequelize('fleet', null, null, {
  dialect: 'sqlite',
  storage: './fleet.sqlite'
})

const fleetModel = db.define('fleet', {
  fleetname: { type: Sequelize.STRING },
  fleetinfo: { type: Sequelize.STRING },
  contactname: { type: Sequelize.STRING },
  longitude: { type: Sequelize.Number },
  latitude: { type: Sequelize.Number },
  category: { type: Sequelize.ENUM('car', 'truck') },
  trackingnumber: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4 }
})

export default fleetModel
