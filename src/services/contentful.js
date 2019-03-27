import { createClient } from 'contentful'

const spaceId = '1y3017a9dcjq'
const accessToken = 'aaefe1c8eb11c85a905bada087ab417f4062f5a54c808142a811c83c74155d65'

const client = createClient({
  space: spaceId,
  accessToken
})

async function fetchEntries (contentType) {
  try {
    const entries = await client.getEntries({
      content_type: contentType
    })
    return entries.items.map(item => item.fields)
  } catch (error) {
    console.log(error)
  }
}

export function getCategories () {
  return fetchEntries('category')
}
