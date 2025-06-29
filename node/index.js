import {Region} from "@davidkhala/gcp-compute/region.js"
import EC2 from "@davidkhala/aws-ec2/index.js"

export async function getGCP(auth) {
    const region = new Region(auth)
    await region.connect()
    const list = await region.list()
    await region.disconnect()
    return list
}

export async function getAWS() {
    const client = new EC2()
    const regions = await client.regions(true)
    client.disconnect()
    return regions
}