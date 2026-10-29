# Adapted to Survive

Our VCE Biology Unit 2 AOS3 website on adaptations at Melbourne Zoo.
By Ethan, Charlie and Joseph.

## Putting it online with GitHub Pages (about 15 minutes, one person does this)

1. Make a free account at github.com.
2. Click **+** (top right), then **New repository**. Name it something like `zoo-adaptations`, set it to **Public**, and click **Create repository**.
3. On the next screen, click **uploading an existing file**. Drag in *everything inside* this folder (index.html, the css, js and images folders, and so on), not the folder itself. Click **Commit changes**.
4. Go to **Settings**, then **Pages** (left sidebar). Under **Branch**, choose `main` and `/ (root)`, then **Save**.
5. Wait a minute or two and refresh. Your link appears at the top, like `https://yourname.github.io/zoo-adaptations/`. That's the link to give your teacher.

To let Charlie and Joseph edit too: **Settings**, **Collaborators**, **Add people**.

## Editing the site

You can edit any file directly on GitHub: open it, click the pencil icon, make changes, then **Commit changes**. The live site updates within a minute or two.

Each page has notes in `<!-- EDIT ... -->` comments showing what to change.

### Writing your content
Yellow **"To write:"** boxes mark text still needed. When you've written a section, replace the whole box. For example:

```html
<p class="todo">Describe a structural adaptation: ...</p>
```

becomes

```html
<p>Koalas have two opposable thumbs on each front paw, which ...</p>
```

Removing `class="todo"` is what turns the yellow box back into normal text.

### Pages and who's writing what
| File | Page |
|---|---|
| `index.html` | Home: intro, video, "What is an adaptation?" |
| `animal.html` | Animal of our choice |
| `native.html` | Native Australian animal (+ Indigenous cultural significance) |
| `endangered.html` | Endangered animal (+ conservation program, bioethical issue, ethical concept) |
| `plant.html` | Plant |
| `scavenger-hunt.html` | Selfies from each checkpoint |
| `references.html` | Sources and acknowledgements |

Remember to update the common and scientific names on **both** the profile page and the home page cards.

### Photos
No code needed. Upload photos into the `images` folder with these exact names:

- `animal.jpg`, `native.jpg`, `endangered.jpg`, `plant.jpg`
- `hunt-1.jpg`, `hunt-2.jpg`, ... (one per checkpoint)

Until a photo is there, the page shows a striped box with the file name it's waiting for. Names are case-sensitive: `Koala.JPG` won't match `native.jpg`.

Tip: phone photos are huge. Shrink them to about 1600px wide first (e.g. squoosh.app) so the site loads fast.

### Conservation status
On each organism page, find `data-status=""` and put in the IUCN code: `LC`, `NT`, `VU`, `EN`, `CR`, `EW` or `EX`. The coloured scale fills itself in.

### Video
Instructions are in a comment in `index.html` just above the video box. Paste the embed link into `src=""`.
