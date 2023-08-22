import { ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { A as AuthLayout } from "./AuthLayout-d89e0e9f.mjs";
import { Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Locales-a39ce352.mjs";
import "laravel-vue-i18n";
const _sfc_main = {
  __name: "Start",
  __ssrInlineRender: true,
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const currentIndex = ref(0);
    const userAnswers = ref([]);
    const moveToNextQuestion = (selectedAnswerId) => {
      userAnswers.value.push({
        question_id: props.questions[currentIndex.value].id,
        answer_id: selectedAnswerId
      });
      currentIndex.value++;
      if (currentIndex.value > props.questions.length - 1) {
        submitAnswers(userAnswers.value);
      }
    };
    const submitAnswers = (answers) => {
      console.log(answers);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(_ctx.trans("words.quiz"))}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(_ctx.trans("words.quiz")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
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
            _push2(`<section class="p-4"${_scopeId}>`);
            if (currentIndex.value < __props.questions.length) {
              _push2(`<div${_scopeId}><h2 class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(_ctx.trans("words.question"))} ${ssrInterpolate(currentIndex.value + 1)}</h2><h3 class="text-xl font-semibold p-2"${_scopeId}>${ssrInterpolate(__props.questions[currentIndex.value].content)}</h3><ul class="p-2 space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.questions[currentIndex.value].answers, (answer) => {
                _push2(`<li${_scopeId}><label${_scopeId}><input type="radio"${ssrRenderAttr("name", "question_" + __props.questions[currentIndex.value].id)}${ssrRenderAttr("value", answer.id)}${_scopeId}> ${ssrInterpolate(answer.content)}</label></li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<div class=""${_scopeId}><p class="btn btn-primary"${_scopeId}>Congratulations! You&#39;ve answered all questions.</p></div>`);
            }
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "p-4" }, [
                currentIndex.value < __props.questions.length ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("h2", { class: "text-2xl font-bold" }, toDisplayString(_ctx.trans("words.question")) + " " + toDisplayString(currentIndex.value + 1), 1),
                  createVNode("h3", { class: "text-xl font-semibold p-2" }, toDisplayString(__props.questions[currentIndex.value].content), 1),
                  createVNode("ul", { class: "p-2 space-y-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.questions[currentIndex.value].answers, (answer) => {
                      return openBlock(), createBlock("li", {
                        key: answer.id
                      }, [
                        createVNode("label", null, [
                          createVNode("input", {
                            type: "radio",
                            name: "question_" + __props.questions[currentIndex.value].id,
                            value: answer.id,
                            onChange: ($event) => moveToNextQuestion(answer.id)
                          }, null, 40, ["name", "value", "onChange"]),
                          createTextVNode(" " + toDisplayString(answer.content), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: ""
                }, [
                  createVNode("p", { class: "btn btn-primary" }, "Congratulations! You've answered all questions.")
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quiz/Start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
