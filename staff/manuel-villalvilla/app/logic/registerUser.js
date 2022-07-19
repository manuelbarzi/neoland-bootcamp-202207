function registerUser(name, email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid') // email tipo a@b.cd tiene 6 caracteres
    if (!EMAIL_REGEX.test(email)) throw new error('email is not valid')
    const user = users.find(function(user) {
        return user.email === email
    })

    if (user) {
        callback(new Error ('user already exists'));
        return;
    } 
    users.push({
        name: name,
        email: email,
        password: password
    });

    callback(null)
}