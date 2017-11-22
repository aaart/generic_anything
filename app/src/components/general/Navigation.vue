<script src="./Navigation.ts" lang="ts" ></script>
<style scoped src="./Navigation.css"></style>

<template>
    <div class="menu-root">
        <div class="hamburger-icon hamburger-icon-small" ref="hamburgerIcon" v-bind:class="{ open: menuOpened }" v-on:click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu" v-bind:class="{ open: menuOpened }">
            <ul v-if="navigationItems.length != 0">
                <li v-for="navigationItem in navigationItems" :key="navigationItem.name" >
                    <router-link :to="{ name: navigationItem.name }">
                        {{ navigationItem.displayName }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
