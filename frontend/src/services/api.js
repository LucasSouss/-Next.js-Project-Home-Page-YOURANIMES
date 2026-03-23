import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api'

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const animeService = {
    getTopAnimes: async (limit = 25) => {
        try{
            const response = await api.get(`/animes?limit=${limit}`)
            return response.data
            
        }catch (error){
            console.error('Erro ao buscar animes:', error)
            throw error
        }
    },

    getAnimeById: async (id) => {
        try{
            const response = await api.get(`/animes/${id}`)
            return response.data
        }catch (error){
            console.error('Erro ao buscar anime ${id}', error)
            throw error
        }
    },

    searchAnimes: async (query) => {
        try{
            const response = await api.get(`/animes/search?q=${encodeURIComponent(query)}`)
            return response.data
        }catch (error){
            console.error('Erro na busca', error)
            throw error
        }
    }
}

export default api