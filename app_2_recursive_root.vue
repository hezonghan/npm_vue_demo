<template>
    <app_2_recursive_node :current_node="root_node" />
</template>

<script>
    import app_2_recursive_node from './app_2_recursive_node.vue';

    export default {
        name: 'app_2_recursive_root',
        components: {app_2_recursive_node},
        data() { return {
            root_node: {  // complete_tree
                text: 'a', sub_nodes: [
                    {text: 'a_1', sub_nodes: [
                        {text: 'a_1_1', sub_nodes: []},
                        {text: 'a_1_2'},
                    ]},
                    {text: 'a_2', sub_nodes: [
                        {text: 'a_2_1'},
                        {text: 'a_2_2'},
                        {text: 'a_2_3'},
                    ]},
                ],
            }
        } }
    }
</script>
