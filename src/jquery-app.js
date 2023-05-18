import { Button } from "../ui/button.js";

let fadeToBlack = () => { 
    $(".jQuery-logo").fadeToggle();
}


let b = new Button('Demo Button');
b.appendToElement($('div'));