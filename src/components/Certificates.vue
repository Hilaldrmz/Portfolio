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

const certificates = reactive(data.certificates).reverse();

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
    flex-flow: row wrap;
    justify-content: center;
    gap: 80px;
    width: 100%;
    color: $text-light;
    border-radius: 14px;
    padding-top: 50px;

    .certificate {
        display: flex;
        justify-content: center;
        gap: 80px;
        border-radius: 14px;
        padding-top: 50px;

        .certificate-wrapper {
            position: relative;
            cursor: pointer;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.02);
            }
        }

        img {
            width: 559.5px;
            height: 394px;
            border-radius: 14px;
        }
    }
}
</style>