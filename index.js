// APP REQUIRE
const express = require('express'),
      exphbs  = require('express-handlebars'),
      path    = require('path')

// ROUTER REQUIRE
const indexRouter = require('./src/routers/index')

// APP CONFIG
const app = express()
const port = process.env.PORT || 3000

// APP ROUTERS
app.use(indexRouter)

// APP PATHS
const publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath))

// APP ENGINE
app.engine('handlebars', exphbs({ defaultLayout: 'primary' }))
app.set('view engine', 'handlebars')

app.listen(port, () => {
    console.log(`Hello from timobrien.dev!`)
})