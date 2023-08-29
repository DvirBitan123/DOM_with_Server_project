const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
}
const port = 3000;
app.use(express.json());
app.use(cors(corsOptions))

const router = require('./storeRoute');

app.use('/api', router)

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
})