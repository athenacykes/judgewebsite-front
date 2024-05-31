<template>
    <div id="home">
        <SidebarComponent />
        <ContentComponent id="main_show_content" />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { each } from "lodash";
import SidebarComponent from "../components/SidebarComponent";
import ContentComponent from "../components/HomePage/ContentComponent";
import Main from "../components/MainContent";

export default {
    name: "Home",
    data() {
        return {
            header: { 地区: [], 话题: [], 领域: [] },
            loading: false,
            test: "",
            def_name: "today",
            dic_all: {}
        };
    },
    computed: {
        ...mapGetters(["get_home_index"])
    },
    components: {
        SidebarComponent,
        ContentComponent,
        Main
    },
    mounted() {
        this.$store.commit("set_home_index", "main");
    },
    created() {
        this.get_label();
    },
    watch: {},
    methods: {
        get_loading(data) {
            this.loading = data;
        },
        get_label() {
            this.$ajaxAPI
                .getLabel()
                .then(res => {
                    // console.log(res);
                    var header = { 地区: [], 话题: [], 领域: [] };
                    each(res.data.data, function (v, k) {
                        header[v.type].push(v);
                    });
                    this.header = header;
                    var all = { today: { name: "today" } };
                    each(res.data.data, function (v, k) {
                        all[v.name] = v;
                    });

                    this.dic_all = all;
                    console.log(this.dic_all);
                    // this.name = list[0];
                })
                .catch(err => {
                    console.warn(err);
                });
        },
        handleSelect(key, keyPath) {
            this.$store.commit("set_follow_name", this.dic_all[key]);
            this.$store.commit("set_home_index", "main");
        }
    }
};
</script>
<style scoped>
#home {
    height: 100%;
    width: 100%;
    display: flex;
}

#header {
    float: left;
    width: calc(100% - 120px);
    height: 60px;
    border-bottom: 1px solid #e6e3e3;
}

#head_button {
    float: left;
    margin-top: 20px;
    height: 40px;
}

/deep/#head_button span {
    width: 120px;
}

.main {
    float: left;
    width: calc(100% - 150px);
    height: calc(100% - 70px);
    overflow-y: scroll;
}

#content {
    width: calc(100% - 20px);
    float: left;
    /* border-left: #e6e3e3 1px solid; */
    /* padding-bottom: 30px; */
    margin-top: 10px;
}

#main_show_content {
    height: 100%;
    width: 60%;
    margin-top: 1%;
}
</style>