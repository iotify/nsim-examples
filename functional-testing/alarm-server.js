// Important: Change the ##myuniquetopic## below to a unique string to prevent 
// MQTT topic collision over public server. 

// This a small server code which listens to a fire sensor and triggers alarm when
// temperature exceeds a certain threshold. 

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com:1883')

//!!!! Important - change the topic below to match the client settings !!!!!
const topic = '/[default]/temperature/0'

if (topic.includes('[default]')){    
    console.error('Did you forgot to change the topic?')
    process.exit(0);
}
client.on('connect', function () {
  client.subscribe(topic, function (err) {
    if (err) {
      console.error('Error subscribing to the topic');
    }
    else{
        console.log('Subscribed to topic.')
    }
  })
})

client.on('message', function (topic, message) {

  let cmd = JSON.parse(message.toString());
  // Check if parsed payload is valid and contains temperature
  if (cmd && cmd.temperature)
  {
     client.publish('/iotify/command/0', JSON.stringify({
        alarm: (cmd.temperature > 80) ? true: false
     }))
  }
})

console.log("Running Simple MQTT test server")
