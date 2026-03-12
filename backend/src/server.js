import express from 'express'
import cors from 'cors'
import env from './config/environment.js'
import animeRoutes from './routes/animeRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())

// Middleware simples de log (mostra no console todas as requisições)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
    next()
})

app.use('/api/animes', animeRoutes)

app.use('/', (req, res) => {
    res.json({
        message: 'API do site de animes está rodando!',
        endpoints: {
            animes: '/api/animes',
            busca: '/api/animes/search?q=nome',
            detalhe: '/api/animes/:id'
        }
    })
})

app.use((err, req, res, next) => {
    console.error('Erro na aplicação:', err);
    res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
    });
});

app.listen(env.port, () => {
    console.log(`
    ==================================
    🚀 Servidor rodando com sucesso!
    ==================================
    📡 Porta: ${env.port}
    🌐 Ambiente: ${env.isDevelopment ? 'Desenvolvimento' : 'Produção'}
    📝 API Docs: http://localhost:${env.port}
    🎯 Animes: http://localhost:${env.port}/api/animes
    ==================================
    `);
})