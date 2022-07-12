
<template>
    <h1 @click="hello()">{{value}}</h1>
</template>

<script>
    export default {
        name: 'app_1',
        data() { return {
            value: 123,
        } },
        methods: {
            hello() {
                alert('miao!!!');
            }
        }
    }
</script>
