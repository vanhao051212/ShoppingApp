const express = require("express");
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json({ type: 'application/json' }));


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require('socket.io')(server);
server.listen(process.env.PORT || 3000, () => {
   console.log('listening on *:3000');
});

var dt = [{
   // id: '1',
   name: 'Cà Chua',
   datebegin: '02-02',
   dateend: '20-20',
   wateringtime1: 7,
   wateringtime2: 10,
   wateringtime3: -1,
   wateringoff: 1,
   // pump: '',
}];

io.on("connection", function (socket) {
   console.log('new client')
   socket.on("AndroidSend", function (data) {
      console.log(data);
      io.sockets.emit("ServerRespData", data);
   });
   socket.on("DevicesControl", function (data) {
      console.log(data);
      let x = data;
      x.getDevicesStt = !x.getDevicesStt;
      io.sockets.emit("DevicesSttData", x);
   });

   //for plant
   socket.on("RemovePlant", function () {

      io.sockets.emit("dasdsa");
   });
   socket.on("DisplayPlantAreas", function () {
      socket.emit("PlantAreasData", dt);
   });
   socket.on("DelPlantAreas", function () {
      dt = [{
         name: '',
         datebegin: '',
         dateend: '',
         wateringtime1: -1,
         wateringtime2: -1,
         wateringtime3: -1,
         wateringoff: -1,
      }]
      socket.emit("PlantAreasData", dt);
   });
   socket.on("EditPlantAreas", function (data) {
      dt=[data];
      socket.emit("PlantAreasData", dt);
   });


});
app.get("/", function (req, res) {
   res.render("trangchu");
})


// app.get('/getList', (req, res) => {
//    res.send(dt);
// })

// //use when user add new item
// app.post('/createNewItem', urlencodedParser, (req, res) => {
//    console.log("create new")
//    console.log(req.body);
//    // dt = dt.concat(req.body);
//    const newData = dt.map(e => {
//       if (e.id === req.body.id) {
//          return {
//             id: req.body.id,
//             name: req.body.name,
//             datebegin: req.body.datebegin,
//             dateend: req.body.dateend,
//             wateringtime1: req.body.wateringtime1,
//             wateringtime2: req.body.wateringtime2,
//             wateringtime3: req.body.wateringtime3,
//             wateringoff: req.body.wateringoff,
//             pump: req.body.pump,
//          }
//       }
//       else {
//          return e;
//       }
//    })
//    dt = newData;
//    res.send('ok')

// })

// app.get('/getControl', (req, res) => {
//    let data = {
//       temperature: '27',
//       humidity: '83',
//       soilMoisture: '50',
//       light1Status: false,
//       light2Status: true,
//       fanStatus: false,
//       pump1Status: true,
//       pump2Status: true,
//    }
//    res.send(data);
// })


// let dataCreateOrUpdate = {
//    id: '2',
//    name: 'zxc',
//    datebegin: '02-03',
//    dateend: '20-03',
//    wateringtime1: '1',
//    wateringtime2: '',
//    wateringtime3: '',
//    wateringoff: '1',
//    pump: '2'
// }
// let dataRemove = {
//    id: '2',
//    name: '',
//    datebegin: '',
//    dateend: '',
//    wateringtime1: '',
//    wateringtime2: '',
//    wateringtime3: '',
//    wateringoff: '',
//    pump: ''
// }