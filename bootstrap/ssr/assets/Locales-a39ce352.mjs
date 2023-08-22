import { onMounted, onUnmounted, computed, ref, mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { loadLanguageAsync } from "laravel-vue-i18n";
const _sfc_main$1 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[unref(widthClass), unref(alignmentClasses)], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Locales",
  __ssrInlineRender: true,
  props: {
    horizontal: {
      tpye: Boolean,
      default: false
    },
    vertical: {
      tpye: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage().props;
    if (page.active_locale_code) {
      loadLanguageAsync(page.active_locale_code);
    }
    const active_locale = (locale, url) => {
      loadLanguageAsync(locale);
      location.href = url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          "hidden md:flex items-center space-x-2 relative": props.horizontal,
          "py-2 my-2 border-b flex justify-between items-center": props.vertical
        }
      }, _attrs))}><p>${ssrInterpolate(_ctx.trans("words.choose_locale"))}</p>`);
      _push(ssrRenderComponent(_sfc_main$1, { width: "48" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${_scopeId}><svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.$page.props.locales, (locale, code) => {
              _push2(`<button class="flex justify-between items-center w-full p-2 text-gray-900 hover:text-white bg-white hover:bg-zinc-900"${_scopeId}><span${_scopeId}>${ssrInterpolate(locale.native)}</span><span${_scopeId}>${ssrInterpolate(locale.emoji)}</span></button>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.locales, (locale, code) => {
                return openBlock(), createBlock("button", {
                  class: "flex justify-between items-center w-full p-2 text-gray-900 hover:text-white bg-white hover:bg-zinc-900",
                  onClick: ($event) => active_locale(code, locale.url),
                  key: code
                }, [
                  createVNode("span", null, toDisplayString(locale.native), 1),
                  createVNode("span", null, toDisplayString(locale.emoji), 1)
                ], 8, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Locales.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
