import {Region} from "@davidkhala/gcp-compute/region.js"
import EC2 from "@davidkhala/aws-ec2/index.js"

export async function getGCP(projectId) {
    const client = new Region(projectId)
    if (!projectId) {
        await client.connect()
    }
    const list = await client.list()
    await client.disconnect()
    return list
}

export async function getAWS() {
    const client = new EC2()
    const regions = await client.regions(true)
    client.disconnect()
    return regions
}