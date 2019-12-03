const appointments = require("../data.json")
let id = 2



module.exports = {
    getAllAppts: (req, res, next) => {
        res.status(200).send(appointments);
    },


    deleteAppt: (req, res, next) => {
        const { id } = req.params;
        const index = appointments.findIndex(appt => {
            return appt.id === +id;
        });
        if(index !== -1) {
            appointments.splice(index, 1);
            res.status(200).send(appointments)
        } else {
            res.status(404).send("No appointments found!")
        }
    },

    postAppt: (req, res, next) => {
        const {
            name ,
            contact ,
            apptDate,
            apptTime ,
            style
        } = req.body;
        const appointment = {
            id,
            name,
            contact,
            apptDate,
            apptTime,
            style
        };
        appointments.push(appointment);
        id++;
        res.status(200).send(appointments)
    },

    updateAppt: (req, res, next) => {
        const { id } = req.params;
        const { apptTime, apptDate, style } = req.body;
        const index = appointments.findIndex((appt) => {
            return appt.id === +id;
        });
        if(index !== - 1) {
            appointments[index].apptTime = apptTime || appointments[index].apptTime;
            appointments[index].apptDate = apptDate || appointments[index].apptDate;
            appointments[index].style = style || appointments[index].style;
            res.status(200).send(appointments)
        } else {
            res.status(404).send("Unable to update")
        }
    }
 



}