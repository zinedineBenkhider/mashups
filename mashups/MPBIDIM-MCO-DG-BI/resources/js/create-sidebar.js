var sidebarHTML = "";
for(var i = 0; i < heirarchy.length; i++){
    if(heirarchy[i].type == "link"){
        if(heirarchy[i].directLink == false || heirarchy[i].directLink == undefined){
            sidebarHTML += '<li><a href="#" onclick="';
            sidebarHTML += 'setNewFrame(';
            sidebarHTML += "&#39;" + heirarchy[i].title + "&#39;" + ",";
            sidebarHTML += "&#39;" + heirarchy[i].description + "&#39;" + ",";
            sidebarHTML += "[" +  
                heirarchy[i].urls.map(function(x){return "&#39;" + x + "&#39;";})
                + "]" + ",";
            sidebarHTML += "&#39;" + heirarchy[i].breadcrumbs + "&#39;" + ",";
            sidebarHTML += heirarchy[i].showCurrentSelections;
            sidebarHTML += ')">';
            sidebarHTML += '<i class="fas fa-' + heirarchy[i].icon + '"></i>&nbsp;&nbsp;';
            sidebarHTML += '<span>'+heirarchy[i].title+'</span>';
            sidebarHTML += '</a></li>';
        }
        else if(heirarchy[i].directLink == true){
            sidebarHTML += '<li><a href="' + heirarchy[i].urls[0] + '" target="_blank">';
            sidebarHTML += '<i class="fas fa-' + heirarchy[i].icon + '"></i>&nbsp;&nbsp;';
            sidebarHTML += '<span>'+heirarchy[i].title+'</span>';
            sidebarHTML += '</a></li>';
        }             
    }
    else if(heirarchy[i].type == "section"){
        sidebarHTML += '<li class="header">'+heirarchy[i].title+'</li>';
    }

    else if(heirarchy[i].type == "parent"){
        sidebarHTML += '<li class="treeview"><a href="#">';
        sidebarHTML += '<i class="fas fa-' + heirarchy[i].icon + '"></i>&nbsp;&nbsp;'; sidebarHTML += '<span>'+ heirarchy[i].title +'</span>';
        sidebarHTML += '<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>';
        sidebarHTML += '<ul class="treeview-menu">';

        for(var j = 0; j < heirarchy[i].links.length; j++){
            if(heirarchy[i].links[j].directLink == false || heirarchy[i].links[j].directLink == undefined){   
                sidebarHTML += '<li><a href="#" onclick="';
                sidebarHTML += 'setNewFrame(';
                sidebarHTML += "&#39;" + heirarchy[i].title + "&#39;" + ",";
                sidebarHTML += "&#39;" + heirarchy[i].links[j].title + "&#39;" + ",";
                sidebarHTML += "[" +  
                    heirarchy[i].links[j].urls.map(function(x){return "&#39;" + x + "&#39;";})
                    + "]" + ",";
                sidebarHTML += "&#39;" + heirarchy[i].links[j].breadcrumbs + "&#39;" + ",";
                sidebarHTML += heirarchy[i].links[j].showCurrentSelections;
                sidebarHTML += ')">';
                sidebarHTML += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                sidebarHTML += heirarchy[i].links[j].title;
                sidebarHTML += '</a></li>';
            }
            else if(heirarchy[i].links[j].directLink == true){
                sidebarHTML += '<li><a href="' + heirarchy[i].links[j].urls[0] + '" target="_blank">';
                sidebarHTML += heirarchy[i].links[j].title + '</a></li>';
            }
        }
        sidebarHTML += '</ul></li>';
    }
}

document.getElementById('sidebar_menu').innerHTML = sidebarHTML;