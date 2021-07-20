<template>
    <div class="menu-item-container">
        <router-link
            v-bind:to="item.path"
            class="menu-item-link"
            v-on:click.capture="$emit('on-click-item')"
            data-test="on-click-item"
        >
            <i v-bind:class="item.classes" class="menu-item-icon"></i>
            {{ item.name }}
        </router-link>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import type { Item } from '@/type';

    export default class BurgerMenuItem extends Vue {
        @Prop()
        private readonly item!: Item;
    }
</script>
