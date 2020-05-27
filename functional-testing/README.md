#Welcome to the Simple Alarm Server Example

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
