webpackJsonp([5],{P6DU:function(e,t){},Ubyf:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("woOf"),o=i.n(r),s=i("Xxa5"),l=i.n(s),n=i("exGp"),a=i.n(n),c=i("vLgD"),d=(i("X2Oc"),{name:"role",data:function(){return{loadingTree:!0,dialogFormTitle:"",dialogFormUrl:"",dialogFormVisible:!1,defaultProps:{children:"children",label:"name"},formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]},formFieldsAdd:{id:0,name:"",descript:""},formFields:{},checkAllBig:[],checkAll:[],checkOne:[],roleTreeData:[],menuList:[]}},mounted:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return a()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingTree=!0,e.formFields.id=null,t.next=4,c.a.get("/apis/sysmgr/role/getList",{}).then(function(t){e.roleTreeData=t.roles}).catch(function(e){});case 4:e.loadingTree=!1;case 5:case"end":return t.stop()}},t,e)}))()},showAddRole:function(){this.formFields=o()({},this.formFieldsAdd),this.dialogFormTitle="添加角色",this.dialogFormUrl="/apis/sysmgr/role/add",this.dialogFormVisible=!0},showEditRole:function(){var e=this.$refs.roleTree.getCurrentNode();if(null==e)return this.$message.error("请选择要编辑的角色！");this.formFields=o()({},e),this.dialogFormTitle="编辑角色",this.dialogFormUrl="/apis/sysmgr/role/update",this.dialogFormVisible=!0},addOrEditSubmit:function(e){var t,i=this;this.$refs[e].validate((t=a()(l.a.mark(function t(r){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,c.a.post(i.dialogFormUrl,i.formFields).then(function(t){i.resetForm(e),i.getRoleList(),i.dialogFormVisible=!1,i.$message.success("提交成功！")}).catch(function(e){});case 3:t.next=7;break;case 5:return console.log("error submit!!"),t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,i)})),function(e){return t.apply(this,arguments)}))},showDelRole:function(){var e=this,t=this.$refs.roleTree.getCurrentNode();if(null==t)return this.$message.error("请选择要删除的节点！");this.$confirm("确认删除该数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(a()(l.a.mark(function i(){return l.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,c.a.delete("/apis/sysmgr/role/delete",{id:t.id}).then(function(t){e.getRoleList(),e.$message.success("删除成功！")}).catch(function(e){});case 2:case"end":return i.stop()}},i,e)}))).catch(function(){})},resetForm:function(e){this.$refs[e].resetFields()}}}),u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role"},[i("el-card",{staticClass:"tree-card",staticStyle:{width:"100%",float:"left",height:"100%"},attrs:{"body-style":{height:"86%","overflow-y":"auto"}}},[i("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("span",{staticStyle:{"margin-right":"20px"}},[e._v("角色管理")]),e._v(" "),i("ul",[i("li",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"size"},on:{click:e.showAddRole}},[e._v("添加")])],1),e._v(" "),i("li",[i("el-button",{attrs:{type:"success",size:"size",icon:"el-icon-edit"},on:{click:e.showEditRole}},[e._v("编辑")])],1),e._v(" "),i("li",[i("el-button",{attrs:{type:"danger",size:"size",icon:"el-icon-close"},on:{click:e.showDelRole}},[e._v("删除")])],1),e._v(" "),i("li",[i("el-button",{attrs:{size:"size",icon:"el-icon-refresh"},on:{click:e.getRoleList}},[e._v("刷新")])],1)])]),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTree,expression:"loadingTree"}],staticStyle:{width:"100%",height:"100%"}},[i("el-tree",{ref:"roleTree",attrs:{"default-expand-all":"","highlight-current":!0,"expand-on-click-node":!1,data:e.roleTreeData,"node-key":"id",props:e.defaultProps}})],1)]),e._v(" "),i("el-dialog",{attrs:{title:e.dialogFormTitle,visible:e.dialogFormVisible,width:"460px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"formFields",attrs:{model:e.formFields,formRules:e.formRules,"label-width":"60px"}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formFields.name,callback:function(t){e.$set(e.formFields,"name",t)},expression:"formFields.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述",prop:"descript"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formFields.descript,callback:function(t){e.$set(e.formFields,"descript",t)},expression:"formFields.descript"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addOrEditSubmit("formFields")}}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var f=i("VU/8")(d,u,!1,function(e){i("P6DU")},null,null);t.default=f.exports}});
//# sourceMappingURL=5.4a8da65dc160ff61815a.js.map