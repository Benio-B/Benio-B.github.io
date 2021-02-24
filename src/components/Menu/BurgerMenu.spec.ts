import { MountingOptions, shallowMount } from '@vue/test-utils';
import BurgerMenu from './BurgerMenu.vue';
import BurgerMenuItem from './BurgerMenuItem.vue';

describe('BurgerMenu', () => {
    const $t = jest.fn();
    it('When BurgerMenu is created, Then showListMenuItems is false and user can open/close menu', async () => {
        const wrapper = shallowMount(BurgerMenu, {
            global: {
                mocks: {
                    $t,
                },
            },
        } as MountingOptions<{}>);

        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-closed'
        );
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-opened');

        wrapper.find('[data-test=open-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-closed');
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-opened'
        );

        wrapper.find('[data-test=close-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-closed'
        );
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-opened');
    });

    it("When BurgerMenuItem emits 'onClickItem', Then menu is closed", async () => {
        const wrapper = shallowMount(BurgerMenu, {
            global: {
                mocks: {
                    $t,
                },
            },
        } as MountingOptions<{}>);
        wrapper.find('[data-test=open-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-closed');
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-opened'
        );

        wrapper.findComponent(BurgerMenuItem).vm.$emit('on-click-item');
        await wrapper.vm.$nextTick();

        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-closed'
        );
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-opened');
    });

    it('When menu is opened, Then list of items is displayed', async () => {
        const wrapper = shallowMount(BurgerMenu, {
            global: {
                mocks: {
                    $t,
                },
            },
        } as MountingOptions<{}>);
        wrapper.find('[data-test=open-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(
            wrapper.find('[data-test=item-list-home]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=item-list-projects]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=item-list-contact]').exists()
        ).toBeTruthy();
        expect(wrapper.find('[data-test=item-list-cv]').exists()).toBeTruthy();
    });
});
