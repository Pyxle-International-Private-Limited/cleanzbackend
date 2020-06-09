const express = require('express')
const app = express();

const clients = [
  {clientcode:'cli-0034', name:'pyxle international', address:'23, lake road, panadura', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true},
  {clientcode:'cli-0043', name:'MIT', address:'55, depanama, pannipitiya', email:'vidura.hemawansa@pyxle.io', telephone:'071333333', isactive:true},
  {clientcode:'cli-0023', name:'codegen', address:'101, mahaweli gardens, kotte', email:'kavidu.vidubhashana@pyxle.io', telephone:'0773738292', isactive:true},
  {clientcode:'cli-0042', name:'99x', address:'orange estate, moratuwa', email:'namal.kumara@gmail.com', telephone:'0774838383', isactive:false},
];

const client_locations = [
  {clientlocationcode:'cliloc-0034', name:'MIT', address:'23, lake road, panadura', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true, clientcode:'cli-0043'},
  {clientlocationcode:'cliloc-0034', name:'codegen', address:'23, lake road, panadura', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true, clientcode:'cli-0023'},
  {clientlocationcode:'cliloc-0034', name:'MIT', address:'23, lake road, panadura', email:'vidura.hemawansa@pyxle.io', telephone:'0773255152', isactive:true, clientcode:'cli-0043'},
  {clientlocationcode:'cliloc-0034', name:'pyxle international', address:'23, lake road, panadura', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true, clientcode:'cli-0042'},
];

const providers = [
    {providercode: 'pro-1', name: 'abans', address: 'new york no. 1 lake park', email:'koli.gunarathne@gmail.com', telephone:'0773255152', isactive:true},
    {providercode: 'pro-2', name: '', address: 'london no. 1 lake park', email:'vidura.hemawansa@pyxle.io', telephone:'071333333', isactive:true},
    {providercode: 'pro-3', name: 'joe black', address: 'sidney no. 1 lake park', email:'kavidu.vidubhashana@pyxle.io', telephone:'0773738292', isactive:true},
    {providercode: 'pro-4', name: 'will black', address: 'sidney no. 1 lake park', email:'namal.kumara@gmail.com', telephone:'0774838383', isactive:false},
];

const employees = [
    {nic_ssn_ppn: 'emp-1', firstname: 'kolitha', lastname: 'gunarathne', address: 'new york no. 1 lake park', email:'koli.gunarathne@gmail.com', mobile:'0773255152', username: 'kolitha', password: '1234', isactive:true, roletype:'admin', provider_code: 'pro-1'},
    {nic_ssn_ppn: 'emp-2', firstname: 'vidura', lastname: 'hemawansa', address: 'new york no. 1 lake park', email:'sarath.hemawansa@pyxle.io', mobile:'0773255152', username: 'vidura', password: '1234', isactive:true, roletype:'admin', provider_code: 'pro-2'},
    {nic_ssn_ppn: 'emp-3', firstname: 'sarath', lastname: 'gunarathne', address: 'new york no. 1 lake park', email:'koli.gunarathne@gmail.com', mobile:'0773255152', username: 'sarath', password: '1234', isactive:true, roletype:'operator', provider_code: 'pro-1'},
    {nic_ssn_ppn: 'emp-4', firstname: 'kavindu', lastname: 'vidubhashana', address: 'new york no. 1 lake park', email:'kavidu.vidubhashana@pyxle.io', mobile:'0773255152', username: 'kavindu', password: '1234', isactive:true, roletype:'operator', provider_code: 'pro-3'},
];

const employee_roles = [
  {employeeroletype: 'emprol-1', isactive:true},
  {employeeroletype: 'emprol-2', isactive:true},
  {employeeroletype: 'emprol-3', isactive:true},
  {employeeroletype: 'emprol-4', isactive:true}, 
];

const services = [
  {servicecode: 'ser-1', title: 'environmental', isactive:true},
  {servicecode: 'ser-2', title: 'consultancy', isactive:true},
  {servicecode: 'ser-3', title: 'management', isactive:true},
  {servicecode: 'ser-4', title: 'financial', isactive:true},
];

const sub_services = [
  {subservicecode: 'subser-1', title: 'cleaning', isactive:true, servicecode: 'ser-1'},
  {subservicecode: 'subser-2', title: 'gardening', isactive:true, servicecode: 'ser-1'},
  {subservicecode: 'subser-3', title: 'IT', isactive:true, servicecode: 'ser-2'},
  {subservicecode: 'subser-4', title: 'accounting', isactive:true, servicecode: 'ser-4'},
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


//----------------------client api methods-------------------------------
app.get('/api/clients',(req,res,next) => {
  res.send(clients);
});
//----------------------end of client api methods-------------------------------

//----------------------client location api methods-------------------------------
app.get('/api/clients_locations',(req,res,next) => {
  res.send(client_locations);
});
//----------------------end of client location api methods-------------------------------

//----------------------provider api methods-------------------------------
app.get('/api/providers',(req,res,next) => {
  res.send(providers);
});

app.delete('/api/providers/!id',(req,res) => {
  const provider = providers.find(c => c.id === req.params.id);

  if(!provider) res.status(404).send('Invalid provider code, try again!!!');

  const index = providers.indexOf(provider);
  providers.splice(index,1);
  res.send(provider);

});
//----------------------end of provider api methods-------------------------------

//----------------------services api methods-------------------------------
app.get('/api/services',(req,res,next) => {
  res.send(services);
});
//----------------------end of services api methods-------------------------------

//----------------------sub services api methods-------------------------------
app.get('/api/sub_services',(req,res,next) => {
  res.send(sub_services);
});
//----------------------end of sub services api methods-------------------------------

//----------------------employee api methods-------------------------------
app.get('/api/employees',(req,res,next) => {
  res.send(employees);
});
//----------------------end of employee api methods-------------------------------

//----------------------employee roles api methods-------------------------------
app.get('/api/employee_roles',(req,res,next) => {
  res.send(employee_roles);
});
//----------------------end of employee roles api methods-------------------------------





app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});



