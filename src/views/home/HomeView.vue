<template>
<nav-bar-view></nav-bar-view>
<home-component></home-component>
</template>

<script>
import HomeComponent from '@/components/home/HomeComponent.vue';
import NavBarView from '@/views/navbar/NavBarView.vue';
export default{
    name:'home-view',
    components:{
        HomeComponent,
        NavBarView
    }
}
</script>