describe('retrieveNotes', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('returns notes for an existing user with notes', () => {
        const peTete = {
            id: 'user-34534345',
            name: 'Pe Tete',
            email: 'pe@tete.com',
            password: '123123123'   
        }

        const peTeta = {
            id: 'user-34534346',
            name: 'Pe Teta',
            email: 'pe@teta.com',
            password: '123123123'   
        }

        users.push(peTete, peTeta)

        const note1 = {
            id: 'note-23423424',
            text: 'hola mundo',
            user: peTete.id
        }

        const note2 = {
            id: 'note-23423425',
            text: 'hello world',
            user: peTete.id
        }

        const note3 = {
            id: 'note-23423425',
            text: 'ciao mondo',
            user: peTeta.id
        }

        notes.push(note1, note3, note2)

        retrieveNotes(peTete.id, (error, notes) => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(2)
        })
    })

    it('returns error for a non-existing user', () => {
        const peTete = {
            id: 'user-34534345',
            name: 'Pe Tete',
            email: 'pe@tete.com',
            password: '123123123'   
        }

        const peTeta = {
            id: 'user-34534346',
            name: 'Pe Teta',
            email: 'pe@teta.com',
            password: '123123123'   
        }

        users.push(peTete, peTeta)

        const note1 = {
            id: 'note-23423424',
            text: 'hola mundo',
            user: peTete.id
        }

        const note2 = {
            id: 'note-23423425',
            text: 'hello world',
            user: peTete.id
        }

        const note3 = {
            id: 'note-23423425',
            text: 'ciao mondo',
            user: peTeta.id
        }

        notes.push(note1, note3, note2)

        const unknownUserId = 'user-782347234'

        retrieveNotes(unknownUserId, (error, notes) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with id ' + unknownUserId + ' not found')

            expect(notes).toBeUndefined()
        })
    })
})