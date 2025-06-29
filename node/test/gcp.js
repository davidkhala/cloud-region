import {getGCP} from '../index.js'

describe('gcp', function () {
    this.timeout(0)
    const {client_email, private_key} = process.env
    const auth = process.env.CI ? {
        client_email, private_key, projectId: 'freetier-only'
    } : undefined
    it('list', async () => {
        const result = await getGCP(auth)
        console.debug(result)
    })

})
