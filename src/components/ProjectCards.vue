<template>
    <div class="projects-container">
        <div v-for="project in filteredProjects" :key="project.name" class="project-card"
            @click="goToProject(project.link)">
            <div class="card-content">
                <div class="project-image">
                    <template v-if="isVideoFile(project.image)">
                        <video :src="getImagePath(project.image)" autoplay muted loop></video>
                    </template>
                    <template v-else>
                        <img :src="getImagePath(project.image)" alt="Project Image">
                    </template>
                    <div class="image-overlay"></div>
                </div>

                <div class="project-details">
                    <h3 class="project-title">{{ project.name }}</h3>
                    <p class="project-description">{{ project.description || '' }}
                    </p>

                    <div class="tech-tags" v-if="project.technologies">
                        <span v-for="tech in project.technologies" :key="tech" class="tech-tag"
                            :class="getTechClass(tech)">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="card-glow"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import projectsData from "../data/projects.json"

const props = defineProps({
    categories: {
        type: String,
        default: ''
    }
});

const projects = ref(projectsData.filter(p => p.type === props.categories));

const filteredProjects = computed(() => {
    if (!props.categories) return projectsData;

    return projectsData.filter(project =>
        project.categories && project.categories.includes(props.categories)
    );
});

const goToProject = (link) => {
    window.open(link, '_blank');
}

function isVideoFile(filePath) {
    const videoExtensions = ['webm', 'mp4', 'ogg'];
    const extension = filePath.split('.').pop();
    return videoExtensions.includes(extension.toLowerCase());
}

function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

function getTechClass(tech) {
    const techClasses = {
        'Vue.js': 'vue',
        'JavaScript': 'javascript',
        'Nuxt.js': 'nuxt',
        'HTML': 'html',
        'HTML5': 'html',
        'CSS': 'css',
        'SCSS': 'scss',
        'Bootstrap': 'bootstrap',
        'API': 'api',
        'LocalStorage': 'storage',
        'Figma': 'figma',
        'UI/UX': 'design',
        'Wordpress': 'wordpress'
    };
    return techClasses[tech] || 'default';
}

</script>

<style lang="scss" scoped>
@import '../scss/mixins';

.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    width: 100%;
    padding: 2rem 0;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;

    &:has(.project-card:nth-child(2):last-child) {
        gap: 2rem;
        justify-content: center;
        max-width: 900px;
    }
}

.project-card {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 420px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin: 0 auto;

    // Apply glassmorphism effect
    @include glassmorphism();

    // Apply normal shadows
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

    &:hover {
        @include hover-transform();
        @include card-shadows('hover');

        .card-glow {
            opacity: 1;
        }

        .project-image img,
        .project-image video {
            transform: scale(1.05);
        }

        .image-overlay {
            background: linear-gradient(180deg,
                    rgba(0, 0, 0, 0.1) 0%,
                    rgba(0, 0, 0, 0.6) 100%);
        }

        .tech-tag {
            transform: translateY(0);
            opacity: 1;
        }
    }
}

.card-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg,
            $primary-color,
            $secondary-color,
            #9b59b6,
            #3498db);
    background-size: 400% 400%;
    border-radius: 26px;
    opacity: 0;
    z-index: -1;
    animation: gradient-shift 8s ease infinite;
    transition: opacity 0.3s ease;
}

@keyframes gradient-shift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.card-content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
}

.project-image {
    position: relative;
    height: 240px;
    overflow: hidden;
    border-radius: 20px 20px 0 0;

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top left;
        transition: transform 0.4s ease;
    }
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.4) 100%);
    transition: background 0.3s ease;
}

.project-details {
    flex: 1;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: $text-light;
    margin: 0;
    line-height: 1.3;
    letter-spacing: -0.02em;
}

.project-description {
    font-size: 0.875rem;
    color: $text-low;
    line-height: 1.5;
    margin: 0;
    flex: 1;
    @include text-truncate(3);
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
}

.tech-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    transform: translateY(4px);
    opacity: 0.8;

    // Default tech tag style
    background: rgba(255, 255, 255, 0.1);
    color: $text-light;
    border: 1px solid rgba(255, 255, 255, 0.2);

    // Technology-specific colors using mixin
    &.vue {
        @include tech-tag-color(77, 189, 116, #4dd573);
    }

    &.javascript {
        @include tech-tag-color(247, 223, 30, #f7df1e);
    }

    &.nuxt {
        @include tech-tag-color(0, 217, 154, #00d99a);
    }

    &.html {
        @include tech-tag-color(227, 79, 38, #e34f26);
    }

    &.css,
    &.scss {
        @include tech-tag-color(191, 64, 128, #BF4080);
    }

    &.bootstrap {
        @include tech-tag-color(121, 82, 179, #7952b3);
    }

    &.api {
        @include tech-tag-color(139, 92, 246, #8b5cf6);
    }

    &.storage {
        @include tech-tag-color(251, 146, 60, #fb923c);
    }

    &.figma {
        @include tech-tag-color(162, 89, 255, #a259ff);
    }

    &.design {
        @include tech-tag-color(244, 63, 94, #f43f5e);
    }

    &.wordpress {
        @include tech-tag-color(33, 117, 155, #21759b);
    }
}

// Responsive design using mixins
@include tablet {
    @include card-dimensions(380px, 200px, 1.25rem, 1.5rem);

    .projects-container {
        grid-template-columns: 1fr;
        padding: 1rem 0;
    }

    .project-card:hover {
        @include hover-transform(1.01, -4px);
    }

    .project-title {
        font-size: 1.125rem;
    }

    .project-description {
        font-size: 0.8rem;
        @include text-truncate(2);
    }

    .tech-tag {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
    }
}

@include mobile {
    @include card-dimensions(360px, 180px, 1rem, 1rem);

    .project-card {
        border-radius: 20px;
    }

    .project-image {
        border-radius: 16px 16px 0 0;
    }
}
</style>