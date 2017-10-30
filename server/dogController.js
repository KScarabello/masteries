module.exports = {
    createDog: (req, res) => {
        const {name, activityLevel, description} = req.body;

        req.app.get('db').create_dog(name, activityLevel, description)
            .then(dog => {
                console.log(dog)
                res.status(200).send(dog);
            }).catch(err => {
                  res.status(500).send(err)})
    
    }
}