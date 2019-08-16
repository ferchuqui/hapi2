'use strict'
const bcrypt = require('bcrypt')

class Users {
  constructor (db){
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('users')
  }
  async create(data){
    const newUser = this.collection.push()
    
    newUser.set({ ...data })
    return newUser.key
  }
  static async encript (passwd){
    data.password = await this.constructor.encript(data.password)
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(passwd, saltRounds)
    return hashedPassword
  }
}
module.exports = Users