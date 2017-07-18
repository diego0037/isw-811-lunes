module.exports = function(sequelize, DataTypes) {
	var Db = sequelize.define('dbs', {
		 count: DataTypes.INTEGER
	});

	return Db;
}
