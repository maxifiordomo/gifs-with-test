import { getGifs } from "../../helpers/GetGifs"


describe('Testea getGifs Fetch', () => {
    test('Debe de retornar diez elementos', async () => {
        const gifs = await getGifs('One Punch')

        expect(gifs.length).toBe(10)
    })
    test('No debe de retornar diez elementos', async () => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })


})