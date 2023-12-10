<template>
    <div class="row justify-content-center align-items-center page_wrapper">
        <div class="col-md-6">
            <slot />
        </div>
    </div>

    <div class="footer">
        <span>Bunker Code 2023</span>
    </div>

</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
        name: 'layoutDefault',
    }
</script>
<style>
    .page_wrapper{
        padding-bottom: 40px;
    }
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
        background: rgba(230, 230, 232, 0.90);
        padding: 10px;
        width: 100%;
    }
</style>
