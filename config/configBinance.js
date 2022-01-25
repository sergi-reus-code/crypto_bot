const Binance = require('binance-api-node').default

const client = Binance({
  apiKey: process.env.APYKEY,
  apiSecret: process.env.APYSECRET
});

exports.client = client 