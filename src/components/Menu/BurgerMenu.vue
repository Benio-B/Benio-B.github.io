<template>
    <div
        class="menu-container"
        data-test="menu-container"
        v-bind:class="{
            'menu-is-opened': showListMenuItems,
            'menu-is-closed': !showListMenuItems,
        }"
    >
        <div
            data-test="open-menu-burger"
            ref="menuBurgerIcon"
            class="corner-menu-container-animated"
        >
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
                    <li
                        v-for="item in items"
                        :key="item.id"
                        v-bind:data-test="`item-list-${item.id}`"
                    >
                        <burger-menu-item
                            v-bind:item="item"
                            v-on:on-click-item="onClickItem"
                        />
                    </li>
                </ul>
            </div>
            <div
                data-test="close-menu-burger"
                class="menu-close-icon"
                ref="closeMenuItemsIcon"
            >
                <font-awesome-icon icon="times" size="2x" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenuItem from './BurgerMenuItem.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { Item } from '../../type';

    @Options({
        components: {
            BurgerMenuItem,
            FontAwesomeIcon,
        },
    })
    export default class BurgerMenu extends Vue {
        private items: Item[] = [
            {
                name: 'Home',
                id: 'home',
                iconName: 'igloo',
                path: '/',
            },
            {
                name: 'Curriculum Vitae',
                id: 'cv',
                iconName: 'user',
                path: '/cv',
            },
            {
                name: 'Projets',
                id: 'projects',
                iconName: 'beer',
                path: '/projects',
            },
            {
                name: 'Contact',
                id: 'contact',
                iconName: 'address-card',
                path: '/contact',
            },
        ];

        private showListMenuItems = false;

        mounted(): void {
            const menuBurgerItemIcon = this.$refs.menuBurgerIcon;

            if (!(menuBurgerItemIcon instanceof HTMLElement)) {
                throw Error('No menuBurgerItemIcon refs');
            }

            menuBurgerItemIcon.addEventListener('click', () => {
                this.showListMenuItems = true;
            });

            const closeMenuItemsIcon = this.$refs.closeMenuItemsIcon;

            if (!(closeMenuItemsIcon instanceof HTMLElement)) {
                throw Error('No closeMenuItemsIcon refs');
            }

            closeMenuItemsIcon.addEventListener('click', () => {
                this.showListMenuItems = false;
            });
        }

        onClickItem(): void {
            this.showListMenuItems = false;
        }
    }
</script>
