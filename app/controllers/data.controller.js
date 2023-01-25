const db = require("../models");
Data = db.data

// Get All Datas
exports.allData = (req, res) => {
    Data.findAll({
    }).then(result => {
        res.status(200).send(result);
    });
};

//Get Program Onebyone
exports.oneData = (req, res) => {
    Data.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.status(200).send(result)
    })
  }

// Create New Data
exports.createData = (req, res) => {
    // Save Data to Database
    Data.create({
        name: req.body.name,
        file_url: req.body.file_url,
        data_type: req.body.data_type,
        amount: req.body.amount,
        unit: req.body.unit,
        specification: req.body.specification,
        purpose: req.body.purpose,
        prediction_date: req.body.prediction_date,
        datacol: req.body.datacol,
        from: req.body.from,
        to: req.body.to,
        browses: req.body.browses
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Data
exports.updateData = (req, res) => {
    Data.update(
        {
            name: req.body.name,
            file_url: req.body.file_url,
            data_type: req.body.data_type,
            amount: req.body.amount,
            unit: req.body.unit,
            specification: req.body.specification,
            purpose: req.body.purpose,
            prediction_date: req.body.prediction_date,
            datacol: req.body.datacol,
            from: req.body.from,
            to: req.body.to,
            browses: req.body.browses
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};

// Delete Data
exports.deleteData = async (req, res) => {
    try {
      const postDelete = await Data.destroy({ where: { id: req.params.id } });
      res.json(postDelete)
    } catch (error) {
      console.log(error)
    }
  };
