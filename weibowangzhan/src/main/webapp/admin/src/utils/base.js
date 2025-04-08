const base = {
    get() {
        return {
            url : "http://localhost:8080/weibowangzhan/",
            name: "weibowangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/weibowangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微博网站"
        } 
    }
}
export default base
