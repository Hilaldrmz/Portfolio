<template>
    <nav>
        <div class="nav-items">
            <div class="wrap">
                <router-link class="home" to="/">Hilal Durmaz</router-link>
                <span class="developer-role">Front-end Developer</span>
            </div>
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
        .wrap,
        .pages>* {
            font-size: 20px;
            font-size: 0.80cqi;
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