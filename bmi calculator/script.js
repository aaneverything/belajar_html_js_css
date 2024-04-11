document.getElementById("btn").addEventListener("click", function(){
    const height_val = document.getElementById('height').value;
    const weight_val = document.getElementById('weight').value;

    let bmi = weight_val / (height_val / 100 * height_val / 100);
    let bmio = (bmi.toFixed(2));


    document.getElementById("result").innerHTML = "Bmi kamu adalah " + bmio;
});