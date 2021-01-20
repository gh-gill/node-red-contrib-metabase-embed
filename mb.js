
module.exports = function(RED) {
    function mb(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            
            var jwt = require("jsonwebtoken");
            var METABASE_SITE_URL = config.url;
            var METABASE_SECRET_KEY = config.token;
	    var expire = config.expire;
	    var theme = config.theme;
	    var title = config.title;
	    var border = config.border;	

            var payload = {
		  resource: { dashboard: 1 },
		  params: {},
		  exp: Math.round(Date.now() / 1000) + (expire * 60) // 100 minute expiration
	    };
            var token = jwt.sign(payload, METABASE_SECRET_KEY);

            msg.payload = METABASE_SITE_URL + "/embed/dashboard/" + token + "#" +theme +"&bordered=" + border +"&titled=" + title;
            
            node.send(msg);
        });
    }
    RED.nodes.registerType("mb",mb);
}
