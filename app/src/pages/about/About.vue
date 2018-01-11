<script src="./About.ts" lang="ts"></script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-4" v-for="btn in buttons" :key="btn.code">
                <button type="button" class="btn btn-primary btn-lg" v-bind:class="{ isDisabled: !!btn.inProgress }" v-on:click="queryButtonClicked(btn.key)">
                    <span v-if="!btn.inProgress" >{{ btn.label }}</span>
                    <i v-if="!!btn.inProgress" class='fa fa-circle-o-notch fa-spin'></i> 
                    <span v-if="!!btn.inProgress">Querying</span>
                </button>
            </div>
        </div>
    </div>
</template>