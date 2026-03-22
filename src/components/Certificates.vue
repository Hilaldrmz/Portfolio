<template>
    <div class="certificates">
        <div class="certificate" v-for="certificate in certificates" :key="certificate.id">
            <div @click="openCertificate(certificate)" class="certificate-wrapper">
                <!-- Normal image certificates -->
                <img :src="getImagePath(certificate.image)" alt="Certificate Image" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import data from '../data/certificates.json';

const certificates = reactive(data.certificates);

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
.certificates {
    display: flex;
    gap: 2rem;
    width: 100%;
    color: $text-light;
    padding: 2rem 0;
    animation: slideRTL 40s linear infinite;
    min-width: max-content;

    &:hover {
        animation-play-state: paused;
    }

    .certificate {
        display: flex;
        justify-content: center;
        min-width: 350px;
        flex-shrink: 0;

        .certificate-wrapper {
            position: relative;
            cursor: pointer;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.02);
            }
        }

        img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 14px;
        }
    }
}

@keyframes slideRTL {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>