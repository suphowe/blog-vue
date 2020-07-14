<template>
  <div class="m-container">
    <!-- 调用头部 -->
    <Header></Header>
    <div class="block">
      <el-timeline>
        <el-timeline-item v-bind:timestamp="blog.created" placement="top" v-for="blog in blogs">
          <el-card>
            <h4>
              <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">{{blog.title}}</router-link>
            </h4>
            <p>{{blog.description}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

    </div>
    <el-pagination class="mpage" background layout="prev, pager, next" :current-page=currentPage :page-size=pageSize
      @current-change=page :total="total">
    </el-pagination>
  </div>
</template>
<script>
  //引入头部
  import Header from "@/components/Header";
  export default {
    name: "Blogs",
    components: { Header },
    //定义博客列表blogs,以及一些分页信息
    data() {
      return {
        blogs: {},
        currentPage: 1,
        total: 0,
        pageSize: 5
      }
    },
    //定义分页的调用接口page(currentPage),参数是需要调整的页码currentPage,得到结果之后直接赋值即可
    //然后初始化时候，直接在mounted()方法中调用第一页this.page(1)
    methods: {
      page(currentPage) {
        const _this = this

        this.$axios.get('/blogs?currentPage=' + currentPage, {
          //头部校验信息
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        }).then((res) => {
          //console.log(res.data.data.records)
          _this.blogs = res.data.data.records
          _this.currentPage = res.data.data.current
          _this.total = res.data.data.total
          _this.pageSize = res.data.data.size
        })
      }
    },
    mounted() {
      this.page(1);
    }
  }
</script>