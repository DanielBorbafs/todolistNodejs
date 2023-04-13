
module.exports = {
	client: 'postgresql',
	connection: {
		database: 'knowledge',
		user: 'postgres',
		password: '123456'
	},
	pool: {
		min: 5,
		max: 100	
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
