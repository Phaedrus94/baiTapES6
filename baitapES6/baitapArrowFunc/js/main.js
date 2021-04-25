const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const loadListButton = () => {
  let content = "";
  colorList.map((color) => {
    content += `
    <button class="color-button ${color}" value="${color}"></button>
    `;
  });

  document.getElementById("colorContainer").innerHTML = content;
};
loadListButton();

let arrButton = document.querySelectorAll("#colorContainer button");

//lặp qua danh sách tag button
arrButton.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("value");
    //remove class active
    arrButton.forEach((btn) => {
      btn.classList.remove("active");
    });

    //add class active khi click
    button.classList.add("active");

    //add class màu vào house
    let color = document.getElementById("house");
    if (color) {
      color.classList.add(value);
    } else {
      console.log("Có Lỗi Xảy Ra");
    }
  });
});
