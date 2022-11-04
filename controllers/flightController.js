const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

// Add/Book FLight
exports.addFlight = async(req,res) => {
    try{
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        }

        Flights.push(newFlight);
        res.status(201).json({
            message: 'Flight Created',
            newFlight,
        })
    }
    catch (err){
        res.status(500).json({meassage: err.message})
    }
}


// Get All Flight
exports.getFlights = async(req,res) => {
    try{
        const flights = Flights;

        res.status(200).json({
            meassage: "All flights",
            flights,
        })
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
}


// Get Single Flight
exports.getFlight = async(req,res) =>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);

        res.status(200).json({
            message: "Flight Found",
            flight,
        })
    }
    catch{err} {
        res.status(500).json({message: err.message});
    }
}

// Update/Edit Flight
exports.updateFlight = async (req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const { title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;

        res.status(200).json({
            message: "Flight Updated",
            flight,
        });
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  
 // Delete Flight
  exports.deleteFlight = async (req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);

        res.status(200).json({
            message: "Flight deleted",
            flight,
        });
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


