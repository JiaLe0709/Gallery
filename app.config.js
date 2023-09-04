const app = {
    author: 'Jia Le', // Your name
    email: 'jle26531@gmail.com', // Your email account
    usage: 'Gallery', // use for title tag and footer you have to fill else it will become empty. Example: Gallery, Artbook
    pwa: true,
    // Boolean: true / false . if true using pwa function (able to install app from browser by manifest.json)
    // for manifest.json, you must config by edit manifest.json in 'public' folder
    // For generate image can use pwa-image-genrator to generate,
    // if you don't know how to do it you're welcome to msg me with email.
    // manifest icon default folder path is './public/manifest-icon'
    displayBirthdayBanner: true, // Boolean : true / false
    footer: true, // Boolean : true / false
    birthdaydate: '2008-07-09', // format: year-month-day (year is your born year - for minus current year to get age) Not forcing to fill (Only if you want to show the Birthday Banner) 
    desc: 'A Magical Gallery.', // Describe your app
    icon: '/favicon.ico', // path or link, if path remember add '/'
    socialLink: 'https://github.com/JiaLe0709', // Whatever Social Link You like
    useCustomTitle: false, // Boolean: true / false
    customTitle: '', // if useCustomTitle: true, If you didn't fill this it will be your current domain. Example: localhost:3000 , www.example.com
    navItems: [
        {
            label: "Home",
            href: "/",
        }
    ],
    navMenuItems: [
        {
            label: "Home",
            href: "/",
        }
    ],
    analytics: {
        provider: 'umami', // Fill the provider from the table. ex: ga
        /* 

        * Currently Support Umami, Google Analytics
        * Please fill these provider or leave it empty to disable it.

        Analytics           Provider
        * Umami            : umami
        * Google Analytics : ga
      
        */
        umamiConfig: {
            scriptUrl: 'https://umami-jiale.vercel.app/script.js', // The url of your Umami script
            websiteId: 'f79bd816-0f5a-4a46-8124-8d6b6bfd269a' // The website id of your Umami instance
        },
        gaConfig: {
            measurementId: '' // e.g: G-XXXXXXXXXX
        },
    },
    Cloudinary: {
        uploadPresent: 'xh9vrwsa', // if required upload function then replace the data
    },
    isProd: process.env.VERCEL_ENV === 'production'
}

// Title config (Don't modified here unless you change the full title display logic)
if (app.useCustomTitle) {
    app.title = app.customTitle;
} else {
    // Default domain
    app.title = `${app.author}'s ${app.usage}`;
}

module.exports = app;
