var graphs = {};
var dataSet=document.querySelector('#dataSet')
var graf = document.querySelector('#graf');
dataSet.addEventListener('change', function(){
    console.log(this.value)
    data= this.value
    fetch('/readDataset', {
        method: 'POST',
        body:data,
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

});


Plotly.newPlot('graf', graphs); 