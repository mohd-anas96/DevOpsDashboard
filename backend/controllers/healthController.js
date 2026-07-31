exports.health = (req, res) => {

    res.status(200).json({

        status: "UP",

        message: "Application is Healthy"

    });

};