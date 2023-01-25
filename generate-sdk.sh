# https://docs.github.com/en/packages/quickstart

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/docs/shopee.yaml -g typescript-axios --additional-properties=npmRepository=https://npm.pkg.github.com,stringEnums=true,modelPropertyNaming=original,npmName=@mychaelgo/shopee,useSingleRequestParameter=true -o /local/sdk/shopee-node
cp .npmrc.example sdk/shopee-node/.npmrc
cd sdk/shopee-node
sedRepoString=", \"repository\": { \"type\": \"git\", \"url\": \"git+https:\/\/github.com\/mychaelgo\/shopee.git\" }"
sed -i -e "$(( $( wc -l < package.json) -1 ))s/$/\n$sedRepoString/" package.json
rm package.json-e
npm i
npm run build
