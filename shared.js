/* shared.js — data model, storage, utilities, navigation */

const DIL_KEY = 'dilTracker';

const NHS_TAG_COLOURS = [
  { value: 'grey',        label: 'Grey' },
  { value: 'blue',        label: 'Blue' },
  { value: 'green',       label: 'Green' },
  { value: 'yellow',      label: 'Yellow' },
  { value: 'red',         label: 'Red' },
  { value: 'purple',      label: 'Purple' },
  { value: 'aqua-green',  label: 'Aqua green' },
  { value: 'pink',        label: 'Pink' },
  { value: 'orange',      label: 'Orange' },
  { value: 'white',       label: 'White' },
];

const DEFAULT_DATA = {
  version: 1,
  currentProjectId: 1,
  nextProjectId: 2,
  nextStatusId: 8,
  projects: [
    {
      id: 1,
      name: 'Community v2',
      description: 'Diligent Community v2 product design tracking',
      contact: { firstName: '', lastName: '', jobTitle: '', email: '' },
      owners: [
        { id: 1, firstName: 'Steve', lastName: '', email: '' },
        { id: 2, firstName: 'Akll',  lastName: '', email: '' },
        { id: 3, firstName: 'Bori',  lastName: '', email: '' },
      ],
      nextOwnerId: 4,
    },
  ],
  statuses: [
    { id: 1, name: 'Backlog',          colour: 'grey'   },
    { id: 2, name: 'Not started',      colour: 'grey'   },
    { id: 3, name: 'In progress',      colour: 'blue'   },
    { id: 4, name: 'Ready for review', colour: 'yellow' },
    { id: 5, name: 'Passed',           colour: 'green'  },
    { id: 6, name: 'Blocked',          colour: 'red'    },
    { id: 7, name: 'Failed',           colour: 'red'    },
  ],
  atlasGroups: [],
  atlasComponents: [],
  nextAtlasGroupId: 1,
  nextAtlasComponentId: 1,
  nextItemId: 22,
  items: [
    // ── Features ──────────────────────────────────────────────────────────
    { id:1,  projectId:1, type:'feature', featureId:null, name:'Navigation',
      description:'How users move around the product',
      audiences:'', location:'', designThinking:'', openQuestions:'', why:'',
      specId:'', specLink:'', owner:'Steve', links:'',
      status:'In progress', progress:0, updatedBy:'Steve', updatedAt:'2026-06-20T10:30:00Z' },
    { id:2,  projectId:1, type:'feature', featureId:null, name:'Discussion forums',
      description:'Threaded conversations and knowledge sharing',
      audiences:'', location:'', designThinking:'', openQuestions:'', why:'',
      specId:'', specLink:'', owner:'Bori', links:'',
      status:'In progress', progress:0, updatedBy:'Bori', updatedAt:'2026-06-22T11:00:00Z' },
    { id:3,  projectId:1, type:'feature', featureId:null, name:'Member profiles',
      description:'Identity and reputation within the community',
      audiences:'', location:'', designThinking:'', openQuestions:'', why:'',
      specId:'', specLink:'', owner:'Akll', links:'',
      status:'Not started', progress:0, updatedBy:'Akll', updatedAt:'2026-06-15T09:00:00Z' },
    { id:4,  projectId:1, type:'feature', featureId:null, name:'Notifications',
      description:'Keeping members informed and re-engaged',
      audiences:'', location:'', designThinking:'', openQuestions:'', why:'',
      specId:'', specLink:'', owner:'Steve', links:'',
      status:'Blocked', progress:0, updatedBy:'Steve', updatedAt:'2026-06-22T11:15:00Z' },
    { id:5,  projectId:1, type:'feature', featureId:null, name:'Search',
      description:'Discoverability of content and people',
      audiences:'', location:'', designThinking:'', openQuestions:'', why:'',
      specId:'', specLink:'', owner:'Bori', links:'',
      status:'Ready for review', progress:0, updatedBy:'Bori', updatedAt:'2026-06-24T16:45:00Z' },
    { id:6,  projectId:1, type:'feature', featureId:null, name:'Groups',
      description:'Topic-focused sub-communities',
      audiences:'', location:'', designThinking:'', openQuestions:'', why:'',
      specId:'', specLink:'', owner:'Akll', links:'',
      status:'In progress', progress:0, updatedBy:'Akll', updatedAt:'2026-06-23T13:00:00Z' },

    // ── Requirements: Navigation ───────────────────────────────────────────
    { id:7,  projectId:1, type:'requirement', featureId:1, name:'Primary navigation',
      description:'', audiences:'Members, Admins', location:'Global / Header',
      designThinking:'Persistent top nav with role-based items visible per user type',
      openQuestions:'How does nav collapse on mobile? Do we need a hamburger?',
      why:'Consistent wayfinding is the backbone of a great community experience',
      specId:'SPEC-001', specLink:'', owner:'Steve', links:'',
      status:'In progress', progress:60, updatedBy:'Steve', updatedAt:'2026-06-20T10:30:00Z' },
    { id:8,  projectId:1, type:'requirement', featureId:1, name:'Mobile navigation',
      description:'', audiences:'Members', location:'Global / Header',
      designThinking:'Collapsible hamburger menu with swipe gesture support',
      openQuestions:'Bottom nav bar vs side drawer?',
      why:'Mobile-first community needs first-class mobile navigation',
      specId:'SPEC-002', specLink:'', owner:'Steve', links:'',
      status:'Not started', progress:0, updatedBy:'Steve', updatedAt:'2026-06-18T09:00:00Z' },
    { id:9,  projectId:1, type:'requirement', featureId:1, name:'Breadcrumbs',
      description:'', audiences:'Members, Admins', location:'Global / Sub-pages',
      designThinking:'Show full path from home to current page',
      openQuestions:'How deep can breadcrumbs go before truncating?',
      why:'Orientation within nested content structures',
      specId:'SPEC-003', specLink:'', owner:'Akll', links:'',
      status:'Backlog', progress:0, updatedBy:'Akll', updatedAt:'2026-06-15T09:00:00Z' },

    // ── Requirements: Discussion forums ────────────────────────────────────
    { id:10, projectId:1, type:'requirement', featureId:2, name:'Thread view',
      description:'', audiences:'Members', location:'Community / Forums / Thread',
      designThinking:'Threaded replies with upvote and helpful reactions',
      openQuestions:'Rich text or markdown? Inline image uploads?',
      why:'The core value prop — where knowledge sharing happens',
      specId:'SPEC-004', specLink:'', owner:'Bori', links:'',
      status:'Backlog', progress:0, updatedBy:'Bori', updatedAt:'2026-06-18T14:00:00Z' },
    { id:11, projectId:1, type:'requirement', featureId:2, name:'Post creation',
      description:'', audiences:'Members', location:'Community / Forums / New post',
      designThinking:'Rich text editor with tagging, attachments and topic selection',
      openQuestions:'Draft autosave? Character limits?',
      why:'Lowering friction to post increases participation quality',
      specId:'SPEC-005', specLink:'', owner:'Bori', links:'',
      status:'In progress', progress:40, updatedBy:'Bori', updatedAt:'2026-06-22T11:00:00Z' },

    // ── Requirements: Member profiles ──────────────────────────────────────
    { id:12, projectId:1, type:'requirement', featureId:3, name:'Profile page',
      description:'', audiences:'Members, Admins', location:'Community / Members / Profile',
      designThinking:'Bio, badges, activity history, expertise tags',
      openQuestions:'Public vs private profiles? What data from Diligent is surfaced?',
      why:'Trust and credibility — members need to know who they are talking to',
      specId:'SPEC-006', specLink:'', owner:'Akll', links:'',
      status:'Not started', progress:0, updatedBy:'Akll', updatedAt:'2026-06-15T09:00:00Z' },
    { id:13, projectId:1, type:'requirement', featureId:3, name:'Edit profile',
      description:'', audiences:'Members', location:'Community / Members / Edit',
      designThinking:'Self-service editing of bio, photo, expertise tags and preferences',
      openQuestions:'Which fields sync from Diligent and cannot be edited here?',
      why:'Member agency over their own identity builds trust in the platform',
      specId:'SPEC-007', specLink:'', owner:'Akll', links:'',
      status:'Backlog', progress:0, updatedBy:'Akll', updatedAt:'2026-06-12T10:00:00Z' },

    // ── Requirements: Notifications ────────────────────────────────────────
    { id:14, projectId:1, type:'requirement', featureId:4, name:'In-app notifications',
      description:'', audiences:'Members', location:'Global / Notification centre',
      designThinking:'Bell icon with unread count, dropdown tray, notification preferences',
      openQuestions:'Push notifications for mobile?',
      why:'Drives re-engagement and keeps members in the loop without noise',
      specId:'SPEC-008', specLink:'', owner:'Steve', links:'',
      status:'Blocked', progress:0, updatedBy:'Steve', updatedAt:'2026-06-22T11:15:00Z' },
    { id:15, projectId:1, type:'requirement', featureId:4, name:'Email digest',
      description:'', audiences:'Members', location:'Settings / Notifications',
      designThinking:'Configurable daily or weekly digest of activity across followed topics',
      openQuestions:'Email digest cadence options? Unsubscribe flow?',
      why:'Re-activates members who do not check the app daily',
      specId:'SPEC-009', specLink:'', owner:'Steve', links:'',
      status:'Not started', progress:0, updatedBy:'Steve', updatedAt:'2026-06-14T09:00:00Z' },

    // ── Requirements: Search ───────────────────────────────────────────────
    { id:16, projectId:1, type:'requirement', featureId:5, name:'Global search',
      description:'', audiences:'Members, Admins', location:'Global / Search',
      designThinking:'Typeahead with results grouped by content type',
      openQuestions:'Elastic or Algolia? Search within groups only?',
      why:'Discoverability is critical at scale — members must find what they need fast',
      specId:'SPEC-010', specLink:'', owner:'Bori', links:'',
      status:'Ready for review', progress:100, updatedBy:'Bori', updatedAt:'2026-06-24T16:45:00Z' },
    { id:17, projectId:1, type:'requirement', featureId:5, name:'Search filters',
      description:'', audiences:'Members, Admins', location:'Global / Search',
      designThinking:'Filter by content type, date range, group, author',
      openQuestions:'Saved searches?',
      why:'Precision search reduces frustration for power users',
      specId:'SPEC-011', specLink:'', owner:'Bori', links:'',
      status:'Backlog', progress:0, updatedBy:'Bori', updatedAt:'2026-06-16T10:00:00Z' },

    // ── Requirements: Groups ───────────────────────────────────────────────
    { id:18, projectId:1, type:'requirement', featureId:6, name:'Group creation',
      description:'', audiences:'Admins, Group owners', location:'Community / Groups / New',
      designThinking:'Create, set visibility (public/private), add description and tags',
      openQuestions:'Who can create a group? Approval workflow?',
      why:'Groups enable topic-focused conversations without polluting the global feed',
      specId:'SPEC-012', specLink:'', owner:'Akll', links:'',
      status:'In progress', progress:35, updatedBy:'Akll', updatedAt:'2026-06-23T13:00:00Z' },
    { id:19, projectId:1, type:'requirement', featureId:6, name:'Group membership',
      description:'', audiences:'Members', location:'Community / Groups / Members',
      designThinking:'Join/leave, invite members, manage roles (member/moderator/owner)',
      openQuestions:'Max group size? Waitlist for capped groups?',
      why:'Clear membership makes the group feel exclusive and worth joining',
      specId:'SPEC-013', specLink:'', owner:'Akll', links:'',
      status:'Not started', progress:0, updatedBy:'Akll', updatedAt:'2026-06-11T08:00:00Z' },

    // ── Unclassified requirements ──────────────────────────────────────────
    { id:20, projectId:1, type:'requirement', featureId:null, name:'Analytics dashboard',
      description:'', audiences:'Admins', location:'',
      designThinking:'Overview of community health: active members, post volume, trending topics',
      openQuestions:'Which metrics matter most to admins? Real-time or daily snapshots?',
      why:'Admins need data to make decisions about content and engagement strategy',
      specId:'', specLink:'', owner:'Steve', links:'',
      status:'Backlog', progress:0, updatedBy:'Steve', updatedAt:'2026-06-10T09:00:00Z' },
    { id:21, projectId:1, type:'requirement', featureId:null, name:'Accessibility audit',
      description:'', audiences:'All', location:'',
      designThinking:'End-to-end WCAG 2.1 AA audit across all components and flows',
      openQuestions:'Internal or external audit? Scope: full product or MVP only?',
      why:'Non-negotiable for a health-sector community product',
      specId:'', specLink:'', owner:'Akll', links:'',
      status:'Not started', progress:0, updatedBy:'Akll', updatedAt:'2026-06-08T09:00:00Z' },
  ],
};

