const express = require("express");
const app = express();
const { getAllAppts, deleteAppt, postAppt, updateAppt } = require("./controller/apptController")


app.use(express.json())
const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port, ${port}`)
})


app.get('/api/appointments', getAllAppts);

app.delete('/api/appointment/:id', deleteAppt);

app.post("/api/appointments", postAppt);

app.put("/api/appointment/:id", updateAppt);

