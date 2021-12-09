import type { MountingOptions } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import BurgerMenu from './BurgerMenu.vue';
import BurgerMenuItem from './BurgerMenuItem.vue';

describe('BurgerMenu', () => {
    const $t = jest.fn();
    it('When BurgerMenu is created, Then showListMenuItems is false and user can open/close menu', async () => {
        const wrapper = await shallowMount(BurgerMenu, {
            global: {
                mocks: {
                    $t,
                },
            },
        } as MountingOptions<{}>); // eslint-disable-line @typescript-eslint/ban-types

        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-closed'
        );
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-opened');

        await wrapper.find('[data-test=open-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('on-display-menu')).toBeTruthy();
        expect(
            wrapper.find('[data-test=menu-container]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=menu-container]').classes()
        ).not.toContain('menu-is-closed');
        expect(wrapper.find('[data-test=menu-container]').classes()).toContain(
            'menu-is-opened'
        );

        await wrapper.find('[data-test=close-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('on-hide-menu')).toBeTruthy();
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
        const wrapper = await shallowMount(BurgerMenu, {
            global: {
                mocks: {
                    $t,
                },
            },
        });
        await wrapper.find('[data-test=open-menu-burger]').trigger('click');
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

        (
            wrapper.findComponent(BurgerMenuItem).vm as InstanceType<
                typeof BurgerMenuItem
            >
        ).$emit('on-click-item');
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('on-hide-menu')).toBeTruthy();
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
        } as MountingOptions<{}>); // eslint-disable-line @typescript-eslint/ban-types

        await wrapper.find('[data-test=open-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(
            wrapper.find('[data-test=item-list-home]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=item-list-projects]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=item-list-experiences]').exists()
        ).toBeTruthy();
        expect(
            wrapper.find('[data-test=item-list-education]').exists()
        ).toBeTruthy();
    });

    it('When menu is opened and escape touch is pressed, Then menu is closed and event is emitted', async () => {
        const elem = document.createElement('div');
        if (document.body) {
            document.body.appendChild(elem);
        }
        const wrapper = shallowMount(BurgerMenu, {
            global: {
                mocks: {
                    $t,
                },
            },
            attachTo: elem,
        } as MountingOptions<{}>); // eslint-disable-line @typescript-eslint/ban-types
        await wrapper.find('[data-test=open-menu-burger]').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('on-display-menu')).toBeTruthy();

        await wrapper.trigger('keydown', {
            key: 'Escape',
        });
        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('on-hide-menu')).toBeTruthy();
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
});
