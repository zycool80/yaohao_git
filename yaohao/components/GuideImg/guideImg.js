Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        items: [],
        top: "",
        nowIndex: 0
    },
    properties: {
        itemsData: {
            type: Array,
            value: [],
            observer: function(t) {
                this.setData({
                    items: t
                });
            }
        },
        topData: {
            type: String,
            value: "",
            observer: function(t) {
                this.setData({
                    top: t
                });
            }
        }
    },
    methods: {
        hideGuide: function() {
            this.setData({
                items: []
            });
        },
        next: function() {
            this.data.nowIndex == this.data.items.length - 1 ? this.setData({
                items: []
            }) : (this.data.nowIndex++, this.setData({
                nowIndex: this.data.nowIndex
            }));
        }
    }
});