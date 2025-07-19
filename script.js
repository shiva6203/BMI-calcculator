
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");
  
    if (isNaN(weight) || isNaN(height) || height === 0) {
      resultDiv.textContent = "Please enter valid weight and height.";
      resultDiv.style.color = "red";
      return;
    }
  
    const bmi = weight / (height * height);
    let category = "";
  
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
  
    resultDiv.style.color = "black";
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  