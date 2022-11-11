import {Router} from 'express'
import Todo from '../models/Todo.js'

const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({})

    res.render('index', {
        title: 'todos',
        isIndex: true,
        todos,
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'create todos',
        IsCreate: true,
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})

export default router
