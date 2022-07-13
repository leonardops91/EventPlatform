import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl5ecy0xh0xkt01ug0c7og4sc/master',
    cache: new InMemoryCache()
})