<template>
  <div><slot/></div>
</template>

<script>

import {defineComponent, provide} from "@vue/composition-api";
import {DefaultApolloClient} from "@vue/apollo-composable";
import ApolloClient from "apollo-boost";
const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

export default defineComponent({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  }}
)
</script>

