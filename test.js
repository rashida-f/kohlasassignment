var a = document.getElementsByClassName('artdeco-card ember-view relative break-words pb3 mt2 ');
var c;
for(let i =0;i<a.length;i++){
    var b = a[i].getElementsByClassName("pv-profile-card-anchor");
    if(b[0].hasAttribute('id') && b[0].getAttribute('id')==='education'){
        c = a[i];
    }
}

var d= c.getElementsByClassName('artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column');
var parent = {};
var edu = [];
var edu_counter = 0;

for(let i=0;i<d.length;i++){
    var edu_ins = '';
    var edu_name = '';
    var edu_year = '';

    var f = d[i].getElementsByClassName('mr1 hoverable-link-text t-bold');
    var g = f[0].getElementsByTagName('span');
    edu_ins= g[0].innerHTML;

    var h =  d[i].getElementsByClassName('t-14');
    if(h.length ==2){
        // var edu_name_temp = h[0].getElementsByTagName('span');
        edu_name = h[0].getElementsByTagName('span')[0].innerHTML;
        edu_year = h[1].getElementsByTagName('span')[0].innerHTML;
    }
    else{
        var edu_year = h[0].getElementsByTagName('span')[0].innerHTML;
    }
    var edu_details = {};
    edu_details['institute'] = edu_ins;
    edu_details['degree'] = edu_name;
    edu_details['year'] = edu_year;
    edu.push(edu_details);
}
parent['Education'] = edu;
//console.log(parent);
console.log(JSON.stringify(parent));



