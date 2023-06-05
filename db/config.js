const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
        throw new Error('Error initializing BD');
    }
}

module.exports = {
    dbConnection
}