/* ── Storage ──────────────────────────────────────────────────────── */

function loadData() {
  try {
    const raw = localStorage.getItem(DIL_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall through */ }
  const fresh = JSON.parse(JSON.stringify(DEFAULT_DATA));
  localStorage.setItem(DIL_KEY, JSON.stringify(fresh));
  return fresh;
}

function saveData(data) {
  localStorage.setItem(DIL_KEY, JSON.stringify(data));
}

function getCurrentProject(data) {
  return data.projects.find(p => p.id === data.currentProjectId) || data.projects[0];
}

/* ── Utilities ────────────────────────────────────────────────────── */

function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}

function timeAgo(iso) {
  if (!iso) return '—';
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1)   return 'just now';
  if (mins < 60)  return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 7)   return `${days}d ago`;
  const weeks = Math.round(days / 7);
  if (weeks < 5)  return `${weeks}w ago`;
  return fmtDate(iso);
}

function ownerDisplayName(owner) {
  if (!owner) return '—';
  if (typeof owner === 'string') return esc(owner);
  return esc([owner.firstName, owner.lastName].filter(Boolean).join(' ')) || '—';
}

function statusColour(statusName, statuses) {
  const s = (statuses || []).find(s => s.name === statusName);
  return s ? `nhsuk-tag--${s.colour}` : 'nhsuk-tag--grey';
}

