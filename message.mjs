import { state_info } from "./state_info.mjs"
import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = 3000

app.get('/stateinfo/:statecode', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(state_info[req.params.statecode] );
})

app.listen(PORT)

// To test HTTP GET:
//   curl localhost:3000/stateinfo/WA
//   curl localhost:3000/stateinfo/CA
//     etc...