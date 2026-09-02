<template>
    <div>
        <Hijo mensaje="Hola desde el padre" />
        <HijoBoton @saludo="mostrarSaludo" />
        <p v-if="mensaje">{{ mensaje }}</p>
        <Contacto />
    </div>
</template>
<script>
import Hijo from './Hijo.vue'
import HijoBoton from './HijoBoton.vue'
import Contacto from './Contacto.vue'
import Tareas from './Tareas.vue'

export default {
    components: {
        Hijo,
        HijoBoton,
        Contacto,
        Tareas
    },
    data() {
        return {
            mensaje: ''
        }
    },
    methods: {
        mostrarSaludo() {
            this.mensaje = 'Saludo recibido desde el hijo';
        }
    }
}
</script>
