import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6gt65pn7',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'your token no',
  useCdn: false,
})
