
<template>
    <div class="projects" v-for="projectType in projects" :key="projectType.type">
        <!-- <h2>{{ projectType.type }}</h2> -->
        <div v-for="project in projectType.projects" :key="project.id" class="project-card">
            <div class="project-info">
                <h5>{{ project.name }}</h5>
                <p>{{ project.description }}</p>
                <button class="small fw-sb" @click="goToProject(project.link)">View Project</button>
            </div>
            <div class="project-image">
                <img :src="project.image" alt="Project Image">
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
        width: 558px;
        height: 294.8px;
        flex-grow: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        border-radius: 14px;
        // background: url('../assets/Glass card.svg');
        background-image: url('../assets/glass-card-big.png');
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



        h5 {
            height: 28px;
            align-self: stretch;
            flex-grow: 0;
            font-size: 20px;
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
            font-size: 14px;
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
        width: 281px;
        height: 295px;
        flex-grow: 0;
        background-size: cover;
        background-position: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0 14px 14px 0;
        }
    }
}
</style>