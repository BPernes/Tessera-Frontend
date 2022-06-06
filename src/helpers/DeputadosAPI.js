const getAll = async () => {
    const res = await fetch('http://localhost:3000/api/deputados',)
    return res.json()
}

const getByNome = async (nome) => {
    const res = await fetch(`http://localhost:3000/api/deputados/nome/${nome}`)
    return res.json()
}

const getBySiglaUf = async (siglaUf) => {
    const res = await fetch(`http://localhost:3000/api/deputados/nome/${siglaUf}`)
    return res.json()
}

const getBySiglaPartido = async (siglaPartido) => {
    const res = await fetch(`http://localhost:3000/api/deputados/nome/${siglaPartido}`)
    return res.json()
}

export {
    getAll,
    getByNome,
    getBySiglaUf,
    getBySiglaPartido
}