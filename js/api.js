$.ajaxSetup({
    beforeSend: function (xhr) {
        const token = localStorage.getItem("token");
        if (token) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
    }
});