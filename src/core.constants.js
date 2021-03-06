const NODE_PREFIX = 'octotree';
const ADDON_CLASS = 'octotree';
const SHOW_CLASS = 'octotree-show';
const PINNED_CLASS = 'octotree-pinned';

const ShowInPage = {
  All: 'All',
  CodeAndPullRequest: 'CodeAndPullRequest',
  Code: 'Code', 
  PullRequest: 'PullRequest'
}

const STORE = {
  TOKEN: 'octotree.access_token',
  HOVEROPEN: 'octotree.hover_open',
  SHOWIN: 'octotree.showin',
  PR: 'octotree.prdiff_shown',
  HOTKEYS: 'octotree.hotkeys',
  ICONS: 'octotree.icons',
  LOADALL: 'octotree.loadall',
  POPUP: 'octotree.popup_shown',
  WIDTH: 'octotree.sidebar_width',
  SHOWN: 'octotree.sidebar_shown',
  PINNED: 'octotree.sidebar_pinned',
  HUGE_REPOS: 'octotree.huge_repos'
};

const DEFAULTS = {
  TOKEN: '',
  HOVEROPEN: true,
  SHOWIN: ShowInPage.All,
  PR: true,
  LOADALL: true,
  HOTKEYS: '⌘+⇧+s, ⌃+⇧+s',
  ICONS: true,
  POPUP: false,
  WIDTH: 232,
  SHOWN: false,
  PINNED: false,
  HUGE_REPOS: {}
};

const EVENT = {
  TOGGLE: 'octotree:toggle',
  TOGGLE_PIN: 'octotree:pin',
  LOC_CHANGE: 'octotree:location',
  LAYOUT_CHANGE: 'octotree:layout',
  REQ_START: 'octotree:start',
  REQ_END: 'octotree:end',
  OPTS_CHANGE: 'octotree:change',
  VIEW_READY: 'octotree:ready',
  VIEW_CLOSE: 'octotree:close',
  VIEW_SHOW: 'octotree:show',
  FETCH_ERROR: 'octotree:error'
};

window.STORE = STORE;
window.DEFAULTS = DEFAULTS;
window.EVENT = EVENT;
