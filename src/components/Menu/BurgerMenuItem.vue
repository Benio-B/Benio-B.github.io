<template>
    <div class="menu-item-container">
        <font-awesome-icon v-bind:icon="item.iconName" class="menu-item-icon" />
        {{ item.name }}
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
