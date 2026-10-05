# Qiuwei Liu — Portfolio Website

Personal portfolio for **AI Systems / ML Engineering**: GPU Scheduling · Agent Workflows · Computer Vision.

Live: [qiuweiliu.github.io](https://qiuweiliu.github.io/)

## Project order

Forecast-Aware GPU Scheduler → Research Agent OS → Real-Time Video Analytics → Solar Filament Segmentation. ChatGPT Web Bridge and YOLO Optimization Portfolio appear under More Projects.

## Edit and preview

- `index.html`: project cards, links, page metadata.
- `script.js`: English / Chinese translations and interactions.
- `styles.css`: responsive layout and presentation.
- `assets/projects/`: existing Video Analytics and YOLO demo images.

No build step or external runtime dependencies. Preview with `python -m http.server 8000`, then open `http://localhost:8000`.

## GitHub Pages

Published from `main`, repository root. Pushing website changes triggers the existing Pages deployment.

## Content maintenance

Update both languages when editing text with `data-i18n`. The language switch stores the preference in `portfolio-lang`.

The video demo links to the committed GIF. Resume download buttons are omitted until a current PDF is available; add the file and verify its URL before restoring them.

The Video Analytics test count reflects the project README, not a new local test run. Scheduler results and experimental boundaries remain in its research repository.
