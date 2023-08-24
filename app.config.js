const app = {
    author: 'Jia Le', // Your name
    usage: 'Gallery', // use for title tag and footer you have to fill else it will become empty. Example: Gallery, Artbook
    author: 'Jia Le',
    desc: '',
    icon: 'favicon.ico',
    socialLink: 'https://github.com/JiaLe0709', // Whatever Social Link You like
    useCustomTitle: false, // Boolean: true / false
    customTitle: '', // if useCustomTitle: true, If you didn't fill this it will be your current domain. Example: localhost:3000 , www.example.com
    analytics: {
        provider: 'umami', // Currently Only Support Umami, please fill with 'umami' or leave it empty to disable it.
        umamiConfig: {
            scriptUrl: 'https://umami-jiale.vercel.app/script.js', // The url of your Umami script
            websiteId: 'cd68652d-95e8-4bb5-8ec9-82543390a6da' // The website id of your Umami instance
        }
    },
    isProd: process.env.VERCEL_ENV === 'production'
}

// Title config
if (app.useCustomTitle) {
    app.title = app.customTitle;
} else {
    // Default domain
    app.title = `${app.author}'s ${app.usage}`;
}

module.exports = app;