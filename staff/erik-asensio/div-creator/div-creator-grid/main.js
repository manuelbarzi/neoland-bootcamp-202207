var body = document.querySelector("body")

body.style.height="100%"
body.style.margin="0"
body.style.display="grid"
body.style.gridTemplateColumns="8"

const colors=["red"," black","blue","orange","yellow","pink","violet", "gold" ,"white", "green"]

    for(var j = 0; j < 8 ; j++){
        for(var i = 1; i < 9 ; i++){
            var element = document.createElement("div")
            element.style.gridColumn= i
            element.style.width = "50px"
            element.style.height = "50px"
            element.style.backgroundColor = colors[i-1]
            element.style.border= "black solid 1px"
        
            body.append(element);
        }
    }
