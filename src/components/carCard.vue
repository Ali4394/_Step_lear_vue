<template>
    <div class="card">
        <Card>
            <template #title> Simple Card </template>
           
        </Card>
    </div>
</template>

<script>

import { ref, onMounted } from "vue";
import { useAuto } from "@/composable/useAuto";


const { autoListRemake, getAutoList, loading } = useAuto();

onMounted(() => {
  getAutoList();
});




</script>