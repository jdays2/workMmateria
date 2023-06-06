const elements = document.querySelectorAll('select');
elements.forEach((item) => {
    new Choices(item, {
        shouldSort: false,
        searchEnabled: false,
    })
});

const catalogSlider = new Swiper('.catalog-art__swiper', {

  wrapperClass: 'catalog-art__swiper-wrapper',
  slideClass: 'catalog-art__slide',
  slidesPerView: 'auto',
  loop: true,
  speed: 400,
  navigation: {
    
    nextEl: '.catalog-art__next',
  },
});

var init = false;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      mainAboutSlider = new Swiper(".main-about__swiper", {
        direction: "horizontal",
        loop: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
          prevEl: '.main-about__prev',
          nextEl: '.main-about__next',
        },
        pagination: {
          el: ".main-about__bullets",
          dynamicBullets: true,
          
        }
      });
    }
  } else if (init) {
    mainAboutSlider.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);


const mobileMenuList = () => {
	const buttons = document.querySelectorAll('.catalog-filters__toggle');
	const nav = document.querySelector('.catalog-filters');
	buttons.forEach(btn => {
		btn.addEventListener(`click`, (evt) => {
			evt.preventDefault();
			if (!evt.target.closest('.catalog-filters__block-toggle')) return;

			// const activeClass = nav.querySelectorAll(`.active`);
			// console.log('activeClass: ', activeClass);
			// activeClass.forEach(el => {
			//   console.log(el);
			//   el.classList.remove(`active`);
			// })



			evt.target.closest('.catalog-filters__block-toggle').classList.toggle('catalog-filters__block-toggle--open');

		})
	})
}
mobileMenuList();



const swiperAbout = new Swiper('.swiper__about', {
  slidesPerView: 1,
  speed: 400,
  loop: false,
  pagination: {
      el: '.swiper__about-pagination',
  },
  navigation: {
      nextEl: '.swiper__about-next',
      prevEl: '.swiper__about-prev',
  },
});








document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 50; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// Инициализация превью слайдера
const cardMainOne = new Swiper('.card-main__left-swiper', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 4, // показывать по 3 превью
	spaceBetween: 19, // расстояние между слайдами
	navigation: { // задаем кнопки навигации
		nextEl: '.card-main__next', // кнопка Next
		prevEl: '.card-main__prev' // кнопка Prev
	},
  pagination: {
    el: '.card-main__bullets',
  },
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
      spaceBetween: 36,
		}
	}
});
// Инициализация слайдера изображений
const cardMainTwo = new Swiper('.card-main__left-swiper-two', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
	navigation: { // задаем кнопки навигации
		nextEl: '.card-main__next', // кнопка Next
		prevEl: '.card-main__prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: cardMainOne // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});