function statusBadge(item, statuses) {
  const cls = statusColour(item.status, statuses);
  let label = esc(item.status || '—');
  if (item.status === 'In progress' && item.progress > 0) label += ` (${item.progress}%)`;
  return `<strong class="nhsuk-tag ${cls}">${label}</strong>`;
}

function triggerDownload(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

/* ── Navigation ───────────────────────────────────────────────────── */

function initNav(activePage) {
  const pages = [
    { id: 'home',     label: 'Dashboard', href: 'index.html'    },
    { id: 'projects', label: 'Projects',  href: 'projects.html' },
    { id: 'statuses', label: 'Statuses',  href: 'statuses.html' },
    { id: 'atlas',    label: 'Atlas',     href: 'atlas.html'    },
    { id: 'about',    label: 'About',     href: 'about.html'    },
  ];
  const listItems = pages.map(p => `
    <li class="nhsuk-header__navigation-item">
      <a class="nhsuk-header__navigation-link" href="${p.href}"${p.id === activePage ? ' aria-current="page"' : ''}>${p.label}</a>
    </li>`).join('');
  document.getElementById('site-nav').innerHTML = `
    <header class="nhsuk-header" data-module="nhsuk-header" role="banner" id="top">
      <nav class="nhsuk-header__navigation" aria-label="Menu">
        <div class="nhsuk-header__navigation-container nhsuk-width-container">
          <ul class="nhsuk-header__navigation-list">
            ${listItems}
            <li class="nhsuk-header__menu" hidden>
              <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" id="toggle-menu" aria-expanded="false">
                <span class="nhsuk-u-visually-hidden">Browse </span>More
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>`;
}
