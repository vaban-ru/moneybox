<template>
  <div>
    <base-header>
      <template #leftIcon>
        <svg-icon @click.native="$router.push({ name: 'Home' })" name="back" />
      </template>
      <template #default>
        <template v-if="isEdit">Редактировать копилку</template>
        <template v-else>Добавить копилку</template>
      </template>
    </base-header>
    <base-container>
      <form @submit.prevent="submitBoxForm">
        <label>Название копилки</label>
        <input v-model.trim="$v.moneyBox.name.$model" type="text" />
        <div class="error" v-if="!$v.moneyBox.name.required">
          Поле обязательно для заполнения
        </div>
        <div class="error" v-if="!$v.moneyBox.name.minLength">
          Название должно состоять из
          {{ $v.moneyBox.name.$params.minLength.min }} символов.
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </base-container>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseContainer from "@/components/BaseContainer";
import SvgIcon from "@/components/SvgIcon";
import { required, minLength } from "vuelidate/lib/validators";
import { nanoid } from "nanoid";
import { mapState } from "vuex";

export default {
  name: "MoneyBoxFormPage",
  components: { SvgIcon, BaseContainer, BaseHeader },
  data() {
    return {
      moneyBox: {
        name: null,
      },
    };
  },
  validations: {
    moneyBox: {
      name: {
        required,
        minLength: minLength(4),
      },
    },
  },
  computed: {
    isEdit() {
      return !!this.$route.meta.edit;
    },
    ...mapState(["boxes"]),
  },
  created() {
    if (this.isEdit) {
      this.setBoxInfo();
    }
  },
  methods: {
    submitBoxForm() {
      this.$v.$touch();
      if (!this.isEdit) {
        if (!this.$v.$invalid) {
          const id = nanoid();
          const moneyBox = { id: id, ...this.moneyBox };
          this.$store.dispatch("addNewBox", moneyBox);
          this.$router.push({ name: "Home" });
        }
      } else {
        this.$store.dispatch("editBox", this.moneyBox);
        this.$router.push({ name: "Home" });
      }
    },
    setBoxInfo() {
      if (this.$route.params.id) {
        this.moneyBox = this.boxes.find(
          (box) => box.id === this.$route.params.id
        );
      }
    },
  },
};
</script>

<style scoped></style>
