<template>
    <div class="home-page">
        <div class="hero-section">
            <h1 class="hero-title">
                <img class="star-icon star-icon--left" src="../assets/star.svg" alt="">
                <span class="hero-title__greeting"> Hi, I'm <span class="hero-title__name">Hilal.</span></span> <br>
                <span class="hero-title__subtitle">A software developer.</span>
                <img class="star-icon star-icon--right" src="../assets/star.svg" alt="">
            </h1>

            <p class="hero-description">
                I'm making the leap from a communication background to software Development. Combining my communication
                expertise with technical know-how, I'm ready to embark on this new career journey and craft innovative
                solutions.
                Let's create something great together!
            </p>
            <div class="action-buttons">
                <button class="btn btn--primary" @click="$router.push('/projects')">Projects</button>
                <a class="btn btn--secondary" href="https://www.linkedin.com/in/hilal-durmaz"
                    target="_blank">Linkedin</a>
            </div>
        </div>

        <img class="bg-decoration bg-decoration--top" src="../assets/colors/homepage-top.png" alt="" srcset="">
        <img class="skills-showcase" src="../assets/skills.png" alt="" srcset="">

        <div class="featured-projects">
            <h2>Selected Projects</h2>
            <ProjectCards categories="Selected Projects" />
        </div>
        <img class="bg-decoration bg-decoration--bottom" src="../assets/colors/homepage-bottom.png" alt="" srcset="">
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProjectCards from "../components/ProjectCards.vue";

const router = useRouter();

</script>

<style lang="scss" scoped>
.home-page {
    height: auto;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
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

    .hero-section {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;

        @media screen and (max-width: 1360px) {
            align-items: center;

        }

        .hero-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            font-size: 220px;
            font-size: 8.58cqi;
            font-family: 'Acorn Regular';
            line-height: 1;
            color: $text-low;
            white-space: nowrap;

            &__name {
                font-family: 'Acorn Regular';
                background: $gradient;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }


            &__subtitle {
                font-size: 106.5px;
                font-size: 4.15cqi;
                margin-top: -8cqi;
            }
        }

        .star-icon {
            width: 2cqi;

            &--left {
                margin-left: -45cqi;
                margin-bottom: -1cqi;
            }

            &--right {
                margin-right: -45cqi;
                margin-top: -1cqi;
            }
        }

        .hero-description {
            // min-width: 710px;
            width: 40dvw;
            font-size: 22px;
            font-size: 0.857cqi;
            line-height: 1.64;
            color: $text-low;
            font-family: 'Acorn Regular';
            margin-right: 10px;
            margin-bottom: 25px;

            @media screen and (max-width: 1360px) {
                width: 70dvw;
                font-size: 16px;
                margin-top: 25px;
            }

        }

        .action-buttons {
            display: flex;
            flex-direction: row;
            gap: 8px;
        }

        .btn {
            height: 3.5dvh;
            padding: 8px 24px;
            border-radius: 8px;
            color: $text-low;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &--primary {
                background-image: $gradient;
                border: none;
                transition: all 500ms;

                &:hover {
                    color: $text-light;
                }
            }

            &--secondary {
                border: solid 2px $text-high;
                background: transparent;
                transition: all 500ms;
                text-decoration: none;

                &:hover {
                    color: $text-light;
                }
            }
        }
    }

    .featured-projects {
        height: min-content;
        z-index: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 15rem;
        width: -webkit-fill-available;

        @media screen and (max-width: 1360px) {
            margin-top: 7rem;
        }


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

    .skills-showcase {
        position: absolute;
        // max-width: 43dvw;
        display: flex;
        justify-content: right;
        align-items: center;
        z-index: -1;
        right: 0;
        top: 0;
        transition: all 500ms ease-in-out;

        @media screen and (max-width: 1360px) {
            display: none;
        }
    }

    .bg-decoration {
        position: fixed;
        display: flex;
        justify-content: right;
        align-items: center;
        z-index: -2;

        &--top {
            right: 0;
            top: 0;
            max-height: 84dvw;

            @media screen and (max-width: 1360px) {
                max-height: 65dvw;
            }
        }

        &--bottom {
            max-height: 40dvw;
            left: 0;
            bottom: 0;
        }
    }
}
</style>