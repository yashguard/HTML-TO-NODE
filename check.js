const check = (req, res, next) => {
    let {name, password} = req.body
    if(name && password) {
        next()
    } else {
        res.send("Invalid field")
    }
}

module.exports = check