
var config = {
    host: tenant,
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: webIntegrationId
};
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
    webIntegrationId: config.webIntegrationId
});


require(["js/qlik"], function (qlik) {
    qlik.on("error", function (error) {
        $('#popupText').append(error.message + "<br>");
        $('#popup').fadeIn(1000);
    });
    $("#closePopup").click(function () {
        $('#popup').hide();
    });

    //qlik.theme.apply('theme_mpbidim').then(function (result) {
    //    console.log('theme applied with result: ' + result);
    //});

    var app = qlik.openApp(appId, config);

    app.getObject('currentSelections', 'CurrentSelections');


    app.visualization.create(
        'listbox',
        [
            filters[0].name
        ],
        {
            "showTitles": true,
            "title": filters[0].title
        }
    ).then(function (vis) {
        vis.show(filters[0].divId);
    });

    app.visualization.create(
        'listbox',
        [
            filters[1].name
        ],
        {
            "showTitles": true,
            "title": filters[1].title
        }
    ).then(function (vis) {
        vis.show(filters[1].divId);
    });


    app.visualization.create(
        'listbox',
        [
            filters[2].name
        ],
        {
            "showTitles": true,
            "title": filters[2].title
        }
    ).then(function (vis) {
        vis.show(filters[2].divId);
    });

    app.visualization.create(
        'listbox',
        [
            filters[3].name
        ],
        {
            "showTitles": true,
            "title": filters[3].title
        }
    ).then(function (vis) {
        vis.show(filters[3].divId);
    });


    app.visualization.create(
        'listbox',
        [
            filters[4].name
        ],
        {
            "showTitles": true,
            "title": filters[4].title
        }
    ).then(function (vis) {
        vis.show(filters[4].divId);
    });


    app.visualization.create(
        'listbox',
        [
            filters[5].name
        ],
        {
            "showTitles": true,
            "title": filters[5].title
        }
    ).then(function (vis) {
        vis.show(filters[5].divId);
    });


    app.visualization.create(
        'listbox',
        [
            filters[6].name
        ],
        {
            "showTitles": true,
            "title": filters[6].title
        }
    ).then(function (vis) {
        vis.show(filters[6].divId);
    });


    app.visualization.create(
        'listbox',
        [
            filters[7].name
        ],
        {
            "showTitles": true,
            "title": filters[7].title
        }
    ).then(function (vis) {
        vis.show(filters[7].divId);
    });


    app.visualization.create(
        'listbox',
        [
            filters[8].name
        ],
        {
            "showTitles": true,
            "title": filters[8].title
        }
    ).then(function (vis) {
        vis.show(filters[8].divId);
    });
});





function setNewFrame(title, description, urls, breadcrumbPath, showCurrentSelections) {
    try {
        event.stopPropagation();
    }
    catch (err) {
        // console.log(err);
    }

    var firstFrame = '<iframe id="iframe" src=' + urls[0] + ' style="overflow: hidden; display: block; height: 950px; width: 100%; border: medium none;" width="100%"></iframe>';

    if (urls.length >= 2) {

        var extraFramesHTML = '';
        for (var i = 1; i < urls.length; i++) {
            extraFramesHTML += '<iframe id="iframe' + (i + 1) + '" src=' + urls[i] + ' style="overflow: hidden; display: block; height: 950px; width: 100%; border: medium none;" width="100%"></iframe>'
        }

        document.getElementById('content_wrapper_frame').innerHTML = '<section class="content">' + firstFrame + extraFramesHTML + '</section>';
    }
    else {
        document.getElementById('content_wrapper_frame').innerHTML = firstFrame;
    }

    document.getElementById('pageHeader').innerHTML = title + '<small>' + description + '</small>';

    var breadcrumbs = breadcrumbPath.split(",");
    var breadcrumbsHTML = '';
    for (var i = 0; i < breadcrumbs.length; i++) {
        breadcrumbsHTML += '<li>' + breadcrumbs[i] + '</li>'
    }
    document.getElementById('pageBreadcrumbs').innerHTML = breadcrumbsHTML;


    var currentSelections = document.getElementById('selectionsAndFilters');
    if (showCurrentSelections) {

        currentSelections.style.display = 'block';
    }
    else {
        currentSelections.style.display = 'none';
    }
};


function openNav() {
    document.getElementById("filterSidebar").style.width = "800px";
}

function closeNav() {
    document.getElementById("filterSidebar").style.width = "0";
}