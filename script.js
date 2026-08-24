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
    projA2: "Line crossing / ROI / dwell analytics",
    metricTests: "automated tests passed",
    metricFps: "Apple M1 CLI development benchmark",
    projectANote: "FPS is a development benchmark on Apple M1, not a guarantee for every model or deployment.",
    projectADemo: "Watch Demo",
    projB1: "dataset audit & frozen evaluation split",
    projB6: "small-object bottleneck analysis",
    projB7: "controlled optimization & standardized evaluation",
    metricNote: "same frozen validation split (8-class TACO)",
    projectBFinding: "75.5% of validation objects were Tiny Objects",
    projectBFinding2: "analysis identified small-object detection as primary bottleneck and motivated higher-resolution experiments.",
    projectBCase: "Case Study",
    switchDetection: "Detection Demo",
    switchFpFn: "FP/FN Analysis",
    researchHeading: "Research / Systems",
    researchDesc: "Online scheduling research for dynamic Video-Agent DAG workloads with GPU memory, model caching, deadlines and limited-future prediction.",
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
    footerBuilt: "GitHub"
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
    projA2: "越线 / ROI / 驻留分析",
    metricTests: "项自动化测试通过",
    metricFps: "Apple M1 开发环境 CLI 基准",
    projectANote: "FPS 为 Apple M1 开发环境基准，不代表所有模型与部署环境。",
    projectADemo: "观看演示",
    projB1: "数据集审计与固化评估集",
    projB6: "小目标瓶颈分析",
    projB7: "受控优化与标准化评估",
    metricNote: "相同固化验证集（8 类 TACO）",
    projectBFinding: "75.5% 验证集目标为极小目标",
    projectBFinding2: "分析确定小目标检测为主要瓶颈，并推动了更高分辨率实验。",
    projectBCase: "查看案例",
    switchDetection: "检测演示",
    switchFpFn: "误检漏检分析",
    researchHeading: "研究 / 系统",
    researchDesc: "面向动态 Video-Agent 负载的节点级在线调度研究。",
    researchFailed: "失败任务",
    researchNote: "作为研究 / 实验系统工作展示，非生产级调度器。",
    skillsHeading: "技能",
    aboutHeading: "关于",
    aboutRole: "机械工程硕士在读，2025 – 至今，车辆工程学士。",
    aboutFocus: "方向：计算机视觉 · 视频分析 · GPU 调度 · AI 系统",
    contactHeading: "一起做点真正有用的东西。",
    contactSub: "可承接远程计算机视觉项目与技术合作。",
    contactCopy: "复制",
    contactResume: "简历",
    contactResumeLink: "下载 PDF",
    footerBuilt: "GitHub"
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
      try { await navigator.clipboard.writeText(text); const orig = btn.textContent; btn.textContent = "Copied!"; setTimeout(()=> btn.textContent = translations[localStorage.getItem(LANG_KEY)||"en"].contactCopy, 1200); } catch {}
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({behavior: "smooth", block: "start"}); history.pushState(null, "", id); }
      }
    });
  });

  // Hero resume hide if missing
  fetch("assets/resume/Qiuwei_Liu_Resume.pdf", {method:"HEAD"}).then(r => {
    if (!r.ok) document.querySelectorAll(".resume-link, .resume-item").forEach(el => el.style.display="none");
  }).catch(()=>{});

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(ent => { if (ent.isIntersecting) { ent.target.classList.add("visible"); io.unobserve(ent.target); } });
    }, {threshold: 0.12});
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("visible"));
  }

  // YOLO image switcher
  document.querySelectorAll(".yolo-switcher").forEach(sw => {
    const img = sw.querySelector("img");
    sw.querySelectorAll("[data-img]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (!img) return;
        img.src = btn.getAttribute("data-img");
        sw.querySelectorAll("[data-img]").forEach(b=> b.setAttribute("aria-selected","false"));
        btn.setAttribute("aria-selected","true");
      });
    });
  });

  // Video modal
  const modal = document.getElementById("video-modal");
  const video = modal ? modal.querySelector("video") : null;
  function openModal(){ if(!modal) return; modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); if(video) video.play().catch(()=>{}); document.body.style.overflow="hidden"; }
  function closeModal(){ if(!modal) return; modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); if(video){ video.pause(); video.currentTime=0;} document.body.style.overflow=""; }
  document.querySelectorAll("[data-modal-open]").forEach(btn=> btn.addEventListener("click", openModal));
  document.querySelectorAll("[data-modal-close]").forEach(el=> el.addEventListener("click", closeModal));
  if(modal) modal.addEventListener("click", e=> { if(e.target===modal) closeModal(); });
  document.addEventListener("keydown", e=> { if(e.key==="Escape" && modal && modal.classList.contains("open")) closeModal(); });

  // Simple count-up for metrics (respects reduced-motion)
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-count]").forEach(el => {
      const target = parseInt(el.getAttribute("data-count"),10);
      if (isNaN(target)) return;
      let cur=0; const step=Math.ceil(target/40);
      const io2 = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
          const t=setInterval(()=>{
            cur+=step; if(cur>=target){cur=target; clearInterval(t); io2.disconnect();}
            el.textContent=cur.toLocaleString();
          },30);
        }
      },{threshold:0.5});
      io2.observe(el);
    });
  }
});
