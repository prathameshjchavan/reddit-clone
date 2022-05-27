import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://charlton.stepzen.net/api/sad-dragonfly/__graphql',
  headers: {
    Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
  },
  cache: new InMemoryCache(),
})

export default client
