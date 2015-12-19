var express = require("express");
var router = express.Router();
var knex = require("../db/knex");

router.get('/',function(req,res){ // 
	knex('students').then(function(students){ 
		res.render("index", {students:students});
	});
});

router.get('/new', function(req,res){
	res.render("new");
});

router.post('/',function(req,res){
	//knex('students').insert({name: req.body.name}) It the same as line below cause req.dody return as an object
	knex('students').insert(req.body).then(function(){
		//find a student
		res.redirect('/students');
	});
});

router.get('/:id/edit',function(req,res){
	var id = req.params.id;
	knex('students').where({id: id}).first().then(function(student){
		res.render("edit", {student:student});
	});
});

router.put('/:id',function(req,res){
	var id = req.params.id;
	knex('students').where({id:id}).first().update(req.body).then(function(){		
		res.redirect('/students');
	});
});

router.delete('/:id',function(req,res){
	knex('students').where({id:req.params.id}).del().then(function(){
		res.redirect('/students');
	});
});


module.exports = router;
