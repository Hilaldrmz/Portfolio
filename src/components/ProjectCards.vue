<template>
    <div class="projects" v-for="projectType in projects" :key="projectType.type">
        <!-- <h2>{{ projectType.type }}</h2> -->
        <div v-for="project in projectType.projects" :key="project.id" class="project-card">
            <div class="project-info">
                <h5>{{ project.name }}</h5>
                <p>{{ project.description }}</p>
                <button class="small fw-sb" @click="goToProject(project.link)"
                    :type="'video/' + project.image.split('.').pop()">View Project</button>
            </div>
            <div class="project-image">
                <template v-if="isVideoFile(project.image)">
                    <video :src="getImagePath(project.image)" autoplay muted loop></video>
                </template>
                <template v-else>
                    <img :src="getImagePath(project.image)" alt="Project Image">
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import projectsData from "../data/projects.json"

const props = defineProps({
    type: {
        type: String,
        default: ''
    }
});

const projects = ref(projectsData.filter(p => p.type === props.type));

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

</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px;
    width: 100%;
    color: $text-light;
    border-radius: 14px;
    padding-top: 50px;


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


    .project-card {
        min-width: 200px;
        min-height: 100px;
        width: 21.75cqi;
        height: 11cqi;
        flex-grow: 0;
        display: flex;
        // flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        border-radius: 14px;
        // background: url('../assets/Glass card.svg');
        background-image: url('../assets/Glass card.svg');
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0 3.4px 36px 0 rgba(112, 144, 176, 0.1);
    }

    .project-info {
        flex: 1;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;



        h5 {
            height: 28px;
            align-self: stretch;
            flex-grow: 0;
            font-size:  0.9cqi;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.4;
            letter-spacing: normal;
            text-align: left;
            margin-bottom: 15px;
        }

        p {
            align-self: stretch;
            flex-grow: 0;
            font-size: 0.5cqi;
            font-weight: 500;
            line-height: 2;
        }

        button {
            width: max-content;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4.5px 13.5px;
            border-radius: 13.5px;
            border: solid 0.6px $text-light;
            background-color: transparent;
            color: $text-light;
            cursor: pointer;
            margin-top: 15px;
        }
    }

    .project-image {
        min-width: 100px;
        width: 11cqi;
        height: 100%;
        flex-grow: 0;
        background-size: cover;
        background-position:top;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0 14px 14px 0;
        }

        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0 14px 14px 0;
        }

    }
}
</style>