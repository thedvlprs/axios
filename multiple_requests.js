const axios = require('axios');

async function makeRequest() {
    let [u1, u2] = await Promise.all([
        axios.get('https://api.github.com/users/hellosophiee'),
        axios.get('https://api.github.com/users/janbodnar'),
    ]);

    console.log(`Hello Sophie: ${u1.data.created_at}`);
    console.log(`Jan Bodnar: ${u2.data.created_at}`);
}

makeRequest();
