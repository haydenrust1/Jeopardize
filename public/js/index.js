$(document).ready(function () {
    //JQuery Selectors
    let playBtn = $(".play")

    //Event Listeners
    $(playBtn).on("click", start)

    //Function that starts game
    function start() {
        console.log('click!');
        $.get('/api/questions', function (data) {
            console.log(data);
        })
    }
});