//this is for create a table
exports.up = function(knex, Promise) {
 	return knex.schema.createTable('students', function(table){
 		table.increments();// id serial primary key
 		table.string('name');
 	}); 
};
// this is for drop a table
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('students');  
};
