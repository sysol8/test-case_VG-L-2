import '/src/styles/fonts.css';
import '/src/styles/variables.css';
import '/src/styles/globals.css';
import '/src/styles/spritemap.css'
import '/src/styles/style.css';

const inputMin = document.querySelector('#number-min');
const inputMax = document.querySelector('#number-max');
const rangeMin = document.querySelector('#range-min');
const rangeMax = document.querySelector('#range-max');
const trackFill = document.querySelector('.slider-track');

const minGap = 1;
const maxValue = 100;

function updateSliderFromInputs() {
  let minVal = parseInt(inputMin.value);
  let maxVal = parseInt(inputMax.value);

  if (maxVal - minVal < minGap) {
    if (event.target === inputMin) {
      minVal = maxVal - minGap;
    } else {
      maxVal = minVal + minGap;
    }
  }

  rangeMin.value = minVal;
  rangeMax.value = maxVal;

  updateTrackFill();
}

function updateInputsFromSlider() {
  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  if (maxVal - minVal < minGap) {
    if (event.target === rangeMin) {
      rangeMin.value = maxVal - minGap;
    } else {
      rangeMax.value = minVal + minGap;
    }
  }

  inputMin.value = rangeMin.value;
  inputMax.value = rangeMax.value;

  updateTrackFill();
}

function updateTrackFill() {
  const rangeWidth = rangeMin.offsetWidth;
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const percentMin = (min / maxValue) * 100;
  const percentMax = (max / maxValue) * 100;

  trackFill.style.left = percentMin + '%';
  trackFill.style.width = (percentMax - percentMin) + '%';
}

inputMin.addEventListener('input', updateSliderFromInputs);
inputMax.addEventListener('input', updateSliderFromInputs);
rangeMin.addEventListener('input', updateInputsFromSlider);
rangeMax.addEventListener('input', updateInputsFromSlider);

inputMin.value = 0;
inputMax.value = 100;
rangeMin.value = 0;
rangeMax.value = 100;
updateTrackFill();

const countries = {
  sri,
  thai,
  sey,
  bel,
  che,
  usa,
  aus,
  dom,
  bri,
  ger
}

const transport = {
  plane,
  car,
  bike,
  walk
}

const users = [
  {
    id: 1,
    name: "Таня Фирсова",
    tags: ["ЗОЖ", "ПП", "Фитнес", "пляж", "авокадо", "смузи"],
    countries: [sri, thai, sey],
    transport: []
  }
]


