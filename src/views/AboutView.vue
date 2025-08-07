<template>
    <div class="about-page">
        <section class="hero-section">
            <div class="about-card">
                <h1 class="about-card__title">About me</h1>

                <p class="about-card__description">I am Hilal, a professional with a communication background, presently
                    dedicated to advancing my career
                    within Software Development. Graduating from Yeditepe University's Communication Faculty, I possess
                    extensive experience in corporate communication and media relations. The training acquired in event
                    management and crisis communication catalyzes my endeavor to craft innovative technological
                    solutions
                    leveraging diverse experiences.</p>
                <br>
                <p class="about-card__description">As a newcomer to Software Development, I am proficient in fundamental
                    technologies such as HTML, CSS, and
                    JavaScript, along with Scss as a CSS preprocessor, and experience in popular frameworks like Vue.js.
                    As
                    a novice, I'm determined to gain project experience, establish connections within the industry, and
                    showcase my abilities in this field. By blending my communication and technical skills, I'm
                    excitedly
                    progressing into a new career journey.</p>
            </div>

            <div class="contact-section">
                <div class="contact-section__icons">
                    <a href="https://www.linkedin.com/in/hilal-durmaz" target="_blank">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a href="mailto:hilalldrmz@gmail.com">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a href="https://github.com/Hilaldrmz" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                </div>
            </div>
            <img class="scroll-indicator" src="../assets/Arrow-Down.png" alt="Scroll down" />
        </section>

        <Certificates />

        <div class="bg-decorations">
            <img class="bg-decoration bg-decoration--top" src="../assets/colors/projectspage-top.png" alt="" />
            <img class="bg-decoration bg-decoration--bottom" src="../assets/colors/projectspage-bottom.png" alt="" />
        </div>
    </div>
</template>

<script setup>
import Certificates from "../components/Certificates.vue";
</script>

<style lang="scss" scoped>
@import '../scss/mixins';

.about-page {
    height: auto;
    overflow: hidden;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
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

    .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        gap: 32px;
    }

    .about-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        padding: 30px;
        border-radius: 14px;
        width: clamp(55vw, 2vw, 959px);
        min-height: 632px;

        @include glassmorphism();
        @include card-shadows('normal');

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            @include gradient-overlay();
            pointer-events: none;
            z-index: 1;
        }

        &__title {
            font-size: 2.438rem;
            font-weight: bold;
            color: $text-light;
            margin-top: 50px;
            font-size: clamp(2rem, 2vw, 2.438rem);
        }

        &__description {
            font-size: 1.250rem;
            font-weight: normal;
            color: $text-low;
            margin-top: 20px;
            text-align: center;
            font-size: clamp(1rem, 2vw, 1.25rem);
        }
    }

    .contact-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 40px;

        &__icons {
            width: 153px;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 47px;

            a>* {
                width: 40px;
                height: 40px;
                color: $primary-color;
            }
        }
    }

    .scroll-indicator {
        color: $primary-color;
    }

    .bg-decorations {
        .bg-decoration {
            position: fixed;
            display: flex;
            justify-content: right;
            align-items: center;
            z-index: -2;

            &--top {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 1267px;
            }

            &--bottom {
                width: 100%;
                z-index: -2;
                right: 0;
                bottom: 0;
            }
        }
    }
}
</style>