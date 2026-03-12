import dotenv from 'dotenv'

dotenv.config()

export default {
    port: process.env.PORT || 3333,

    jikanApiUrl: process.env.JIKAN_API_URL || 'https://api.jikan.moe/v4',

    isDevelopment: process.env.NODE_ENV !== 'production'
}