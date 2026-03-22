<template>
    <section class="work-experience">
        <div class="work-experience__container">
            <h2 class="work-experience__title">Work Experience</h2>
            <div class="work-experience__divider"></div>

            <div class="work-experience__list">
                <article v-for="job in experiences" :key="job.id" class="work-experience__card">
                    <header class="work-experience__header">
                        <div class="work-experience__company-info">
                            <h3 class="work-experience__job-title">{{ job.title }}</h3>
                            <p class="work-experience__company-name">{{ job.company }}</p>
                        </div>
                        <time class="work-experience__date-range">{{ job.startDate }} - {{ job.endDate }}</time>
                    </header>

                    <ul class="work-experience__description">
                        <li v-for="item in job.description" :key="item" class="work-experience__description-item">
                            {{ item }}
                        </li>
                    </ul>

                    <div v-if="job.skills" class="work-experience__skills">
                        <span v-for="skill in job.skills" :key="skill" class="work-experience__skill-tag">
                            {{ skill }}
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import data from '../data/work-experience.json';

const experiences = reactive(data.experiences.reverse());
</script>

<style lang="scss" scoped>
.work-experience {
    padding: 5rem 1.5rem;
    background: transparent;

    &__container {
        max-width: 72rem;
        margin: 0 auto;
        text-align: center;
    }

    &__title {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--cascading-white);
        margin-bottom: 1rem;

        @media (min-width: 768px) {
            font-size: 3rem;
        }
    }

    &__divider {
        @include section-divider;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &__card {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(6px);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    &__company-info {
        text-align: left;
    }

    &__job-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--cascading-white);
        margin: 0 0 0.5rem 0;
    }

    &__company-name {
        margin: 0;
        color: var(--wild-ginger);
        font-weight: 600;
        font-size: 1.1rem;
    }

    &__date-range {
        color: var(--ancestal);
        font-size: 0.95rem;
        white-space: nowrap;
        font-weight: 500;
    }

    &__description {
        color: var(--sensuosus-grey);
        line-height: 1.6;
        margin: 0 0 1.5rem 0;
        text-align: left;
        list-style: none;
        padding: 0;

        &-item {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;

            &::before {
                content: "•";
                position: absolute;
                left: 0;
                color: var(--wild-ginger);
                font-weight: bold;
                font-size: 1.2em;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    &__skills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    &__skill-tag {
        background: rgba(76, 28, 36, 0.18);
        color: var(--cascading-white);
        padding: 0.4rem 0.8rem;
        border-radius: 0.75rem;
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.07);
        transition: transform 0.2s ease, background-color 0.2s ease;

        &:hover {
            transform: translateY(-1px);
            background: rgba(125, 77, 85, 0.4);
            border-color: var(--secondary-color);
        }
    }
}
</style>