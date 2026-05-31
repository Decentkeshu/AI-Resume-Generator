const express = require('express');
const {builderdata,resumedata,updatedata } = require('../controllers/resumecontroller');
const resumerouter = express.Router();

resumerouter.post('/save',builderdata);
resumerouter.get('/:id',resumedata);
resumerouter.put('/update/:id',updatedata);

module.exports = resumerouter;