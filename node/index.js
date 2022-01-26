import {RegionsClient} from "@google-cloud/compute"
import {getOption} from "@davidkhala/gcp/auth.js"

export class GCPRegion {
	constructor(projectId, client_email, private_key) {
		const opts = {
			credentials: {
				client_email,
				private_key,
			},
			projectId,
		}
		this.client = new RegionsClient(opts)
		this.projectId = projectId
	}

	async list() {

		const [res] = await this.client.list({project: this.projectId},);
		return res.map(({name}) => name)
	}
}


async function main() {


}

main()