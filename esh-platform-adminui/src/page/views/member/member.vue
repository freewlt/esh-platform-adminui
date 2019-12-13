<template>
  <div class="member">
    <bread-crumb-box :breadList="breadList"></bread-crumb-box>
    <div class="searchBox">
      <div class="left">
        <el-button type="primary" @click="newClick">+ 新建{{task}}</el-button>
      </div>
      <div class="right">
        <el-input placeholder="人员名称" class="nouveau"></el-input>
        <el-input placeholder="手机号" class="nouveau"></el-input>
        <el-button @click="search">搜索</el-button>
      </div>
    </div>
    <div class="dataTable">
      <el-table :data="rowData" stripe>
        <template v-for="item in tableHeaders">
          <el-table-column :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
        </template>
        <template>
          <el-table-column prop="date" label="创建日期"
                           :formatter="formatDate"></el-table-column>
        </template>
        <el-table-column label="代理名称"
                         min-width="50" class="daiLi">
          <template>
            <a class="buttonText" @click="look = true">查看详情</a>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

            <i class="iconfont icon-edit2"
               size="mini"
               @click="handleEdit(scope.$index, scope.row)"></i>
            <!--<el-button-->
            <!--size="mini"-->
            <!--@click="handleAdd(scope.$index, scope.row)">添加</el-button>-->
            <el-button
            size="mini"
            type="danger" class="iconfont "
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="查看详情" :visible.sync="look">15
    </el-dialog>
    </div>
    <page-box v-if="page.pageCount > 1" :pageSize="page.pageSize" :total="total" :page-count="page.pageCount"
              :current-page="page.currentPage" @changePage="changePage"></page-box>

    <shade-box v-if="this.$store.state.isShow"></shade-box>

  </div>
</template>

<script>
import BreadCrumbBox from '@/components/breadCrumb'
import PageBox from '@/components/pagination'
import ShadeBox from '@/components/shade'
import { get } from '@/utils/index.js'
import globalAPI from '@/utils/api'
import * as types from '@/utils/store/types'
import { formatDate } from '@/utils/date'

export default {
  name: 'member',
  components: { ShadeBox, PageBox, BreadCrumbBox },
  data () {
    return {
      breadList: [],
      task: '人员',
      rowData: [],
      page: { currentPage: 1, pageCount: 2, pageSize: 8 },
      total: null,
      tableHeaders: [
        { prop: 'id', label: '人员名称' },
        { prop: 'platformName', label: '手机号' },
        { prop: 'accountCode', label: '角色名称' },
        { prop: 'use', label: '是否可用' },
        { prop: 'lock', label: '是否锁定' },
        { prop: 'date', label: '创建日期' }
      ],
      operations: [
        {
          icon: 'iconfont icon-edit2',
          className: 'blue',
          label: '编辑',
          width: '172px',
          title: '编辑',
          clickFn: (index, data) => {
            this.$emit('openSuppliersDialog', { create: false, editData: data })
            // this.$emit('openSuppliersDialog', {create: false, editData: data});
            // this.$set(this.rowData[$index], 'editing', true)
            this.$router.push('/home/index-system/member-edit')
          }
        }
      ],
      look: false
    }
  },
  methods: {
    getUsersList (queryString = '') {
      const _this = this
      const url = queryString === '' ? globalAPI.memberData : globalAPI.memberData2
      get(url).then(function (res) {
        _this.breadList = res.breadList
        _this.rowData = res.rowData
        _this.total = res.rowData.length
      }).catch(function (error) {
        console.log(error)
      })
    },
    changePage (val) {
      this.page.currentPage = val
    },
    newClick () {
      this.$router.push({ path: '/home/index-system/member-new' })
    },
    search () {
      const _this = this
      const showLoading = (show) => {
        _this.$store.commit(types.ISSHOW, show)
      }
      get(globalAPI.memberData, {}, { showLoading }).then(function (res) {
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleEdit (index, row) {
      this.$router.push({ path: '/home/index-system/member-new' })
    },
    handleAdd (index, row) {
      console.log(index, row)
      this.rowData.push(this.user)
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.rowData.splice(index, 1)
    },
    // 格式化日期
    formatDate (row, column) {
      let date = new Date(row[column.property])
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  created () {
    this.getUsersList()
  }
}
</script>

<style lang="less" scoped>
  .member {
    width: 96%;
    margin: 0 auto;
    .searchBox {
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
      padding: 10px 0 10px 5px;
      .nouveau {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        width: 100px;
      }
    }
    .dataTable{
      width: 100%;
      border-top:2px solid #828282;
      table{
        width:100%;
        .el-button{
          margin:2px;
        }
      }
    }
  }
  #atlas {
    min-width: 600px;
    min-height: 767px;
    width: 50%;
  }

</style>
