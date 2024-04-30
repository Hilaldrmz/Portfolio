<template>
    <main class="main-content">
        <h2 class="developer-role">
            Front-end & UI DEVELOPER
        </h2>

        <h1 class="developer-name">
            Hello, my name <br>
            is <span class="name">Hilal Durmaz</span>
        </h1>

        <p class="developer-description">
            I'm making the leap from a communication background to Frontend Development. Combining my communication
            expertise with technical know-how, I'm ready to embark on this new career journey and craft innovative
            solutions.
            Let's create something great together!
        </p>
        <div class="buttons">
            <button class="button-primary" @click="$router.push('/projects')">Projects</button>
            <a class="button-secondary" href="https://www.linkedin.com/in/hilal-durmaz" target="_blank">Linkedin</a>
        </div>

        <img class="color-top" src="../assets/colors/homepage-top.png" alt="" srcset="">
        <img class="skills" src="../assets/skills.png" alt="" srcset="">

        <div class="selected-projects">
            <h2>Selected Projects</h2>
            <ProjectCards type="Selected Projects" />
        </div>

        <img class="color-bottom" src="../assets/colors/homepage-bottom.png" alt="" srcset="">
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProjectCards from "../components/ProjectCards.vue";

const router = useRouter();


</script>

<style lang="scss" scoped>
.main-content {
    height: auto;
    overflow: hidden;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    padding: 0;
    margin: 50px 120px 50px 120px;
    margin: 4.88vh 8.33vw 4.88vh;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $bg-dark;
        z-index: -20;
    }

    .developer-role {
        width: 288px;
        height: 27px;
        flex-grow: 0;
        background-image: linear-gradient(to right, $primary-color 0%, $secondary-color);
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .developer-name {
        width: 710px;
        font-size: 57px;
        font-weight: bold;
        line-height: 1.2;
        color: $text-low;

        .name {
            font-weight: bold;
            background: $gradient;
            background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: 1300px) {}
        }
    }

    .developer-description {
        min-width: 710px;
        width: 49.31dvw;
        font-size: 22px;
        line-height: 1.64;
        color: $text-low;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 8px;

        .button-primary,
        .button-secondary {
            height: 3.5dvh;
            padding: 8px 24px;
            border-radius: 8px;
            color: $text-low;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

        }

        .button-primary {
            background-image: $gradient;
            border: none;
            transition: all 500ms;

            &:hover {
                color: $text-light;
            }
        }

        .button-secondary {
            border: solid 2px $text-high;
            background: transparent;
            transition: all 500ms;
            text-decoration: none;

            &:hover {
                color: $text-light;
            }
        }
    }

    .selected-projects {
        height: min-content;
        z-index: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 200px;

        
    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        color: $text-low;
        padding-bottom: -50px;
    }

    }

    .skills {
        position: absolute;
        // max-height:85dvh;
        display: flex;
        justify-content: right;
        align-items: center;
        z-index: -1;
        right: 0;
        top: 0;
        transition: all 500ms ease-in-out;

        // @media screen and (max-width: 1390px) {
        //     height: 40dvh;
        // }

        @media screen and (max-width: 1360px) {
            display: none;
        }
    }

    .color-top {
        position: fixed;
        display: flex;
        justify-content: right;
        align-items: center;
        z-index: -2;
        right: 0;
        top: 0;

        @media screen and (max-width: 1300px) {
            max-height: 84dvw;
            min-height: 636px;
        }
    }

    .color-bottom {
        position: fixed;
        display: flex;
        justify-content: right;
        align-items: center;
        max-height: 40dvw;
        min-height: 400px;
        z-index: -2;
        left: 0;
        bottom: 0;
    }
}
</style>