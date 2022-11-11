import express from 'express'
import mongoose from 'mongoose'
import exphbs from 'express-handlebars'
import todoRoutes from './routes/todos.js'



const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://dima:1q2w3e4r@cluster0.wq9pmys.mongodb.net/todos', {
            useNewUrlParser: true,
        })
        app.listen(PORT, () => {
            console.log('Server has been started')
        })
    } catch (e) {
        console.log(e)
    }
}

start()

