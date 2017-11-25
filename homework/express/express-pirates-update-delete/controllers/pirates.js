var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');
// READ
router.get('/', (req, res) => {
	res.render('pirates/index', {
		pirates: pirates.seededPirates
	})
})
// NEW
router.get('/new', (req, res) => {
	res.render('pirates/new')
})
// SHOW
router.get('/:id', (req, res) => {
	const id = parseInt(res.params.id);
	const pirate = pirates[id];
	res.render('pirates/show', {
		pirate: pirate
	})
})
// CREATE/POST
router.post('/', (req, res) => {
    const newPirate = req.body;
    pirates.push(newPirate);
    res.redirect('/pirates')
})
// EDIT
router.get('/:id/edit', (req, res) => {
	res.render('pirates/edit', {
		pirates: {
			id: req.params.id,
			name: pirates.seededPirates[req.params.id].name,
			birthplace: pirates.seededPirates[req.params.id].birthplace,
			death_year: pirates.seededPirates[req.params.id].death_year,
			base: pirates.seededPirates[req.params.id].base,
			nickname: pirates.seededPirates[req.params.id].nickname
		}
	})
});
// UPDATE
router.put('/:id', (req, res) => {
	console.log(req.body)
	const pirateToEdit = pirates.seededPirates[req.params.id];

	pirateToEdit.name = req.body.name;
	pirateToEdit.birthplace = req.body.birthplace;
	pirateToEdit.death_year = req.body.death_year;
	pirateToEdit.base = req.body.base;
	pirateToEdit.nickname = req.body.nickname;
	res.redirect('/pirates');
});
// DESTROY
router.delete('/:id', (req, res) => {
	pirates.seededPirates.splice(req.params.id, 1);
	res.redirect("/pirates");
});
// EXPORTS

module.exports = router;