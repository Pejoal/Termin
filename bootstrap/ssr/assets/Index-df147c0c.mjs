import { ref, unref, withCtx, createVNode, toDisplayString, isRef, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, vModelRadio, Transition, Teleport, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderTeleport, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { A as AuthLayout } from "./AuthLayout-d89e0e9f.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import { R as ResuableModal } from "./ResuableModal-2ed3759c.mjs";
import { T as Toast } from "./Toast-0297fd7e.mjs";
import axios from "axios";
import swal from "sweetalert";
import { trans } from "laravel-vue-i18n";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Locales-a39ce352.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    type: String,
    questions: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const showModal = ref(false);
    let showToast = ref(false);
    const photoForm = useForm({
      photo: null
    });
    const form = useForm({
      id: 0,
      photo: "",
      content: "",
      correctAnswerIndex: null,
      answers: ["", "", "", ""],
      type: props.type
    });
    const edit = (id) => {
      axios.get(route("question.get", id)).then((response) => {
        showModal.value = true;
        form.id = response.data.id;
        form.photo = response.data.photo;
        form.content = response.data.content;
        form.correctAnswerIndex = response.data.correct_answer;
        form.answers = response.data.answers;
      });
    };
    const update = () => {
      form.put(route("question.update", [form.id]), {
        onSuccess: () => {
          showToast.value = true;
          showModal.value = false;
        }
      });
    };
    function uploadPhoto() {
      photoForm.post(route("question.photo.update", [form.id]), {
        preserveScroll: true,
        onSuccess: () => {
          edit(form.id);
        }
      });
    }
    const destroy = (id) => {
      new swal({
        title: trans("words.are_you_sure"),
        text: trans(
          "words.once_deleted_you_will_not_be_able_to_recover_this_Question"
        ),
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          form.delete(route("question.destroy", id), {
            onSuccess: () => {
              new swal(trans("words.question_has_been_deleted"), {
                icon: "success"
              });
            },
            onError: (error) => {
              new swal(trans("oops_Something_went_wrong"), error, "error");
            }
          });
        } else {
          new swal(trans("words.question_is_safe"));
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(unref(trans)("words.questions"))}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(unref(trans)("words.questions")), 1)
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
            ssrRenderTeleport(_push2, (_push3) => {
              _push3(ssrRenderComponent(Toast, {
                show: unref(showToast),
                type: "success",
                onClose: ($event) => isRef(showToast) ? showToast.value = false : showToast = false,
                message: unref(trans)("words.question_updated")
              }, null, _parent2, _scopeId));
            }, "#toasts", false, _parent2);
            ssrRenderTeleport(_push2, (_push3) => {
              _push3(ssrRenderComponent(ResuableModal, {
                classes: ["w-[90%] md:w-[85%] lg:w-[80%] h-[60%]"],
                header: unref(trans)("words.update_question"),
                show: showModal.value,
                onClose: ($event) => showModal.value = false
              }, {
                content: withCtx((_2, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(`<h3 class="w-full text-center font-bold text-xl"${_scopeId2}>${ssrInterpolate(unref(trans)(`words.${__props.type}_questions`))}</h3><form${_scopeId2}><section class="flex items-center p-2"${_scopeId2}><label for="question" class="w-24"${_scopeId2}>${ssrInterpolate(unref(trans)("words.question"))}:</label><textarea id="question" class="flex-1 rounded-md h-24" required${_scopeId2}>${ssrInterpolate(unref(form).content)}</textarea>`);
                    if (props.type === "photo") {
                      _push4(`<section class="border mx-2 w-40 flex items-center justify-center"${_scopeId2}>`);
                      if (unref(form).photo) {
                        _push4(`<img${ssrRenderAttr("src", unref(form).photo)}${ssrRenderAttr("alt", unref(trans)("words.photo"))}${_scopeId2}>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</section>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</section>`);
                    if (unref(form).errors.content) {
                      _push4(`<p class="error"${_scopeId2}>${ssrInterpolate(unref(form).errors.content)}</p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`<section class="p-2"${_scopeId2}><label${_scopeId2}>${ssrInterpolate(unref(trans)("words.answers"))}:</label><!--[-->`);
                    ssrRenderList(unref(form).answers, (answer, index) => {
                      _push4(`<section class="flex items-center gap-2 p-2"${_scopeId2}><label${ssrRenderAttr("for", "answer" + index)} class="w-3/4"${_scopeId2}><input type="text"${ssrRenderAttr("value", unref(form).answers[index].content)} class="block w-full rounded-md" required${_scopeId2}></label><input type="radio"${ssrRenderAttr("id", "answer" + index)}${ssrRenderAttr("value", index)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).correctAnswerIndex, index)) ? " checked" : ""}${_scopeId2}></section>`);
                    });
                    _push4(`<!--]--></section>`);
                    if (unref(form).errors.answers) {
                      _push4(`<p class="error"${_scopeId2}>${ssrInterpolate(unref(form).errors.answers)}</p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`<button type="submit" class="btn btn-primary mx-auto"${_scopeId2}>${ssrInterpolate(unref(trans)("words.update_question"))}</button></form>`);
                    if (props.type === "photo") {
                      _push4(`<form class="p-2"${_scopeId2}><section class="flex justify-between flex-col sm:flex-row"${_scopeId2}><div class="my-2"${_scopeId2}><label class="pr-2" for="photo"${_scopeId2}>${ssrInterpolate(unref(trans)("words.photo"))}</label><input id="photo" type="file"${_scopeId2}></div><button class="btn btn-success" type="submit"${ssrIncludeBooleanAttr(unref(photoForm).processing) ? " disabled" : ""}${_scopeId2}>${ssrInterpolate(unref(trans)("words.upload"))}</button></section>`);
                      if (unref(photoForm).errors.photo) {
                        _push4(`<p class="text-sm bg-red-600 rounded-md my-1 px-2 py-1"${_scopeId2}>${ssrInterpolate(unref(photoForm).errors.photo)}</p>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      if (unref(photoForm).progress) {
                        _push4(`<progress${ssrRenderAttr("value", unref(photoForm).progress.percentage)} max="100"${_scopeId2}>${ssrInterpolate(unref(photoForm).progress.percentage)}% </progress>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      if (unref(photoForm).recentlySuccessful) {
                        _push4(`<p class="text-sm"${_scopeId2}>${ssrInterpolate(unref(trans)("words.uploaded"))}</p>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</form>`);
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("h3", { class: "w-full text-center font-bold text-xl" }, toDisplayString(unref(trans)(`words.${__props.type}_questions`)), 1),
                      createVNode("form", {
                        onSubmit: withModifiers(update, ["prevent"])
                      }, [
                        createVNode("section", { class: "flex items-center p-2" }, [
                          createVNode("label", {
                            for: "question",
                            class: "w-24"
                          }, toDisplayString(unref(trans)("words.question")) + ":", 1),
                          withDirectives(createVNode("textarea", {
                            id: "question",
                            "onUpdate:modelValue": ($event) => unref(form).content = $event,
                            class: "flex-1 rounded-md h-24",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).content]
                          ]),
                          props.type === "photo" ? (openBlock(), createBlock("section", {
                            key: 0,
                            class: "border mx-2 w-40 flex items-center justify-center"
                          }, [
                            unref(form).photo ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: unref(form).photo,
                              alt: unref(trans)("words.photo")
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ]),
                        unref(form).errors.content ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "error"
                        }, toDisplayString(unref(form).errors.content), 1)) : createCommentVNode("", true),
                        createVNode("section", { class: "p-2" }, [
                          createVNode("label", null, toDisplayString(unref(trans)("words.answers")) + ":", 1),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).answers, (answer, index) => {
                            return openBlock(), createBlock("section", {
                              key: index,
                              class: "flex items-center gap-2 p-2"
                            }, [
                              createVNode("label", {
                                for: "answer" + index,
                                class: "w-3/4"
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "text",
                                  "onUpdate:modelValue": ($event) => unref(form).answers[index].content = $event,
                                  class: "block w-full rounded-md",
                                  required: ""
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).answers[index].content]
                                ])
                              ], 8, ["for"]),
                              withDirectives(createVNode("input", {
                                type: "radio",
                                id: "answer" + index,
                                value: index,
                                "onUpdate:modelValue": ($event) => unref(form).correctAnswerIndex = $event
                              }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                [vModelRadio, unref(form).correctAnswerIndex]
                              ])
                            ]);
                          }), 128))
                        ]),
                        unref(form).errors.answers ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "error"
                        }, toDisplayString(unref(form).errors.answers), 1)) : createCommentVNode("", true),
                        createVNode("button", {
                          type: "submit",
                          class: "btn btn-primary mx-auto"
                        }, toDisplayString(unref(trans)("words.update_question")), 1)
                      ], 40, ["onSubmit"]),
                      props.type === "photo" ? (openBlock(), createBlock("form", {
                        key: 0,
                        onSubmit: withModifiers(uploadPhoto, ["prevent"]),
                        class: "p-2"
                      }, [
                        createVNode("section", { class: "flex justify-between flex-col sm:flex-row" }, [
                          createVNode("div", { class: "my-2" }, [
                            createVNode("label", {
                              class: "pr-2",
                              for: "photo"
                            }, toDisplayString(unref(trans)("words.photo")), 1),
                            createVNode("input", {
                              id: "photo",
                              type: "file",
                              onInput: ($event) => unref(photoForm).photo = $event.target.files[0]
                            }, null, 40, ["onInput"])
                          ]),
                          createVNode("button", {
                            class: "btn btn-success",
                            type: "submit",
                            disabled: unref(photoForm).processing
                          }, toDisplayString(unref(trans)("words.upload")), 9, ["disabled"])
                        ]),
                        unref(photoForm).errors.photo ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm bg-red-600 rounded-md my-1 px-2 py-1"
                        }, toDisplayString(unref(photoForm).errors.photo), 1)) : createCommentVNode("", true),
                        unref(photoForm).progress ? (openBlock(), createBlock("progress", {
                          key: 1,
                          value: unref(photoForm).progress.percentage,
                          max: "100"
                        }, toDisplayString(unref(photoForm).progress.percentage) + "% ", 9, ["value"])) : createCommentVNode("", true),
                        createVNode(Transition, {
                          "enter-from-class": "opacity-0",
                          "leave-to-class": "opacity-0",
                          class: "transition ease-in-out"
                        }, {
                          default: withCtx(() => [
                            unref(photoForm).recentlySuccessful ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm"
                            }, toDisplayString(unref(trans)("words.uploaded")), 1)) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ], 40, ["onSubmit"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, "#modal", false, _parent2);
            _push2(`<!--[-->`);
            ssrRenderList(__props.questions, (question) => {
              _push2(`<section class="flex items-center justify-between p-4 my-2 rounded-lg bg-slate-300"${_scopeId}><p${_scopeId}>${ssrInterpolate(unref(trans)("words.question"))}: ${ssrInterpolate(question.content)}</p><section class="flex gap-2 items-center"${_scopeId}><button class="btn btn-primary"${_scopeId}>${ssrInterpolate(unref(trans)("words.edit"))}</button><button class="btn btn-danger"${_scopeId}>${ssrInterpolate(unref(trans)("words.delete"))}</button></section></section>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Teleport, { to: "#toasts" }, [
                createVNode(Toast, {
                  show: unref(showToast),
                  type: "success",
                  onClose: ($event) => isRef(showToast) ? showToast.value = false : showToast = false,
                  message: unref(trans)("words.question_updated")
                }, null, 8, ["show", "onClose", "message"])
              ])),
              (openBlock(), createBlock(Teleport, { to: "#modal" }, [
                createVNode(ResuableModal, {
                  classes: ["w-[90%] md:w-[85%] lg:w-[80%] h-[60%]"],
                  header: unref(trans)("words.update_question"),
                  show: showModal.value,
                  onClose: ($event) => showModal.value = false
                }, {
                  content: withCtx(() => [
                    createVNode("h3", { class: "w-full text-center font-bold text-xl" }, toDisplayString(unref(trans)(`words.${__props.type}_questions`)), 1),
                    createVNode("form", {
                      onSubmit: withModifiers(update, ["prevent"])
                    }, [
                      createVNode("section", { class: "flex items-center p-2" }, [
                        createVNode("label", {
                          for: "question",
                          class: "w-24"
                        }, toDisplayString(unref(trans)("words.question")) + ":", 1),
                        withDirectives(createVNode("textarea", {
                          id: "question",
                          "onUpdate:modelValue": ($event) => unref(form).content = $event,
                          class: "flex-1 rounded-md h-24",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).content]
                        ]),
                        props.type === "photo" ? (openBlock(), createBlock("section", {
                          key: 0,
                          class: "border mx-2 w-40 flex items-center justify-center"
                        }, [
                          unref(form).photo ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: unref(form).photo,
                            alt: unref(trans)("words.photo")
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]),
                      unref(form).errors.content ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "error"
                      }, toDisplayString(unref(form).errors.content), 1)) : createCommentVNode("", true),
                      createVNode("section", { class: "p-2" }, [
                        createVNode("label", null, toDisplayString(unref(trans)("words.answers")) + ":", 1),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).answers, (answer, index) => {
                          return openBlock(), createBlock("section", {
                            key: index,
                            class: "flex items-center gap-2 p-2"
                          }, [
                            createVNode("label", {
                              for: "answer" + index,
                              class: "w-3/4"
                            }, [
                              withDirectives(createVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => unref(form).answers[index].content = $event,
                                class: "block w-full rounded-md",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).answers[index].content]
                              ])
                            ], 8, ["for"]),
                            withDirectives(createVNode("input", {
                              type: "radio",
                              id: "answer" + index,
                              value: index,
                              "onUpdate:modelValue": ($event) => unref(form).correctAnswerIndex = $event
                            }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                              [vModelRadio, unref(form).correctAnswerIndex]
                            ])
                          ]);
                        }), 128))
                      ]),
                      unref(form).errors.answers ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "error"
                      }, toDisplayString(unref(form).errors.answers), 1)) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-primary mx-auto"
                      }, toDisplayString(unref(trans)("words.update_question")), 1)
                    ], 40, ["onSubmit"]),
                    props.type === "photo" ? (openBlock(), createBlock("form", {
                      key: 0,
                      onSubmit: withModifiers(uploadPhoto, ["prevent"]),
                      class: "p-2"
                    }, [
                      createVNode("section", { class: "flex justify-between flex-col sm:flex-row" }, [
                        createVNode("div", { class: "my-2" }, [
                          createVNode("label", {
                            class: "pr-2",
                            for: "photo"
                          }, toDisplayString(unref(trans)("words.photo")), 1),
                          createVNode("input", {
                            id: "photo",
                            type: "file",
                            onInput: ($event) => unref(photoForm).photo = $event.target.files[0]
                          }, null, 40, ["onInput"])
                        ]),
                        createVNode("button", {
                          class: "btn btn-success",
                          type: "submit",
                          disabled: unref(photoForm).processing
                        }, toDisplayString(unref(trans)("words.upload")), 9, ["disabled"])
                      ]),
                      unref(photoForm).errors.photo ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm bg-red-600 rounded-md my-1 px-2 py-1"
                      }, toDisplayString(unref(photoForm).errors.photo), 1)) : createCommentVNode("", true),
                      unref(photoForm).progress ? (openBlock(), createBlock("progress", {
                        key: 1,
                        value: unref(photoForm).progress.percentage,
                        max: "100"
                      }, toDisplayString(unref(photoForm).progress.percentage) + "% ", 9, ["value"])) : createCommentVNode("", true),
                      createVNode(Transition, {
                        "enter-from-class": "opacity-0",
                        "leave-to-class": "opacity-0",
                        class: "transition ease-in-out"
                      }, {
                        default: withCtx(() => [
                          unref(photoForm).recentlySuccessful ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm"
                          }, toDisplayString(unref(trans)("words.uploaded")), 1)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["header", "show", "onClose"])
              ])),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.questions, (question) => {
                return openBlock(), createBlock("section", {
                  class: "flex items-center justify-between p-4 my-2 rounded-lg bg-slate-300",
                  key: question.id
                }, [
                  createVNode("p", null, toDisplayString(unref(trans)("words.question")) + ": " + toDisplayString(question.content), 1),
                  createVNode("section", { class: "flex gap-2 items-center" }, [
                    createVNode("button", {
                      class: "btn btn-primary",
                      onClick: ($event) => edit(question.id)
                    }, toDisplayString(unref(trans)("words.edit")), 9, ["onClick"]),
                    createVNode("button", {
                      class: "btn btn-danger",
                      onClick: ($event) => destroy(question.id)
                    }, toDisplayString(unref(trans)("words.delete")), 9, ["onClick"])
                  ])
                ]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Questions/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
