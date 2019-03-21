import Sequelize from 'sequelize'
import uuidv4 from 'uuid/v4'

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
  category: { type: Sequelize.STRING },
  trackingnumber: { type: Sequelize.STRING, default: uuidv4() }
})

export default fleetModel
