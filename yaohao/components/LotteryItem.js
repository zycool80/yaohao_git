Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        itemsData: {
            type: Array,
            value: [],
            observer: function(e) {
                this.setData({
                    items: e
                });
            }
        }
    },
    data: {
        items: []
    },
    methods: {
        sendAnalysisHandle: function(e) {
            var t = e.currentTarget.dataset.item;
            wx.navigateTo({
                url: "lotteryDetail?project_id=" + t.id + "&project_name=" + t.title + "&lottery_id=" + t.id
            });
            /*wx.$Analysis.emit("projectDetailClick", {
                project_id: t.project_id,
                name: t.name,
                area_id: t.area_id,
                area: t.area
            });*/
        },
        toUrlHandle: function(e) {
            var t = e.currentTarget.dataset.item;
            wx.navigateTo({
                url: "/subPackages/comment/pages/project_comment?project_id=" + t.project_id + "&project_name=" + t.name + "&lottery_id=" + t.id
            });
        }
    }
});