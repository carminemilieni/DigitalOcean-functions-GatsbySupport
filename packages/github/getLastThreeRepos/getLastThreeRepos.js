const {Octokit} = require("@octokit/rest");

async function main() {
    const octokit = new Octokit({
        auth: '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'
    });
    const username = process.env.GITHUB_USERNAME;

    try {
        const response = await octokit.rest.repos
            .listForUser({
                username,
                per_page: 3,
                sort: 'updated'
            })

        let {data} = response;

        const body = data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            url: item.html_url,
        }))

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

exports.main = main;