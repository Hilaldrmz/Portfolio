<template>
    <div class="contacts">
        <div class="icons">
            <a href="https://www.linkedin.com/in/hilal-durmaz" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="mailto:hilalldrmz@gmail.com">
                <font-awesome-icon :icon="['fas', 'envelope']" />
            </a>
            <a href="https://github.com/Hilaldrmz" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
        </div>
        <p>Hilal Durmaz | 2024</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 210px;
    padding-bottom: 160px;

    .icons {
        width: 153px;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 47px;
        

        a>* {
            width: 40px;
            height: 40px;
            color: $text-low;
        }
    }

        p {
            font-size: 16px;
            color: $text-medium;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    
}
</style>