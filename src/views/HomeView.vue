<template>
    <main class="main-content">
        <h1 class="developer-name">
            <img class="star first" src="../assets/star.svg" alt="">
            <span class="first-line"> Hi, I'm <span class="name">Hilal.</span></span> <br>
            <span class="second-line">A frontend developer.</span>
            <img class="star second" src="../assets/star.svg" alt="">
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
    // overflow: hidden;
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

    .developer-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 220px;
        font-size:  8.58cqi;
        font-family: 'Acorn Regular';
        line-height: 1;
        color: $text-low;
        white-space: nowrap;

        .name {
            font-family: 'Acorn Regular';
            background: $gradient;
            background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: 1300px) {}
        }

        .second-line {
            font-size: 106.5px;
            font-size: 4.15cqi;
            margin-top: -8cqi;
        }
        
        .star {
            width: 2cqi;
            &.first {
                margin-left: -45cqi;
                margin-bottom: -1cqi;
            }

            &.second {
                margin-right: -45cqi;
                margin-top: -1cqi;
            }
        }
    }

    .developer-description {
        // min-width: 710px;
        width: 40dvw;
        font-size: 22px;
        font-size: 0.857cqi;
        line-height: 1.64;
        color: $text-low;
        font-family: 'Acorn Regular';
        margin-right: 10px;
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
        max-width: 43dvw;
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

        // @media screen and (max-width: 1360px) {
        //     display: none;
        // }
    }

    .color-top {
        position: fixed;
        display: flex;
        justify-content: right;
        align-items: center;
        z-index: -2;
        right: 0;
        top: 0;
        max-height: 84dvw;

    }

    .color-bottom {
        position: fixed;
        display: flex;
        justify-content: right;
        align-items: center;
        max-height: 40dvw;
        z-index: -2;
        left: 0;
        bottom: 0;
    }
}
</style>