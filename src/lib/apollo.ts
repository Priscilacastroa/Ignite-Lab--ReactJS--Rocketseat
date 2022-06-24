import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4q8d9kl38qg01xk0wajgmzl/master",
    cache: new InMemoryCache()
})