import {execSync} from '@davidkhala/light/devOps.js'
import {API, QueryBuilder} from "@davidkhala/gcp-format/region/api.js";
import fs from 'node:fs'
import {FromFile, ToFile} from '@davidkhala/csv/index.js'

describe('location finder', function () {
    this.timeout(0)
    const token = execSync('gcloud auth print-access-token').trim()
    const projectId = execSync('gcloud config get-value project').trim()
    const f = new API(token, projectId)
    it('', async () => {
        const file = '../regions.csv'
        const {data, meta} = FromFile(file, false, ',')

        const fields = ['Country Code', 'AWS', 'AZURE', 'GCP', 'OCI']
        for (const row of data) {
            const code = row['Country Code']
            const query = new QueryBuilder().condition('territory_code', '=', code)
            const results = await f.list(query.build())
            if (results) {
                const aws = [], azure = [], gcp = [], oci = []
                for (const {displayName, cloudProvider} of results) {
                    switch (cloudProvider) {
                        case 'CLOUD_PROVIDER_AWS':
                            aws.push(displayName)
                            break;
                        case 'CLOUD_PROVIDER_GCP':
                            gcp.push(displayName)
                            break;
                        case 'CLOUD_PROVIDER_AZURE':
                            azure.push(displayName)
                            break;
                        case 'CLOUD_PROVIDER_OCI':
                            oci.push(displayName)
                            break;
                    }
                }
                row['AWS'] = aws
                row['AZURE'] = azure
                row['GCP'] = gcp
                row['OCI'] = oci
            }

        }
        fs.writeFileSync(file, ToFile({data, fields}, {newline: meta.linebreak}))

    })
})
