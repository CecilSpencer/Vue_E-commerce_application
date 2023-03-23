<template>
    <div class="bg-indigo-800 text-white p-5 w-[200px]">
        <router-link
            :to="{ name: 'app' }"
            class="flex items-center hover:bg-black/20 py-1 px-2 my-2"
        >
            <HomeIcon class="w-6 mr-1" />
            Dashboard
        </router-link>

        <router-link
            :to="{ name: 'app.users' }"
            class="flex items-center hover:bg-black/20 py-1 px-2 my-2"
        >
            <UserGroupIcon class="w-6 mr-1" />
            Users
        </router-link>

        <router-link
            :to="{ name: 'app.products' }"
            class="flex items-center hover:bg-black/20 py-1 px-2 my-3"
        >
            <ShoppingBagIcon class="w-6 mr-1" />
            Products
        </router-link>

        <router-link
            :to="{ name: 'app.reports' }"
            class="flex items-center hover:bg-black/20 py-1 px-2 my-3"
        >
            <DocumentDuplicateIcon class="w-6 mr-1" />
            Reports
        </router-link>
    </div>
</template>

<script setup>
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    ShoppingBagIcon,
} from "@heroicons/vue/20/solid";
</script>
