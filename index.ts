// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';
let cookieArray: Cookie[];
const btn1 = document.querySelector("#changeColour-btn");
btn1.addEventListener("click", () => {
  changeColour();
});
const btn2 = document.querySelector("#addChocolateChip-btn");
btn2.addEventListener("click", ()=> {
  addChocolateChip();
})
const addCookie = document.getElementById("addCookie-btn")
addCookie.addEventListener("click", () => {
  bake();
});
const eatCookie = document.getElementById("eatCookie-btn");
eatCookie.addEventListener("click", ()=> {
  eat();
})
// Create a array/list of cookies named cookies




const dropdown:HTMLSelectElement = document.querySelector("#cookieSelector");
const cci:HTMLInputElement = document.querySelector<HTMLInputElement>('#cookieColour-inp');

// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  
  cookieArray = new Array<Cookie>;
  for(let i = 0; i<2; i++)
  {
    cookieArray = [new Cookie(`cookie${i+1}`), ...cookieArray];
  }
  //TODO: add code here
  // create the two cookies
  // add them to the array
  // add them as options in the select/dropdown (cookieSelector) element
  addOptions();
  
  
  // initialise the cookieColour-inp to the colour of the first cookie created
  cci.value = cookieArray[0].colour;
  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  const cookieSpace = document.querySelector('#cookiesDiv');
  cookieSpace.innerHTML = "";
  cookieArray.forEach(item => {
    let cookie = document.createElement('div');
    cookie.className = "cookie";
    cookie.style.backgroundColor = `${item.colour}`;
    cookie.innerText = item.chocolateChipNum.toString();
    cookieSpace.append(cookie);
  })  
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour(_selectedCookie = dropdown.selectedIndex, _colour = cci.value) {
  cookieArray[_selectedCookie].colour = _colour
  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip(_selectedCookie = dropdown.selectedIndex) {
  cookieArray[_selectedCookie].chocolateChipNum += 1;
  updateDisplay();
}
function eat() {
  cookieArray.pop();
  updateDisplay();
}
function bake()
{
  cookieArray.push(new Cookie("cookieName"))
  updateDisplay();


}
function addOptions()
{
  dropdown.innerHTML = "";
  cookieArray.forEach((item, idx) => {
    let element: HTMLOptionElement = document.createElement("option");
    element.value = idx.toString();
    element.innerHTML = item.name;
    dropdown.append(element)
  })
}
function updateDisplay() {
  addOptions();
  drawCookies();
}
init();