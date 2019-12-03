# no db project (Hair Appointment Scheduler)


## front-end checklist

- reset.css ==> eric meyers 2.0 reset
- package.json
    - main: server/index.js
- setupProxy.js => 4000    

### front-end file structure

- src/
    App.js => class
    - index.js
    - App.css
    - index.css => paste reset
    - setUpProxy.js
    - components/
        - ClientApptCard.js
        - ApptList.js
        - Button.js
        - ClientForm.js


### dependencies

- axios
- http-proxy-middleware
- react-icons

## back-end checklist


### back-end file structure

- server/
    -index.js
    -controller/
        -apptController.js

### dependencies
 - express
- axios

### API routes

- get: `api/appointments`
- post: `api/appointments`
- put: `api/appointment/:id` {body: name, contact, apptDate, apptTime, style}
- delete: `api/appointment/:id`

```js
    app.put(`/api/appointment:id`, (req, res, next) => {
        const { name, contact, apptDate, apptTime, style } = req.body;
    })
```

### data

```js
const appointment = {
    id: Number,
    name: String,
    contact: Number
    apptDate: Date,
    apptTime: Number,
    style: String

}
```