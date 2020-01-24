const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {  
  if (req.query.buscar === "Osasco" || req.query.buscar === undefined) {
    res.render("pages/home", {
      locale: {
        id: 3735,
        name: "Osasco",
        state: "SP",
        latitude: -23.532,
        longitude: -46.792
      },
      weather: [
        {
          date: "2020-01-01",
          text:
            "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
          temperature: {
            min: 10,
            max: 20
          },
          rain: {
            probability: 60,
            precipitation: 20
          }
        },

        {
          date: "2020-01-02",
          text:
            "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
          temperature: {
            min: 20,
            max: 29
          },
          rain: {
            probability: 60,
            precipitation: 15
          }
        }
      ]
    });
  }else if(req.query.buscar === 'São Paulo'){
    res.render("pages/home", {
          locale: {
            id: 3477,
            name: "São Paulo",
            state: "SP",
            latitude: -23.548,
            longitude: -46.636
          },
          weather: [
            {
              date: "2017-02-01",
              text:
                "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
              temperature: {
                min: 19,
                max: 27
              },
              rain: {
                probability: 60,
                precipitation: 20
              }
            }
          ]
        });
  }else{
    res.send('CIdade não disponível');
  }
});

module.exports = router;
