<template>
    <header>
        <div class="process_arrow_wrapper">
            <div class="arrow_box active">
                <span></span>
                <em>Select</em>
            </div>
            <div class="arrow_box">
                <span></span>
                <em>Summary</em>
            </div>
            <div class="arrow_box">
                <span></span>
                <em>Pay</em>
            </div>
        </div>
    </header>
</template>
<script>
</script>

<style lang="scss">
    $white: #fff;
    $arrow_background: #81A7BD;
    $arrow_color: #C0D3DE;
    $purchase_process_background: #C7C9C8;
    $arrow_border_color: #1873AC;

    header {
        width: 100%;
    .process_arrow_wrapper {
        margin: 2vw 0 0 2.5vw;
    .arrow_box {
        width: 28.7vw;
        height: 5vw;
        position: relative;
        display: inline-block;
        background: $arrow_background;
        color: $arrow_color;
        margin: 0 0.8vw;
    span {
        margin: 0;
        width: 0;
        height: 0;
        border-top: 2.5vw solid transparent;
        border-bottom: 2.5vw solid transparent;
        border-left: 2.5vw solid $purchase_process_background;
        position: absolute;
        top: 0;
        left: 0;
    }
    em {
        margin: 5vw;
        font: bold 3vw/4.5vw 'Arial';
    }
    &.active {
         background: $arrow_border_color;
         color: $white;
    &:after {
         border-left-color: $arrow_border_color;
     }
    }
    &:after, &:before {
                  left: 100%;
                  top: 50%;
                  border: solid transparent;
                  content: " ";
                  height: 0;
                  width: 0;
                  position: absolute;
                  pointer-events: none;
              }
    &:after {
         border-left-color: $arrow_background;
         border-width: 2.5vw;
         margin-top: -2.45vw;
         z-index: 1;
     }
    }
    .arrow_box:first-child {
    span {
        border-left: none;
    }
    }
    }
    }
</style>