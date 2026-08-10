# Soroush Mesforush - Academic Website

This repository is the complete static website for `https://soroushcu.github.io/`. It is ready for GitHub Pages and does not require Jekyll, Ruby, Node.js, npm, or a build command.

## Main pages

- Home / About: `index.html`
- Research: `research/index.html`
- Updates: `updates/index.html`
- Online CV viewer: `cv/index.html`
- Publications: `publications/index.html`
- Course projects: `projects/index.html`

Shared styling is in `assets/css/site.css`; theme behavior is in `assets/js/site.js`. The day/night preference is saved in the visitor's browser and follows the operating-system preference until the visitor chooses a mode.

## Preview locally

Do not open `index.html` directly from Finder or File Explorer. The site uses root-relative links, so it should be opened through the included local server.

### Windows

Double-click `serve.bat`. Then open:

```text
http://127.0.0.1:8000/
```

Stop the server by returning to the command window and pressing `Ctrl+C`.

### macOS or Linux

Open Terminal in this folder and run:

```bash
chmod +x serve.sh
./serve.sh
```

Then open:

```text
http://127.0.0.1:8000/
```

Stop the server with `Ctrl+C`.

To use another port:

```bash
./serve.sh 8080
```

## Publish with GitHub Desktop

The detailed beginner instructions are supplied separately as `Soroush-Website-Setup-and-GitHub-Guide.pdf`. The basic workflow is:

1. Clone `SoroushCu/SoroushCu.github.io` in GitHub Desktop.
2. Open the cloned repository folder.
3. Copy the **contents** of this repository package into that folder and replace matching files. Do not place the entire package inside the repository as a nested folder.
4. In GitHub Desktop, enter a summary such as `Update academic website`.
5. Click **Commit to main**, then **Push origin**.
6. In the repository's GitHub Pages settings, publish from branch `main` and folder `/(root)`.

The hidden `.git` folder belongs to the cloned repository and must not be deleted.

## Routine edits

### Replace the CV

Overwrite `files/CV.pdf` with the new PDF while keeping exactly the same filename. The online viewer and download button will update automatically.

### Add the future arXiv link

The placeholder appears in both:

- `updates/index.html`
- `publications/index.html`

Search each file for `arXiv link forthcoming` and replace the placeholder span with an external link, for example:

```html
<a href="https://arxiv.org/abs/ARXIV-ID" target="_blank" rel="noopener noreferrer">arXiv</a>
```

On the Publications page, also wrap the Lasso paper title in the same arXiv link after the URL is available.

### Change profile links

The Email, Google Scholar, GitHub, and LinkedIn widgets appear in each full page. Search the repository for the old URL, then replace every occurrence with the new URL.

### Add an update

In `updates/index.html`, add a new list item at the top of `<ul class="updates-list">` using this pattern:

```html
<li>
  <span class="update-date">[mm/yyyy]</span>
  <div class="update-text">Your update text.</div>
</li>
```

## Important files

- `files/CV.pdf` - CV displayed online and offered for download
- `images/profile-square.jpg` - circular profile photograph
- `images/mimo-ber-bpsk.png` - BER result from the ICEE paper
- `images/mimo-runtime-bpsk.png` - runtime result from the ICEE paper
- `assets/css/site.css` - site-specific layout, responsive design, and light/dark themes
- `assets/js/site.js` - theme toggle and accessibility behavior
- `.nojekyll` - tells GitHub Pages to publish the files as a static site
- `sitemap.xml` and `robots.txt` - search-engine discovery files
- `TEST_REPORT.md` - verification results for this delivery

## Deployment structure

At the GitHub repository root, you should see `index.html`, `assets`, `images`, `files`, `research`, `updates`, `cv`, `publications`, and `projects`. If you instead see a single outer folder containing those items, the website was copied one level too deep.
