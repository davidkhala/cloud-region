import {getGCP, getAWS} from '../index.js'

describe('gcp', function () {
    this.timeout(0)
    it('with projectId', async () => {
        const projectId = 'freetier-only'
        const result = await getGCP(projectId)
        console.debug(result)
        // 827ms
    })
    it('without projectId', async () => {
        const result = await getGCP()
        console.debug(result)
        // 2488ms
    })
})
describe('aws', function () {
    this.timeout(0)
    it('', async () => {
        const regions = await getAWS()
        for(const region of regions){
            console.debug(region)
        }
    })
})