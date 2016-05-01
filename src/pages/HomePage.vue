<template>
    <a v-link="{ path: '/selectpage' }" class="touch_wrapper active">
        <h1>Touch the screen</h1>
        <span class="circle_thin circle">
            <i class="circle_full circle"></i>
        </span>
    </a>
</template>
<style lang="scss">
$main_page_color: #412DA9;
$main_page_background: #BFE0F1;

.touch_wrapper {
    display: none;
    vertical-align: middle;
    text-align: center;
    background: $main_page_background;
    text-decoration: none;
    &.active {
        display: table-cell;
    }
    &:hover {
        cursor: pointer;
    }
    h1 {
        margin: 0 0 30px 0;
        color: $main_page_color;
    }
    .circle {
        border-radius: 50%;
        display: inline-block;
        margin-right: 20px;
        background: $main_page_color;
    }
    .circle_thin {
        width: 14vw;
        height: 14vw;
        position: relative;
    }
    .circle_full {
        width: 12vw;
        height: 12vw;
        position: absolute;
        top: 2%;
        left: 2%;
        display: block;
        border: 0.8vw solid $main_page_background;
    }
}
</style>
