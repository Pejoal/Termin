import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { _ as _sfc_main$3 } from "./Locales-a39ce352.mjs";
const _sfc_main$2 = {
  __name: "Navigations",
  __ssrInlineRender: true,
  props: {
    horizontal: {
      tpye: Boolean,
      default: false
    },
    vertical: {
      tpye: Boolean,
      default: false
    },
    dark: {
      tpye: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: {
          "hidden md:flex items-center justify-center gap-2": props.horizontal,
          "flex flex-col space-y-2 px-4": props.vertical
        }
      }, _attrs))}>`);
      if (["admin", "super admin"].includes(_ctx.$page.props.auth.user.type)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("admin.dashboard"),
          class: ["hover:font-bold", {
            "text-zinc-700 hover:text-zinc-800": props.dark,
            "underline font-bold": _ctx.route().current("admin.dashboard")
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.admin_dashboard"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.admin_dashboard")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("quiz.admin"),
          class: ["hover:font-bold", {
            "text-zinc-700 hover:text-zinc-800": props.dark,
            "underline  font-bold": _ctx.route().current("quiz.admin")
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.quiz"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.quiz")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user.type === "client") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("home"),
          class: ["hover:font-bold", {
            "text-zinc-700 hover:text-zinc-800": props.dark,
            "underline  font-bold": _ctx.route().current("home")
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.home"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.home")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("appointments.index"),
          class: ["hover:font-bold", {
            "text-zinc-700 hover:text-zinc-800": props.dark,
            "underline  font-bold": _ctx.route().current("appointments.index")
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.appointments"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.appointments")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("quiz.client"),
          class: ["hover:font-bold", {
            "text-zinc-700 hover:text-zinc-800": props.dark,
            "underline  font-bold": _ctx.route().current("quiz.client")
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.quiz"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.quiz")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("user.profile.me"),
          class: ["hover:font-bold", {
            "text-zinc-700 hover:text-zinc-800": props.dark,
            "underline  font-bold": _ctx.route().current("user.profile.me")
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.my_data"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.my_data")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.edit"),
        class: ["hover:font-bold", {
          "text-zinc-700 hover:text-zinc-800": props.dark,
          "underline  font-bold": _ctx.route().current("profile.edit")
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.trans("words.settings"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.trans("words.settings")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navigations.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Hamburger_vue_vue_type_style_index_0_scoped_a78159de_lang = "";
const _sfc_main$1 = {
  __name: "Hamburger",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    dark: {
      tpye: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["hamburger-icon", { active: __props.show }]
      }, _attrs))} data-v-a78159de><span class="${ssrRenderClass([{ "bg-black": props.dark }, "bar bg-white"])}" data-v-a78159de></span><span class="${ssrRenderClass([{ "bg-black": props.dark }, "bar bg-white"])}" data-v-a78159de></span><span class="${ssrRenderClass([{ "bg-black": props.dark }, "bar bg-white"])}" data-v-a78159de></span></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Hamburger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a78159de"]]);
const AuthLayout_vue_vue_type_style_index_0_scoped_ece647e7_lang = "";
const _sfc_main = {
  __name: "AuthLayout",
  __ssrInlineRender: true,
  props: {
    joined_chat_groups: {
      type: Array,
      default: []
    },
    projects: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const showNav = ref(false);
    const toggleNav = () => {
      showNav.value = !showNav.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-200" }, _attrs))} data-v-ece647e7><header class="bg-zinc-400 flex items-center justify-between h-20 py-2 px-4 sm:px-6 lg:px-8" data-v-ece647e7><section class="flex items-center gap-2" data-v-ece647e7>`);
      if ((_c = (_b = (_a = _ctx.$page) == null ? void 0 : _a.props) == null ? void 0 : _b.auth) == null ? void 0 : _c.user.profile_photo_url) {
        _push(`<img class="rounded-full w-14 h-14 md:w-16 md:h-16"${ssrRenderAttr("src", (_f = (_e = (_d = _ctx.$page) == null ? void 0 : _d.props) == null ? void 0 : _e.auth) == null ? void 0 : _f.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.trans("words.profile_photo"))} data-v-ece647e7>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Link), {
        class: "font-bold text-xl",
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$page.props.auth.user.firstname)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$page.props.auth.user.firstname), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_sfc_main$3, { horizontal: true }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { horizontal: true }, null, _parent));
      _push(ssrRenderComponent(Hamburger, {
        class: "md:hidden",
        onClose: toggleNav,
        show: showNav.value
      }, null, _parent));
      if (showNav.value) {
        _push(`<div class="md:hidden bg-slate-200 fixed inset-y-0 left-0 z-40 w-full h-screen shadow-lg px-8 py-4 overflow-y-auto" data-v-ece647e7><h2 class="text-xl font-bold mb-2" data-v-ece647e7>${ssrInterpolate(_ctx.trans("words.navigation"))}</h2>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-4",
          vertical: true
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "border-t",
          vertical: true
        }, null, _parent));
        _push(`<div class="py-2 border-b" data-v-ece647e7>`);
        _push(ssrRenderComponent(unref(Link), {
          class: "btn btn-danger",
          href: _ctx.route("logout"),
          method: "post",
          as: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.logout"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.logout")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><button class="mt-4 px-3 py-1 hover:font-bold rounded-md" data-v-ece647e7>${ssrInterpolate(_ctx.trans("words.close"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showNav.value) {
        _push(`<div class="fixed inset-0 bg-black opacity-25 z-30" data-v-ece647e7></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="lg:container lg:mx-auto" data-v-ece647e7><div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-10" data-v-ece647e7><div class="hidden" data-v-ece647e7>`);
      ssrRenderSlot(_ctx.$slots, "left-sidebar", {}, () => {
        _push(ssrRenderComponent(unref(Link), {
          class: "btn btn-danger",
          href: _ctx.route("logout"),
          method: "post",
          as: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.trans("words.logout"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.trans("words.logout")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div><section class="md:col-span-2" data-v-ece647e7>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</section><div class="hidden" data-v-ece647e7>`);
      ssrRenderSlot(_ctx.$slots, "right-sidebar", {}, null, _push, _parent);
      _push(`</div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ece647e7"]]);
export {
  AuthLayout as A
};
