import algoliaSearch from 'algoliasearch/lite'

import { getEnvs } from './getEnvs'

const algoliaAppId = getEnvs<string>('ALGOLIA_APP_ID')
const algoliaApiKey = getEnvs<string>('ALGOLIA_API_KEY')

export const algoliaClient = algoliaSearch(algoliaAppId, algoliaApiKey)
