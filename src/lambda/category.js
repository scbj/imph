import { createClient } from 'contentful'

const spaceId = '1y3017a9dcjq'
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master'
const accessToken = 'aaefe1c8eb11c85a905bada087ab417f4062f5a54c808142a811c83c74155d65'

const client = createClient({
  space: spaceId,
  accessToken,
  environment
})

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
        body: JSON.stringify(categories.map(category => {
          // Delete the intermediate node created by Contentful
          const { videos, backgroundVideo, ...fields } = category
          return {
            ...fields,
            backgroundVideoUrl: backgroundVideo && backgroundVideo.fields.file.url,
            videos: videos && videos.map(video => video.fields)
          }
        }))
      })
    }
  } catch (error) {
    console.log('Failed to handle function.')
  }

  try {
    callback(null, {
      statusCode: 500
    })
  } catch (error) {
    console.log('Failed to send 500 status code.')
  }
}
