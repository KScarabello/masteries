module.exports = {
    
    getEvents: (req, res, next) => {
        req.app.get('db').get_events()
            .then(events => {

                console.log(events)
                res.status(200).send(events) 
            })

    }
}