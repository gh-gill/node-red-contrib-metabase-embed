
module.exports = function(RED) {
    function mb(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            
            var jwt = require("jsonwebtoken");
            var METABASE_SITE_URL = msg.url;
            var METABASE_SECRET_KEY = msg.payload;

            var payload = {
		  resource: { dashboard: 1 },
		  params: {},
		  exp: Math.round(Date.now() / 1000) + (100 * 60) // 100 minute expiration
	    };
            var token = jwt.sign(payload, METABASE_SECRET_KEY);

            msg.iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#theme=night&bordered=true&titled=true";
            
            node.send(msg);
        });
    }
    RED.nodes.registerType("mb",mb);
}
