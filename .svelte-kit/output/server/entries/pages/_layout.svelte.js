import { clsx as clsx$1 } from "clsx";
import { s as sanitize_props, a as spread_props, b as slot, c as attr_class, d as clsx, e as store_get, f as escape_html, u as unsubscribe_stores, g as derived, h as ensure_array_like, i as stringify } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import { s as syncStatus, X, t as toasts, M as Modal, N as NoteForm, c as createNote, a as addToast } from "../../chunks/NoteForm.js";
import { twMerge } from "tailwind-merge";
function Circle_alert($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
    [
      "line",
      { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-alert
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
function Circle_check_big($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-check-big" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleCheckBig
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1IiAvPgogIDxwYXRoIGQ9Im05IDExIDMgM0wyMiA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check-big
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
function Cloud_off($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m2 2 20 20" }],
    [
      "path",
      {
        "d": "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"
      }
    ],
    [
      "path",
      {
        "d": "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "cloud-off" },
    $$sanitized_props,
    {
      /**
       * @component @name CloudOff
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgogIDxwYXRoIGQ9Ik01Ljc4MiA1Ljc4MkE3IDcgMCAwIDAgOSAxOWg4LjVhNC41IDQuNSAwIDAgMCAxLjMwNy0uMTkzIiAvPgogIDxwYXRoIGQ9Ik0yMS41MzIgMTYuNUE0LjUgNC41IDAgMCAwIDE3LjUgMTBoLTEuNzlBNy4wMDggNy4wMDggMCAwIDAgMTAgNS4wNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/cloud-off
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
function Cloud($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      { "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "cloud" },
    $$sanitized_props,
    {
      /**
       * @component @name Cloud
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTcuNSAxOUg5YTcgNyAwIDEgMSA2LjcxLTloMS43OWE0LjUgNC41IDAgMSAxIDAgOVoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cloud
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
function Github($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "github" },
    $$sanitized_props,
    {
      /**
       * @component @name Github
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIgLz4KICA8cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/github
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=github instead. This icon will be removed in v1.0
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
function Info($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "info" },
    $$sanitized_props,
    {
      /**
       * @component @name Info
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMTZ2LTQiIC8+CiAgPHBhdGggZD0iTTEyIDhoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/info
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
function Moon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]];
  Icon($$renderer, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM2E2IDYgMCAwIDAgOSA5IDkgOSAwIDEgMS05LTlaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/moon
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
function Plus($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  Icon($$renderer, spread_props([
    { name: "plus" },
    $$sanitized_props,
    {
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
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
function Refresh_cw($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "refresh-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RefreshCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAwIDEgOS05IDkuNzUgOS43NSAwIDAgMSA2Ljc0IDIuNzRMMjEgOCIgLz4KICA8cGF0aCBkPSJNMjEgM3Y1aC01IiAvPgogIDxwYXRoIGQ9Ik0yMSAxMmE5IDkgMCAwIDEtOSA5IDkuNzUgOS43NSAwIDAgMS02Ljc0LTIuNzRMMyAxNiIgLz4KICA8cGF0aCBkPSJNOCAxNkgzdjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/refresh-cw
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
function Search($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.446.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4IiAvPgogIDxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/search
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
function ThemeToggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<button class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme">`);
    {
      $$renderer2.push("<!--[-1-->");
      Moon($$renderer2, { class: "w-5 h-5 text-slate-700" });
    }
    $$renderer2.push(`<!--]--></button>`);
  });
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const syncInfo = derived(() => ({
      icon: store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "synced" ? Cloud : store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "offline" ? Cloud_off : store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "syncing" ? Refresh_cw : Circle_alert,
      color: store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "synced" ? "text-green-500" : store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "offline" ? "text-slate-400" : store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "syncing" ? "text-blue-500" : "text-red-500",
      text: store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "synced" ? "Synced" : store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "offline" ? "Offline" : store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "syncing" ? "Syncing..." : "Sync Error"
    }));
    $$renderer2.push(`<header class="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"><div class="container mx-auto px-4 h-16 flex items-center justify-between gap-4"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">`);
    Plus($$renderer2, { class: "w-5 h-5 text-white transform rotate-45" });
    $$renderer2.push(`<!----></div> <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">NoteFlow</span></div> <div class="flex-1 max-w-xl relative group">`);
    Search($$renderer2, {
      class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors"
    });
    $$renderer2.push(`<!----> <input type="text" placeholder="Search notes..." class="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-900 border-transparent focus:bg-white dark:focus:bg-slate-800 border focus:border-primary outline-none rounded-xl transition-all"/></div> <div class="flex items-center gap-2 sm:gap-4"><div${attr_class(clsx(twMerge("flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900", syncInfo().color)))}>`);
    if (syncInfo.icon) {
      $$renderer2.push("<!--[-->");
      syncInfo.icon($$renderer2, {
        class: clsx$1("w-4 h-4", store_get($$store_subs ??= {}, "$syncStatus", syncStatus) === "syncing" && "animate-spin")
      });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(` <span class="text-xs font-semibold hidden lg:block">${escape_html(syncInfo().text)}</span></div> <button class="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95">`);
    Plus($$renderer2, { class: "w-5 h-5" });
    $$renderer2.push(`<!----> <span class="hidden sm:block">New Note</span></button> <div class="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div> `);
    ThemeToggle($$renderer2);
    $$renderer2.push(`<!----></div></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md"><div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4"><div class="text-sm text-slate-500 dark:text-slate-400">© 2024 NoteFlow. All rights reserved.</div> <div class="flex items-center gap-6"><a href="https://github.com/your-username/noteflow" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">`);
  Github($$renderer, { class: "w-5 h-5" });
  $$renderer.push(`<!----> <span class="text-sm font-medium">GitHub Repository</span></a> <div class="text-xs text-slate-400">Built with <span class="text-primary font-semibold">Svelte 5</span> &amp; <span class="text-primary font-semibold">Tailwind 4</span></div></div></div></footer>`);
}
function Toasts($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const icons = {
      success: Circle_check_big,
      error: Circle_alert,
      info: Info,
      sync: Refresh_cw
    };
    const colors = {
      success: "bg-green-50 text-green-800 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900/50",
      error: "bg-red-50 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900/50",
      info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/50",
      sync: "bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary-light"
    };
    $$renderer2.push(`<div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$toasts", toasts));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let toast = each_array[$$index];
      const Icon2 = icons[toast.type];
      $$renderer2.push(`<div${attr_class(`flex items-start gap-3 p-4 rounded-2xl border shadow-lg backdrop-blur-md ${stringify(colors[toast.type])}`)}><div class="mt-0.5">`);
      Icon2($$renderer2, {
        class: `w-5 h-5 ${stringify(toast.type === "sync" ? "animate-spin" : "")}`
      });
      $$renderer2.push(`<!----></div> <div class="flex-1 min-w-0"><p class="text-sm font-semibold leading-tight">${escape_html(toast.message)}</p> `);
      if (toast.action) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button class="mt-2 text-xs font-bold uppercase tracking-wider hover:underline">${escape_html(toast.action.label)}</button>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <button class="shrink-0 p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors">`);
      X($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    let showNewNoteModal = false;
    let isSubmitting = false;
    async function handleCreateNote(data) {
      isSubmitting = true;
      try {
        await createNote(data);
        showNewNoteModal = false;
        addToast({ message: "Note created successfully", type: "success" });
      } catch (e) {
        addToast({ message: "Failed to create note", type: "error" });
      } finally {
        isSubmitting = false;
      }
    }
    $$renderer2.push(`<div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <main class="flex-1 py-8">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> `);
    Toasts($$renderer2);
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      isOpen: showNewNoteModal,
      title: "Create New Note",
      onclose: () => showNewNoteModal = false,
      children: ($$renderer3) => {
        NoteForm($$renderer3, {
          onsubmit: handleCreateNote,
          oncancel: () => showNewNoteModal = false,
          isSubmitting
        });
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
