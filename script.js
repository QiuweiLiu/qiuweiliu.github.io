const translations = {
  en: {
    metricDistinction: "Diagnostic TP/FP/FN statistics are used for failure analysis and may differ from COCO-style AP evaluation.",
    schedulerDesc: "Predicting future agent workflows for online GPU placement and ordering, with memory and model-cache constraints, scheduling baselines, and reproducible trace-driven simulation.",
    agentDesc: "An installable workflow core for reliable long-running AI-assisted research: persistent project state, separate execution and review roles, experiment gates, and context handoffs.",
    solarDesc: "Low-contrast, small-instance segmentation in full-disk H-alpha solar images under limited GPU memory, with frozen data splits and auditable experiment records.",
    moreProjects: "More Projects",
    bridgeKicker: "Agent tooling",
    bridgeDesc: "Attach-only CDP bridge with skill / MCP integration and explicit execution boundaries.",
    skip: "Skip to content",
    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    heroStatus: "Open to remote AI/ML internships",
    heroTitle: "AI Systems / ML Engineering",
    heroTagline: "Building reproducible AI systems across GPU scheduling, agent workflows and computer vision.",
    heroBtnProjects: "View Projects",
    projectsHeading: "Featured Projects",
    projA2: "Line crossing / ROI / dwell analytics",
    metricTests: "tests documented as passing",
    projectADemo: "View GIF Demo",
    projB1: "dataset audit & frozen evaluation split",
    projB6: "small-object bottleneck analysis",
    projB7: "controlled optimization & standardized evaluation",
    metricNote: "same frozen validation split (8-class TACO)",
    projectBFinding2: "analysis identified small-object detection as primary bottleneck and motivated higher-resolution experiments.",
    projectBCase: "Case Study",
    switchDetection: "Detection Demo",
    switchFpFn: "FP/FN Analysis",
    skillsHeading: "Skills",
    aboutHeading: "About",
    aboutSchool: "South China University of Technology",
    aboutRole: "Master's Student in Mechanical Engineering, 2025 – Present. B.Eng. in Vehicle Engineering.",
    aboutFocus: "Focus: AI Systems · GPU Scheduling · Agent Workflows · Computer Vision",
    contactHeading: "Let's build something useful.",
    contactSub: "Open to remote AI/ML internships and technical collaboration.",
    contactCopy: "Copy",
  },
  zh: {
    metricDistinction: "TP/FP/FN 诊断统计用于错误分析，与 COCO 风格的 AP 评估口径可能不同。",
    schedulerDesc: "预测 Agent 的未来工作流，用于在线 GPU 分配与执行排序；涵盖显存和模型缓存约束、调度基线与可复现的轨迹驱动仿真。",
    agentDesc: "面向长期 AI 辅助研究的可安装工作流核心，提供持久化项目状态、独立执行与审查角色、实验检查和上下文交接。",
    solarDesc: "在有限显存下研究全日面 H-alpha 图像中的低对比度小实例分割，采用固定数据划分并保留可核查的实验记录。",
    moreProjects: "更多项目",
    bridgeKicker: "Agent 工具",
    bridgeDesc: "仅连接已有浏览器的 CDP 桥接工具，支持 Skill / MCP 集成，并明确执行边界。",
    skip: "跳到正文",
    navProjects: "项目",
    navSkills: "技能",
    navAbout: "关于",
    navContact: "联系",
    heroStatus: "寻求远程 AI/ML 实习",
    heroTitle: "AI 系统 / 机器学习工程",
    heroTagline: "围绕 GPU 调度、Agent 工作流与计算机视觉，构建可复现的 AI 系统。",
    heroBtnProjects: "查看项目",
    projectsHeading: "精选项目",
    projA2: "越线 / ROI / 驻留分析",
    metricTests: "项测试已记录通过",
    projectADemo: "查看 GIF 演示",
    projB1: "数据集审计与固化评估集",
    projB6: "小目标瓶颈分析",
    projB7: "受控优化与标准化评估",
    metricNote: "相同固化验证集（8 类 TACO）",
    projectBFinding2: "分析确定小目标检测为主要瓶颈，并推动了更高分辨率实验。",
    projectBCase: "查看案例",
    switchDetection: "检测演示",
    switchFpFn: "误检漏检分析",
    skillsHeading: "技能",
    aboutHeading: "关于",
    aboutSchool: "华南理工大学",
    aboutRole: "机械工程硕士在读，2025 – 至今，车辆工程学士。",
    aboutFocus: "方向：AI 系统 · GPU 调度 · Agent 工作流 · 计算机视觉",
    contactHeading: "一起做点真正有用的东西。",
    contactSub: "寻求远程 AI/ML 实习与技术合作。",
    contactCopy: "复制",
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
      if (!text) return;
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
