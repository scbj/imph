import { createClient } from 'contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master'
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: spaceId,
  accessToken,
  environment
})

function simplifyReference (data) {
  if ('fields' in data && 'sys' in data) {
    const { fields } = data
    if ('file' in fields) {
      return fields.file
    }
    return fields
  }
  return data
}

function simplifyContentfulRefs (data) {
  if (data === null || typeof data !== 'object') {
    return data
  }

  // If it's an array
  if (Array.isArray(data)) {
    return data.map(value => simplifyContentfulRefs(value))
  }

  // If it's an object
  data = simplifyReference(data)
  Object.keys(data).forEach(key => {
    data[key] = simplifyContentfulRefs(data[key])
  })
  return data
}

async function fetchEntries (contentType) {
  try {
    const entries = await client.getEntries({
      content_type: contentType
    })
    return entries.items.map(item => item.fields)
  } catch (error) {
    console.log(`Failed to fetch entries ${contentType}.`, error)
  }
}

export async function handler (event, context, callback) {
  try {
    const categories = await fetchEntries('category')
    if (categories) {
      return callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(simplifyContentfulRefs(categories))
      })
    }
  } catch (error) {
    console.log('Failed to handle function.', error)
  }

  try {
    callback(null, {
      statusCode: 500
    })
  } catch (error) {
    console.log('Failed to send 500 status code.')
  }
}
