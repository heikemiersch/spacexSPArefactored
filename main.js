let app = new Vue({
    el: '#app',
    data: {
        message: 'this is where "info.summary" goes',

    },
    methods: {
        fetchSummaryData: function () {
            fetch("https://api.spacexdata.com/v3/info", {
                    method: "GET"
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (info) {
                    console.log(info.summary);
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