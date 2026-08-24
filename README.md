# Qiuwei Liu — Portfolio Website

Personal portfolio for **Qiuwei Liu — Computer Vision Engineer** (`YOLO · Video Analytics · Python / PyTorch`).

Live: `https://qiuweiliu.github.io` (GitHub Pages, `main` branch, `/` root)

## File structure

```
qiuweiliu.github.io/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── projects/
    │   ├── video-analytics/
    │   │   ├── dashboard.jpg  (add screenshot)
    │   │   └── demo.mp4       (add demo video)
    │   └── yolo/
    │       ├── detection-demo.jpg
    │       └── fp-fn-example.jpg
    ├── icons/                 (optional)
    └── resume/
        └── Qiuwei_Liu_Resume.pdf  (place your PDF here)
```

## Preview locally

No build step. Just open `index.html` directly in a browser, or:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Repository must be named `qiuweiliu.github.io` under user `QiuweiLiu`
2. Push to `main` branch
3. GitHub → Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`
4. Wait ~1 minute, visit `https://qiuweiliu.github.io`

## How to update screenshots

- Video Analytics dashboard: replace `assets/projects/video-analytics/dashboard.jpg` (recommended 1600×900, JPG)
- YOLO demo: replace `assets/projects/yolo/detection-demo.jpg` and `fp-fn-example.jpg`
- Keep images < 500 KB for fast loading (export JPG quality 80–85)

## How to add resume

Place PDF at `assets/resume/Qiuwei_Liu_Resume.pdf`. The “Resume” buttons in Hero and Contact link there. If missing, the link will 404 — add a note in `index.html` if you prefer.

## How to replace placeholders

- Email: search `YOUR_EMAIL_HERE` in `index.html` and `script.js` (`data-copy`)
- LinkedIn: search `YOUR_LINKEDIN_URL_HERE` in `index.html`
- Demo video: add MP4 to `assets/projects/video-analytics/demo.mp4` and update the “View Demo” link if needed

## Bilingual switching

- Button `EN / 中文` in nav toggles instantly, no reload
- Uses `localStorage` key `portfolio-lang`
- Translations are in `script.js` → `translations` object
- To edit copy, change that object only — no duplicated HTML

## How to change project content later

- Edit `index.html` project cards (keep class names, just change text)
- Update `script.js` translations for both `en` and `zh` keys
- Keep technology names (YOLO, ByteTrack, etc.) in English per spec

## Accessibility & performance

- Semantic HTML, keyboard nav, visible focus, alt text, reduced-motion support
- No external dependencies, no build tools
