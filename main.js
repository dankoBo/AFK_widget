import anime from 'animejs'
import './style.css'

// Отримуємо елемент місяця та внутрішнього кола
const moonWrapper = document.querySelector('.moon-wrapper');
const moon = document.querySelector('.moon')

// Розмір та радіус внутрішнього кола
// const innerCircleSize = 660;
const innerCircleSize = 1050;
const innerCircleRadius = innerCircleSize / 2;

// Розмір та радіус місяця
const moonSize = 130;
const moonRadius = moonSize / 2;

// Початковий кут розташування місяця на колі (в радіанах)
let angle = 0;

  // Функція, яка обчислює нові координати місяця для кожного кадру анімації
function calculateNewPosition() {
	const centerX = innerCircleRadius; // x-координата центру кола
	const centerY = innerCircleRadius; // y-координата центру кола
	const distanceFromCenter = innerCircleRadius - moonRadius;
	const x = centerX + distanceFromCenter * Math.cos(angle) - moonRadius;
	const y = centerY + distanceFromCenter * Math.sin(angle) - moonRadius;
	return { x, y };
}

// Запускаємо анімацію руху місяця навколо inner-circle
anime({
	targets: moonWrapper,
	duration: 4000, // Тривалість анімації в мілісекундах
	loop: true, // Зациклюємо анімацію
	easing: 'linear', // Лінійне змінення координат для рівномірної обертання
	update: function () {
		// Обчислюємо нові координати місяця
		const { x, y } = calculateNewPosition();
		// Зміщуємо місяця в обчислені координати
		moonWrapper.style.transform = `translate(${x}px, ${y}px)`;
		// Збільшуємо кут розташування місяця на колі
		angle += 0.003; // Змінюйте це значення, щоб налаштувати швидкість руху місяця
	},
});

anime({
    targets: moon,
    rotate: -360, // Кут повороту на 360 градусів (повний оборот)
    duration: 15000, // Тривалість анімації обертання в мілісекундах
    loop: true, // Зациклюємо анімацію
    easing: 'linear', // Лінійне змінення кута для рівномірного обертання
});

// !STARS

const z1 = document.getElementsByClassName("z-1")[0];
const z2 = document.getElementsByClassName("z-2")[0];
const z3 = document.getElementsByClassName("z-3")[0];

const ratio = 0.05;
let x = 0;
let y = 0;

function updateMousePosition(e) {
	x = e.pageX;
	y = e.pageY;
}

// Видаляємо прослуховування mousemove
document.removeEventListener("mousemove", updateMousePosition);

function animation() {
	z1.style.transform = "translate(" + x * ratio + "px," + y * ratio + "px)";

	z2.style.transform =
		"translate(" +
		(x * ratio) / 2 +
		"px," +
		(y * ratio) / 2 +
		"px) rotate(217deg)";

	z3.style.transform =
		"translate(" +
		(x * ratio) / 3 +
		"px," +
		(y * ratio) / 3 +
		"px) rotate(71deg)";

	requestAnimationFrame(animation);
}

// Запускаємо анімацію один раз при завантаженні сторінки
requestAnimationFrame(animation);  