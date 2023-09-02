import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../components/Catalog.vue';
import Product from '../components/Product.vue';
import Cart from '../components/Cart.vue';
import Checkout from '../components/Checkout.vue';

const routes = [
    {
        path: '/',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'Product',
        props: true
    },
    {
        path: '/cart',
        component: Cart,
        name: 'Cart',
        props: true
    },
    {
        path: '/checkout',
        component: Checkout,
        name: 'Checkout',
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;