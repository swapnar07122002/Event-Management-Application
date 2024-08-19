const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/eventManagement')
.then(()=>console.log('connected'))
.catch(()=>console.log('not connected'))