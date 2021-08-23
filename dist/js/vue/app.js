var vue = new Vue({
    el: '#app',
    data: {
        competences: [
            { id: 1, name: 'HTML / CSS' },
            { id: 2, name: 'Bootstrap' },
            { id: 3, name: 'SASS' },
            { id: 4, name: 'JavaScript' },
            { id: 5, name: 'jQuery' },
            { id: 6, name: 'Ajax' },
            { id: 7, name: 'npm' },
            { id: 8, name: 'Yarn' },
            { id: 9, name: 'React' },
            { id: 10, name: 'Vue.js' },
            { id: 11, name: 'PHP' },
            { id: 12, name: 'phpunit' },
            { id: 13, name: 'doctrine-orm' },
            { id: 14, name: 'Twig' },
            { id: 15, name: 'Composer' },
            { id: 16, name: 'MySQL' },
            { id: 17, name: 'Yii' },
            { id: 18, name: 'Symfony' },
            { id: 19, name: 'Git / GitHub' },
            { id: 20, name: 'WordPress' },
            { id: 21, name: 'PrestaShop' }
        ],
        templates: [
            {
                id: 1,
                name: 'e-commerce',
                img: 'img/template/e-commerce.png',
                github: 'https://github.com/mnajafy/e-commerce',
                view: '',
                lang: 'Symfony + tests (phpunit)',
            },
            {
                id: 2,
                name: 'Gallery2',
                img: 'img/template/gallery2.jpeg',
                github: 'https://github.com/mnajafy/gallery2',
                view: '',
                lang: 'Vue.js',
            },
            {
                id: 3,
                name: 'Fourtheme',
                img: 'img/template/fourtheme.png',
                github: 'https://github.com/mnajafy/fourtheme',
                view: '',
                lang: 'Symfony',
            },
            {
                id: 4,
                name: 'Barbershop',
                img: 'img/template/barbershop.png',
                github: 'https://github.com/mnajafy/BarberShop',
                view: 'https://mnajafy.github.io/BarberShop/',
                lang: 'Html / CSS / JavaScript',
            },
            {
                id: 5,
                name: 'Buttons',
                img: 'img/template/buttons.png',
                github: 'https://github.com/mnajafy/button',
                view: 'https://mnajafy.github.io/button/',
                lang: 'Html / CSS',
            },
            {
                id: 6,
                name: 'Portfolio (dev)',
                img: 'img/template/portfolio-dev.png',
                github: 'https://github.com/mnajafy/portfolio_dev',
                view: 'https://mnajafy.github.io/portfolio_dev/',
                lang: 'Html / CSS / JavaScript',
            },
            {
                id: 7,
                name: 'Dr M.BarberShop',
                img: 'img/template/dr_m_barber_shop.png',
                github: 'https://github.com/mnajafy/dr_m_barber_shop',
                view: '',
                lang: 'PHP',
            },
            {
                id: 8,
                name: 'Portfolio (bg: dark)',
                img: 'img/template/portfolio_bg_dark.png',
                github: 'https://github.com/mnajafy/portfolio',
                view: 'https://mnajafy.github.io/portfolio/',
                lang: 'Html / CSS',
            },
        ],
        socialNetwork: [
            {
                id: 1,
                name: 'facebook',
                url: 'https://www.facebook.com/codeveloppeur',
                icon: 'fab fa-facebook-f'
            },
            {
                id: 2,
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/mohammad-najafy-229b57149/',
                icon: 'fab fa-linkedin-in'
            },
            {
                id: 3,
                name: 'twitter',
                url: 'https://twitter.com/mohammad_najafy',
                icon: 'fab fa-twitter'
            },
            {
                id: 4,
                name: 'instagram',
                url: 'https://www.instagram.com/codeveloppeur/',
                icon: 'fab fa-instagram'
            },
            {
                id: 5,
                name: 'github',
                url: 'https://github.com/mnajafy',
                icon: 'fab fa-github'
            },
        ]
    }
})