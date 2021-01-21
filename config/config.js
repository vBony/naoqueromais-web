module.exports = {
    baseUrl: function(){
        var url = window.location.protocol + '//' + window.location.hostname + '/';
        return url;
    },

    serverUrl: function(){
        return 'http://127.0.0.1:8000/';
    }
}