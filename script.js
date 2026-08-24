const translations = {
  en: {
    skip: "Skip to content",
    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    heroStatus: "Open to remote freelance projects",
    heroTitle: "Computer Vision Engineer",
    heroTagline: "Building practical computer vision systems — from YOLO model optimization to real-time video analytics.",
    heroBtnProjects: "View Projects",
    heroBtnResume: "Resume",
    heroResumeNote: "Resume: place PDF at <code>assets/resume/Qiuwei_Liu_Resume.pdf</code>",
    helpHeading: "What I Can Help With",
    helpIntro: "Hire me to turn detection requirements into reliable, measurable systems.",
    help1Title: "YOLO Training & Optimization",
    help1a: "custom dataset training",
    help1b: "detection performance optimization",
    help1c: "small-object detection",
    help1d: "model evaluation",
    help2Title: "Detection Debugging",
    help2a: "false positive / false negative analysis",
    help2b: "dataset diagnosis",
    help2c: "class imbalance",
    help2d: "error analysis",
    help3Title: "Video Analytics",
    help3b: "line crossing",
    help3c: "ROI analytics",
    help3d: "dwell detection",
    help3e: "event generation",
    help4Title: "Video System Integration",
    help4d: "video pipelines",
    help4e: "deployment-oriented integration",
    projectsHeading: "Featured Projects",
    mediaPlaceholder: "Dashboard preview",
    mediaPlaceholder2: "Add MP4 to assets/projects/video-analytics/demo.mp4",
    projectAKicker: "Real-Time Video Analytics",
    projA5: "line-crossing detection",
    projA7: "dwell-time detection",
    projA8: "event persistence",
    projA9: "event snapshots",
    projA11: "web dashboard",
    projA13: "automated testing",
    metricTests: "automated tests passed",
    metricFps: "CLI processing on Apple M1 (dev benchmark)",
    projectANote: "FPS is a development benchmark on Apple M1, not a guarantee for every model or deployment.",
    projectADemo: "View Demo — add video to assets/projects/video-analytics/demo.mp4",
    projectBKicker: "YOLO Model Optimization",
    projB1: "dataset audit",
    projB2: "frozen train / validation / test split",
    projB3: "baseline establishment",
    projB5: "class-level analysis",
    projB6: "object-size analysis",
    projB7: "controlled experiments",
    projB8: "standardized evaluation",
    projB9: "image / video inference",
    projectBFinding: "75.5% of validation objects were Tiny Objects",
    projectBFinding2: "analysis identified small-object detection as primary bottleneck and motivated higher-resolution experiments.",
    projectBCase: "Case Study",
    researchHeading: "Research / Systems",
    researchDesc: "Research on node-level online scheduling for dynamic Video-Agent workloads.",
    researchModels: "The simulator models:",
    researchM1: "dynamic job arrivals",
    researchM3: "GPU memory constraints",
    researchM4: "model loading",
    researchM5: "model cache reuse",
    researchM6: "model eviction",
    researchM9: "limited-future prediction",
    researchSched: "Scheduler families:",
    researchS2: "Myopic heuristic",
    researchS4: "mathematical optimization",
    researchFailed: "failed jobs",
    researchNote: "Presented as research / experimental systems work, not a production scheduler.",
    skillsHeading: "Skills",
    aboutHeading: "About",
    aboutRole: "Master's Student in Mechanical Engineering, 2025 – Present. B.Eng. in Vehicle Engineering.",
    aboutFocus: "Focus: Computer Vision · Video Analytics · GPU Scheduling · AI Systems",
    contactHeading: "Let's build something useful.",
    contactSub: "Open to remote projects and technical collaboration.",
    contactCopy: "Copy",
    contactResume: "Resume",
    contactResumeLink: "Download PDF",
    contactResumeNote: "Place PDF at assets/resume/Qiuwei_Liu_Resume.pdf",
    footerBuilt: "Built with HTML/CSS/vanilla JS for GitHub Pages"
  },
  zh: {
    skip: "跳到正文",
    navProjects: "项目",
    navSkills: "技能",
    navAbout: "关于",
    navContact: "联系",
    heroStatus: "可承接远程计算机视觉 / AI 项目",
    heroTitle: "计算机视觉工程师",
    heroTagline: "构建可落地的计算机视觉系统 — 从 YOLO 模型优化到实时视频分析。",
    heroBtnProjects: "查看项目",
    heroBtnResume: "简历",
    heroResumeNote: "简历请放至 <code>assets/resume/Qiuwei_Liu_Resume.pdf</code>",
    helpHeading: "我能帮你做什么",
    helpIntro: "把检测需求转化为可靠、可度量的系统。",
    help1Title: "YOLO 训练与优化",
    help1a: "定制数据集训练",
    help1b: "检测效果优化",
    help1c: "小目标检测",
    help1d: "模型评估",
    help2Title: "检测问题诊断",
    help2a: "误检 / 漏检分析",
    help2b: "数据集诊断",
    help2c: "类别不均衡",
    help2d: "错误分析",
    help3Title: "视频分析",
    help3b: "越线检测",
    help3c: "ROI 统计",
    help3d: "驻留检测",
    help3e: "事件生成",
    help4Title: "视频系统集成",
    help4d: "视频管道",
    help4e: "面向部署的集成",
    projectsHeading: "精选项目",
    mediaPlaceholder: "Dashboard 预览",
    mediaPlaceholder2: "视频放至 assets/projects/video-analytics/demo.mp4",
    projectAKicker: "实时视频分析",
    projA5: "越线检测",
    projA7: "驻留时间检测",
    projA8: "事件持久化",
    projA9: "事件截图",
    projA11: "Web 看板",
    projA13: "自动化测试",
    metricTests: "项自动化测试通过",
    metricFps: "Apple M1 开发环境 CLI 处理",
    projectANote: "FPS 为 Apple M1 开发环境基准，不代表所有模型与部署环境。",
    projectADemo: "查看演示 — 视频放至 assets/projects/video-analytics/demo.mp4",
    projectBKicker: "YOLO 模型优化",
    projB1: "数据集审计",
    projB2: "固化训练 / 验证 / 测试集",
    projB3: "Baseline 建立",
    projB5: "类别级分析",
    projB6: "目标尺寸分析",
    projB7: "受控实验",
    projB8: "标准化评估",
    projB9: "图片 / 视频推理",
    projectBFinding: "75.5% 验证集目标为极小目标",
    projectBFinding2: "分析确定小目标检测为主要瓶颈，并推动了更高分辨率实验。",
    projectBCase: "查看案例",
    researchHeading: "研究 / 系统",
    researchDesc: "面向动态 Video-Agent 负载的节点级在线调度研究。",
    researchModels: "仿真器建模：",
    researchM1: "动态任务到达",
    researchM3: "GPU 显存约束",
    researchM4: "模型加载",
    researchM5: "模型缓存复用",
    researchM6: "模型驱逐",
    researchM9: "有限未来预测",
    researchSched: "调度器类型：",
    researchS2: "近视启发式",
    researchS4: "数学优化",
    researchFailed: "失败任务",
    researchNote: "作为研究 / 实验系统工作展示，非生产级调度器。",
    skillsHeading: "技能",
    aboutHeading: "关于",
    aboutRole: "机械工程硕士在读，2025 – 至今，车辆工程学士。",
    aboutFocus: "方向：计算机视觉 · 视频分析 · GPU 调度 · AI 系统",
    contactHeading: "欢迎远程项目合作与技术交流",
    contactSub: "期待与你共建实用的系统。",
    contactCopy: "复制",
    contactResume: "简历",
    contactResumeLink: "下载 PDF",
    contactResumeNote: "PDF 放至 assets/resume/Qiuwei_Liu_Resume.pdf",
    footerBuilt: "基于 HTML/CSS/原生 JS 构建，部署于 GitHub Pages"
  }
};

const LANG_KEY = "portfolio-lang";

function applyLang(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const btn = document.getElementById("lang-switch");
  if (btn) btn.textContent = lang === "en" ? "EN / 中文" : "中文 / EN";
  localStorage.setItem(LANG_KEY, lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem(LANG_KEY);
  const initial = saved === "zh" || saved === "en" ? saved : "en";
  applyLang(initial);

  const switchBtn = document.getElementById("lang-switch");
  if (switchBtn) {
    switchBtn.addEventListener("click", () => {
      const cur = localStorage.getItem(LANG_KEY) || "en";
      applyLang(cur === "en" ? "zh" : "en");
    });
  }

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Copy email
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy") || "";
      if (!text || text.includes("YOUR_")) return;
      try { await navigator.clipboard.writeText(text); btn.textContent = "Copied!"; setTimeout(()=> btn.textContent = translations[localStorage.getItem(LANG_KEY)||"en"].contactCopy, 1200); } catch {}
    });
  });

  // Smooth scroll for anchor links (native smooth already, but ensure focus)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({behavior: "smooth", block: "start"});
          history.pushState(null, "", id);
        }
      }
    });
  });
});
