<template>
    <div class="home-page">
        <div class="hero-section">
            <h1 class="hero-title">
                <img class="star-icon star-icon--left" src="../assets/star.svg" alt="">
                <span class="hero-title__greeting"> {{ hero.greeting }} <span class="hero-title__name">{{ hero.name
                        }}</span></span> <br>
                <span class="hero-title__subtitle">{{ hero.subtitle }}</span>
                <img class="star-icon star-icon--right" src="../assets/star.svg" alt="">
            </h1>

            <p class="hero-description">
                {{ hero.description.split('\n\n')[0] }}<br><br>
                {{ hero.description.split('\n\n')[1] }}
            </p>
            <div class="action-buttons">
                <button class="btn btn--primary" @click="$router.push('/projects')">Projects</button>
                <a class="btn btn--secondary btn--download" href="Hilal-Durmaz-cv.pdf" download="Hilal-Durmaz-cv.pdf"
                    @click="trackDownload">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        class="download-icon">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download CV
                </a>
                <a class="btn btn--secondary" href="https://www.linkedin.com/in/hilal-durmaz"
                    target="_blank">Linkedin</a>
            </div>
        </div>

        <img class="bg-decoration bg-decoration--top" src="../assets/colors/homepage-top.png" alt="" srcset="">
        <img class="skills-showcase" src="../assets/skills.png" alt="" srcset="">


        <div class="components-section">
            <h2>Selected Projects</h2>
            <div class="section-divider"></div>
            <ProjectCards categories="Selected Projects" />
            <div id="work-experience">
                <WorkExperiance />
            </div>
            <h2>Certificates</h2>
            <div class="section-divider"></div>
            <div class="carousel-container">
                <Certificates />
                <Certificates />
            </div>
        </div>
        <img class="bg-decoration bg-decoration--bottom" src="../assets/colors/homepage-bottom.png" alt="" srcset="">
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProjectCards from "../components/ProjectCards.vue";
import Certificates from '@/components/Certificates.vue';
import WorkExperiance from '@/components/WorkExperiance.vue';


const trackDownload = () => {
    // Google Analytics tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'cv_download',
        event_category: 'engagement',
        event_label: 'cv_download',
        value: 1
    });
};

const hero = reactive({
    greeting: "Hi, I'm",
    name: "Hilal.",
    subtitle: "A software developer.",
    description: "I'm a developer focused on creating clear, user-friendly web interfaces, with practical experience using SQL and NoSQL. I work with modern tools like Vue.js, SCSS, and Figma, and enjoy improving how users interact with digital products.\n\nMy background in communication helps me understand user needs and collaborate effectively with teams, while my curiosity drives me to learn new technologies and create elegant, functional solutions."
});
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

            &--download {
                display: flex;
                align-items: center;
                gap: 8px;

                .download-icon {
                    transition: transform 300ms ease;
                }

                &:hover .download-icon {
                    transform: translateY(2px);
                }
            }
        }
    }

    .components-section {
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

        .section-divider {
            @include section-divider;
        }
    }

    .carousel-container {
        width: 100vw;
        overflow: hidden;
        display: flex;
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