"use strict";

// VARIABLES

const [weight, height] = document.querySelectorAll("input");
const [unitWeight, unitHeight] = document.querySelectorAll(".unit");

// EVENT LISTENERS

// listen for form submit
document.querySelector(".input__form").addEventListener("submit", calcBMI);

// FUNCTIONS

// Individual conversion functions
function convertPounds(value) {
  return value / 2.204623;
}

function convertCentimeters(value) {
  return value / 100;
}

function convertInches(value) {
  return value / 39.37008;
}

function convertFeet(value) {
  return value / 3.28084;
}

// convert other units to kg & meters
function convertUnit(value, unit) {
  switch (unit) {
    case "Pounds":
      return convertPounds(value);

    case "centimeters":
      return convertCentimeters(value);

    case "inches":
      return convertInches(value);

    case "feet":
      return convertFeet(value);
  }
}

// calculate bmi
function calcBMI(e) {
  e.preventDefault();

  let w = +weight.value;
  let h = +height.value;

  // Check if inputs are numbers & are positive
  if (typeof w !== "number" || typeof h !== "number" || w < 0 || h < 0) return;

  // Check if units are kg & meter, if not then convert them
  if (unitWeight.value !== "Kg") {
    w = convertUnit(+weight.value, unitWeight.value);
  }

  if (unitHeight.value !== "meters") {
    h = convertUnit(+height.value, unitHeight.value);
  }

  // if yes then calculate bmi & display it
  const bmi = w / h ** 2;
  document.querySelector(".bmi").textContent = bmi.toFixed(2);

  document.querySelector(".note").textContent = BMINote(bmi);
}

// check whether an person is underweight, overweight or ideal
function BMINote(bmi) {
  if (bmi < 18.5) {
    return "Your BMI indicates that you are underweight.";
  } else if (bmi > 24.9) {
    return "Your BMI indicates that you are overweight.";
  } else {
    return "Your BMI is ideal!";
  }
}
