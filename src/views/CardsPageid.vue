<template>
  {{ auto }}

  <div v-if="auto">
    <Card>
        <template #title>{{ auto.brand }} </template>
        <template #content>
            <p>
                литые диски, тонировка, люк, обвес, ветровики, рейлинги, ксенон, биксенон, хрустальная оптика, линзованная оптика, дневные ходовые огни, противотуманки, омыватель фар, корректор фар, обогрев зеркал, кожа, комбинированный, аудиосистема, CD, CD-чейнджер, DVD, сабвуфер, ABS, зимний режим, сигнализация, автозапуск, иммобилайзер, полный электропакет, центрозамок, климат-контроль, круиз-контроль, бортовой компьютер, навигационная система, мультируль, подогрев руля, память сидений, память руля, парктроники, камера заднего вида, датчик света, датчик давления в шинах, налог уплачен, техосмотр пройден, вложений не требует
            </p>
        </template>
    </Card>
  </div> 
</template>

<script setup>
import {useAuto} from '../composable/useAuto'
import { onMounted } from 'vue';
import { useRouter, useRoute } from "vue-router";
import Card from 'primevue/card';



const router = useRouter()

const {auto, getAuto} = useAuto()

onMounted(async () =>{
    await getAuto(useRoute().params.id)
})


</script>