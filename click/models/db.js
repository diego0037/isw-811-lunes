module.exports = function(sequelize, DataTypes) {
	var Db = sequelize.define('db', {
		 count: DataTypes.INTEGER
	});

	return Db;
}
