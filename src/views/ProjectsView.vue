<template>
    <div class="projects-view">

        <img class="color-top" src="../assets/colors/projectspage-top.png" alt="" srcset="">
        <img class="color-bottom" src="../assets/colors/projectspage-bottom.png" alt="" srcset="">

        <ul class="tabs">
            <li class="tab" v-bind:class="{ 'tab-active': activeTab === 'vue' }" @click="activeTab = 'vue'">
                Vue.js Projects
            </li>
            <li class="tab" v-bind:class="{ 'tab-active': activeTab === 'js' }" @click="activeTab = 'js'">
                JS Projects
            </li>
            <li class="tab" v-bind:class="{ 'tab-active': activeTab === 'figma' }" @click="activeTab = 'figma'">
                Figma Projects
            </li>
        </ul>

        <div v-if="activeTab === 'vue'" class="vue projects">
            <ProjectCards type="Vue.js Projects" />
        </div>
        <div v-if="activeTab === 'js'" class="js projects">
            <ProjectCards type="JS Projects" />
        </div>
        <div v-if="activeTab === 'figma'" class="figma projects">
            <ProjectCards type="Figma Projects" />
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCards from "../components/ProjectCards.vue";

const activeTab = ref('vue');
</script>

<style lang="scss" scoped>
.projects-view {
    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $bg-mid;
        z-index: -20;
    }

    .tabs {
        list-style-type: none;
        margin-top: 50px;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        gap: 10px;
        background-color: #ffffff0e;

        .tab {
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
            color: $text-low;


            &:hover {
                // background-color: #ddd;
                // color: black;
                // text-decoration-line: underline;
                border-bottom: $secondary-color 5px solid;
                font-weight: bold;
            }

            &.tab-active {
                border-bottom: $secondary-color 5px solid;
                font-weight: bold;
            }
        }
    }

    .projects{
        margin: 4.88vh 8.33vw 4.88vh;
    }

    .color-top {
        position: absolute;
        display: flex;
        justify-content: right;
        align-items: center;
        z-index: -2;
        top: 0;
        width: 100%;
    }

    .color-bottom {
        position: fixed;
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;
        z-index: -2;
        right: 0;
        bottom: 0;

    }

}
</style>