module.exports = {
    register: async (req, res) => {
        const db = req.app.get("db")

        const {username, password} = req.body

        let user = await db.register({username, password})

        user=user[0]

        res.status(200).send(user)
    },
    login: async (req, res) => {
        const db = req.app.get("db")

        const {username, password} = req.body
        let user = await db.login({username, password})

        user=user[0]
        if (!user){
            return res.status(409).send(`wrong username or password`)
        }
        res.status(200).send("all good")
    }
}