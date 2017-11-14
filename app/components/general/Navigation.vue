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
            <ul>
                <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                <li><router-link :to="{ name: 'about' }">About</router-link></li>
            </ul>
        </div>
    </div>
</template>
