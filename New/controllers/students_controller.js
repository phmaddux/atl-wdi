const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

router.get('/', (request, response) => {

    StudentModel.find({})
        .then((students) => {
            response.render('students/index.hbs', {
                students: students
            })

        })
})

router.get('/:id', (request, response) => {
    const studentId = request.params.id

    StudentModel.findById(studentId)
        .then((student) => {
            response.redner('students/show', {
                students: students
            })
        })

})

router.get('/:id/delete', (request, response) => {
    const studentId = request.params.id
    StudentModel.deleteById(StudentId)
        .then((student) => {
            response.render('You deleted it!')
        })
})

module.exports = router