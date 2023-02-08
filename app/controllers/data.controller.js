const db = require("../models");
Data = db.data
DataCategory = db.dataCategory
  
// Get all Categories include datas
exports.findAll = (req, res) => {
  return Data.findAll({
    include: ["dataCategory"],
  }).then((data) => {
    res.json(data)
  });
};

// Get the datas for a given category
exports.findDataCategoryById = (req, res) => {
  return DataCategory.findByPk(req.params.id, { include: ["datas"] })
    .then((category) => {
      // res.json(category)
      res.status(200).send(category);
    });
};

// Get the data for a given data id
exports.findDataById = (req, res) => {
  return Data.findByPk(req.params.id, { include: ["dataCategory"] })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(">> Error while finding data: ", err);
    });
};

//Get All Categories
exports.getAllCategories = (req, res) => {
  DataCategory.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Category Onebyone
exports.getOneCategory = (req, res) => {
  DataCategory.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Create New Category
exports.createCategory = (req, res) => {
  //save new category to database
  DataCategory.create({
    title: req.body.title,
    description: req.body.description,
    parentId:req.body.parentId
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


//Update Category
exports.updateCategory = (req, res) => {
  DataCategory.update(
    {
      title: req.body.title,
      description: req.body.description,
      parentId:req.body.parentId
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};

//Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const postDelete = await DataCategory.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};




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
        type: req.body.type,
        port: req.body.port,
        date: req.body.date,
        price: req.body.price,
        from: req.body.from,
        to: req.body.to,
        owner: req.body.owner,
        runner: req.body.runner,
        total_weight: req.body.total_weight,
        load_weight: req.body.load_weight,
        weight: req.body.weight,
        current_height: req.body.current_height,
        width: req.body.width,
        length: req.body.length,
        full_load: req.body.full_load,
        engine: req.body.engine,
        created: req.body.created,
        factory: req.body.factory,
        location: req.body.location,
        status: req.body.status
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
          type: req.body.type,
          port: req.body.port,
          date: req.body.date,
          price: req.body.price,
          from: req.body.from,
          to: req.body.to,
          owner: req.body.owner,
          runner: req.body.runner,
          total_weight: req.body.total_weight,
          load_weight: req.body.load_weight,
          weight: req.body.weight,
          current_height: req.body.current_height,
          width: req.body.width,
          length: req.body.length,
          full_load: req.body.full_load,
          engine: req.body.engine,
          created: req.body.created,
          factory: req.body.factory,
          location: req.body.location,
          status: req.body.status

            // name: req.body.name,
            // file_url: req.body.file_url,
            // data_type: req.body.data_type,
            // amount: req.body.amount,
            // unit: req.body.unit,
            // specification: req.body.specification,
            // purpose: req.body.purpose,
            // prediction_date: req.body.prediction_date,
            // datacol: req.body.datacol,
            // from: req.body.from,
            // to: req.body.to,
            // browses: req.body.browses
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
