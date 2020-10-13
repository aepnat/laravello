<template>
  <div>
    <textarea
      placeholder="Enter a title for this card..."
      class="rounded-md shadow-card py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"
      v-model="title"
      ref="card"
      @keyup.esc="closed"
      @keyup.enter="addCard"
    ></textarea>

    <div class="flex">
      <button class="rounded-sm py-1 px-3 bg-indigo-700 text-white cursor-pointer hover:bg-indigo-600 focus:outline-none"
              @click="addCard">Add Card
      </button>
      <button class="py-1 px-3 rounded-md hover:bg-gray-400 cursor-pointer text-gray-500 ml-2 focus:outline-none"
              @click="closed">Cancel
      </button>
    </div>
  </div>
</template>

<script>
import CardAdd from "../graphql/CardAdd.gql";
import BoardQuery from "../graphql/BoardWithListsAndCards.gql";
import {EVENT_CARD_ADDED} from "../constants";

export default {
  name: "CardEditor",
  data() {
    return {
      title: null
    }
  },
  props: {
    list: Object
  },
  mounted() {
    this.$refs.card.focus();
  },
  methods: {
    addCard() {
      const self = this;
      this.$apollo.mutate({
        mutation: CardAdd,
        variables: {
          title: this.title,
          listId: this.list.id,
          order: this.list.cards.length + 1
        },
        update: (store, {data: {cardAdd}}) => {
          self.$emit('added', {
            store,
            data: cardAdd,
            type: EVENT_CARD_ADDED
          })

          self.closed();
        }
      })
    },
    closed() {
      this.$emit('closed');
    }
  },
}
</script>

<style scoped>

</style>
