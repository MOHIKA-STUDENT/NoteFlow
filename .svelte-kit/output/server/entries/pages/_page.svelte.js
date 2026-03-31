import { s as sanitize_props, a as spread_props, b as slot, c as attr_class, d as clsx, f as escape_html, g as derived, h as ensure_array_like, e as store_get, u as unsubscribe_stores } from "../../chunks/index2.js";
import { b as sortBy, M as Modal, f as filteredNotes, d as sortOrder, i as isLoading, n as notes, e as searchQuery, N as NoteForm, u as updateNote, a as addToast } from "../../chunks/NoteForm.js";
import { clsx as clsx$1 } from "clsx";
import { I as Icon } from "../../chunks/Icon.js";
function Arrow_down_wide_narrow($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m3 16 4 4 4-4" }],
    ["path", { "d": "M7 20V4" }],
    ["path", { "d": "M11 4h10" }],
    ["path", { "d": "M11 8h7" }],
    ["path", { "d": "M11 12h4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-down-wide-narrow" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowDownWideNarrow
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMyAxNiA0IDQgNC00IiAvPgogIDxwYXRoIGQ9Ik03IDIwVjQiIC8+CiAgPHBhdGggZD0iTTExIDRoMTAiIC8+CiAgPHBhdGggZD0iTTExIDhoNyIgLz4KICA8cGF0aCBkPSJNMTEgMTJoNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-down-wide-narrow
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Arrow_up_narrow_wide($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }],
    ["path", { "d": "M11 12h4" }],
    ["path", { "d": "M11 16h7" }],
    ["path", { "d": "M11 20h10" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up-narrow-wide" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpNarrowWide
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMyA4IDQtNCA0IDQiIC8+CiAgPHBhdGggZD0iTTcgNHYxNiIgLz4KICA8cGF0aCBkPSJNMTEgMTJoNCIgLz4KICA8cGF0aCBkPSJNMTEgMTZoNyIgLz4KICA8cGF0aCBkPSJNMTEgMjBoMTAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-narrow-wide
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Calendar($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "calendar" },
    $$sanitized_props,
    {
      /**
       * @component @name Calendar
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAydjQiIC8+CiAgPHBhdGggZD0iTTE2IDJ2NCIgLz4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDEwaDE4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/calendar
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Chevron_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function File_question($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M12 17h.01" }],
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
      }
    ],
    ["path", { "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-question" },
    $$sanitized_props,
    {
      /**
       * @component @name FileQuestion
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTdoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWN3oiIC8+CiAgPHBhdGggZD0iTTkuMSA5YTMgMyAwIDAgMSA1LjgyIDFjMCAyLTMgMy0zIDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-question
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Pen_line($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M12 20h9" }],
    [
      "path",
      {
        "d": "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "pen-line" },
    $$sanitized_props,
    {
      /**
       * @component @name PenLine
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjBoOSIgLz4KICA8cGF0aCBkPSJNMTYuMzc2IDMuNjIyYTEgMSAwIDAgMSAzLjAwMiAzLjAwMkw3LjM2OCAxOC42MzVhMiAyIDAgMCAxLS44NTUuNTA2bC0yLjg3Mi44MzhhLjUuNSAwIDAgMS0uNjItLjYybC44MzgtMi44NzJhMiAyIDAgMCAxIC41MDYtLjg1NHoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/pen-line
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Pin($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M12 17v5" }],
    [
      "path",
      {
        "d": "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "pin" },
    $$sanitized_props,
    {
      /**
       * @component @name Pin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTd2NSIgLz4KICA8cGF0aCBkPSJNOSAxMC43NmEyIDIgMCAwIDEtMS4xMSAxLjc5bC0xLjc4LjlBMiAyIDAgMCAwIDUgMTUuMjRWMTZhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xdi0uNzZhMiAyIDAgMCAwLTEuMTEtMS43OWwtMS43OC0uOUEyIDIgMCAwIDEgMTUgMTAuNzZWN2ExIDEgMCAwIDEgMS0xIDIgMiAwIDAgMCAwLTRIOGEyIDIgMCAwIDAgMCA0IDEgMSAwIDAgMSAxIDF6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/pin
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Search_x($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m13.5 8.5-5 5" }],
    ["path", { "d": "m8.5 8.5 5 5" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search-x" },
    $$sanitized_props,
    {
      /**
       * @component @name SearchX
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTMuNSA4LjUtNSA1IiAvPgogIDxwYXRoIGQ9Im04LjUgOC41IDUgNSIgLz4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4IiAvPgogIDxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/search-x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trash_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
    ["path", { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
    ["line", { "x1": "10", "x2": "10", "y1": "11", "y2": "17" }],
    ["line", { "x1": "14", "x2": "14", "y1": "11", "y2": "17" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA2aDE4IiAvPgogIDxwYXRoIGQ9Ik0xOSA2djE0YzAgMS0xIDItMiAySDdjLTEgMC0yLTEtMi0yVjYiIC8+CiAgPHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIgLz4KICA8bGluZSB4MT0iMTAiIHgyPSIxMCIgeTE9IjExIiB5Mj0iMTciIC8+CiAgPGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trash-2
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function NoteCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { note, onEdit, onDelete, onPin } = $$props;
    const formattedDate = derived(() => new Date(note.createdAt).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }));
    $$renderer2.push(`<article${attr_class(clsx(clsx$1("group flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 hover:shadow-xl", note.isPinned ? "border-primary/50 bg-primary/5 dark:bg-primary/5 shadow-md" : "border-slate-200 dark:border-slate-800 hover:border-primary/30")))}><div class="p-5 flex-1"><div class="flex items-start justify-between gap-4 mb-3"><h3 class="font-bold text-lg text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">${escape_html(note.title || "Untitled Note")}</h3> <button${attr_class(clsx(clsx$1("p-2 rounded-lg transition-all active:scale-90", note.isPinned ? "bg-primary text-white" : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800")))}>`);
    Pin($$renderer2, { class: clsx$1("w-4 h-4", note.isPinned && "fill-current") });
    $$renderer2.push(`<!----></button></div> <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-4 whitespace-pre-wrap">${escape_html(note.content || "Empty content...")}</p></div> <div class="px-5 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto"><div class="flex items-center gap-1.5 text-slate-400">`);
    Calendar($$renderer2, { class: "w-3.5 h-3.5" });
    $$renderer2.push(`<!----> <span class="text-xs font-medium">${escape_html(formattedDate())}</span></div> <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform"><button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Edit note">`);
    Pen_line($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></button> <button class="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors" title="Delete note">`);
    Trash_2($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></button></div></div></article>`);
  });
}
function Skeleton($$renderer) {
  $$renderer.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
  const each_array = ensure_array_like(Array(8));
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$renderer.push(`<div class="h-[200px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4"><div class="flex justify-between items-center"><div class="h-6 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div> <div class="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div></div> <div class="space-y-2"><div class="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div> <div class="h-4 w-5/6 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div> <div class="h-4 w-4/6 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div></div> <div class="pt-4 flex justify-between items-center border-t border-slate-50 dark:border-slate-800"><div class="h-4 w-24 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div> <div class="flex gap-2"><div class="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div> <div class="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse"></div></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
function EmptyState($$renderer, $$props) {
  let { type = "no-notes" } = $$props;
  $$renderer.push(`<div class="flex flex-col items-center justify-center py-20 text-center px-4"><div class="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-3xl flex items-center justify-center mb-6 text-slate-400">`);
  if (type === "no-notes") {
    $$renderer.push("<!--[0-->");
    File_question($$renderer, { class: "w-10 h-10" });
  } else {
    $$renderer.push("<!--[-1-->");
    Search_x($$renderer, { class: "w-10 h-10" });
  }
  $$renderer.push(`<!--]--></div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">`);
  if (type === "no-notes") {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`No notes yet`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`No results found`);
  }
  $$renderer.push(`<!--]--></h3> <p class="text-slate-500 dark:text-slate-400 max-w-sm">`);
  if (type === "no-notes") {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`Click the "New Note" button to start capturing your thoughts and ideas.`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`We couldn't find any notes matching your search. Try adjusting your keywords.`);
  }
  $$renderer.push(`<!--]--></p></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let editingNote = null;
    let noteToDeleteId = null;
    let isUpdating = false;
    const pinnedNotes = derived(() => store_get($$store_subs ??= {}, "$filteredNotes", filteredNotes).filter((n) => n.isPinned));
    const otherNotes = derived(() => store_get($$store_subs ??= {}, "$filteredNotes", filteredNotes).filter((n) => !n.isPinned));
    async function handleUpdateNote(data) {
      if (!editingNote) return;
      isUpdating = true;
      try {
        await updateNote(editingNote.id, data);
        editingNote = null;
        addToast({ message: "Note updated", type: "success" });
      } catch (e) {
        addToast({ message: "Failed to update", type: "error" });
      } finally {
        isUpdating = false;
      }
    }
    function handlePin(id) {
      const note = store_get($$store_subs ??= {}, "$notes", notes).find((n) => n.id === id);
      if (note) {
        updateNote(id, { isPinned: !note.isPinned });
      }
    }
    $$renderer2.push(`<div class="container mx-auto px-4 space-y-8"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><div><h2 class="text-2xl font-bold text-slate-900 dark:text-white">Your Notes</h2> <p class="text-sm text-slate-500 dark:text-slate-400">${escape_html(store_get($$store_subs ??= {}, "$filteredNotes", filteredNotes).length)} notes found</p></div> <div class="flex items-center gap-2 w-full sm:w-auto"><div class="relative flex-1 sm:flex-initial">`);
    $$renderer2.select(
      {
        value: store_get($$store_subs ??= {}, "$sortBy", sortBy),
        onchange: (e) => sortBy.set(e.target.value),
        class: "appearance-none w-full pl-4 pr-10 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer transition-all font-medium text-sm"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "createdAt" }, ($$renderer4) => {
          $$renderer4.push(`Sort by Date`);
        });
        $$renderer3.option({ value: "title" }, ($$renderer4) => {
          $$renderer4.push(`Sort by Title`);
        });
        $$renderer3.option({ value: "id" }, ($$renderer4) => {
          $$renderer4.push(`Sort by ID`);
        });
      }
    );
    $$renderer2.push(` `);
    Chevron_down($$renderer2, {
      class: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
    });
    $$renderer2.push(`<!----></div> <button class="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" title="Toggle sort order">`);
    if (store_get($$store_subs ??= {}, "$sortOrder", sortOrder) === "asc") {
      $$renderer2.push("<!--[0-->");
      Arrow_up_narrow_wide($$renderer2, { class: "w-5 h-5 text-primary" });
    } else {
      $$renderer2.push("<!--[-1-->");
      Arrow_down_wide_narrow($$renderer2, { class: "w-5 h-5 text-primary" });
    }
    $$renderer2.push(`<!--]--></button></div></div> `);
    if (store_get($$store_subs ??= {}, "$isLoading", isLoading) && store_get($$store_subs ??= {}, "$notes", notes).length === 0) {
      $$renderer2.push("<!--[0-->");
      Skeleton($$renderer2);
    } else if (store_get($$store_subs ??= {}, "$filteredNotes", filteredNotes).length === 0) {
      $$renderer2.push("<!--[1-->");
      EmptyState($$renderer2, {
        type: store_get($$store_subs ??= {}, "$searchQuery", searchQuery) ? "no-results" : "no-notes"
      });
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="space-y-12">`);
      if (pinnedNotes().length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<section class="space-y-4"><div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs"><span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Pinned Notes</div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
        const each_array = ensure_array_like(pinnedNotes());
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let note = each_array[$$index];
          NoteCard($$renderer2, {
            note,
            onEdit: (n) => editingNote = n,
            onDelete: (id) => noteToDeleteId = id,
            onPin: handlePin
          });
        }
        $$renderer2.push(`<!--]--></div></section>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <section class="space-y-4">`);
      if (pinnedNotes().length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="text-slate-400 font-bold uppercase tracking-wider text-xs">Other Notes</div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
      const each_array_1 = ensure_array_like(otherNotes());
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let note = each_array_1[$$index_1];
        NoteCard($$renderer2, {
          note,
          onEdit: (n) => editingNote = n,
          onDelete: (id) => noteToDeleteId = id,
          onPin: handlePin
        });
      }
      $$renderer2.push(`<!--]--></div></section> `);
      if (store_get($$store_subs ??= {}, "$filteredNotes", filteredNotes).length >= 20) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="flex justify-center pt-8 pb-12"><button class="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm">Show More Notes</button></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Modal($$renderer2, {
      isOpen: !!editingNote,
      title: "Edit Note",
      onclose: () => editingNote = null,
      children: ($$renderer3) => {
        if (editingNote) {
          $$renderer3.push("<!--[0-->");
          NoteForm($$renderer3, {
            initialData: editingNote,
            onsubmit: handleUpdateNote,
            oncancel: () => editingNote = null,
            isSubmitting: isUpdating
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      isOpen: !!noteToDeleteId,
      title: "Delete Note",
      onclose: () => noteToDeleteId = null,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-4"><p class="text-slate-600 dark:text-slate-400">Are you sure you want to delete this note? This action can be undone for 10 seconds.</p> <div class="flex justify-end gap-3 pt-2"><button class="px-5 py-2 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">Cancel</button> <button class="px-5 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all active:scale-95">Delete Now</button></div></div>`);
      }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
