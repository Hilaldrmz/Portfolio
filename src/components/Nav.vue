<template>
    <nav>
        <div class="nav-items">


            <router-link class="home" to="/">Hilal Durmaz</router-link>

            <div class="pages">
                <router-link to="/about">About</router-link>
                <router-link to="/projects">Projects</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;

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
        .pages>* {
            font-size: 20px;
            font-weight: 500;
            line-height: 1.4;
            color: $text-low;
            text-decoration: none;
        }

        .pages {
            display: flex;
            gap: 50px;

            .router-link-active {
                border-bottom: $secondary-color 5px solid;
                font-weight: bold;
            }
        }
    }
}
</style>