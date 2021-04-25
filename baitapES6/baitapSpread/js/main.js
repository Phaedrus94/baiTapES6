const jumpText = () => {
  let string = document.querySelector(".heading").innerHTML;
  let character = [...string];

  let content = "";
  character.map((char) => {
    content += `
          <span>${char}</span>
          
      `;
  });
  document.querySelector(".heading").innerHTML = content;
};
jumpText();
