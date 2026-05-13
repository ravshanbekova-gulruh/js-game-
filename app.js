// JS Codes

// Kerakli html tag lariga ulanish
const first_player_img = document.querySelector(".first_player");
const second_player_img = document.querySelector(".second_player");
const result_text = document.querySelector(".result");
const btn = document.querySelector(".btn");

// tasodifiy sonlar uchun funksiya
function getRandomNumbers(num) {
  return Math.round(Math.random() * num);
}

function setImageAttribute(random_num, img) {
  if (random_num == 0) {
    img.setAttribute("src", "./img/rock.png");
  } else if (random_num == 1) {
    img.setAttribute("src", "./img/scissors.png");
  } else {
    img.setAttribute("src", "./img/paper.png");
  }
}

// button ga event qo'shish
btn.addEventListener("click", () => {
  // tasodifiy sonlarni generatsiya qilish
  const first_random_number = getRandomNumbers(2);
  const second_random_number = getRandomNumbers(2);

  // birinchi o'yinchi uchun tasodifiy rasm chiqarish
  setImageAttribute(first_random_number, first_player_img);

  // ikkinchi o'yinchi uchun tasodifiy rasm chiqarish
  setImageAttribute(second_random_number, second_player_img);

  // O'yin natijasini e'lon qilish

  if (
    (first_random_number == 0 && second_random_number == 1) ||
    (first_random_number == 1 && second_random_number == 2) ||
    (first_random_number == 2 && second_random_number == 0)
  ) {
    result_text.textContent = "Birinchi o`yinchi yutdi";
  } else if (first_random_number == second_random_number) {
    result_text.textContent = "Durang!";
  } else {
    result_text.textContent = "Ikkinchi o`yinchi yutdi";
  }
});
