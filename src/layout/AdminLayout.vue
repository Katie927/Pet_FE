<template>
    <header>
        <ManageComponent/>
    </header>
    <main>
        <router-view />
    </main>
</template>

<script setup>
    import ManageComponent from '@/components/layout/manage.vue';   
</script>