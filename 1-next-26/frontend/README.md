This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev 

npm run dev -- --hostname 10.66.66.4
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





		

```
	my-small-site/                 # Root repo name – keep it short & descriptive
├── backend/                   # Django (API + possibly admin)
│   ├── Dockerfile
│   ├── requirements.txt       # Minimal: django, djangorestframework, gunicorn (optional psycopg2-binary)
│   ├── manage.py
│   ├── project/               # Main project (rename from 'myproject' to 'project' for clarity)
│   │   ├── __init__.py
│   │   ├── settings.py        # Keep simple; one file is fine for small site
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── core/                  # Single app for everything (models, views, serializers)
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── models.py          # 3–10 models max usually
│   │   ├── views.py           # Or api/views.py if you split
│   │   ├── serializers.py     # DRF if using API
│   │   ├── urls.py
│   │   └── tests.py
│   └── .env                   # Or keep at root
├── frontend/                  # Next.js (static-first mindset)
│   ├── Dockerfile             # Optional – many small sites skip container for frontend
│   ├── package.json
│   ├── next.config.mjs        # or .js
│   ├── tsconfig.json          # If TS
│   ├── public/                # favicon, images, robots.txt
│   ├── app/                   # App Router (recommended in 2025+)
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Home
│   │   ├── about/             # /about
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/            # Button, Header, Footer, Form...
│   ├── lib/                   # utils, api-fetcher.ts
│   └── tests/                 # Optional for small site
├── docker-compose.yml         # Local dev: backend + db (+ frontend if SSR needed)
├── .dockerignore
├── .env                       # DB creds, SECRET_KEY, NEXT_PUBLIC_API_URL=http://localhost:8000
├── .env.example
├── .gitignore
└── README.md                  # Quick start: docker-compose up, etc.
```


