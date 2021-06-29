<template>
    <div
        class="menu-container"
        data-test="menu-container"
        id="menu-container"
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
            <div class="corner-menu-icon">
                <i class="menu-burger-icon las la-2x la-bars"></i>
            </div>
        </div>
        <div v-show="showListMenuItems" class="list-menu-items-container">
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
                        >
                        </burger-menu-item>
                    </li>
                </ul>
            </div>
            <div
                data-test="close-menu-burger"
                class="menu-close-icon"
                ref="closeMenuItemsIcon"
                v-bind:aria-label="$t('close')"
            >
                <i class="las la-2x la-times"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenuItem from './BurgerMenuItem.vue';
    import { Item } from '@/type';

    @Options({
        components: {
            BurgerMenuItem,
        },
    })
    class BurgerMenu extends Vue {
        get items(): Item[] {
            return [
                {
                    name: this.$t('menu.home'),
                    id: 'home',
                    classes: 'las la-home',
                    path: '/',
                },
                {
                    name: this.$t('menu.experiences'),
                    id: 'experiences',
                    classes: 'las la-suitcase',
                    path: '/experiences',
                },
                {
                    name: this.$t('menu.education'),
                    id: 'education',
                    classes: 'las la-graduation-cap',
                    path: '/education',
                },
                {
                    name: this.$t('menu.projects'),
                    id: 'projects',
                    classes: 'las la-cocktail',
                    path: '/projects',
                },
                {
                    name: this.$t('menu.about_me'),
                    id: 'about',
                    classes: 'las la-dizzy',
                    path: '/about',
                },
            ];
        }

        private showListMenuItems = false;

        noScroll(): void {
            window.scrollTo(0, 0);
        }

        mounted(): void {
            const menuBurgerItemIcon = this.$refs.menuBurgerIcon;

            if (!(menuBurgerItemIcon instanceof HTMLElement)) {
                throw Error('No menuBurgerItemIcon refs');
            }

            menuBurgerItemIcon.addEventListener('click', () => {
                this.$emit('on-display-menu');
                this.showListMenuItems = true;
                window.addEventListener('scroll', this.noScroll);
            });

            const closeMenuItemsIcon = this.$refs.closeMenuItemsIcon;

            if (!(closeMenuItemsIcon instanceof HTMLElement)) {
                throw Error('No closeMenuItemsIcon refs');
            }

            closeMenuItemsIcon.addEventListener('click', () => {
                this.onClickItem();
            });

            document.addEventListener('keydown', (e) => {
                if (this.showListMenuItems && e.key == 'Escape') {
                    this.onClickItem();
                }
            });
        }

        onClickItem(): void {
            this.$emit('on-hide-menu');
            this.showListMenuItems = false;
            window.removeEventListener('scroll', this.noScroll);
        }
    }

    export default BurgerMenu;
</script>
