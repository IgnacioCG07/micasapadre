<template>
    <div id="app">
        <Padre />
        <hr />
        <Tareas />
    </div>
</template>
<script>
import Padre from './components/Padre.vue'
import Tareas from './components/Tareas.vue'
export default {
    components: {
        Padre,
        Tareas
    }
}
</script>
