<template>
    <layoutDefault>
        <div class="btn-blue d-flex py-3 px-3 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M15.625 21.875H9.375M15.625 21.875V13.125C15.625 12.9592 15.5592 12.8002 15.4419 12.683C15.3247 12.5658 15.1658 12.5 15 12.5H10C9.83424 12.5 9.67527 12.5658 9.55806 12.683C9.44085 12.8002 9.375 12.9592 9.375 13.125V21.875M15.625 21.875H21.25C21.4158 21.875 21.5747 21.8091 21.6919 21.6919C21.8092 21.5747 21.875 21.4157 21.875 21.25V18.8541C21.875 18.6884 21.8092 18.5294 21.6919 18.4122C21.5747 18.295 21.4158 18.2291 21.25 18.2291H16.25C16.0842 18.2291 15.9253 18.295 15.8081 18.4122C15.6908 18.5294 15.625 18.6884 15.625 18.8541V21.875ZM9.375 21.875V16.7708C9.375 16.605 9.30915 16.4461 9.19194 16.3289C9.07473 16.2117 8.91576 16.1458 8.75 16.1458H3.75C3.58424 16.1458 3.42527 16.2117 3.30806 16.3289C3.19085 16.4461 3.125 16.605 3.125 16.7708V21.25C3.125 21.4157 3.19085 21.5747 3.30806 21.6919C3.42527 21.8091 3.58424 21.875 3.75 21.875H9.375ZM11.2562 5.32602L12.2031 3.31873C12.2287 3.26134 12.2703 3.2126 12.323 3.17839C12.3757 3.14418 12.4372 3.12598 12.5 3.12598C12.5628 3.12598 12.6243 3.14418 12.677 3.17839C12.7297 3.2126 12.7713 3.26134 12.7969 3.31873L13.7448 5.32602L15.8615 5.64998C16.1333 5.69164 16.2417 6.04164 16.0448 6.24164L14.5135 7.80414L14.875 10.0104C14.9208 10.2937 14.6375 10.5104 14.3937 10.376L12.5 9.33435L10.6062 10.376C10.3635 10.5094 10.0792 10.2937 10.125 10.0104L10.4865 7.80414L8.95521 6.24164C8.75729 6.04164 8.86667 5.69164 9.1375 5.64998L11.2562 5.32602Z" stroke="#F8F8F8" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="px-2">
                TABLERO DE PUNTUACIÓN
            </span>
        </div>

        <div class="score">
            <ScoreComponent class="mb-4" v-for="score in scores" :score="score">

            </ScoreComponent>
        </div>

        <div>
            <p>La tabla se reinicia en 7 días.</p>
        </div>

    </layoutDefault>
</template>

<script>
import layoutDefault from "@/layouts/Default.vue";
import ScoreComponent from "@/components/ScoreComponent.vue";
export default {
    name: 'ScoreView',
    components: {
        layoutDefault,
        ScoreComponent
    },
    data:function(){
        return {
            scores:[
                {
                    position:1,
                    score:1000
                },
                {
                    position:2,
                    score:999
                },
                {
                    position:3,
                    score:998
                },
                {
                    position:4,
                    score:500
                },
                {
                    position:5,
                    score:400
                },
                {
                    position:6,
                    score:300
                },
                {
                    position:7,
                    score:300
                },
                {
                    position:8,
                    score:200
                },
                {
                    position:9,
                    score:100
                },
                {
                    position:10,
                    score:50
                }

            ]
        }
    },
    methods:{
    }
}
</script>
<style>

</style>
