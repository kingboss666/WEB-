import nav from "./nav";
import makeButton from "./button";
import {makeColor} from "./color";
import {divTop,divBottom} from "./footer";

console.log(nav);
const button = makeButton("我是按钮");
document.body.appendChild(button);
const color = makeColor("green");
button.style.color = color;

document.body.appendChild(divTop);
document.body.appendChild(divBottom);