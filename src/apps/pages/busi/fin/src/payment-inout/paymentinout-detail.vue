<template>
  <div class="main-panel">
    <!--节点title-->
    <div class="title-container">
      <h2 class="name">付款/退款申请列表</h2>
    </div>
    <!-- 主体区域 -->
    <div class="detail-main-container clearfix">
        <div class="detail-button-header">
          <el-button class="fr" type="primary" @click="goBack">返回</el-button>
      </div>
        <!-- 投放计划主模板 temp start-->
        <ifbp-panel id="basePanel" title="投放计划" :icons="baseIcons" >
          <ifbp-template ref="baseTemplateRef"
                    tplId="baseTemplate"
                    funnode="BT012"
                    nexuskey ="loancontinfo"
                    show-type="form"
                    :tplData="tplData"
                    :editable="editable">
          </ifbp-template>
          <div class="form-button-div" v-if="editable">
            <el-button type="default" class="button-no-radius" @click="clickCancel">取消</el-button>
            <el-button type="primary" class="button-no-radius" @click="clickSave">保存</el-button>
          </div>
        </ifbp-panel>
        </ifbp-panel-group>
    </div>
  </div>
</template>
<script>
import {
  pubSizes,
  pubPageSizes,
  pubPageMethods,
  ylsBusi
} from "../../../../../common/js/publicData.js";
export default {
  data() {
    var oThis = this;
    return {
      //投放计划主键
      pk_loan_cont_info: "",

      // 投放计划申请主模板 baseTemplateRef start
      tplData: {},
      editable: false,
      baseIcons: [
        {
          icon: "edit",
          click: function() {
            oThis.editable = !oThis.editable;
          }
        }
      ]
      // 投放计划申请主模板 baseTemplateRef end
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    //返回按钮
    goBack() {
      window.history.back(-1);
    },
    // 投放计划主模板 baseTemplateRef 事件处理 start
    clickCancel() {
      this.editable = false;
    },
    clickSave() {
      var data = this.$refs.baseTemplateRef.comp.LoanContInfo_f;
      var jsonData = JSON.parse(JSON.stringify(data));
      let url = "";
      if (data.pk_loan_cont_info) {
        url = ylsBusi + "fin/loancontinfo/update";
      } else {
        url = ylsBusi + "fin/loancontinfo/create";
      }
      this.$http({
        url: url,
        // headers: {'Content-Type': 'application/json'},
        method: "post",
        data: jsonData
      })
        .then(res => {
          var originalValue = res.data.data;
          this.pk_loan_cont_info = res.data.data.pk_loan_cont_info;
          this.$refs["baseTemplateRef"].setData(
            "LoanContInfo_f",
            JSON.parse(JSON.stringify(originalValue))
          );
          this.loadData();
          this.editable = false;
        })
        .catch(e => {
          this.$message({
            message: "投放计划保存失败！",
            type: "error"
          });
        });
    },
    // 投放计划主模板 baseTemplateRef 事件处理 end
    //加载数据方法
    loadData() {
      if (!this.pk_loan_cont_info) {
        this.pk_loan_cont_info = this.$root.$router.currentRoute.params.id;
      }
      //router name
      //this.$root.$router.currentRoute.name;
      //详情页面
      if (this.pk_loan_cont_info) {
        //加载投放计划信息
        this.loadfinloancontinfo(this.pk_loan_cont_info);
      } else {
        this.editable = true;
      }
    },
    //加载投放计划信息
    loadfinloancontinfo(pk_loan_cont_info) {
      this.$http({
        url: ylsBusi + "fin/loancontinfo/getById",
        headers: { "Content-Type": "application/json" },
        method: "post",
        data: this.pk_loan_cont_info
      })
        .then(res => {
          var originalValue = res.data.data;
          this.$refs["baseTemplateRef"].setData(
            "LoanContInfo_f",
            JSON.parse(JSON.stringify(originalValue))
          );
        })
        .catch(e => {
          this.$message({
            message: "投放计划详情获取失败",
            type: "error"
          });
        });
    }
  }
};
</script>
<style>
.detail-button-header {
  height: 56px;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
}
</style>
