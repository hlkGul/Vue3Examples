<template>
  <ul>
    <li v-for="(item, index) in woodItems" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    //direkt olarak getters a computed yapımızı map ediyoruz buradan ulasıyoruz.
    //bunun yanında computed yapısını kaybetmemek icin ise customComputed seklinde tanımlama yapabiliriz
  computed: {
    ...mapGetters({
      woodItems: "_woodItems",
      activeUser: "_activeUser"
    })
  }
};
</script>