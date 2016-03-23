var server = require('../server');
var dataSource = server.dataSources.db;
var models = ['User', 'Article', 'Family', 'Provider', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

dataSource.isActual(models, function(err, actual) {

    if (!actual) {
    	console.log("Updating database...");
        dataSource.autoupdate(models, function(err, result) {
            console.log("Done!");
        });
    }
    else {
    	console.log("The database is up to date, no changes needed");    	
    }

    return
});
