var Config = {
  // Contents of this file will be send to the client
  "domain":     process.env.OPENSHIFT_APP_DNS || '10.129.11.5',

  "serverip":   process.env.OPENSHIFT_NODEJS_IP || '10.129.11.5',
  "serverport": process.env.OPENSHIFT_NODEJS_PORT || '8080',
  
  "clientport": (process.env.OPENSHIFT_NODEJS_PORT) ? '8000':'8080',
  "protocol":   'ws://',

  "heartbeattmo": 1000, // milliseconds 
  
  "wsclientopts": { reconnection: true, 
                    reconnectionDelay: 2000,
                    reconnectionAttempts: 100,
                    secure: false
                  }
};

module.exports = Config;
