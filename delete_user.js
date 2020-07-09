const axios = require('axios');

async function makePostRequest() {
    let res = await axios.delete('http://localhost:3000/users/2/');

    console.log(res.status);
}

makePostRequest();
