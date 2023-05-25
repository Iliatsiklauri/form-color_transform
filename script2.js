const colorForm = document.getElementById('color-form');
const hexInput = document.getElementById('hex-input');
const rgbaOutput = document.getElementById('rgba-output');
const colorPreview = document.getElementById('color-preview');
colorForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); 

  
  const hexColor = hexInput.value;

  
  const rgbaColor = hexToRGBA(hexColor);

  
  rgbaOutput.value = rgbaColor;

 
  colorPreview.style.backgroundColor = rgbaColor;
}

function hexToRGBA(hex) {
  hex = hex.replace('#', '');

  
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);


  const rgbaColor = `rgba(${red}, ${green}, ${blue}, 1)`;

  return rgbaColor;
}

