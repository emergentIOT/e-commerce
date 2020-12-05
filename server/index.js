const express = require('express');
const path = require('path');
const port = process.env.PORT || 7040;
const app = express();

//dist folder
const directory = '/Users/samandeep/codingProjects/YouTubeCloneProjects/ecommerce/ecommerce-app/dist/ecommerce-app';

app.use(express.static(directory));
console.log("Hosting dist files", directory);

//Serving index.html of angular
app.get('*', (req, res) => {
    res.sendfile(path.join(directory, 'index.html'));
});

//Initialize app 
app.listen(port, ()=>console.log(`Server is runnning... at ${port}`));

