const { ShopeePayApi, Configuration } = require('../sdk/shopee-node');

const configuration = new Configuration({
    basePath: 'https://api.gw.airpay.co.id',
    apiKey: process.env.SHOPEEPAY_TOKEN
});

const shopeePayApi = new ShopeePayApi(configuration);

const test = async () => {
    
    const response = await shopeePayApi.getWalletOverview({
        getWalletOverviewRequest: {
            meta: {
                source: 'shopee',
                os: 1,
                device_id: '123'
            }
        }
    });

    console.log(JSON.stringify(response.data));
};

test();