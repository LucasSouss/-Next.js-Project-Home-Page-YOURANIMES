import config from '../config/environment.js'

const jikanService = {
    //Busca o top animes do momento
    getTopAnimes: async (limit = 25) => {
        try {
            const response = await fetch(`${config.jikanApiUrl}/top/anime?limit=${limit}`)

            if (!response.ok){
                throw new Error(`Erro na Jikan API: ${response.status}`)
            }

            const data = await response.json()

            return data.data
        }catch (error){
            console.error('Erro ao buscar animes da Jikan', error.message)
            throw new Error('Não foi possível buscar os animes.')
        }
    },
    //Busca um anime especifico pelo ID
    getAnimesById: async (id) => {
        try {
            const response = await fetch(`${config.jikanApiUrl}/anime/${id}/full`)

            if(!response.ok){
                throw new Error(`Erro na Jikan API: ${response.status}`)
            }

            const data = await response.json()

            return data.data

        } catch (error) {
    
        }
    },

    searchAnimes: async (query) => {
        try{
            const response = await fetch(`${config.jikanApiUrl}/animes?q=${encodeURIComponent(query)}&limit=20`)

            if(!response.ok){
                throw new Error(`Erro na Jikan API: ${response.status}`)
            }

            const data = await response.json()

            return data.data
            
        } catch (error){
            console.error(`ERro ao buscar animes: `, error.message)
            throw new Error('Erro na busca de animes')
        }
    }
}

export default jikanService