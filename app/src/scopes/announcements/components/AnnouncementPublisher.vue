<script src="./AnnouncementPublisher.ts" lang="ts"></script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
                <input class="form-control input-lg" type="text" v-model="message" />
            </div>
            <div class="col-xs-2">
                <select class="width-100-percent" v-model="selectedLevel">
                    <option v-for="level in levels" :key="level" v-bind:value="level" >
                        {{ level }}
                    </option>
                </select>
            </div>
            <div class="col-xs-2">
                <button class="btn btn-default btn-block center" type="button" v-on:click="publishClicked" :disabled="!canPublish">Publish!</button>
            </div>
        </div>
    </div>
</template>