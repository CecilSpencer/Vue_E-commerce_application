<template>
    <div class="flex items-center h-full justify-center">
        <div class="border-r-2 border-r-indigo-200 p-3">
            <h1 class="text-8xl text-indigo-700 font-bold">404</h1>
        </div>
        <div class="flex-col p-5">
            <h1 class="text-7xl font-semibold">Page Not Found</h1>
            <h1 class="mt-2">Please recheck your url and reload</h1>
            <div class="flex mt-2">
                <router-link
                    :to="{ name: 'app' }"
                    class="bg-indigo-800 text-white hover:bg-indigo-600 shadow-md hover:shadow-none transition-shadow py-2 px-3"
                    >Go To Home</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup></script>
