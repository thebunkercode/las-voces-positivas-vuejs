<template>
    <layoutDefault>
        <div class="mb-5 mt-3">
            <h4>
                Hola, @user <br>
                ¿Qué quieres hacer hoy?
            </h4>
        </div>
        <div class="row">
            <BoxLink :path="'perfil'" :texto="'Mi perfil'" :icon="'perfil'"></BoxLink>
            <BoxLink :path="'grupos'" :texto="'Grupos'" :icon="'grupos'"></BoxLink>
            <BoxLink :path="'login'" :texto="'Escribit mensaje'" :icon="'mensaje'"></BoxLink>
            <BoxLink :path="'login'" :texto="'Leer mensajes'" :icon="'leer'"></BoxLink>
            <BoxLink :path="'challenges'" :texto="'Desafíos'" :icon="'desafios'"></BoxLink>
            <BoxLink :path="'score'" :texto="'Tablero de puntuación'" :icon="'tablero'"></BoxLink>
        </div>
    </layoutDefault>
</template>

<script>
import layoutDefault from "@/layouts/Default.vue";
import BoxLink from "@/components/BoxLink.vue";
export default {
    name: 'DashboardView',
    components: {
        layoutDefault,
        BoxLink
    },
    data:function(){
        return {

        }
    },
    methods:{
    }
}
</script>
<style>

</style>
