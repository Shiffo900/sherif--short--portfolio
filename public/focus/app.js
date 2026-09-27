(() => {
  const STORAGE = "shiffo_focus_v2";
  const OLD_STORAGE = "shiffo_focus_v1";
  const MAX_MUST_WINS = 3;
  const MAX_TOMORROW = 3;
  const VIEWS = ["projects", "today", "tomorrow", "pending", "waiting", "blocked", "done", "overdue"];
  const vaguePatterns = [/^work on\b/i,/^study\b/i,/^learn\b/i,/^think about\b/i,/^research\b/i,/^plan\b/i,/^fix\b/i,/^improve\b/i,/^check\b/i,/^review\b/i,/^اشتغل على\b/,/^اذاكر\b/,/^اتعلم\b/,/^افكر\b/,/^اخطط\b/,/^احسن\b/,/^راجع\b/,/^شوف\b/];
  const actionVerbs = /^(audit|launch|send|pause|build|write|call|create|compare|analyze|diagnose|update|publish|follow up|rewrite|test|prepare|finish|open|extract|clean|present|share|حدد|ابعت|راجع|حلل|شغل|اعمل|اكتب|كلم|جهز|اختبر|حدث|اطلع|اقفل|انشر|نظف|قارن)/i;
  const $ = id => document.getElementById(id);
  let state = loadState();
  let activeView = "today";
  let selectedProjectId = null;

  function localDateKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function normalizeProject(project) {
    return {
      id: project.id || uid(),
      name: String(project.name || "Untitled project").trim(),
      goal: project.goal || "",
      createdAt: project.createdAt || Date.now()
    };
  }

  function migrateOld(oldState) {
    const tasks = Array.isArray(oldState?.tasks) ? oldState.tasks : [];
    return {
      tasks: tasks.map((task, index) => {
        const wasDone = Boolean(task.done);
        const oldBucket = task.bucket || "inbox";
        const lane = wasDone ? "done" : oldBucket === "today" ? "today" : "pending";
        return {
          id: task.id || uid(),
          title: task.title || "Untitled task",
          project: task.category || "Work",
          priority: "P2",
          lane,
          status: wasDone ? "Done" : "To Do",
          taskType: oldBucket === "today" ? "mustwin" : "normal",
          problem: "",
          outcome: "",
          nextStep: "",
          result: "",
          deadline: "",
          waitingOn: "",
          since: "",
          followUp: "",
          order: Number.isFinite(task.order) ? task.order : index,
          createdAt: task.createdAt || Date.now(),
          completedOn: task.completedOn || null,
          archived: Boolean(task.archived),
          previousLane: "",
          previousStatus: ""
        };
      }),
      projects: []
    };
  }

  function normalizeTask(task) {
    return {
      id: task.id || uid(),
      title: task.title || "Untitled task",
      project: task.project || task.category || "",
      priority: ["P1", "P2", "P3"].includes(task.priority) ? task.priority : "P2",
      lane: ["today", "tomorrow", "pending", "waiting", "blocked", "done"].includes(task.lane) ? task.lane : "pending",
      status: ["To Do", "Doing", "Waiting", "Blocked", "Done"].includes(task.status) ? task.status : "To Do",
      taskType: ["mustwin", "quick", "normal"].includes(task.taskType) ? task.taskType : "normal",
      problem: task.problem || "",
      outcome: task.outcome || "",
      nextStep: task.nextStep || "",
      result: task.result || "",
      deadline: task.deadline || "",
      waitingOn: task.waitingOn || "",
      since: task.since || "",
      followUp: task.followUp || "",
      order: Number.isFinite(task.order) ? task.order : 999,
      createdAt: task.createdAt || Date.now(),
      completedOn: task.completedOn || null,
      archived: Boolean(task.archived),
      previousLane: task.previousLane || "",
      previousStatus: task.previousStatus || ""
    };
  }

  function deriveProjects(tasks, projects = []) {
    const normalized = projects.map(normalizeProject);
    const names = new Set(normalized.map(project => project.name.toLowerCase()));
    tasks.forEach(task => {
      const name = String(task.project || "").trim();
      if (name && !names.has(name.toLowerCase())) {
        normalized.push(normalizeProject({ name }));
        names.add(name.toLowerCase());
      }
    });
    return normalized.sort((a, b) => a.createdAt - b.createdAt);
  }

  function loadState() {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE));
      if (current?.tasks) {
        const tasks = current.tasks.map(normalizeTask);
        return { tasks, projects: deriveProjects(tasks, current.projects || []) };
      }
      const old = JSON.parse(localStorage.getItem(OLD_STORAGE));
      if (old?.tasks) {
        const migrated = migrateOld(old);
        migrated.projects = deriveProjects(migrated.tasks, []);
        localStorage.setItem(STORAGE, JSON.stringify(migrated));
        return migrated;
      }
    } catch (_) {}
    return { tasks: [], projects: [] };
  }

  function saveState() {
    localStorage.setItem(STORAGE, JSON.stringify(state));
    render();
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));
  }

  function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2100);
  }

  function isVague(title) {
    const clean = String(title || "").trim();
    if (clean.length < 7) return true;
    if (vaguePatterns.some(pattern => pattern.test(clean))) return true;
    return !actionVerbs.test(clean) && clean.split(/\s+/).length < 4;
  }

  function getProjectById(id) {
    return state.projects.find(project => project.id === id) || null;
  }

  function getProjectByName(name) {
    const clean = String(name || "").trim().toLowerCase();
    return state.projects.find(project => project.name.toLowerCase() === clean) || null;
  }

  function ensureProject(name) {
    const clean = String(name || "").trim();
    if (!clean) return null;
    const existing = getProjectByName(clean);
    if (existing) return existing;
    const project = normalizeProject({ name: clean });
    state.projects.push(project);
    return project;
  }

  function projectTasks(projectName) {
    return state.tasks.filter(task => !task.archived && task.project === projectName);
  }

  function openTasks() {
    return state.tasks.filter(task => !task.archived && task.status !== "Done");
  }

  function isOverdue(task) {
    return task.status !== "Done" && Boolean(task.deadline) && task.deadline < localDateKey();
  }

  function byPriorityThenCreated(a, b) {
    const weight = {P1: 1, P2: 2, P3: 3};
    return (weight[a.priority] - weight[b.priority]) || (a.order - b.order) || (a.createdAt - b.createdAt);
  }

  function tasksForLane(lane) {
    return state.tasks.filter(task => !task.archived && task.status !== "Done" && task.lane === lane).sort(byPriorityThenCreated);
  }

  function todayMustWins() {
    return state.tasks.filter(task => !task.archived && task.status !== "Done" && task.lane === "today" && task.taskType === "mustwin").sort(byPriorityThenCreated);
  }

  function todayQuickTasks() {
    return state.tasks.filter(task => !task.archived && task.status !== "Done" && task.lane === "today" && task.taskType === "quick").sort(byPriorityThenCreated);
  }

  function completedToday() {
    return state.tasks.filter(task => !task.archived && task.status === "Done" && task.completedOn === localDateKey()).sort((a, b) => b.createdAt - a.createdAt);
  }

  function activeFocus() {
    const mustWins = todayMustWins();
    return mustWins.find(task => task.status === "Doing") || mustWins[0] || null;
  }

  function taskMeta(task) {
    const parts = [];
    parts.push(`<span class="chip ${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>`);
    if (task.project) parts.push(`<span class="chip project-chip">${escapeHtml(task.project)}</span>`);
    parts.push(`<span class="chip status">${escapeHtml(task.status)}</span>`);
    if (task.deadline) parts.push(`<span>Due ${escapeHtml(task.deadline)}</span>`);
    if (task.waitingOn) parts.push(`<span class="chip waiting">Waiting: ${escapeHtml(task.waitingOn)}</span>`);
    if (task.status === "Blocked") parts.push(`<span class="chip blocked">Blocked</span>`);
    if (task.result) parts.push(`<span class="chip result">Result logged</span>`);
    return parts.join("");
  }

  function taskDetails(task) {
    const lines = [];
    if (task.problem) lines.push(`<div class="task-detail"><strong>Why:</strong> ${escapeHtml(task.problem)}</div>`);
    if (task.nextStep) lines.push(`<div class="task-detail"><strong>Next:</strong> ${escapeHtml(task.nextStep)}</div>`);
    if (task.result) lines.push(`<div class="task-detail"><strong>Result:</strong> ${escapeHtml(task.result)}</div>`);
    if ((task.lane === "waiting" || task.lane === "blocked") && (task.since || task.followUp)) {
      lines.push(`<div class="task-detail"><strong>Dependency:</strong> ${task.since ? `since ${escapeHtml(task.since)}` : ""}${task.since && task.followUp ? " · " : ""}${task.followUp ? `follow up ${escapeHtml(task.followUp)}` : ""}</div>`);
    }
    return lines.join("");
  }

  function contextualActions(task) {
    const actions = [];
    if (task.status !== "Done") actions.push(`<button class="action-link" data-action="complete" data-id="${task.id}">Done</button>`);
    if (task.lane !== "today" && task.status !== "Waiting" && task.status !== "Blocked") actions.push(`<button class="action-link" data-action="today" data-id="${task.id}">Today</button>`);
    if (task.lane !== "tomorrow" && task.status !== "Waiting" && task.status !== "Blocked") actions.push(`<button class="action-link" data-action="tomorrow" data-id="${task.id}">Tomorrow</button>`);
    if (task.status !== "Waiting") actions.push(`<button class="icon-btn" data-action="waiting" data-id="${task.id}" title="Move to Waiting">W</button>`);
    if (task.status !== "Blocked") actions.push(`<button class="icon-btn" data-action="blocked" data-id="${task.id}" title="Mark Blocked">!</button>`);
    actions.push(`<button class="icon-btn" data-action="edit" data-id="${task.id}" title="Edit">⋯</button>`);
    return actions.join("");
  }

  function taskRow(task, options = {}) {
    const compact = options.compact !== false;
    const rowClass = ["task-row", compact ? "compact-row" : "", options.focus ? "is-focus" : "", task.status === "Done" ? "done" : "", isOverdue(task) ? "overdue-row" : "", task.lane === "blocked" ? "blocked-row" : "", task.lane === "waiting" ? "waiting-row" : ""].filter(Boolean).join(" ");
    const vague = isVague(task.title) && task.status !== "Done";
    if (!compact) {
      return `<div class="${rowClass}"><div class="node" data-action="complete" data-id="${task.id}" title="Complete"></div><div class="task-main"><div class="task-title">${escapeHtml(task.title)}</div><div class="task-meta">${taskMeta(task)}</div>${taskDetails(task)}${vague ? `<div class="clarify">Make this executable: Verb + Object + Outcome. Define the physical next action.</div>` : ""}</div><div class="task-actions">${contextualActions(task)}</div></div>`;
    }
    return `<div class="${rowClass}"><div class="task-main"><div class="task-title">${escapeHtml(task.title)}</div><div class="task-meta">${taskMeta(task)}</div>${taskDetails(task)}${vague ? `<div class="clarify">Make this executable: Verb + Object + Outcome.</div>` : ""}</div><div class="task-actions">${contextualActions(task)}</div></div>`;
  }

  function doneProjectTaskRow(task) {
    return `<div class="task-row compact-row done"><div class="task-main"><div class="task-title">${escapeHtml(task.title)}</div><div class="task-meta"><span>${escapeHtml(task.completedOn || "")}</span>${taskMeta(task)}</div>${taskDetails(task)}</div><div class="task-actions"><button class="action-link" data-action="undo" data-id="${task.id}">Undo</button><button class="icon-btn" data-action="edit" data-id="${task.id}">⋯</button></div></div>`;
  }

  function renderProjectOptions() {
    $("projectOptions").innerHTML = state.projects.map(project => `<option value="${escapeHtml(project.name)}"></option>`).join("");
  }

  function renderProjects() {
    const grid = $("projectsGrid");
    if (!state.projects.length) {
      grid.innerHTML = `<div class="empty-list projects-empty">No projects yet. Create one, then attach tasks to it.</div>`;
      $("projectDetailSection").hidden = true;
      return;
    }

    grid.innerHTML = state.projects.map(project => {
      const tasks = projectTasks(project.name);
      const open = tasks.filter(task => task.status !== "Done");
      const done = tasks.filter(task => task.status === "Done");
      const blocked = open.filter(task => task.status === "Blocked").length;
      const overdue = open.filter(isOverdue).length;
      const selected = selectedProjectId === project.id ? " selected" : "";
      return `<article class="project-card${selected}" data-project-card="${project.id}">
        <div class="project-card-top">
          <div><div class="project-name">${escapeHtml(project.name)}</div>${project.goal ? `<div class="project-goal">${escapeHtml(project.goal)}</div>` : `<div class="project-goal muted">No goal added yet.</div>`}</div>
          <button class="icon-btn" data-project-action="edit" data-project-id="${project.id}" title="Edit project">⋯</button>
        </div>
        <div class="project-stats">
          <div><strong>${tasks.length}</strong><span>Tasks</span></div>
          <div><strong>${open.length}</strong><span>Open</span></div>
          <div><strong>${done.length}</strong><span>Done</span></div>
          <div><strong>${blocked + overdue}</strong><span>At risk</span></div>
        </div>
        <div class="project-actions">
          <button class="subtle-btn" data-project-action="open" data-project-id="${project.id}">Open project</button>
          <button class="primary-btn" data-project-action="task" data-project-id="${project.id}">+ Add task</button>
        </div>
      </article>`;
    }).join("");

    renderProjectDetail();
  }

  function renderProjectDetail() {
    const project = getProjectById(selectedProjectId);
    const section = $("projectDetailSection");
    if (!project) {
      section.hidden = true;
      return;
    }

    const all = projectTasks(project.name).sort((a, b) => {
      if (a.status === "Done" && b.status !== "Done") return 1;
      if (a.status !== "Done" && b.status === "Done") return -1;
      return byPriorityThenCreated(a, b);
    });
    const open = all.filter(task => task.status !== "Done");
    const done = all.filter(task => task.status === "Done");
    const overdue = open.filter(isOverdue).length;
    const blocked = open.filter(task => task.status === "Blocked").length;

    $("projectDetail").innerHTML = `<div class="project-detail-card">
      <div class="project-detail-head">
        <div>
          <div class="eyebrow">Project workspace</div>
          <h3>${escapeHtml(project.name)}</h3>
          ${project.goal ? `<p>${escapeHtml(project.goal)}</p>` : ""}
        </div>
        <button class="primary-btn" data-project-action="task" data-project-id="${project.id}">+ Add task</button>
      </div>
      <div class="project-detail-metrics">
        <span><strong>${all.length}</strong> total</span>
        <span><strong>${open.length}</strong> open</span>
        <span><strong>${done.length}</strong> done</span>
        <span class="risk-text"><strong>${overdue}</strong> overdue</span>
        <span class="risk-text"><strong>${blocked}</strong> blocked</span>
      </div>
      <div class="project-task-group"><div class="project-task-heading">Open tasks</div>${open.length ? open.map(task => taskRow(task)).join("") : `<div class="empty-list">No open tasks in this project.</div>`}</div>
      <div class="project-task-group"><div class="project-task-heading">Completed</div>${done.length ? done.map(doneProjectTaskRow).join("") : `<div class="empty-list">Nothing completed yet.</div>`}</div>
    </div>`;
    section.hidden = false;
  }

  function renderFocus() {
    const task = activeFocus();
    if (!task) {
      $("focusArea").innerHTML = `<div class="empty-focus"><b>No Must Win selected.</b><br>Choose up to 3 actions that reduce risk or move performance.</div>`;
      return;
    }
    $("focusArea").innerHTML = `<div class="focus-card"><div class="focus-index">1</div><div><div class="focus-label">Current focus</div><div class="focus-title">${escapeHtml(task.title)}</div><div class="focus-meta">${taskMeta(task)}</div>${task.problem ? `<div class="task-detail"><strong>Why:</strong> ${escapeHtml(task.problem)}</div>` : ""}${task.nextStep ? `<div class="task-detail"><strong>Next:</strong> ${escapeHtml(task.nextStep)}</div>` : ""}${isVague(task.title) ? `<div class="clarify">Rewrite this as Verb + Object + Outcome before you start.</div>` : ""}<div class="focus-actions"><button class="primary-btn" data-action="start" data-id="${task.id}">${task.status === "Doing" ? "In progress" : "Start now"}</button><button class="subtle-btn" data-action="complete" data-id="${task.id}">Mark done</button><button class="subtle-btn" data-action="edit" data-id="${task.id}">Edit</button></div></div></div>`;
  }

  function renderToday() {
    const mustWins = todayMustWins();
    const focusId = activeFocus()?.id;
    $("mustWinList").innerHTML = mustWins.length ? mustWins.map(task => taskRow(task, { compact: false, focus: task.id === focusId })).join("") : `<div class="empty-list">No Must Wins yet. Pick the 1–3 actions that matter most.</div>`;
    const quick = todayQuickTasks();
    $("quickList").innerHTML = quick.length ? quick.map(task => taskRow(task)).join("") : `<div class="empty-list">No quick tasks. Good.</div>`;
    renderEod();
  }

  function renderLane(lane, elementId) {
    const list = tasksForLane(lane);
    $(elementId).innerHTML = list.length ? list.map(task => taskRow(task)).join("") : `<div class="empty-list">Nothing here.</div>`;
  }

  function renderDone() {
    const list = state.tasks.filter(task => !task.archived && task.status === "Done").sort((a,b) => String(b.completedOn || "").localeCompare(String(a.completedOn || "")) || b.createdAt - a.createdAt);
    $("doneList").innerHTML = list.length ? list.map(doneProjectTaskRow).join("") : `<div class="empty-list">No completed tasks yet. Close one loop.</div>`;
  }

  function renderOverdue() {
    const list = openTasks().filter(isOverdue).sort((a,b) => a.deadline.localeCompare(b.deadline) || byPriorityThenCreated(a,b));
    $("overdueList").innerHTML = list.length ? list.map(task => taskRow(task)).join("") : `<div class="empty-list">Nothing overdue.</div>`;
  }

  function renderEod() {
    const done = completedToday();
    const openToday = state.tasks.filter(task => !task.archived && task.lane === "today" && task.status !== "Done");
    const tomorrow = tasksForLane("tomorrow").slice(0, MAX_TOMORROW);
    const makeList = items => items.length ? `<ul>${items.map(task => `<li>${escapeHtml(task.title)}</li>`).join("")}</ul>` : `<div class="none">None</div>`;
    $("eodSummary").innerHTML = `<div class="eod-grid"><div class="eod-block"><h4>Done today</h4>${makeList(done)}</div><div class="eod-block"><h4>Still open</h4>${makeList(openToday)}</div><div class="eod-block"><h4>Tomorrow's 3</h4>${makeList(tomorrow)}</div></div>`;
  }

  function generateEodText() {
    const done = completedToday();
    const openToday = state.tasks.filter(task => !task.archived && task.lane === "today" && task.status !== "Done");
    const tomorrow = tasksForLane("tomorrow").slice(0, MAX_TOMORROW);
    const lines = section => section.length ? section.map(task => `- ${task.project ? `[${task.project}] ` : ""}${task.title}`).join("\n") : "- None";
    return `END OF DAY — ${localDateKey()}\n\nDone today:\n${lines(done)}\n\nStill open:\n${lines(openToday)}\n\nTomorrow's 3:\n${lines(tomorrow)}`;
  }

  function generateManagerSummary() {
    const done = completedToday();
    const inProgress = openTasks().filter(task => task.status === "Doing");
    const pending = tasksForLane("pending");
    const waiting = tasksForLane("waiting");
    const blockers = tasksForLane("blocked");
    const tomorrow = tasksForLane("tomorrow").slice(0, MAX_TOMORROW);
    const keyResults = done.filter(task => task.result || task.outcome);
    const line = task => {
      const prefix = task.project ? `[${task.project}] ` : "";
      const suffix = task.result ? ` — ${task.result}` : task.outcome ? ` — ${task.outcome}` : "";
      return `- ${prefix}${task.title}${suffix}`;
    };
    const section = (title, list) => `${title}\n${list.length ? list.map(line).join("\n") : "- None"}`;
    return [`Daily Update — ${localDateKey()}`, section("\nCompleted", done), section("\nIn Progress", inProgress), section("\nPending / Waiting", [...pending, ...waiting]), section("\nBlockers", blockers), section("\nTomorrow", tomorrow), section("\nKey Results", keyResults)].join("\n");
  }

  function renderNav() {
    VIEWS.forEach(view => {
      document.querySelector(`[data-view="${view}"]`)?.classList.toggle("active", activeView === view);
      const panel = $(view + "View");
      if (panel) panel.hidden = activeView !== view;
    });
  }

  function renderCounters() {
    $("mustWinCount").textContent = `${todayMustWins().length} / ${MAX_MUST_WINS}`;
    $("doneCount").textContent = completedToday().length;
    const overdue = openTasks().filter(isOverdue).length;
    const blocked = tasksForLane("blocked").length;
    $("overdueCount").textContent = overdue;
    $("blockedCount").textContent = blocked;
    $("projectsCount").textContent = state.projects.length ? `· ${state.projects.length}` : "";
    $("tomorrowCount").textContent = tasksForLane("tomorrow").length ? `· ${tasksForLane("tomorrow").length}` : "";
    $("pendingCount").textContent = tasksForLane("pending").length ? `· ${tasksForLane("pending").length}` : "";
    $("waitingCount").textContent = tasksForLane("waiting").length ? `· ${tasksForLane("waiting").length}` : "";
    $("blockedTabCount").textContent = blocked ? `· ${blocked}` : "";
    $("overdueTabCount").textContent = overdue ? `· ${overdue}` : "";
  }

  function render() {
    $("todayDate").textContent = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date());
    renderCounters();
    renderProjectOptions();
    renderProjects();
    renderFocus();
    renderToday();
    renderLane("tomorrow", "tomorrowList");
    renderLane("pending", "pendingList");
    renderLane("waiting", "waitingList");
    renderLane("blocked", "blockedList");
    renderDone();
    renderOverdue();
    renderNav();
  }

  function setDependencyVisibility() {
    const lane = $("editLane").value;
    const status = $("editStatus").value;
    $("dependencyFields").style.display = (lane === "waiting" || lane === "blocked" || status === "Waiting" || status === "Blocked") ? "block" : "none";
  }

  function updateTitleHint() {
    const title = $("editTitle").value.trim();
    const hint = $("titleHint");
    if (!title) {
      hint.textContent = "Write an executable next action, not a topic.";
      hint.className = "field-hint";
    } else if (isVague(title)) {
      hint.textContent = "Too vague. Try: Verb + Object + Outcome.";
      hint.className = "field-hint warn";
    } else {
      hint.textContent = "Clear next action.";
      hint.className = "field-hint";
    }
  }

  function resetForm() {
    $("editId").value = "";
    $("editTitle").value = "";
    $("editProject").value = "";
    $("editPriority").value = "P2";
    $("editLane").value = "pending";
    $("editStatus").value = "To Do";
    $("editDeadline").value = "";
    $("editTaskType").value = "normal";
    $("editProblem").value = "";
    $("editOutcome").value = "";
    $("editNextStep").value = "";
    $("editResult").value = "";
    $("editWaitingOn").value = "";
    $("editSince").value = "";
    $("editFollowUp").value = "";
  }

  function openNew(kind, projectName = "") {
    resetForm();
    $("taskDialogTitle").textContent = "New task";
    $("editProject").value = projectName;
    if (kind === "mustwin") { $("editLane").value = "today"; $("editTaskType").value = "mustwin"; $("editPriority").value = "P1"; }
    if (kind === "quick") { $("editLane").value = "today"; $("editTaskType").value = "quick"; $("editPriority").value = "P3"; }
    if (kind === "tomorrow") { $("editLane").value = "tomorrow"; $("editTaskType").value = "normal"; }
    if (kind === "pending" || kind === "project-task") { $("editLane").value = "pending"; }
    if (kind === "waiting") { $("editLane").value = "waiting"; $("editStatus").value = "Waiting"; $("editSince").value = localDateKey(); }
    if (kind === "blocked") { $("editLane").value = "blocked"; $("editStatus").value = "Blocked"; $("editSince").value = localDateKey(); }
    setDependencyVisibility();
    updateTitleHint();
    $("taskDialog").showModal();
    setTimeout(() => $("editTitle").focus(), 30);
  }

  function openEdit(id) {
    const task = state.tasks.find(item => item.id === id);
    if (!task) return;
    $("taskDialogTitle").textContent = "Edit task";
    $("editId").value = task.id;
    $("editTitle").value = task.title;
    $("editProject").value = task.project;
    $("editPriority").value = task.priority;
    $("editLane").value = task.lane === "done" ? (task.previousLane || "pending") : task.lane;
    $("editStatus").value = task.status;
    $("editDeadline").value = task.deadline;
    $("editTaskType").value = task.taskType;
    $("editProblem").value = task.problem;
    $("editOutcome").value = task.outcome;
    $("editNextStep").value = task.nextStep;
    $("editResult").value = task.result;
    $("editWaitingOn").value = task.waitingOn;
    $("editSince").value = task.since;
    $("editFollowUp").value = task.followUp;
    setDependencyVisibility();
    updateTitleHint();
    $("taskDialog").showModal();
  }

  function canPlaceTask(id, lane, taskType) {
    if (lane === "today" && taskType === "mustwin") {
      const count = state.tasks.filter(task => task.id !== id && !task.archived && task.status !== "Done" && task.lane === "today" && task.taskType === "mustwin").length;
      if (count >= MAX_MUST_WINS) {
        showToast("Today already has 3 Must Wins. Finish or move one first.");
        return false;
      }
    }
    if (lane === "tomorrow") {
      const count = state.tasks.filter(task => task.id !== id && !task.archived && task.status !== "Done" && task.lane === "tomorrow").length;
      if (count >= MAX_TOMORROW) {
        showToast("Tomorrow is capped at 3 priorities.");
        return false;
      }
    }
    return true;
  }

  function saveTaskFromForm(event) {
    event.preventDefault();
    const id = $("editId").value;
    const title = $("editTitle").value.trim();
    if (!title) return;
    let lane = $("editLane").value;
    let status = $("editStatus").value;
    let taskType = $("editTaskType").value;
    if (status === "Waiting") lane = "waiting";
    if (status === "Blocked") lane = "blocked";
    if (status === "Done") lane = "done";
    if (lane === "waiting") status = "Waiting";
    if (lane === "blocked") status = "Blocked";
    if (lane === "today" && taskType === "normal") taskType = "mustwin";
    if (!canPlaceTask(id, lane, taskType)) return;

    const existing = state.tasks.find(task => task.id === id);
    const task = existing || normalizeTask({ id: uid(), createdAt: Date.now() });
    const projectName = $("editProject").value.trim();
    if (projectName) ensureProject(projectName);
    task.title = title;
    task.project = projectName;
    task.priority = $("editPriority").value;
    task.lane = lane;
    task.status = status;
    task.deadline = $("editDeadline").value;
    task.taskType = taskType;
    task.problem = $("editProblem").value.trim();
    task.outcome = $("editOutcome").value.trim();
    task.nextStep = $("editNextStep").value.trim();
    task.result = $("editResult").value.trim();
    task.waitingOn = $("editWaitingOn").value.trim();
    task.since = $("editSince").value;
    task.followUp = $("editFollowUp").value;
    task.completedOn = status === "Done" ? (task.completedOn || localDateKey()) : null;
    if (!existing) state.tasks.push(task);
    $("taskDialog").close();
    saveState();
  }

  function quickCapture(title) {
    const clean = title.trim();
    if (!clean) return;
    state.tasks.push(normalizeTask({ id: uid(), title: clean, lane: "pending", status: "To Do", taskType: "normal", priority: "P2", createdAt: Date.now() }));
    $("quickAdd").value = "";
    saveState();
    showToast("Captured to Pending. Add a project when you clarify it.");
  }

  function moveTask(id, lane, status = "To Do") {
    const task = state.tasks.find(item => item.id === id);
    if (!task) return;
    let taskType = task.taskType;
    if (lane === "today" && taskType === "normal") taskType = "mustwin";
    if (!canPlaceTask(id, lane, taskType)) return;
    task.previousLane = task.lane;
    task.previousStatus = task.status;
    task.lane = lane;
    task.status = status;
    task.taskType = taskType;
    if (lane === "waiting" || lane === "blocked") task.since = task.since || localDateKey();
    task.completedOn = null;
    saveState();
  }

  function completeTask(id) {
    const task = state.tasks.find(item => item.id === id);
    if (!task || task.status === "Done") return;
    task.previousLane = task.lane;
    task.previousStatus = task.status;
    task.lane = "done";
    task.status = "Done";
    task.completedOn = localDateKey();
    saveState();
  }

  function undoTask(id) {
    const task = state.tasks.find(item => item.id === id);
    if (!task) return;
    task.lane = task.previousLane || "pending";
    task.status = task.previousStatus && task.previousStatus !== "Done" ? task.previousStatus : "To Do";
    task.completedOn = null;
    saveState();
  }

  function deleteTask(id) {
    state.tasks = state.tasks.filter(task => task.id !== id);
    $("taskDialog").close();
    saveState();
  }

  function openProjectDialog(id = "") {
    const project = id ? getProjectById(id) : null;
    $("editProjectId").value = project?.id || "";
    $("projectName").value = project?.name || "";
    $("projectGoal").value = project?.goal || "";
    $("projectDialogTitle").textContent = project ? "Edit project" : "New project";
    $("deleteProjectBtn").style.visibility = project ? "visible" : "hidden";
    $("projectDialog").showModal();
    setTimeout(() => $("projectName").focus(), 30);
  }

  function saveProjectFromForm(event) {
    event.preventDefault();
    const id = $("editProjectId").value;
    const name = $("projectName").value.trim();
    const goal = $("projectGoal").value.trim();
    if (!name) return;
    const duplicate = state.projects.find(project => project.name.toLowerCase() === name.toLowerCase() && project.id !== id);
    if (duplicate) {
      showToast("A project with this name already exists.");
      return;
    }
    const existing = id ? getProjectById(id) : null;
    if (existing) {
      const oldName = existing.name;
      existing.name = name;
      existing.goal = goal;
      if (oldName !== name) state.tasks.forEach(task => { if (task.project === oldName) task.project = name; });
      selectedProjectId = existing.id;
    } else {
      const project = normalizeProject({ name, goal });
      state.projects.push(project);
      selectedProjectId = project.id;
    }
    $("projectDialog").close();
    activeView = "projects";
    saveState();
  }

  function deleteCurrentProject() {
    const id = $("editProjectId").value;
    const project = getProjectById(id);
    if (!project) return;
    const tasks = projectTasks(project.name);
    if (tasks.length) {
      showToast(`Move or delete the ${tasks.length} project task${tasks.length === 1 ? "" : "s"} first.`);
      return;
    }
    state.projects = state.projects.filter(item => item.id !== id);
    if (selectedProjectId === id) selectedProjectId = null;
    $("projectDialog").close();
    saveState();
  }

  async function copyText(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMessage);
    } catch (_) {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
      showToast(successMessage);
    }
  }

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      activeView = viewButton.dataset.view;
      renderNav();
      return;
    }

    const newButton = event.target.closest("[data-new-kind]");
    if (newButton) {
      openNew(newButton.dataset.newKind);
      return;
    }

    const projectButton = event.target.closest("[data-project-action]");
    if (projectButton) {
      const id = projectButton.dataset.projectId;
      const project = getProjectById(id);
      const action = projectButton.dataset.projectAction;
      if (action === "open" && project) {
        selectedProjectId = project.id;
        activeView = "projects";
        render();
        setTimeout(() => $("projectDetailSection")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
      if (action === "task" && project) openNew("project-task", project.name);
      if (action === "edit" && project) openProjectDialog(project.id);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const id = actionButton.dataset.id;
    const action = actionButton.dataset.action;
    if (action === "edit") openEdit(id);
    if (action === "complete") completeTask(id);
    if (action === "undo") undoTask(id);
    if (action === "today") moveTask(id, "today", "To Do");
    if (action === "tomorrow") moveTask(id, "tomorrow", "To Do");
    if (action === "waiting") moveTask(id, "waiting", "Waiting");
    if (action === "blocked") moveTask(id, "blocked", "Blocked");
    if (action === "start") moveTask(id, "today", "Doing");
  });

  $("newProjectBtn").addEventListener("click", () => openProjectDialog());
  $("projectForm").addEventListener("submit", saveProjectFromForm);
  $("closeProjectBtn").addEventListener("click", () => $("projectDialog").close());
  $("deleteProjectBtn").addEventListener("click", deleteCurrentProject);

  $("addBtn").addEventListener("click", () => quickCapture($("quickAdd").value));
  $("quickAdd").addEventListener("keydown", event => { if (event.key === "Enter") quickCapture(event.currentTarget.value); });
  $("taskForm").addEventListener("submit", saveTaskFromForm);
  $("cancelDialogBtn").addEventListener("click", () => $("taskDialog").close());
  $("deleteTaskBtn").addEventListener("click", () => {
    const id = $("editId").value;
    if (!id) { $("taskDialog").close(); return; }
    deleteTask(id);
  });
  $("editTitle").addEventListener("input", updateTitleHint);
  $("editLane").addEventListener("change", setDependencyVisibility);
  $("editStatus").addEventListener("change", setDependencyVisibility);

  $("managerSummaryBtn").addEventListener("click", () => {
    $("managerSummaryText").value = generateManagerSummary();
    $("summaryDialog").showModal();
  });
  $("closeSummaryBtn").addEventListener("click", () => $("summaryDialog").close());
  $("refreshSummaryBtn").addEventListener("click", () => $("managerSummaryText").value = generateManagerSummary());
  $("copySummaryBtn").addEventListener("click", () => copyText($("managerSummaryText").value, "Manager summary copied."));
  $("copyEodBtn").addEventListener("click", () => copyText(generateEodText(), "End-of-day summary copied."));

  render();
})();