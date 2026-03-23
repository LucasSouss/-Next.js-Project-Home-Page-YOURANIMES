import jikanService from '../services/jikanService.js'

const animeController = {
    getTopAnimes: async (req, res) => {
        try{
            const limit = req.query.limit ? parseInt(req.query.limit) : 25

            const animes = await jikanService.getTopAnimes(limit)

            res.status(200).json({
                success: true,
                count: animes.length,
                data: animes
            })

        } catch (error){
            res.status(500).json({
                success: false,
                message: error.message || 'Erro interno do servidor'
            })
        }
    },

    getAnimesById: async (req, res) => {
        try{
            const {id} = req.params

            if (isNaN(id)){
                return res.status(400).json({
                    success: false,
                    message: 'ID inválido'
                })
            }

            const anime = await jikanService.getAnimesById(parseInt(id))

            res.status(200).json({
                success: true,
                data: anime
            })

        } catch (error){
            if(error.message.includes('não encontrado')) {
                return res.status(404).json({
                    success: false,
                    message: 'Anime não encontrado.'
                })
            }
            res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            })
        }
    },

    searchAnimes: async (req, res) => {
        try {
            const {q} = req.query

            if (!q) {
                return res.status(400).json({
                    success: false,
                    message: 'Termo de busca não encontrado'
                })
            }

            const animes = await jikanService.searchAnimes(q)

            res.status(200).json({
                success: true,
                count: animes.length,
                data: animes
            })
        }catch (error){
            res.status(500).json({
                success: false,
                message: 'Erro na busca'
            })
    }
    }
}

export default animeController