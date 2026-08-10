# Final website verification report

Prepared: August 10, 2026

## Delivery under test

- Static GitHub Pages repository: `SoroushCu.github.io`
- Repository files: 77
- HTML documents: 13
- Deployment model: plain HTML, CSS, JavaScript, images, and PDF; no build command or package installation is required

## Requested revisions verified

1. Removed the requested wireless-communications paragraph from the homepage.
2. Removed the joint positioning and distributed sensing / upper-mid-band research section.
3. Replaced the massive-MIMO research visuals with two figures extracted from the supplied ICEE paper:
   - BER comparison for BPSK, `K = N = 32` (paper Figure 1)
   - Runtime comparison for BPSK as receiver count increases (paper Figure 3)
4. Updated every Updates entry to the `[mm/yyyy]` format, revised the Lasso and Allerton wording, removed the reviewer/teaching entry and upper-mid-band entry, and shortened the PhD-start entry as requested.
5. Added an online CV page with an embedded viewer, an open-in-new-tab action, and a direct PDF download action.
6. Removed the upper-mid-band publication, changed the ICEE venue/link wording, and added a recommended citation only to the published ICEE paper.
7. Reduced the profile sidebar to the profile identity plus the Email, Google Scholar, GitHub, and LinkedIn widgets; removed the location and institutional affiliation from the sidebar.
8. Added a persistent light/dark mode toggle that follows the operating-system preference until a visitor makes a manual choice.

## Static validation

A custom repository validator checked all 13 HTML documents and completed with zero errors. The checks included:

- every local HTML, CSS, JavaScript, image, PDF, and redirect target;
- every internal fragment link;
- duplicate element IDs;
- image loading metadata, alternative text, and intrinsic dimensions;
- `noopener` on links that open a new tab;
- requested content removals and additions;
- `[mm/yyyy]` formatting on every Updates entry;
- presence of both requested paper figures;
- recommended-citation and DOI structure;
- CV embed and download controls; and
- byte-for-byte identity between `files/CV.pdf` and the supplied CV.

Result: **PASS - 13 HTML files checked, 0 errors.**

## Local HTTP checks

The repository was served from `127.0.0.1` using the included local server. The following routes returned HTTP 200:

- `/`
- `/research/`
- `/updates/`
- `/cv/`
- `/publications/`
- `/projects/`
- `/files/CV.pdf`
- `/research.html`
- `/updates.html`
- `/cv.html`
- `/publications.html`
- `/projects.html`
- `/teachings.html`
- `/404.html`
- `/favicon.svg`

The CV response used the `application/pdf` content type.

## Browser verification

Headless Chromium was used for functional rendering checks.

### Desktop: 1440 x 1000

The Home, Research, Updates, CV, Publications, and Projects pages passed checks for:

- six primary navigation destinations;
- exactly one theme toggle;
- the intended profile widgets and affiliation-free sidebar title;
- no horizontal overflow;
- successful loading of every content image;
- working light-to-dark mode switching;
- correct accessibility state on the theme button;
- persistence of the selected theme after reload; and
- a correctly sized embedded CV with a working download link.

### Mobile: 390 x 844

The homepage passed checks for:

- no horizontal overflow;
- visible and non-overlapping navigation and theme controls;
- working navigation expansion and collapse;
- working profile-link expansion with the correct accessibility state;
- working light/dark mode switching; and
- correct responsive rendering in both themes.

Result: **PASS.**

## PDF guide verification

`Soroush-Website-Setup-and-GitHub-Guide.pdf` was generated as a 12-page Letter-size PDF. It was:

- opened successfully by PDF inspection tools;
- rendered to PNG at 180 DPI;
- visually checked page by page for clipping, overlap, broken glyphs, and missing images; and
- confirmed to contain the local-preview, GitHub Desktop, browser-upload, GitHub Pages, maintenance, troubleshooting, and glossary instructions.

Result: **PASS.**

## Clean-package verification

The final repository ZIP was extracted into a new directory. The extracted copy was revalidated, served locally, and checked for the primary HTML routes and CV PDF before delivery.

Result: **PASS.**
