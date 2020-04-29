

import{BasicPhone} from "./basicphone";
import{SmartPhone} from "./smartphone";
import{Mobile} from "./mobile";
let basicphone:BasicPhone=new BasicPhone(1,"Samsung",3000,"keypad");
let  smartphone:SmartPhone=new SmartPhone(2,"Nokia",2000,"touchscreen");
let mobiles:Mobile[]=[];
mobiles.push(basicphone);
mobiles.push(smartphone);
for(let mobile of mobiles)
{
    mobile.display();
}