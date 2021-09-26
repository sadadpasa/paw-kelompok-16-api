const router = require('express').Router()
const Note = require('../models/Note')
const Notes = require('../models/Note')

router.get('/', async (req, res) => {
    const notes = await Notes.find({})
    res.send(notes)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const note = await Notes.findById(id)
    res.send(note);
})

router.post('/', async (req, res) => {
    const { title, desc } = req.body
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newNote = new Note({ title, desc, createdAt, updatedAt })
    try {
        await newNote.save()
        res.send(newNote)
    } catch(err) {
        res.send(err)
    }
})

router.put('/:id', async (req, res) => {
    const { title, desc } = req.body
    const { id } = req.params
    const updatedAt = new Date().toISOString()

    try {
        const newNote = await Note.findByIdAndUpdate(id, { title, desc, updatedAt })
        res.send(newNote)
    } catch(err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deletedNote = await Note.findByIdAndRemove(id)
        res.send(deletedNote)
    }
    catch(err) {
        res.send(err)
    }
})

router.put('/:id/finish', async (req, res) => {
    const { id } = req.params
    await Note.findByIdAndUpdate(id, { finish: true })
    res.send('success')
})

module.exports = router