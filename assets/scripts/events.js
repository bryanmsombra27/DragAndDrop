const button = document.querySelector("button");
const div = document.querySelector("div");
const form = document.querySelector("form");
const listItems = document.querySelectorAll("li");

const koso = (e) => {
  e.stopPropagation();
  e.preventDefault();
  console.log("jola");<z
};
const koso2 = (e) => {
  e.stopPropagation();
  console.log("jola capturing");
};

// button.addEventListener('click', koso);
//e.target.disable =true;
// setTimeout(() => {
//     button.removeEventListener('click', koso);
//     console.log('el boton ha dejado de funcionar ');
// }, 5000)
div.addEventListener("click", koso2);
button.addEventListener("click", koso);

//EVENT PROPAGATION
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
  e.stopPropagation();
  //   console.log(e.currentTarget);
  console.log(e.target);
  //el ancestro mas cercano 
  e.target.closest("li").classList.toggle("highlight");
  //   form.submit();
  button.click();
});
