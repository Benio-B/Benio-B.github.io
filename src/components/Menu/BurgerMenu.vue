<template>
    <div
        class="menu-container"
        data-test="menu-container"
        id="menu-container"
        v-bind:class="{
            'menu-is-opened': show_list_menu_items,
            'menu-is-closed': !show_list_menu_items,
        }">
        <div
            data-test="open-menu-burger"
            ref="menuBurgerIcon"
            class="corner-menu-container-animated">
            <div class="corner-menu-icon">
                <i class="menu-burger-icon las la-2x la-bars"></i>
            </div>
        </div>
        <div v-show="show_list_menu_items" class="list-menu-items-container">
            <div class="list-menu-items">
                <ul>
                    <li
                        v-for="item in items"
                        v-bind:key="item.id"
                        v-bind:data-test="`item-list-${item.id}`">
                        <burger-menu-item
                            data-test="burger-menu-item"
                            v-bind:item="item"
                            v-on:on-click-item="onClickItem" />
                    </li>
                </ul>
            </div>
            <div
                data-test="close-menu-burger"
                class="menu-close-icon"
                ref="closeMenuItemsIcon"
                v-bind:aria-label="$t('close')">
                <i class="las la-2x la-times"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenuItem from './BurgerMenuItem.vue';
    import type { Item } from '@/type';

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

        private show_list_menu_items = false;

        noScroll(): void {
            window.scrollTo(0, 0);
        }

        mounted(): void {
            const menu_burger_item_icon = this.$refs.menuBurgerIcon;

            if (!(menu_burger_item_icon instanceof HTMLElement)) {
                throw Error('No menuBurgerItemIcon refs');
            }

            menu_burger_item_icon.addEventListener('click', () => {
                this.$emit('on-display-menu');
                this.show_list_menu_items = true;
                window.addEventListener('scroll', this.noScroll);
            });

            const close_menu_items_icon = this.$refs.closeMenuItemsIcon;

            if (!(close_menu_items_icon instanceof HTMLElement)) {
                throw Error('No closeMenuItemsIcon refs');
            }

            close_menu_items_icon.addEventListener('click', () => {
                this.onClickItem();
            });

            document.addEventListener('keydown', (e) => {
                if (this.show_list_menu_items && e.key === 'Escape') {
                    this.onClickItem();
                }
            });
        }

        onClickItem(): void {
            this.$emit('on-hide-menu');
            this.show_list_menu_items = false;
            window.removeEventListener('scroll', this.noScroll);
        }
    }

    export default BurgerMenu;
</script>
