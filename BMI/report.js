// Read data from JSON or text file
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var bmiList = JSON.parse(this.responseText);
    
    // Calculate total and average BMI
    var total = bmiList.length;
    var sum = bmiList.reduce(function(acc, val) { return acc + parseFloat(val); }, 0);
    var average = (sum / total).toFixed(2);

    // Display total and average BMI on the page
    document.getElementById("total").innerHTML = total;
    document.getElementById("average").innerHTML = average;
  }
};
xhttp.open("GET", "bmiList.json", true);
xhttp.send();