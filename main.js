
import { createApp } from 'vue';
import app_1 from './app_1.vue';
import app_2_recursive_root from './app_2_recursive_root.vue';

createApp(app_1).mount('#app_1_div');
createApp(app_2_recursive_root).mount('#app_2_div');
