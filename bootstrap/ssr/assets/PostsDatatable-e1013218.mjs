import { ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import swal from "sweetalert";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-select";
import "datatables.net-responsive";
import { useForm } from "@inertiajs/vue3";
const PostsDatatable_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "PostsDatatable",
  __ssrInlineRender: true,
  setup(__props) {
    DataTable.use(DataTablesCore);
    let tableRef = ref(null);
    let options = {
      serverSide: true,
      processing: true,
      ajax: {
        url: route("dashboard.posts.data"),
        type: "GET"
      },
      columns: [
        { data: "id", title: "ID" },
        { data: "content", title: "Content" },
        { data: "author", title: "Author" },
        { data: "action", title: "Action" }
      ],
      order: [[0, "desc"]],
      buttons: ["colvis", "excel", "print"]
    };
    onMounted(() => {
      const el = tableRef.value.$el.querySelector("tbody");
      el.addEventListener("click", (event) => {
        if (event.target.matches(".delete-button")) {
          handleDelete(event.target.dataset.id);
        } else if (event.target.matches(".edit-button")) {
          handleEdit(event.target.dataset.id);
        }
      });
    });
    const form = useForm({
      id: 0
    });
    function handleDelete(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Post!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          form.delete(route("dashboard.posts.delete", id), {
            preserveScroll: true,
            onSuccess: () => {
              new swal("Post has been deleted!", {
                icon: "success"
              });
              tableRef.value.dt.ajax.reload();
            },
            onError: (error) => {
              new swal("Oops! Something went wrong.", error.message, "error");
            }
          });
        } else {
          swal("Post is safe!");
        }
      });
    }
    const handleEdit = (id) => {
    };
    useForm({
      posts_excel: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><div class="flex justify-center items-center gap-2 py-2 border my-2"><form><input id="posts_excel" type="file"><button type="submit" class="btn btn-primary">Import</button></form><form${ssrRenderAttr("action", _ctx.route("dashboard.posts.excel.export"))} method="GET"><button><img class="cursor-pointer" src="https://img.icons8.com/color/48/null/microsoft-excel-2019--v1.png"></button></form></div>`);
      _push(ssrRenderComponent(unref(DataTable), {
        options: unref(options),
        ref_key: "tableRef",
        ref: tableRef,
        class: "display"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/PostsDatatable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
