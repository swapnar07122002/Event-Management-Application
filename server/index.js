const express = require('express');
const app = express();
const port = 3200;
require('./db')
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.get('/',(req,res)=>{
  res.send('<h1>Hello World</h1>')
})

app.use('/api/event', require('./routes/event'));
// app.get('/',(req,res)=>{
//   res.send('<h1>Hello World</h1>')
// })

app.use('/api/eventRegistration', require('./routes/eventRegistration'));
// app.get('/',(req,res)=>{
//   res.send('<h1>Hello World</h1>')
// })

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port,()=>{
  console.log(`server is listening at port ${port}`);
});