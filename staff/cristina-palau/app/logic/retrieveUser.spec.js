describe('retrieveUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on correct credentials', () => { // happy path :)
        const name = 'Pato Lucas'
        const email = 'pato@lucas.com'
        const password = '123123123'

        const patoLucas = {
            name,
            email,
            password
        }

        users.push(patoLucas)

        retrieveUser(email, (error, user) => {
            expect(error).toBeNull()
            
            expect(user).toBeDefined()
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)
            expect(user.password).toBe(password)
        })
    })

        it('should fail on incorrect email', () => { // unhappy path :(
            const name = 'Pato Donald'
            const email = 'pato@donald.com'
            const password = '123123123'

            const patoDonald = {
                name,
                email,
                password
            }

            users.push(patoDonald)

            const wrongEmail ='pato@donald.us'

            try {
            retrieveUser(wrongEmail, (error, user) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('user with email ' + wrongEmail + ' not found')
                
                expect(user).toBeUndefined
                        })
        } catch(error) {
            expect(error).toBeInstanceOf(error)
            expect(error.message).toBeInstanceOf('email is not valid')
        }
        })
    })