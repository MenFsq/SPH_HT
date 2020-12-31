<template>
  <div>
    <!--新增品牌的按钮-->
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <!--表格区域-->
    <el-table :data="tableData" border style="width: 100%;margin: 20px 0" >
      <el-table-column
        align="center"
        type="index"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="tmName"
        label="品牌名称">
      </el-table-column>
      <el-table-column align="center" label="品牌LOGO">
        <template slot-scope=" { row, column, $index }">
          <img :src="row.logoUrl" width="100" height="60">
          <!--<strong>{{row.logoUrl}}</strong>-->
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TrademarkList',
  data() {
    return {
      tableData: [],
      page:1,
      limit:3,
    }
  },
  async mounted(){
      const {page,limit} = this;
      const {data} = await this.$API.trademark.getTrademarkListPage({page,limit})
      this.tableData = data.records;
  }
}
</script>
