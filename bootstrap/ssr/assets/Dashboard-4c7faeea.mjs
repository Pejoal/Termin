import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as AuthLayout } from "./AuthLayout-d89e0e9f.mjs";
import _sfc_main$1 from "./AppointmentsGroup-d679f2fa.mjs";
import { Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Locales-a39ce352.mjs";
import "laravel-vue-i18n";
import "./Appointment-da054933.mjs";
import "./ResuableModal-2ed3759c.mjs";
import "./AppointmentModal-839a51f7.mjs";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    previousAppointments: {
      type: Array,
      default: []
    },
    upcomingAppointments: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.trans("words.admin_dashboard")
      }, null, _parent));
      _push(ssrRenderComponent(AuthLayout, null, {
        "left-sidebar": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="p-4"${_scopeId}><header class="flex items-center justify-center mb-2"${_scopeId}><h2 class="text-xl font-bold pb-1 border-b border-b-black"${_scopeId}>${ssrInterpolate(_ctx.trans("words.appointment_requests"))}</h2></header><main class="space-y-2 rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              appointments: __props.upcomingAppointments,
              header: "upcoming_appointments"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              appointments: __props.previousAppointments,
              header: "previous_appointments"
            }, null, _parent2, _scopeId));
            _push2(`</main></section>`);
          } else {
            return [
              createVNode("section", { class: "p-4" }, [
                createVNode("header", { class: "flex items-center justify-center mb-2" }, [
                  createVNode("h2", { class: "text-xl font-bold pb-1 border-b border-b-black" }, toDisplayString(_ctx.trans("words.appointment_requests")), 1)
                ]),
                createVNode("main", { class: "space-y-2 rounded-lg" }, [
                  createVNode(_sfc_main$1, {
                    appointments: __props.upcomingAppointments,
                    header: "upcoming_appointments"
                  }, null, 8, ["appointments"]),
                  createVNode(_sfc_main$1, {
                    appointments: __props.previousAppointments,
                    header: "previous_appointments"
                  }, null, 8, ["appointments"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
