# Mazharul Islam: Portfolio Website

Next.js (App Router) + TypeScript + plain custom CSS. Light theme, animated, responsive, no images bundled
(images are added later through `public/images/`).

## Run it on your computer

```bash
npm install
npm run dev        # open http://localhost:3000
```

Production check:

```bash
npm run build
npm start
```

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Skills | `/skills` |
| Projects (with filter) | `/projects` |
| Experience, achievements, certificates | `/experience` |
| Blog (search + filter) | `/blog` |
| 8 working articles | `/blog/<slug>` |
| Contact form | `/contact` |

## Where to edit your content

Everything you may want to change is in `src/data/`:

| File | What it controls |
|---|---|
| `site.ts` | Name, email, links, menu, contact-form endpoint |
| `skills.ts` | Skills, levels, habits, "learning now" |
| `projects.ts` | Projects (add `live:` and `repo:` links here) |
| `experience.ts` | Timeline, achievements, certificates |
| `posts/*.ts` | Blog articles (one file each) |
| `images.ts` | Every image slot and its AI prompt |

Colors and fonts: the `:root` block at the top of `src/styles/base.css`.

## Adding a new blog article

1. Copy any file in `src/data/posts/` and change the text.
2. Import it and add it to the list in `src/data/posts/index.ts`.
3. The page, card, search and sitemap entry are created automatically.

## Adding images

1. Open `IMAGE_PROMPTS.md`. Each entry has the exact file name, size and a ChatGPT prompt.
2. Save the picture with that exact file name inside `public/images/`.
3. Refresh. The image replaces the placeholder automatically, no code change.

Change a prompt in `src/data/images.ts`, then run `npm run prompts` to rebuild `IMAGE_PROMPTS.md`.

The two certificate slots are for your real documents (scans). Do not use AI-made certificates.

## Contact form (sends to your email)

The form uses FormSubmit (free). The first time anyone submits the form, FormSubmit emails
`jihadseopro@gmail.com` an activation link. Open that email and click **Activate** once. After that every message
arrives in your inbox. Send one test message yourself after you deploy. Check the spam folder too.

## Deploy (free)

1. Push this folder to a GitHub repository.
2. Import the repository on https://vercel.com and click Deploy.
3. Add an environment variable `NEXT_PUBLIC_SITE_URL` with your final website address
   (used by the sitemap and social previews).
