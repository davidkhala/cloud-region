import {getAWS} from "../index.js";

describe('aws', function () {
    this.timeout(0)
    it('', async () => {
        const regions = await getAWS()
        for (const region of regions) {
            console.debug(region)
        }
    })
})