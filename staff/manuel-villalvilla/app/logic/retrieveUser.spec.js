describe('retrieveUser', () => {
    beforeEach(() => { // reseteo users para que quede vacio antes de los tests
        users.length = 0;
    })
    it('should succeed with found user', () => { // happy path :)
        const name = 'Pi Tufo'
        const email = 'pi@tufo.com'
        const password = '123123123'

        const pitufo = {
            name,
            email,
            password
        }

        users.push(pitufo);

        retrieveUser(email, (error, user) => { // tengo q añadir user para q si no da error devuelva user
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.email).toBe(email)
            expect(user.name).toBe(name)
            expect(user.password).toBe(password)
            
        })
    })

    it('should fail on user not found', () => { // unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

        // const user = {
        //     name: name,
        //     email: email,
        //     password: password
        // }
        // lo de arriba equivale a esto:
        const elefante = {
            name,
            email,
            password
        }
        
        users.push(elefante)

        retrieveUser('ele@fante.us', (error, user) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with email ele@fante.us not found')

            expect(user).toBe(undefined)
        })
    })

    it('should fail on incorrect email structure provided', () => { // unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

        // const user = {
        //     name: name,
        //     email: email,
        //     password: password
        // }
        // lo de arriba equivale a esto:
        const elefante = {
            name,
            email,
            password
        }
        
        users.push(elefante)

        try {
            retrieveUser('ele@fante.us', (error, user) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('user with email ele@fante.us not found')
    
                expect(user).toBe(undefined)
            })
        }
        catch {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('email is not valid')
        }
    })

})