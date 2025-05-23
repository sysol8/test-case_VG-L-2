import "/src/styles/fonts.css";
import "/src/styles/variables.css";
import "/src/styles/globals.css";
import "/src/styles/style.css";

const inputMin = document.querySelector("#number-min");
const inputMax = document.querySelector("#number-max");
const rangeMin = document.querySelector("#range-min");
const rangeMax = document.querySelector("#range-max");
const trackFill = document.querySelector(".slider-track");

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

  trackFill.style.left = percentMin + "%";
  trackFill.style.width = percentMax - percentMin + "%";
}

inputMin.addEventListener("input", updateSliderFromInputs);
inputMax.addEventListener("input", updateSliderFromInputs);
rangeMin.addEventListener("input", updateInputsFromSlider);
rangeMax.addEventListener("input", updateInputsFromSlider);

inputMin.value = 30;
inputMax.value = 100;
rangeMin.value = 30;
rangeMax.value = 100;
updateTrackFill();

const countries = {
  sri: {
    src: "images/sri.png",
    alt: "Шри-Ланка",
  },
  thai: {
    src: "images/thai.png",
    alt: "Тайланд",
  },
  sey: {
    src: "images/sey.png",
    alt: "Сейшелы",
  },
  bel: {
    src: "images/bel.png",
    alt: "Бельгия",
  },
  cze: {
    src: "images/cze.png",
    alt: "Чехия",
  },
  usa: {
    src: "images/usa.png",
    alt: "США",
  },
  aus: {
    src: "images/aus.png",
    alt: "Австралия",
  },
  dom: {
    src: "images/dom.png",
    alt: "Доминика",
  },
  bri: {
    src: "images/bri.png",
    alt: "Великобритания",
  },
  ger: {
    src: "images/ger.png",
    alt: "Германия",
  },
};

const users = [
  {
    id: 0,
    firstName: "Таня",
    lastName: "Фирсова",
    tags: ["#ЗОЖ", "#ПП", "#Фитнес", "#пляж", "#авокадо", "#смузи"],
    countries: [countries.sri, countries.thai, countries.sey],
    transport: ["plane"],
    level: 99,
    isLiked: true,
    likes: "1.5 M",
    online: false,
    src: "images/tanya.png",
  },
  {
    id: 1,
    firstName: "Петя",
    lastName: "Демин",
    tags: ["#бургер", "#бар", "#футбол", "#концерт", "#крафт"],
    countries: [countries.bel, countries.cze],
    transport: ["plane", "car", "walk"],
    level: 80,
    isLiked: false,
    likes: "1500",
    online: false,
    src: "images/petya.png",
  },
  {
    id: 2,
    firstName: "Марк",
    lastName: "Смолов",
    tags: ["#рэп", "#тату", "#хайпбист", "#кроссовки", "#суприм"],
    countries: [countries.usa, countries.aus, countries.dom],
    transport: ["plane", "bike"],
    level: 25,
    isLiked: false,
    likes: "170",
    online: false,
    src: "images/mark.png",
  },
  {
    id: 3,
    firstName: "Лариса",
    lastName: "Рогова",
    tags: ["#образование", "#карьера", "#учеба", "#линкедин"],
    countries: [countries.bri, countries.ger],
    transport: ["plane", "car"],
    level: 50,
    isLiked: false,
    likes: "23",
    online: true,
    src: "images/larisa.png",
  },
];

function renderSearchResults() {
  const template = document.querySelector("#card");
  const usersList = document.querySelector(".cards__list");

  const checkboxes = document.querySelectorAll('.icons__checkbox');
  checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const icon = this.closest('.icon-label').querySelector('.checkbox-icon');
    icon.classList.toggle('is-active', this.checked);
  });
});


  users.forEach((user) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".cards__list-item");

    card.id = `card-id-${user.id}`;

    const likeButton = clone.querySelector(".like-button");
    likeButton.addEventListener("click", function () {
      this.classList.toggle("is-active");
    })

    const userName = clone.querySelector(".card__title");
    userName.innerHTML = `${user.firstName} <br class="name-break"/>${user.lastName}`;

    const avatar = clone.querySelector(".card__avatar");
    avatar.src = user.src;
    avatar.alt = `Фотография пользователя: ${user.firstName} ${user.lastName}`;

    const tagsList = clone.querySelector(".tags__list");
    user.tags.forEach((tag) => {
      const tagsListItem = document.createElement("li");
      tagsListItem.classList.add("tags__list-item");
      tagsListItem.textContent = tag;
      tagsList.appendChild(tagsListItem);
    });

    const countriesList = clone.querySelector(".countries__list");
    user.countries.forEach((country) => {
      const countriesListItem = document.createElement("li");
      countriesListItem.classList.add("countries__list-item", "country");

      const countryFlag = document.createElement("img");
      countryFlag.classList.add("country__icon");
      countryFlag.src = country.src;
      countryFlag.alt = `Флаг страны: ${country.alt}`;

      const countryName = document.createElement("span");
      countryName.classList.add("country__name");
      countryName.textContent = country.alt;

      countriesList.appendChild(countriesListItem);
      countriesListItem.appendChild(countryFlag);
      countriesListItem.appendChild(countryName);
    });

    const transportIcons = clone.querySelectorAll(".transport__icon");

    transportIcons.forEach((icon) => {
      const id = icon.id;
      const type = id.replace("-icon", "");
      if (user.transport.includes(type)) {
        icon.classList.add("is-active");
      }
    });

    const levelNumber = clone.querySelector(".level__number");
    levelNumber.textContent = user.level;

    const circle = clone.querySelector(".progress-ring__circle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (user.level / 100) * circumference;
    circle.style.strokeDashoffset = offset;


    usersList.append(card);
  });

  /* users.forEach((user) => {
		const clone = template.content.cloneNode(true);
		const article = clone.querySelector(".product");

		article.id = `product-${product.id}`;
		if (product.discount) {
			article.classList.add("discount");
		}

		const img = clone.querySelector(".product__image");
		img.src = product.src;
		img.alt = product.name;

		const productTitle = clone.querySelector(".product__title");
    productTitle.textContent = product.name;
    productTitle.setAttribute('title', `${product.name}`)

    const newPrice = clone.querySelector(".product__price_new");
		const oldPrice = clone.querySelector(".product__price_old");

		newPrice.textContent = `${product.newPrice} ₽`;

		if (product.discount) {
			newPrice.textContent = `${product.newPrice} ₽`;
      oldPrice.textContent = `${product.oldPrice} ₽`;
		} else {
			oldPrice.remove();
		}

		list.appendChild(clone);
	}); */
}

renderSearchResults();
