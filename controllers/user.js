const FB = require('fb');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  login_fb: (req, res) => {
    let token = req.body.token
    FB.setAccessToken(token);

    FB.api('/me', {
      fields: ['name', 'email', 'picture'],
    }, 'GET', (response) => {
      User.findOne({
          email: response.email
        })
        .then(userData => {
          if (!userData) {
            User.create({
                image: response.picture.data.url,
                name: response.name,
                email: response.email,
                fbid: response.id,
              })

              .then(resultInput => {
                let token = jwt.sign({
                  id: resultInput._id,
                  name: resultInput.name,
                  email: resultInput.email
                }, process.env.SECRET_TOKEN)

                res
                  .status(200)
                  .json({
                    id: resultInput._id,
                    name: resultInput.name,
                    email: resultInput.email,
                    image: resultInput.image,
                    token
                  })
              })

              .catch(err => {
                res
                  .status(400)
                  .json(err)
              })
          } else {
            let token = jwt.sign({
              id: userData._id,
              name: userData.name,
              email: userData.email
            }, process.env.SECRET_TOKEN)

            res
              .status(200)
              .json({
                id: userData._id,
                name: userData.name,
                email: userData.email,
                image: userData.image,
                token
              })
          }
        })

        .catch(err => {
          res
            .status(400)
            .json(err)
        })
    });
  }
}
