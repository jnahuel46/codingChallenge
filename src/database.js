const mongoose = require('mongoose');

const URI = "mongodb+srv://jnahuel46:chadreed22@cluster0.kz5ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;