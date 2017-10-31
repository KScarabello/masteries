module.exports = {
    createDog: (req, res) => {
        const {name, activity_level, description} = req.body;

        req.app.get('db').create_dog([name, activity_level, description])
            .then((dog) => {
                console.log(dog)
                res.status(200).send(dog);
            }).catch((err) => {
                  res.status(500).send(err)})
    
    },
    getDog: (req, res) => {
        req.app.get('db').get_dog()
            .then((dog) => {
                res.status(200).send(dog);
            }).catch((err) => {
                res.status(500).send(err)})
            }
    }               
