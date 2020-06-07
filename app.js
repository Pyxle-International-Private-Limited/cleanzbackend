const express = require('express')
const app = express();

const clients = [
  {clientcode:'cli-0034', name:'kolitha', address:'23, lake road, panadura', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true},
  {clientcode:'cli-0043', name:'vidura', address:'55, depanama, pannipitiya', email:'vidura.hemawansa@pyxle.io', telephone:'071333333', isactive:true},
  {clientcode:'cli-0023', name:'kavindu', address:'101, mahaweli gardens, kotte', email:'kavidu.vidubhashana@pyxle.io', telephone:'0773738292', isactive:true},
  {clientcode:'cli-0042', name:'namal', address:'orange estate, moratuwa', email:'namal.kumara@gmail.com', telephone:'0774838383', isactive:false},
];

const providers = [
    {providercode: '1', name: 'john brown', address: 'new york no. 1 lake park', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true},
    {providercode: '2', name: 'jim green', address: 'london no. 1 lake park', email:'vidura.hemawansa@pyxle.io', telephone:'071333333', isactive:true},
    {providercode: '3', name: 'joe black', address: 'sidney no. 1 lake park', email:'kavidu.vidubhashana@pyxle.io', telephone:'0773738292', isactive:true},
    {providercode: '3', name: 'will black', address: 'sidney no. 1 lake park', email:'namal.kumara@gmail.com', telephone:'0774838383', isactive:false},
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res,next) => {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
  // Handle the post for this route
 });


app.get('/api/clients',(req,res,next) => {
  res.send(clients);
});

app.get('/api/providers',(req,res,next) => {
  res.send(providers);
});


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});



