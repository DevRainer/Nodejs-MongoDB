import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors());

// rota raiz GET LISTAR
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await prisma.user.findMany();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar usuários." });
    }
})

// rota raiz POST INSERIR
app.post('/usuarios', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        });
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário." });
    }
})
// rota PUT ATUALIZAR
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const usuarioAtualizado = await prisma.user.update({
            where: { id },
            data: { name, email, age }
        });
        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
});
// rota DELETE REMOVER
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: { id }
        });
        res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao remover usuário." });
    }
});

app.listen(3000)




//http://localhost:3000




/*import express from 'express'
import { PrismaClient } from '@prisma/client';  
const prisma = new PrismaClient();


const app = express()
app.use(express.json())

const users = []

// rota raiz GET LISTAR

app.get('/usuarios', (req, res) => {

    res.status(200).json(users)

})

// rota raiz POST INSERIR
app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json({ message: "Usuário criado com sucesso!" })
})

app.listen(3000)

//http://localhost:3000*/