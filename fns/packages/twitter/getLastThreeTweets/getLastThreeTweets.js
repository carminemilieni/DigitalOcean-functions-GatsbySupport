async function main() {
    const axios = require("axios");
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    const userId = process.env.TWITTER_USER_ID;
    const maxResults = 5;
    const endpointUrl = `https://api.twitter.com/2/users/${userId}/tweets?max_results=${maxResults}`;

    const headers = {
        'Authorization': `Bearer ${bearerToken}`,
        'User-Agent': 'axios'
    };

    try {
        const response = await axios.get(endpointUrl, {headers});
        let {data} = response.data;
        const body = data.slice(0, 3).map(twitt => ({
            id: twitt.id,
            text: twitt.text
        }));
        return {
            body
        };
    } catch (e) {
        const {response} = e;
        if (response && response.data) {
            return {
                body: response.data,
                statusCode: response.status
            };
        } else {
            throw new Error(e);
        }

    }
}

exports.main = main