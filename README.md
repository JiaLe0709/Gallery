# Artbook / Gallery app

This an image gallery / artbook site using Next.js, [Cloudinary](https://cloudinary.com), and [Tailwind](https://tailwindcss.com).

## Deploy

Deploy the app using [Vercel](https://vercel.com) or view the demo [here](https://gallery-jiale.vercel.app/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJiaLe0709%2FGallery&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_SECRET,CLOUDINARY_API_KEY,CLOUDINARY_FOLDER)

Before deploying the app, you have to add some environment variables.

| Env                               |    Type   | Required ? |
| :-------------------------------- | :-------: | :--------: |
| NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME |   String  |    True    |
| CLOUDINARY_API_KEY                |   Int     |    True    |
| CLOUDINARY_API_SECRET             |  String   |    True    |
| CLOUDINARY_FOLDER                 |  String   |    True    |

Or Create a .env file.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=
```

## Dev
Using [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/):

```bash
yarn install
```

```bash
yarn dev
```

## References

- Cloudinary API: https://cloudinary.com/documentation/transformation_reference
