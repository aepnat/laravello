<template>
  <div>
    <div
      v-if="!editing"
      class="group flex justify-between bg-white shadow-card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2">
      <div>{{ card.title }}</div>
      <div class="flex font-bold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-500">
        <div class="text-gray-400 pr-2 hover:text-yellow-700" @click="editing=true">E</div>
        <div class="text-gray-400 hover:text-red-700" @click="cardDelete">D</div>
      </div>
    </div>
    <CardEditor v-else class="mb-2" @closed="closed" @saved="cardUpdate" label="Change Card"
                v-model="title"></CardEditor>
  </div>
</template>

<script>
import CardDelete from "../graphql/CardDelete.gql";
import CardUpdate from "../graphql/CardUpdate.gql";
import {EVENT_CARD_DELETED, EVENT_CARD_UPDATED} from "../constants";
import CardEditor from "./CardEditor";

export default {
  name: "Card",
  props: {
    card: Object,
  },
  data() {
    return {
      title: this.card.title,
      editing: false
    }
  },
  components: {
    CardEditor
  },
  methods: {
    cardDelete() {
      const self = this;
      this.$apollo.mutate({
        mutation: CardDelete,
        variables: {
          id: this.card.id
        },
        update: (store, {data: {cardDelete}}) => {
          self.$emit('deleted', {
            store,
            data: cardDelete,
            type: EVENT_CARD_DELETED
          })
        }
      })
    },
    cardUpdate() {
      const self = this;
      this.$apollo.mutate({
        mutation: CardUpdate,
        variables: {
          id: this.card.id,
          title: this.title,
        },
        update: (store, {data: {cardUpdate}}) => {
          self.$emit('update', {
            store,
            data: cardUpdate,
            type: EVENT_CARD_UPDATED
          })

          self.closed();
        }
      })
    },
    closed() {
      this.editing = false;
    }
  }
}
</script>

<style scoped>
</style>
