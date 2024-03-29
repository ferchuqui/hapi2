'use strict'
const questions = require('../models/index').questions
async function setAnswerRight(cuestionId, answerId, user){
  let result
    try {
      result = await questions.setAnswerRight(cuestionId, answerId, user)
    } catch (error) {
      console.error(error)
      return false
    }
    return result
}
async function getLast(amount) {
  let data
  try {
    data = await questions.getLast(10)
  } catch (error) {
    console.error(error)
  }
  console.log('Se ejecuto el metodo')
  return data
}
module.exports = {
  getLast: getLast,
  setAnswerRight: setAnswerRight
}