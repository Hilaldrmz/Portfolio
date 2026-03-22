<template>
    <section id="skills" class="skills">
        <div class="skills__container">
            <h2 class="skills__title">Skills & Technologies</h2>
            <div class="skills__divider"></div>

            <div class="skills__grid">
                <!-- Frontend -->
                <article class="skills__block">
                    <h3 class="skills__block-title">Frontend</h3>
                    <div class="skills__list">
                        <span v-for="skill in frontendSkills" :key="skill" class="skills__item">
                            {{ skill }}
                        </span>
                    </div>
                </article>

                <!-- Backend & Databases -->
                <article class="skills__block">
                    <h3 class="skills__block-title">Backend & Databases</h3>
                    <div class="skills__list">
                        <span v-for="skill in backendSkills" :key="skill" class="skills__item">
                            {{ skill }}
                        </span>
                    </div>
                </article>

                <!-- Tools & Others -->
                <article class="skills__block">
                    <h3 class="skills__block-title">Tools & Others</h3>
                    <div class="skills__list">
                        <span v-for="skill in toolsSkills" :key="skill" class="skills__item">
                            {{ skill }}
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
const frontendSkills = [
    'HTML5',
    'CSS',
    'SCSS',
    'JavaScript',
    'Vue.js',
    'Bootstrap',
    'Figma',
    'WordPress',
    'Elementor'
];

const backendSkills = [
    'SQL',
    'NoSQL',
    'MongoDB',
    'RESTful API',
    'JWT Authentication'
];

const toolsSkills = [
    'Git',
    'GitHub',
    'Google Analytics 4',
    'Google Tag Manager',
    'SEO',
    'UI/UX Design'
];
</script>

<style lang="scss" scoped>
.skills {

    padding-bottom: 1.5rem;
    background: transparent;

    &__container {
        max-width: 72rem;
        margin: 0 auto;
        text-align: center;
    }

    &__title {
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

    &__divider {
        @include section-divider;
    }

    &__grid {
        display: grid;
        gap: 2.5rem;

        padding-top: 2rem;

        @media (min-width: 768px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    &__block {
        text-align: left;
        padding: 1.5rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(6px);

        &-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--cascading-white);
            margin-bottom: 1.2rem;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    &__item {
        display: inline-flex;
        align-items: center;
        border-radius: 0.75rem;
        font-weight: 600;
        color: var(--cascading-white);
        font-size: 0.875rem;
        padding: 0.55rem 0.95rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(76, 28, 36, 0.18);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.07);
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
            border-color: var(--secondary-color);
            background: rgba(125, 77, 85, 0.4);
        }
    }
}
</style>