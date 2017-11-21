<script src="./Layout.ts" lang="ts"></script>

<template>
    <div id="layout" class="width-100-percent">
      <div>
        <div>
            <navigation></navigation>
        </div>
        <div>
          <div class="container width-80-percent">
            <div id="layout-header" class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <main-header></main-header>
              </div>
            </div>
            <div id="layout-content" class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <router-view></router-view>
              </div>
            </div>
            <div id="layout-footer" class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


