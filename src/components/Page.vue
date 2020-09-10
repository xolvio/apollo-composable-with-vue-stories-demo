<template>
  <div>
    <div v-if="loading">Loading...</div>
    <ul v-else>
    <li v-for="continent in result.continents" :key="continent.name">{{ continent.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";
import {useGetAllContinentsQuery} from "../generated/graphql";


export default defineComponent({
  setup() {
    const { result, loading } = useGetAllContinentsQuery();

    return { result, loading };
  }
});
</script>
