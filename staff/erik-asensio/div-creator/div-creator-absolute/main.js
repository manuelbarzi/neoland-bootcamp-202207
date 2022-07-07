var body = document.querySelector("body")

body.style.height="100%"
body.style.margin="0"

var left = 0
var topValue = 0
const colors=["red"," black","blue","orange","yellow","pink","violet", "gold" ,"white", "green"]

    for(var i = 0; i < 8 ; i++){
        for(var j = 0; j < 8 ; j++){
            var element = document.createElement("div")
            element.style.position="absolute"
            element.style.left= left + "px"
            left= left + 50
            element.style.width = "50px"
            element.style.height = "50px"
            element.style.border= "black solid 1px"
            body.append(element);
            element.style.top=topValue+"px"
        } 
        left= 0
        topValue = topValue + 50
        
    }