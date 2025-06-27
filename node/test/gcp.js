import {getGCP} from '../index.js'

describe('gcp', function () {
    this.timeout(0)
    const {client_email, private_key} = process.env

    it('with projectId', async () => {
        const projectId = 'freetier-only'
        const result = await getGCP({client_email, private_key, projectId})
        console.debug(result)
        // 827ms
    })
    it('without projectId', async () => {
        const result = await getGCP({client_email, private_key})
        console.debug(result)
        // 2488ms
    })
})
