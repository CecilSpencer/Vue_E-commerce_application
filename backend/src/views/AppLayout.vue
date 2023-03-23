<template>
    <div class="flex h-full">
        <SideBar :class="{ '-ml-[200px]': !sidebarState }" />
        <div class="flex-1 flex-col">
            <Header @toggle-sidebar="toggleSIdebar" />
            <main class="bg-gray-50">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import Header from "../components/Header.vue";
import { ref, onMounted, onUnmounted } from "vue";
import store from "../store";

const sidebarState = ref(true);

onMounted(() => {
    store.dispatch("getUser");
    collpseSIdebar();
    window.addEventListener("resize", collpseSIdebar);
});

onUnmounted(() => {
    window.removeEventListener("resize", collpseSIdebar);
});

function toggleSIdebar() {
    sidebarState.value = !sidebarState.value;
}
function collpseSIdebar() {
    sidebarState.value = window.outerWidth > 760;
}
</script>

<style scoped></style>
