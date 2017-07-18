module.exports = function(sequelize, DataTypes) {
	var Db = sequelize.define('db', {
	   id: DataTypes.INTEGER,
		 count: DataTypes.INTEGER
	});

	return Db;
}
