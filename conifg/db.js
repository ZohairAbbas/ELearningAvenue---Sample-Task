const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://0.0.0.0/ELearningAvenue')
    console.log('mongodb connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
