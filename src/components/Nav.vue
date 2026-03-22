<template>
    <nav>
        <div class="nav-items">
            <div class="wrap">
                <router-link class="home" to="/">Hilal Durmaz</router-link>
                <span class="developer-role">Software Developer</span>
            </div>
            <div class="pages">
                <a href="/#work-experience" @click="scrollToSection" class="work-exp-link">Work Experience</a>
                <router-link to="/projects">Projects</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.getElementById('work-experience');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
    padding: 0 2rem;

    .nav-items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 120px;
        margin-right: 120px;
        margin-left: 8.33vw;
        margin-right: 8.33vw;
        width: 100%;


        .home,
        .wrap,
        .pages>*,
        .work-exp-link {
            font-size: 20px;
            font-size: 0.80cqi;
            font-weight: 500;
            line-height: 1.4;
            color: $text-low;
            text-decoration: none;
            cursor: pointer;
        }

        .pages {
            display: flex;
            gap: 50px;

            .router-link-active {
                border-bottom: $secondary-color 5px solid;
                font-weight: bold;
            }
        }

        .wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            .developer-role {
                font-weight: bold;
                background-image: linear-gradient(to right, $primary-color 0%, $secondary-color -11%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;

            }
        }
    }
}
</style>