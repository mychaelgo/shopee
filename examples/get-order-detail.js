const { ShopeeMallApi, Configuration } = require('../sdk/shopee-node');

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
    
    const response = await shopeeMallApi.getOrderDetail({
        orderId: 124479982112336
    });

    console.log(JSON.stringify(response.data));
};

test();