import _ from 'lodash'
import bcrypt from 'bcrypt'
import Bluebird from 'bluebird'
import Sequelize from 'sequelize'

import sequelize from '../../config/sequelize-singleton'

const mappings = {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.DataTypes.UUIDV4
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}

const User = sequelize.define('User', mappings, {
  indexes: [
    {
      name: 'user_userId_index',
      method: 'BTREE',
      fields: ['userId']
    },
    {
      name: 'user_email_index',
      method: 'BTREE',
      fields: ['email']
    },
    {
      name: 'user_role_index',
      method: 'BTREE',
      fields: ['role']
    },
    {
      name: 'user_status_index',
      method: 'BTREE',
      fields: ['status']
    }
  ]
})

User.prototype.comparePassword = async function(password) {
  // eslint-disable-line func-names
  try {
    await Bluebird.resolve()
    return bcrypt.compareSync(password, this.password)
  } catch (err) {
    console.log(err)
    return false
  }
}

User.hook('beforeSave', user => {
  user.name = _.trim(user.name)

  if (
    user.previous('password') !== user.password &&
    !_.isEmpty(user.password)
  ) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)
    user.password = hash
  }

  return user
})

exports.getMapping = () => mappings

exports.getModel = () => User
