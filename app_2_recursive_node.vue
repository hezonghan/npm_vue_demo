<template>
    <div class="node_box">
        <div class="node_text">{{current_node.text}}</div>
        <div v-if="(current_node.sub_nodes)">
            <app_2_recursive_node v-for="sub_node in current_node.sub_nodes" :current_node="sub_node" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app_2_recursive_node',
        props: ['current_node'],
        data() { return {

        }}
    };
</script>

<style>
    .node_box {
        display: flex; flex-direction: row;
    }
    .node_text {
        border: black 1px solid;
        background-color: pink; padding: 5px; min-width: 30px;
    }
    .node_sub_nodes {
        
    }
</style>
