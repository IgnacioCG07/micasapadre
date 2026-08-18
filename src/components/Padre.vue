<template>
    <div>
        <Hijo mensaje="Hola desde el padre" />
        <HijoBoton @saludo="mostrarSaludo" />
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>
<script>
import Hijo from './Hijo.vue'
import HijoBoton from './HijoBoton.vue'

export default {
    components: {
        Hijo,
        HijoBoton
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
