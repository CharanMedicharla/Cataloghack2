function getCropRecommendation() {
    const soilType = document.getElementById('soil-type').value;
    const climate = document.getElementById('climate').value;
  
    let recommendation = '';
  
    if (soilType === 'sandy' && climate === 'dry') {
      recommendation = 'Recommended crops: Millet, Sorghum, and Groundnuts';
    } else if (soilType === 'loamy' && climate === 'temperate') {
      recommendation = 'Recommended crops: Wheat, Maize, and Barley';
    } else if (soilType === 'clay' && climate === 'humid') {
      recommendation = 'Recommended crops: Rice, Sugarcane, and Cotton';
    } else {
      recommendation = 'Please adjust the input values for better results.';
    }
  
    document.getElementById('crop-output').textContent = recommendation;
  }
  
  function getSoilManagement() {
    const soilPh = parseFloat(document.getElementById('ph').value);
    let advice = '';
  
    if (soilPh < 5.5) {
      advice = 'Your soil is too acidic. Consider adding lime to raise the pH level.';
    } else if (soilPh >= 5.5 && soilPh <= 7.0) {
      advice = 'Your soil has a balanced pH. Maintain current practices for optimal soil health.';
    } else if (soilPh > 7.0) {
      advice = 'Your soil is too alkaline. Consider adding sulfur or organic compost to lower the pH.';
    } else {
      advice = 'Please enter a valid pH value.';
    }
  
    document.getElementById('soil-output').textContent = advice;
  }
  