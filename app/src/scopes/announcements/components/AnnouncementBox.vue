<script src="./AnnouncementBox.ts" lang="ts"></script>
<style scoped src="./AnnouncementBox.css"></style>

<template>
    <div class="container-fluid announcement-box">
        <div class="row" v-for="(announcement, index) in receivedAnnouncements" :key="index">
            <div class="col-xs-12">
                {{ announcement.message }}
            </div>
        </div>
    </div>
</template>