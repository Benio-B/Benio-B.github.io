<template>
    <div
        class="menu-container"
        v-bind:class="{
            'menu-is-opened': showListMenuItems,
            'menu-is-closed': !showListMenuItems,
        }"
    >
        <div ref="menuBurgerIcon" class="corner-menu-container-animated">
            <div class="corner-menu-items-container" />
            <div class="corner-menu-icon">
                <font-awesome-icon
                    icon="bars"
                    size="lg"
                    class="menu-burger-icon"
                />
            </div>
        </div>
        <div v-show="showListMenuItems">
            <div class="list-menu-items">
                <ul>
                    <li v-for="item in items" :key="item.name">
                        <burger-menu-item v-bind:item="item" />
                    </li>
                </ul>
            </div>
            <div class="menu-close-icon" ref="closeMenuItemsIcon">
                <font-awesome-icon icon="times" size="2x" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenuItem from './BurgerMenuItem.vue';
    import { Item } from '../../type';

    @Options({
        components: {
            BurgerMenuItem,
        },
    })
    export default class BurgerMenu extends Vue {
        private items: Item[] = [
            {
                name: 'Home',
                iconName: 'igloo',
            },
            {
                name: 'Curriculum Vitae',
                iconName: 'user',
            },
            {
                name: 'Projets',
                iconName: 'beer',
            },
            {
                name: 'Contact',
                iconName: 'address-card',
            },
        ];

        private showListMenuItems = false;
        private menuAlreadyClicked = false;

        mounted(): void {
            const menuBurgerItemIcon = this.$refs.menuBurgerIcon;

            if (!(menuBurgerItemIcon instanceof HTMLElement)) {
                throw Error('No menuBurgerItemIcon refs');
            }

            menuBurgerItemIcon.addEventListener('click', () => {
                this.showListMenuItems = true;
                this.menuAlreadyClicked = true;
            });

            const closeMenuItemsIcon = this.$refs.closeMenuItemsIcon;

            if (!(closeMenuItemsIcon instanceof HTMLElement)) {
                throw Error('No closeMenuItemsIcon refs');
            }

            closeMenuItemsIcon.addEventListener('click', () => {
                this.showListMenuItems = false;
                this.menuAlreadyClicked = true;
            });
        }
    }
</script>
