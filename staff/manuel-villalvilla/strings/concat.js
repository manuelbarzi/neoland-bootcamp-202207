function concat(text, text2) {
    let texto = '';
    for (var i = 0; i < arguments.length; i++) {
        texto += arguments[i];
    }
    return texto;
}