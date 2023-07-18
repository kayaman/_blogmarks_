import { createClient } from '@sanity/client'

import { SANITY_PROJECT_ID, SANITY_DATASET } from '$lib/constants'

if (!SANITY_PROJECT_ID || !SANITY_DATASET) {
	throw new Error('Could not load Sanity credentials. Please check your environment variables.')
}

const sanityClient = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	useCdn: false,
	apiVersion: '2023-07-17',
})

export default sanityClient
