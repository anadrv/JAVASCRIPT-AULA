const button = document.querySelector(".btnOpen");
const modal = document.querySelector("dialog");
const btn = document.querySelector(".btn")



button.onclick = function () {
    modal.showModal()
};

btn.onclick = function () {
    modal.close()
};


//const button = document.querySelector("button");
//const modal = document.querySelector("dialog");

//button.onclick = function () {
   // modal.show()
//};

