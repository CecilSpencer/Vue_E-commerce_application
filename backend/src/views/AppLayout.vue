<template>
    <div class="flex h-full">
        <SideBar />
        <div class="flex-1 flex-col">
            <Header />
            <main class="bg-gray-50">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import Header from '../components/Header.vue'
</script>

<style scoped></style>
