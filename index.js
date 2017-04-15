var html = require('choo/html')
var choo = require('choo')

var app = choo()

app.use(require('choo-asyncify'))
app.use(require('./models/search'))
app.use(require('./models/result'))

app.route('/', require('/views/main'))
app.mount('#main-content')
