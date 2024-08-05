<script>
import axios from 'axios';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'Project',
    components: {
    AppFooter,
    AppHeader
    },
    
}
</script>
<template>
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
</template>
<style lang="scss" scoped></style>