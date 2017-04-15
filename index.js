const app = require('choo')()

app.use(require('choo-asyncify'))
app.use(require('choo-log'))
app.use(require('./models/search'))
app.use(require('./models/result'))

app.route('/', require('./views/main'))
app.mount('#main-content')
