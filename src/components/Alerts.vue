<template>
    <div v-if="type=='errors'" class="alert alert-danger" role="alert">
        <p class="mb-1" v-for="inputs in list">
            <span v-for="input in inputs">
                {{input}}
            </span>
        </p>
    </div>
    <div v-if="type=='success'" class="alert alert-success" role="alert">
        {{message}}
    </div>
</template>
<script>
    export default {
        name: "Alerts",
        props:{
            type:{
                type:String
            },
            message:{
                type:String
            },
            list:{
                type:Array
            }
        }
    }
</script>
