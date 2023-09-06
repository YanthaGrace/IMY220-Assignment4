$(() => {

    $("button").on("click", function (event) {

        event.preventDefault();

        let msg = $('#message').val();

        if ((msg.length == 0)
        ) {
            // console.log("empty");
        }
        else {

            let color;
            if ($(this).attr('id') == "left") {
                color = "lefty"
            }
            else {
                color = "righty"
            }

            let newDiv = $('<div class="col-4 offset-4 mb-2 ' + color + '"></div>');
            let link;

            if (link = msg.match(/(youtube.com\/watch)(.*)(=)(.*)/)) {
                let temp = msg;
                console.log(link);

                embedL = link[4];
                let iframe = '<iframe src="https://www.youtube.com/embed/' + embedL+ '" title="W3Schools Free Online Web Tutorials" width = 100%  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';;
                msg = temp + iframe;
            }

            newDiv.html(msg);
            newDiv.appendTo('div.messages');

        }


    });



});
