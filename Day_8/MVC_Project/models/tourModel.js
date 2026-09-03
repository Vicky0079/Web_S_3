// const fs = require('fs');
// const path = require('path');

// const packageFilePath = path.join(__dirname, '../data/tour.json');
//  const getAll = () => {
//     const data = fs.readFileSync(packageFilePath, 'utf-8');
//     return JSON.parse(data);
//  }
//  const getById = (id) => {
//     const data = fs.readFileSync(packageFilePath, 'utf-8');
//     const packages = JSON.parse(data);
//     return packages.find((tour) => tour.id === id);
// }

// module.exports = {
//     getAll,
//     getById
// }
// ---------------------------------------------------------------------
// const tourModel = require("../model/tourModel");
// const getAllTours = (req,res)=>{
//     const tours = tourModel.getAll();
//     res.json(tours);
// }

// const getTourByID = (req,res)=>{
//     const id = parseInt(req.params.id);
//     const tour = tourModel.getByID(id);
//     if(tour){
//         res.status(200).json(tour);
//     } 
//     else {
//         res.status(404).json({message: "Tour not found"});
//     }
// }

// const createTour =  (req,res)=>{
//     const newTour = req.body;
//     tourModel.save(newTour);
//     res.status(201).json(newTour);
// }

// module.exports = {
//     getAllTours,
//     getTourByID,
    
// }
// ----------------------------------------------------------------
// const fs = require('fs');
// const path = require('path');

// const packageFilePath = path.join(__dirname, '../data/tour.json');

// const update = (id, updatedTour) => {
//     const data = fs.readFileSync(packageFilePath, 'utf-8');
//     const tours = JSON.parse(data);
//     const index = tours.findIndex((tour) => tour.id === id);
//     if (index !== -1) {
//         packages[index] = { ...packages[index], ...updatedTour };
//         fs.writeFileSync(packageFilePath, JSON.stringify(tours, null, 2), 'utf-8');
// }   
// }

// const deleteTour = (id) => {
//     const data = fs.readFileSync(packageFilePath, 'utf-8');
//     const tours = JSON.parse(data);
//     const index = tours.findIndex((tour) => tour.id === id);
//     if (index !== -1) {
//         tours.splice(index, 1);
//         fs.writeFileSync(packageFilePath, JSON.stringify(tours, null, 2), 'utf-8');
//     }
