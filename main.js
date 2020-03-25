let app = new Vue({
    el: '#app',
    data: {
        companyInfo: ""
    },

    methods: {
        fetchSummaryData: function () {
            fetch("https://api.spacexdata.com/v3/info", {
                    method: "GET"
                })
                .then(response => response.json())
                .then(info => {
                    console.log(info.summary);
                    this.companyInfo = info.summary;
                })
                .catch(function (error) {
                    console.log(error, "<-- error");
                });
        }
    },

    created: function () {
        this.fetchSummaryData();
    }
});