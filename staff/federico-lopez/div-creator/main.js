var body = document.querySelector('body')
// var body = document.getElementsByTagName('body')

const colors = ['red', 'black', 'blue', 'orange', 'yellow', 'pink', 'violet', 'gold', 'white', 'green']

for (var i = 0; i < 10; i++) {
    var element = document.createElement('div')

    element.style.backgroundColor = 'red'
    body.append(element)
}