const { ShopeeMallApi, Configuration } = require('../sdk/shopee-node/dist');

const test = async () => {
    const configuration = new Configuration({
        basePath: 'https://shopee.co.id',
        baseOptions: {
            headers: {
                cookie: process.env.SHOPEEMALL_TOKEN // SPC_EC=...
            }
        }
    });
    const shopeeMallApi = new ShopeeMallApi(configuration);
    
    const response = await shopeeMallApi.getOrderList({
        limit: 10,
        listType: 3, // completed
        offset: 0
    });

    console.log(JSON.stringify(response.data));
};

test();