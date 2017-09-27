const express = require('express')
const router = express.Router({mergeParams: true})
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

router.get('/', (request, response) => {

    const studentId = request.params.studentId
    
    StudentModel.findById(studentId)
        .then(() => {
// find all of students projects

// display each project in a div

        })
        .catch(() => {
            console.log(error)
        })

    // response.send(`Student ID is: ${request.params.studentId}`)
})


module.exports = router