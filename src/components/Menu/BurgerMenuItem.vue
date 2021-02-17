<template>
    <div class="menu-item-container">
        <router-link
            v-bind:to="item.path"
            class="menu-item-link"
            v-on:click.capture="$emit('on-click-item')"
        >
            <font-awesome-icon
                v-bind:icon="item.iconName"
                class="menu-item-icon"
            />
            {{ item.name }}
        </router-link>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { Item } from '../../type';

    export default class BurgerMenuItem extends Vue {
        @Prop()
        private readonly item!: Item;
    }
</script>
