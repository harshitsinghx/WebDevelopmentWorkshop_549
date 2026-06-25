function convertToFahrenheit(){
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").innerHTML= fahrenheit.toFixed(2)+ "F";
}

function convertToCelsius(){
    var fahrenheit =document.getElementById("fahrenheitInput").value;
    var celsius =(fahrenheit -32)* 5/9;
    document.getElementById("celsiusOutput").innerHTML = celsius.toFixed(2) + "C";
}