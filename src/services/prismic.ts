import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown){
  const endpoint = prismic.getEndpoint('ignews12031970')
  const client = prismic.createClient(
    endpoint,
    { accessToken: process.env.PRISMIC_ACCESS_TOKEN }
  )
  client.enableAutoPreviewsFromReq(req);
  return client
}


// const client = prismic.createClient(process.env.PRISMIC_ACCESS_TOKEN,
//   { accessToken: process.env.PRISMIC_ACCESS_TOKEN })
//   client.enableAutoPreviewsFromReq(req);