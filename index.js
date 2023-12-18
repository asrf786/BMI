function calcBMI() {
  var weight = document.querySelector("#weight").value;
  var height = document.querySelector("#height").value;
  if (weight !== "" && height !== "") {
    var result = weight / (height * height);
    document.querySelector("h3").innerHTML = "Your BMI is " + result.toFixed(2);
    stats(result.toFixed(2));
  } else {
    document.querySelector("h3").innerHTML =
      "Please Enter both Height and Weight! ";
  }
}

function stats(r) {
  let st;
  if (r < 18.5) {
    st = "UnderWeight";
    document.querySelector("#st-result").innerHTML = " Underweight";
  } else if (r < 23) {
    st = "Healty";

    document.querySelector("#st-result").innerHTML = " Healty";
  } else if (r < 27.5) {
    st = "Overweight";

    document.querySelector("#st-result").innerHTML = " Overweight";
  } else {
    st = "Obese";

    document.querySelector("#st-result").innerHTML = " Obese";
  }

  document.querySelector("#stats").innerHTML = "Your Obesity level is : ";
  //  document.querySelector("#st-status").innerHTML = st;
}

document.querySelector(".submit").addEventListener("click", calcBMI);
