Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        itemsData: {
            type: Array,
            value: []
        },
        titleData: {
            type: String,
            value: ""
        }
    },
    methods: {
        clickAnalysis: function(t) {
            var a = t.currentTarget.dataset.index, e = this.data.itemsData[a];
            wx.$Analysis.sendEvent("首页-" + this.data.titleData, {
                name: e.name,
                project_id: e.id
            });
        }
    }
});