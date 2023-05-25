import { Button } from "../ui/button.js";
import { Image } from "../ui/image.js";

let i = new Image('./img/jQuery.gif', 'jQuery-Logo', 'jQueryImg');
i.appendToElement($('.div-format'));
i.element.addClass('sty-img-small');


let b = new Button('Demo Button');
b.appendToElement($(".fadeToggleButton"));
b.element.click(() => $('.sty-img-small').fadeToggle(3000))
    
