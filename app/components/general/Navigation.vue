<script src="./Navigation.ts" lang="ts" ></script>
<style scoped src="./Navigation.css"></style>

<template>
    <div class="navi-bar">
        <div class="hamburger-icon" ref="hamburgerIcon" v-bind:class="{ open: menuOpened }" v-on:click="toggleButton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
