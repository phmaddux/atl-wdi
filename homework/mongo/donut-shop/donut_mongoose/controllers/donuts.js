//======================
// REQUIREMENTS
//======================
const express = require('express')
const router = express.Router()
const Donut = require("../models/donuts.js")

const DonutModel = Donut.DonutModel

//======================
// INDEX
//======================
router.get('/', (req, res) => {
    DonutModel.find({})
        .then((donuts) => {
            res.render('donuts/index', {
                donuts
            })
        })
        .catch((error) => {
            res.send(error)
        })
})
//======================
// NEW
//======================
router.get('/new', (req,res) => {
    res,render('donuts/new')
})
//======================
// SHOW
//======================
router.get("/:id", (req, res) => {
    const donutId = req.params.donutId

    Donut.DonutModel.findById(donutId)
        .then((donut) => {
            res.render('donuts/show', {
                donut
            })
        })
        .catch((error) => {
            res.send(error)
        })
})
//======================
// CREATE
//======================
router.post('/', (req, res) => {
    const newDonut = req.body
    DonutModel.create(newDonut)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err);
        })
})
//======================
// EDIT
//======================
router.get('/:id/edit', (req, res) => {
    const donutId = req.params.id
    DonutModel.findById(donutId)
        .then((donut) => {
            res.render('donuts/edit', {
                donut
            })
        })
        .catch((error) => {
            res.send(error);
        })
})
//======================
// UPDATE
//======================
router.put('/:id', (req, res) => {
    const updatedDonut = req.body
    const donutId = req.params.id
    DonutModel.findByIdAndUpdate(donutId, updatedDonut, { new: true })
        .then(() => {
            res.redirect(`/${donutId}`)
        })
        .catch((error) => {
            res.send(error);
        })
})
//======================
// DELETE
//======================
router.delete('/:id', (req, res) => {
    const donutId = req.params.id
    DonutModel.findByIdAndRemove(donutId)
        .then((donut) => {
            res.redirect('/');
        })
        .catch((err) => {
            res.send(err);
        })
})
//======================
// EXPORTS
//======================
module.exports = router