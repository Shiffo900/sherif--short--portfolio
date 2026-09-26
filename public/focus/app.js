(() => {
  const STORAGE = "shiffo_focus_v1";
  const MAX_TODAY = 3;
  const vaguePatterns = [/^work on\b/i,/^study\b/i,/^learn\b/i,/^think about\b/i,/^research\b/i,/^plan\b/i,/^fix\b/i,/^improve\b/i,/^اشتغل على\b/,/^اذاكر\b/,/^اتعلم\b/,/^افكر\b/,/^اخطط\b/,/^احسن\b/];
  let state = load();
  let activeView = "today";
  const $ = id => document.getElementById(id);

  function load(){
    try { return JSON.parse(localStorage.getItem(STORAGE)) || {tasks:[]}; }
    catch { return {tasks:[]}; }
  }

  function save(){ localStorage.setItem(STORAGE, JSON.stringify(state)); render(); }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
  function todayKey(){ return new Date().toISOString().slice(0,10); }
  function escapeHtml(str){ return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
  function showToast(message){ const t=$("toast"); t.textContent=message; t.classList.add("show"); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>t.classList.remove("show"),1900); }
  function isVague(title){ const clean=title.trim(); return clean.length < 6 || vaguePatterns.some(pattern => pattern.test(clean)); }
  function todayTasks(){ return state.tasks.filter(t=>t.bucket==="today"&&!t.archived).sort((a,b)=>(a.order??999)-(b.order??999)); }
  function incompleteToday(){ return todayTasks().filter(t=>!t.done); }
  function doneTodayCount(){ return state.tasks.filter(t=>t.done&&t.completedOn===todayKey()).length; }

  function addTask(title){
    const clean=title.trim(); if(!clean)return;
    const bucket=incompleteToday().length<MAX_TODAY?"today":"inbox";
    state.tasks.push({id:uid(),title:clean,category:"Work",estimate:"",bucket,order:bucket==="today"?todayTasks().length:999,done:false,createdAt:Date.now(),completedOn:null,archived:false});
    $("quickAdd").value=""; save(); if(bucket==="inbox")showToast("Today is full. Added to Inbox.");
  }
  function moveToToday(id){ const task=state.tasks.find(t=>t.id===id); if(!task)return; if(incompleteToday().length>=MAX_TODAY){showToast("Today is capped at 3. Finish or move one first.");return;} task.bucket="today"; task.done=false; task.completedOn=null; task.order=todayTasks().length; save(); }
  function moveToLater(id){ const task=state.tasks.find(t=>t.id===id); if(!task)return; task.bucket="later"; task.order=999; save(); }
  function moveToInbox(id){ const task=state.tasks.find(t=>t.id===id); if(!task)return; task.bucket="inbox"; task.order=999; save(); }
  function completeTask(id){ const task=state.tasks.find(t=>t.id===id); if(!task)return; task.done=!task.done; task.completedOn=task.done?todayKey():null; save(); }
  function focusNext(id){ const list=todayTasks().filter(t=>!t.done); const idx=list.findIndex(t=>t.id===id); if(idx<=0)return; const selected=list[idx]; const before=list.slice(0,idx); selected.order=0; before.forEach((t,i)=>t.order=i+1); save(); }
  function openEdit(id){ const task=state.tasks.find(t=>t.id===id); if(!task)return; $("editId").value=task.id; $("editTitle").value=task.title; $("editCategory").value=task.category||"Work"; $("editEstimate").value=task.estimate||""; $("taskDialog").showModal(); }
  function deleteTask(id){ state.tasks=state.tasks.filter(t=>t.id!==id); $("taskDialog").close(); save(); }
  function formatDate(){ return new Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric"}).format(new Date()); }
  function taskMeta(task){ const items=[]; if(task.category)items.push(`<span class="chip">${escapeHtml(task.category)}</span>`); if(task.estimate)items.push(`<span>${escapeHtml(task.estimate)}</span>`); return items.join(""); }

  function renderFocus(){
    const active=incompleteToday()[0];
    if(!active){ $("focusArea").innerHTML=`<div class="empty-focus"><b>No active task.</b><br>Add one below. Keep Today intentionally small.</div>`; return; }
    $("focusArea").innerHTML=`<div class="focus-card"><div class="focus-index">1</div><div><div class="focus-label">Current focus</div><div class="focus-title">${escapeHtml(active.title)}</div><div class="focus-meta">${taskMeta(active)}</div>${isVague(active.title)?`<div class="clarify">This task is vague. Rewrite it as a physical next action: Open / Write / Send / Call / Build.</div>`:""}<div class="focus-actions"><button class="primary-btn" data-action="complete" data-id="${active.id}">Mark done</button><button class="subtle-btn" data-action="edit" data-id="${active.id}">Edit</button></div></div></div>`;
  }

  function renderToday(){
    const list=todayTasks();
    if(!list.length){ $("todayList").innerHTML=`<div class="empty-list">No tasks yet. Add your first outcome below.</div>`; return; }
    const activeId=incompleteToday()[0]?.id;
    $("todayList").innerHTML=list.map(task=>`<div class="task-row ${task.done?"done":""} ${task.id===activeId?"is-focus":""}"><div class="node" data-action="complete" data-id="${task.id}" title="Complete"></div><div class="task-main"><div class="task-title">${escapeHtml(task.title)}</div><div class="task-meta">${taskMeta(task)}</div>${isVague(task.title)&&!task.done?`<div class="clarify">Clarify it: what exactly will you open, write, send, call, or build?</div>`:""}</div><div class="task-actions">${!task.done&&task.id!==activeId?`<button class="icon-btn" data-action="focus" data-id="${task.id}" title="Focus this next">◎</button>`:""}<button class="icon-btn" data-action="edit" data-id="${task.id}" title="Edit">⋯</button></div></div>`).join("");
  }

  function renderBucket(bucket,elementId){
    const list=state.tasks.filter(t=>t.bucket===bucket&&!t.done&&!t.archived).sort((a,b)=>b.createdAt-a.createdAt);
    if(!list.length){ $(elementId).innerHTML=`<div class="empty-list">${bucket==="inbox"?"Inbox clear.":"Nothing parked here."}</div>`; return; }
    $(elementId).innerHTML=list.map(task=>`<div class="task-row"><div class="task-main"><div class="task-title">${escapeHtml(task.title)}</div><div class="task-meta">${taskMeta(task)}</div>${isVague(task.title)?`<div class="clarify">Turn this into one concrete next action before moving it to Today.</div>`:""}</div><div class="task-actions"><button class="action-link" data-action="today" data-id="${task.id}">Today</button>${bucket==="inbox"?`<button class="icon-btn" data-action="later" data-id="${task.id}" title="Move to Later">→</button>`:`<button class="icon-btn" data-action="inbox" data-id="${task.id}" title="Move to Inbox">←</button>`}<button class="icon-btn" data-action="edit" data-id="${task.id}" title="Edit">⋯</button></div></div>`).join("");
  }

  function renderDone(){
    const list=state.tasks.filter(t=>t.done&&!t.archived).sort((a,b)=>(b.completedOn||"").localeCompare(a.completedOn||""));
    if(!list.length){ $("doneList").innerHTML=`<div class="empty-list">Nothing completed yet. Close one loop.</div>`; return; }
    $("doneList").innerHTML=list.map(task=>`<div class="task-row done" style="grid-template-columns:1fr auto;border-top:1px solid var(--line)"><div class="task-main"><div class="task-title">${escapeHtml(task.title)}</div><div class="task-meta"><span>${task.completedOn||""}</span>${taskMeta(task)}</div></div><div class="task-actions"><button class="icon-btn" data-action="complete" data-id="${task.id}" title="Undo">↶</button><button class="icon-btn" data-action="edit" data-id="${task.id}" title="Edit">⋯</button></div></div>`).join("");
  }

  function renderNav(){ ["today","inbox","later","done"].forEach(view=>{document.querySelector(`[data-view="${view}"]`)?.classList.toggle("active",activeView===view); $(view+"View").hidden=activeView!==view;}); }
  function render(){ $("todayDate").textContent=formatDate(); const list=todayTasks(); $("todaySlots").textContent=`${Math.min(MAX_TODAY,list.length)} / ${MAX_TODAY}`; $("doneToday").textContent=`${doneTodayCount()} done`; $("progressFill").style.width=`${Math.min(100,(doneTodayCount()/MAX_TODAY)*100)}%`; const inboxN=state.tasks.filter(t=>t.bucket==="inbox"&&!t.done&&!t.archived).length; const laterN=state.tasks.filter(t=>t.bucket==="later"&&!t.done&&!t.archived).length; $("inboxCount").textContent=inboxN?`· ${inboxN}`:""; $("laterCount").textContent=laterN?`· ${laterN}`:""; renderFocus(); renderToday(); renderBucket("inbox","inboxList"); renderBucket("later","laterList"); renderDone(); renderNav(); }

  document.addEventListener("click",event=>{ const viewButton=event.target.closest("[data-view]"); if(viewButton){activeView=viewButton.dataset.view;renderNav();return;} const button=event.target.closest("[data-action]"); if(!button)return; const id=button.dataset.id; const actions={complete:completeTask,edit:openEdit,today:moveToToday,later:moveToLater,inbox:moveToInbox,focus:focusNext}; actions[button.dataset.action]?.(id); });
  $("addBtn").addEventListener("click",()=>addTask($("quickAdd").value));
  $("quickAdd").addEventListener("keydown",event=>{if(event.key==="Enter")addTask(event.currentTarget.value);});
  $("taskForm").addEventListener("submit",()=>{ const id=$("editId").value; const task=state.tasks.find(t=>t.id===id); if(!task)return; task.title=$("editTitle").value.trim(); task.category=$("editCategory").value; task.estimate=$("editEstimate").value; save(); });
  $("deleteTaskBtn").addEventListener("click",()=>deleteTask($("editId").value));
  $("cancelDialogBtn").addEventListener("click",()=>$("taskDialog").close());
  $("resetDayBtn").addEventListener("click",()=>{ state.tasks.filter(t=>t.bucket==="today"&&!t.done).forEach(t=>{t.bucket="inbox";t.order=999;}); save(); showToast("Unfinished tasks moved to Inbox."); });
  render();
})();