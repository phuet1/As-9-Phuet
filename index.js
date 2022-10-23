const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getname', (req, res) => {
    res.send('Phuet Phongkheaw')
})
app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Phuet Phongkheaw',
        age: 20,
        apocalypse: 'Est',
        detail: 'Im Student at Bangkok university.',
    }
    res.send(data)
  })
  app.get('/getabout', (req, res) => {
    let data = {
    name: 'Phuet Phongkheaw',
    age: 20,
    email: 'phuetphongkheaw@gmail.com',
    address: 'Pathumtani ,Thailand',
    }
    res.send(data)
  })
  app.get('/getproject', (req, res) => {
    let data = {
    project_name: 'Song',
    project_description:'เลือกคนที่เขารักเรา - Three man down',
    project_link: 'https://www.youtube.com/watch?v=HaiMF32P4qM',
    }
    res.send(data)
  })
  app.get('/getcontact', (req, res) => {
    let data = {
    address: 'Pathumtani มThailand',
    email: 'phuetphongkheaw@gmail.com',
    phone_number: '000000000',
    }
    res.send(data)
  })


app.listen(port, () => {
    console.log(`start server at port 3000.`)
})