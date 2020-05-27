## A Simple MQTT Alarm Server Example

This is a demonstration of a simple MQTT program which will listen to the incoming temperature sensor data and will instruct it to turn the alarm ON if the temperature exceeds a certain threshold. 

The code embedded in this document will load the alarm-server.js file and run it in your browser via the embedded runkit plugin. 
Click on the green run icon below to see the output. 

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://embed.runkit.com"></script>
<div id="code-element"></div>
<script>
  axios({
  method: 'get',
  url: 'https://raw.githubusercontent.com/iotify/nsim-examples/master/functional-testing/alarm-server.js'
   })
  .then(function (response) {
    var notebook = RunKit.createNotebook({
      // the parent element for the new notebook
      element: document.getElementById("code-element"),
      // specify the source of the notebook
      source: response.data
      })
  });
</script>
