<template>
  <div class="home">
    <base-header>
      <template #default>Ваши копилки</template>
      <template #rightIcon>
        <svg-icon
          @click.native="$router.push({ name: 'MoneyBoxAdd' })"
          name="add"
        />
      </template>
    </base-header>
    <base-container>
      <div v-for="box in boxes" :key="`box-${box.id}`">
        <router-link :to="`/moneybox/edit/${box.id}`">
          {{ box.name }}
        </router-link>
        <button type="button" @click="deleteBox(box.id)">Удалить</button>
      </div>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "@/components/BaseContainer";
import BaseHeader from "@/components/BaseHeader";
import SvgIcon from "@/components/SvgIcon";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { SvgIcon, BaseHeader, BaseContainer },
  computed: {
    ...mapState(["boxes"]),
  },
  methods: {
    deleteBox(boxId) {
      if (confirm("Вы действительно хотите удалить копилку?")) {
        this.$store.dispatch("deleteBox", boxId);
      }
    },
  },
};
</script>
