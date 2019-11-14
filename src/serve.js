const express       = require('express')
const bodyParser    = require('body-parser')
const morgan        = require('morgan')
const cookieParse   = require('cookie-parser')
const mongoose      = require('mongoose')
const path          = require('path')
const app           = express();

// SETTING
app.set('port', process.env.PORT|| 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//mongodb
 mongoose.connect('mongodb://localhost/crud-mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(  db   => { console.log('database connected')})
  .catch( err  => { console.error(err)
})

//middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParse())


// routes
app.use('/', require('./routes/route.js'))



//file static
app.use(express.static(__dirname+ '/public'))


//LISTEN
app.listen(app.get('port'),()=> {
    console.log('serve on port ', app.get('port'))
})