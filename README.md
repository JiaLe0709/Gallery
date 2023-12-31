# Art Gallery / Gallery app

This an image gallery / art gallery site using Next.js, [Cloudinary](https://cloudinary.com), [Next-UI](https://nextui.org/), [Tailwind](https://tailwindcss.com) and more.

## Deploy

Deploy the app using [Vercel](https://vercel.com) or view the demo [here](https://gallery-jiale.vercel.app/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJiaLe0709%2FGallery&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_SECRET,CLOUDINARY_API_KEY,CLOUDINARY_FOLDER,SECRET)

Before deploying the app, you have to add some environment variables.

| Env                               |    Type   | Required ? |
| :-------------------------------- | :-------: | :--------: |
| NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME |   String  |    True    |
| CLOUDINARY_API_KEY                |   Int     |    True    |
| CLOUDINARY_API_SECRET             |  String   |    True    |
| CLOUDINARY_FOLDER                 |  String   |    True    |
| SECRET                            |  String   |    True    |

Or Create a .env file.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=
SECRET=
```

## Note

- SECRET can be random string. Ex: "ilove2eatbanana"

## Dev
Using [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/):

```bash
yarn install
```

If you don't have [Yarn](https://yarnpkg.com) click here to [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

```bash
yarn dev
```

## References

- Cloudinary API: https://cloudinary.com/documentation/transformation_reference
