## Welcome to the Simple Alarm Server Example

This page will load and show a code example. 
    
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <code id="code-element"></code>
    <script>
      axios({
      method: 'get',
      url: 'https://raw.githubusercontent.com/iotify/nsim-examples/master/functional-testing/alarm-server.js'
       })
      .then(function (response) {
         document.getElementById("code-element").innerHTML = response.data;
      });
</script>

