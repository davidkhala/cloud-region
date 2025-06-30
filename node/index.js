import EC2 from "@davidkhala/aws-ec2/index.js"


export async function getAWS() {
    const client = new EC2()
    const regions = await client.regions(true)
    client.disconnect()
    return regions
}