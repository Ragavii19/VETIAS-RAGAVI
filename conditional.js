console.log("CONDITIONAL STATEMENT")
var light = "green"

if(light == "red")
{
    console.log("STOP")
}

 else if(light == "white")
{
    console.log("READY")
}

 else if(light == "green")
 {
    console.log("GO !!")
 }

 else {
    console.log("INVALID LIGHT COLOUR")
 }

 console.log("outside if")

 console.log("SWITCH STATEMENT")
 var signal = "white"
    switch(signal)
    {
        case "red":
        console.log("STOP...");
        break;

case "green":
        console.log("GO!!...");
        break;

default:
        console.log("invalid signal...");
        break;

    }