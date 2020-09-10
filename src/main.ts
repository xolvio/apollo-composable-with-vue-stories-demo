import Vue from "vue";
import App from "@/components/Page.vue";
import ApolloClient from 'apollo-boost'
import {provide} from "@vue/composition-api";
import {DefaultApolloClient} from "@vue/apollo-composable";

const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
})

const app = new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: h => h(App)
})

app.$mount("#app");
