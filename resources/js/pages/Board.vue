<template>
  <div class="h-full flex flex-col items-stretch bg-purple-500">
    <div class="header text-white flex justify-between items-center mb-2 bg-purple-600">
      <div class="ml-2 w-1/3">x</div>
      <div class="font-bold text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
      <div class="mr-2 w-1/3 flex justify-end">x</div>
    </div>

    <div class="h-full flex flex-1 flex-col items-stretch">
      <div v-if="$apollo.queries.board.loading" class="mx-4 mb-2 text-white font-bold text-lg">Loading...</div>
      <div v-else>
        <div class="mx-4 mb-2 text-white font-bold text-lg">{{ board.title }}</div>
        <div class="flex flex-1 items-start overflow-x-auto mx-2">
          <List v-for="list in board.lists" :key="list.id" :list="list"></List>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../components/List";
import gql from "graphql-tag";
import BoardQuery from "../graphql/BoardWithListsAndCards.gql";

export default {
  name: "Board",
  components: {
    List
  },
  apollo: {
    board: {
      query: BoardQuery,
      variables() {
        return {
          id: 1
        }
      }
    }
  }
}
</script>

<style scoped>
.header {
  height: 40px;
}
</style>
