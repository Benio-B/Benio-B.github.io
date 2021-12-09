import { shallowMount, flushPromises } from '@vue/test-utils';
import BurgerMenuItem from './BurgerMenuItem.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
    ],
});

describe('BurgerMenuItem', () => {
    it("When on click, Then event 'onClickItem' is emited", async () => {
        router.push('/');
        await router.isReady();

        const wrapper = shallowMount(BurgerMenuItem, {
            props: {
                item: {
                    name: 'Home',
                    id: 'home',
                    iconName: 'igloo',
                    path: '/',
                },
            },
            global: {
                plugins: [router],
            },
        });
        await wrapper.find('[data-test=on-click-item]').trigger('click');
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(wrapper.emitted('on-click-item')).toBeTruthy();
    });
});
