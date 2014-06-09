(function(e){e.fn.ajaxGrid=function(t){return this.each(function(){var n=e(this);var r;var i={initialize:function(){i.createTable(0,t.pageSize,t.defaultSortExpression,t.defaultSortOrder,1);n.on("refreshGrid",function(e,n){if(t.filterData!=null)t.filterData=i.concatJson(t.filterData,n);else t.filterData=n;i.createTable(0,t.pageSize,t.defaultSortExpression,t.defaultSortOrder,1)});n.find(t.tableHeading).bind("click",function(){i.sorting(this,t.pageSize)});if(t.refreshEverySeconds!=null){setInterval(function(){i.createTable(0,t.pageSize,t.defaultSortExpression,t.defaultSortOrder,1)},t.refreshEverySeconds*1e3)}},compareObjectValue:function(e,t){var n=false;for(var r=0;r<e.length;r++){if(e[r].name==t){n=true;break}}return n},createTable:function(s,o,u,a,f){if(t.hideControlDuringTableCreation!=null)t.hideControlDuringTableCreation.css("visibility","hidden");var l={offset:s,rowNumber:o,sortExpression:u,sortOrder:a,pageNumber:f};if(t.filterData!=null)l=i.concatJson(l,t.filterData);e.ajax({url:t.url,type:t.requestType,dataType:"json",data:l,contentType:"application/json; charset=utf-8",beforeSend:function(){t.loadingImage.css("visibility","visible")},complete:function(){t.loadingImage.css("visibility","hidden");if(t.afterAjaxCallComplete!=null){t.afterAjaxCallComplete()}},success:function(s){n.find("tbody").html("");if(r!=null)r.remove();if(t.linkedTable!=null){var o=t.linkedTable.table;o.find("tbody").html("");e.each(s[t.linkedTable.data],function(t,n){var r=e("<tr/>");o.find("thead th").each(function(){var t=e("<td/>");t.html(n[e(this).find("span").attr("field-name")]);r.append(t)});o.find("tbody").append(r)})}e.each(s.Data,function(r,s){var o=e("<tr/>");o.attr("id",s[t.id]);n.find("thead th").each(function(){if(t.rowClass!=null){if(t.rowClass.noCondition!=null&&t.rowClass.noCondition==true){o.addClass(t.rowClass.class)}else{if(s[t.rowClass.header]==t.rowClass.value){o.addClass(t.rowClass.class)}}}var n=e("<td/>");if(e(this).find("a").length!=0){if(t.contentAdditionalProperty!=null&&i.compareObjectValue(t.contentAdditionalProperty,e(this).find("a").attr("field-name"))){for(var r=0;r<t.contentAdditionalProperty.length;r++){if(t.contentAdditionalProperty[r].name==e(this).find("a").attr("field-name")){var u=t.contentAdditionalProperty[r].control.clone();if(t.contentAdditionalProperty[r].type!=null&&t.contentAdditionalProperty[r].type=="Text"){for(k=0;k<t.contentAdditionalProperty[r].properties.length;k++){u.text(s[t.contentAdditionalProperty[r].properties[k].text]);u.attr("title",s[t.contentAdditionalProperty[r].properties[k].text])}}else if(t.contentAdditionalProperty[r].type!=null&&t.contentAdditionalProperty[r].type=="Image"){for(k=0;k<t.contentAdditionalProperty[r].properties.length;k++){if(t.contentAdditionalProperty[r].properties[k].whenValue==s[t.contentAdditionalProperty[r].name]){u.attr(t.contentAdditionalProperty[r].properties[k].property,t.contentAdditionalProperty[r].properties[k].value)}}}else{for(k=0;k<t.contentAdditionalProperty[r].properties.length;k++){u.find(t.contentAdditionalProperty[r].properties[k].field).val(s[t.contentAdditionalProperty[r].properties[k].value])}}}}n.html(u)}else{n.html(s[e(this).find("a").attr("field-name")])}}else if(e(this).find("a").length==0&&(t.preContentType!=null&&t.preContentType=="Multiple"&&e(this).index()<t.preContent.length||e(this).index()==0)){if(t.preContent!=null){var a;var f=0;var l=0;if(t.preContentType!=null&&t.preContentType=="Multiple"){f=e(this).index();l=e(this).index()+1}else{l=t.preContent.length}while(f<l){var c=t.preContent[f].control.clone();if(t.preContent[f].properties!=null){for(var h=0;h<t.preContent[f].properties.length;h++){if(t.preContent[f].properties[h].propertyField=="this"){if(t.preContent[f].properties[h].setWhen!=null){if(t.preContent[f].properties[h].setWhen.relation=="equal"){if(c.attr(t.preContent[f].properties[h].setWhen.property)==s[t.preContent[f].properties[h].setWhen.propertyValue])c.attr(t.preContent[f].properties[h].property,t.preContent[f].properties[h].propertyValue)}else{if(c.attr(t.preContent[f].properties[h].setWhen.property)!=s[t.preContent[f].properties[h].setWhen.propertyValue])c.attr(t.preContent[f].properties[h].property,t.preContent[f].properties[h].propertyValue)}}else{c.attr(t.preContent[f].properties[h].property,s[t.preContent[f].properties[h].propertyValue])}}else{if(t.preContent[f].properties[h].setWhen!=null){if(t.preContent[f].properties[h].setWhen.relation=="equal"){if(c.attr(t.preContent[f].properties[h].setWhen.property)==s[t.preContent[f].properties[h].setWhen.propertyValue])c.find(t.preContent[f].propertyField).attr(t.preContent[f].properties[h].property,t.preContent[f].properties[h].propertyValue)}else{if(c.attr(t.preContent[f].properties[h].setWhen.property)!=s[t.preContent[f].properties[h].setWhen.propertyValue])c.find(t.preContent[f].propertyField).attr(t.preContent[f].properties[h].property,t.preContent[f].properties[h].propertyValue)}}else{c.find(t.preContent[f].propertyField).attr(t.preContent[f].properties[h].property,s[t.preContent[f].properties[h].propertyValue])}}}}if(t.preContent[f].additionalControl!=null){for(j=0;j<t.preContent[f].additionalControl.length;j++){var u=t.preContent[f].additionalControl[j].control;if(t.preContent[f].additionalControl[j].displayedWhen.relation=="equal"){if(s[t.preContent[f].additionalControl[j].displayedWhen.header]==t.preContent[f].additionalControl[j].displayedWhen.value){if(t.preContent[f].additionalControl[j].disabledWhen!=null){var d=false;for(p=0;p<t.preContent[f].additionalControl[j].disabledWhen.length;p++){if(t.preContent[f].additionalControl[j].disabledWhen[p].relation=="equal"&&!d){if(e.inArray(s[t.preContent[f].additionalControl[j].disabledWhen[p].header],t.preContent[f].additionalControl[j].disabledWhen[p].value)!=-1){d=true}else{d=false}}else if(t.preContent[f].additionalControl[j].disabledWhen[p].relation=="not-equal"&&!d){if(e.inArray(s[t.preContent[f].additionalControl[j].disabledWhen[p].header],t.preContent[f].additionalControl[j].disabledWhen[p].value)==-1){d=true}else{d=false}}else if(t.preContent[f].additionalControl[j].disabledWhen[p].relation=="lower-than"&&!d){var v=new Date(t.preContent[f].additionalControl[j].disabledWhen[p].value);var m=new Date(v.getMonth()+1+"/"+v.getDate()+"/"+v.getFullYear()+" "+s[t.preContent[f].additionalControl[j].disabledWhen[p].header]);if(Math.ceil((m-v)/1e3/60)<=10)d=true;else d=false}}u.prop("disabled",d)}c.append(u);if(t.preContent[f].additionalControl[j].formAction!=null){c.attr("action",t.preContent[f].additionalControl[j].formAction)}}}else if(t.preContent[f].additionalControl[j].displayedWhen.relation=="not-equal"){if(s[t.preContent[f].additionalControl[j].displayedWhen.header]!=t.preContent[f].additionalControl[j].displayedWhen.value){if(t.preContent[f].additionalControl[j].disabledWhen!=null){var d=false;for(p=0;p<t.preContent[f].additionalControl[j].disabledWhen.length;p++){if(t.preContent[f].additionalControl[j].disabledWhen[p].relation=="equal"&&!d){if(e.inArray(s[t.preContent[f].additionalControl[j].disabledWhen[p].header],t.preContent[f].additionalControl[j].disabledWhen[p].value)!=-1){d=true}else{d=false}}else if(t.preContent[f].additionalControl[j].disabledWhen[p].relation=="not-equal"&&!d){if(e.inArray(s[t.preContent[f].additionalControl[j].disabledWhen[p].header],t.preContent[f].additionalControl[j].disabledWhen[p].value)==-1){d=true}else{d=false}}else if(t.preContent[f].additionalControl[j].disabledWhen[p].relation=="lower-than"&&!d){var v=new Date(t.preContent[f].additionalControl[j].disabledWhen[p].value);var m=new Date(v.getMonth()+1+"/"+v.getDate()+"/"+v.getFullYear()+" "+s[t.preContent[f].additionalControl[j].disabledWhen[p].header]);if(Math.ceil((m-v)/1e3/60)<=10)d=true;else d=false}}u.prop("disabled",d)}c.append(u);if(t.preContent[f].additionalControl[j].formAction!=null){c.attr("action",t.preContent[f].additionalControl[j].formAction)}}}}}if(t.preContent[f].disabledWhen!=null){if(t.preContent[f].disabledWhen.relation=="equal"){if(e.inArray(s[t.preContent[f].disabledWhen.header],t.preContent[f].disabledWhen.value)!=-1){c.find(t.preContent[f].disabledWhen.propertyField).prop("disabled",true)}else{c.find(t.preContent[f].disabledWhen.propertyField).prop("disabled",false)}}else{if(e.inArray(s[t.preContent[f].disabledWhen.header],t.preContent[f].disabledWhen.value)==-1){c.find(t.preContent[f].disabledWhen.propertyField).prop("disabled",true)}else{c.find(t.preContent[f].disabledWhen.propertyField).prop("disabled",false)}}}if(t.preContentType!=null&&t.preContentType=="Multiple"){a=c}else{if(a==null)a=c;else{if(t.preContent[f].removeWhen==null)a=a.add("<span> | </span>").add(c);else{if(s[t.preContent[f].removeWhen.property]!=t.preContent[f].removeWhen.value)a=a.add("<span> | </span>").add(c)}}}f++}if(a!=null)n.html(a.clone())}}else if(e(this).find("a").length==0&&e(this).parent().find("th").length-1==e(this).index()){if(t.postContent!=null){var g;for(f=0;f<t.postContent.length;f++){var c=t.postContent[f].control.clone();if(t.postContent[f].propertyField!=null)c.find(t.postContent[f].propertyField).prop(t.postContent[f].property,s[t.postContent[f].propertyValue]);if(t.postContent[f].additionalControl!=null){for(j=0;j<t.postContent[f].additionalControl.length;j++){var u=t.postContent[f].additionalControl[j].control;if(t.postContent[f].additionalControl[j].displayedWhen.relation=="equal"){if(s[t.postContent[f].additionalControl[j].displayedWhen.header]==t.postContent[f].additionalControl[j].displayedWhen.value){if(t.postContent[f].additionalControl[j].disabledWhen!=null){var d=false;for(p=0;p<t.postContent[f].additionalControl[j].disabledWhen.length;p++){if(t.postContent[f].additionalControl[j].disabledWhen[p].relation=="equal"&&!d){if(e.inArray(s[t.postContent[f].additionalControl[j].disabledWhen[p].header],t.postContent[f].additionalControl[j].disabledWhen[p].value)!=-1){d=true}else{d=false}}else if(t.postContent[f].additionalControl[j].disabledWhen[p].relation=="not-equal"&&!d){if(e.inArray(s[t.postContent[f].additionalControl[j].disabledWhen[p].header],t.postContent[f].additionalControl[j].disabledWhen[p].value)==-1){d=true}else{d=false}}else if(t.postContent[f].additionalControl[j].disabledWhen[p].relation=="lower-than"&&!d){var v=new Date(t.postContent[f].additionalControl[j].disabledWhen[p].value);var m=new Date(v.getMonth()+1+"/"+v.getDate()+"/"+v.getFullYear()+" "+s[t.postContent[f].additionalControl[j].disabledWhen[p].header]);if(Math.ceil((m-v)/1e3/60)<=10)d=true;else d=false}}u.prop("disabled",d)}c.append(u);if(t.postContent[f].additionalControl[j].formAction!=null){c.attr("action",t.postContent[f].additionalControl[j].formAction)}}}else if(t.postContent[f].additionalControl[j].displayedWhen.relation=="not-equal"){if(s[t.postContent[f].additionalControl[j].displayedWhen.header]!=t.postContent[f].additionalControl[j].displayedWhen.value){if(t.postContent[f].additionalControl[j].disabledWhen!=null){var d=false;for(p=0;p<t.postContent[f].additionalControl[j].disabledWhen.length;p++){if(t.postContent[f].additionalControl[j].disabledWhen[p].relation=="equal"&&!d){if(e.inArray(s[t.postContent[f].additionalControl[j].disabledWhen[p].header],t.postContent[f].additionalControl[j].disabledWhen[p].value)!=-1){d=true}else{d=false}}else if(t.postContent[f].additionalControl[j].disabledWhen[p].relation=="not-equal"&&!d){if(e.inArray(s[t.postContent[f].additionalControl[j].disabledWhen[p].header],t.postContent[f].additionalControl[j].disabledWhen[p].value)==-1){d=true}else{d=false}}else if(t.postContent[f].additionalControl[j].disabledWhen[p].relation=="lower-than"&&!d){var v=new Date(t.postContent[f].additionalControl[j].disabledWhen[p].value);var m=new Date(v.getMonth()+1+"/"+v.getDate()+"/"+v.getFullYear()+" "+s[t.postContent[f].additionalControl[j].disabledWhen[p].header]);if(Math.ceil((m-v)/1e3/60)<=10)d=true;else d=false}}u.prop("disabled",d)}c.append(u);if(t.postContent[f].additionalControl[j].formAction!=null){c.attr("action",t.postContent[f].additionalControl[j].formAction)}}}}}if(t.postContent[f].disabledWhen!=null){if(t.postContent[f].disabledWhen.relation=="equal"){if(e.inArray(s[t.postContent[f].disabledWhen.header],t.postContent[f].disabledWhen.value)!=-1){c.find(t.postContent[f].disabledWhen.propertyField).prop("disabled",true)}else{c.find(t.postContent[f].disabledWhen.propertyField).prop("disabled",false)}}else{if(e.inArray(s[t.postContent[f].disabledWhen.header],t.postContent[f].disabledWhen.value)==-1){c.find(t.postContent[f].disabledWhen.propertyField).prop("disabled",true)}else{c.find(t.postContent[f].disabledWhen.propertyField).prop("disabled",false)}}}if(g==null)g=c;else{if(t.postContent[f].removeWhen==null)g=g.add("<span> | </span>").add(c);else{if(s[t.postContent[f].removeWhen.property]!=t.postContent[f].removeWhen.value)g=g.add("<span> | </span>").add(c)}}}if(g!=null)n.html(g.clone())}}o.append(n)});n.find("tbody").append(o)});if(t.campaignStarted!=null&&t.campaignStarted==1){e(".CampaignSelect").prop("disabled",true);e(".CampaignContinue").prop("disabled",true)}i.createPaging(s.RowCount,f,t.pageSize)}})},createPaging:function(s,o,u){r=e('<div class="pager"/>');var a;var f;f=5;var l;var c;if(f%2==0){l=f/2-1;c=f/2}else{l=parseInt(f/2);c=l}if(s/t.pageSize>1){a=Math.ceil(s/t.pageSize)}else{a=parseInt(s/t.pageSize)}var h;var p;var d=false;var v=false;if(a>f){if(o<f){h=1;p=f;v=true}else{h=parseInt(o)-parseInt(l);p=parseInt(o)+parseInt(c);d=true;v=true}}else{h=1;p=a}if(p>=a){p=a;v=false}if(h-1==1){h=1;p=f+1;d=false}if(p+1==a){p=a;v=false}var m;for(var g=h;g<=p;g++){m=e("<a/>");m.attr("data-p",g);m.addClass("page-button");m.text(g);if(g==o)m.addClass("active-page");r.append(m);if(g==a)break}if(v==true){m=e("<label/>");m.text("...");r.append(m);m=e("<a/>");m.attr("data-p",a);m.addClass("page-button");m.text(a);r.append(m)}if(d==true){m=e("<label/>");m.text("...");r.prepend(m);m=e("<a/>");m.attr("data-p",1);m.addClass("page-button");m.text(1);r.prepend(m)}if(s==0){var y=e("<tr/>");var b=e("<td/>").attr("colspan",n.find("th").length);b.text(t.NoRecordsFound);y.append(b);n.append(y)}else if(s>t.pageSize){if(t.pagerWidth!=null){r.css({width:t.pagerWidth})}n.after(r);r.find("a").on("click",function(){i.changePage(this,u)})}},concatJson:function(t,n){for(var r in n)if(n.hasOwnProperty(r))t[r]=n[r];return t},changePage:function(r,s){var o=t.defaultSortExpression;var u=t.defaultSortOrder;if(n.find(t.tableHeading+"[sort-expression=asc]").length>0){o=n.find(t.tableHeading+"[sort-expression=asc]").attr("field-name");u="asc"}else if(n.find(t.tableHeading+"[sort-expression=desc]").length>0){o=n.find(t.tableHeading+"[sort-expression=desc]").attr("field-name");u="desc"}var a=0;var f=1;if(e(".active-page").length>0){a=(e(r).attr("data-p")-1)*s;f=e(r).attr("data-p")}i.createTable(a,s,o,u,f)},sorting:function(s,o){n.find(t.tableHeading).not(e(s)).removeAttr("sort-expression");var u;if(e(s).attr("sort-expression")=="desc"){e(s).attr("sort-expression","asc");u="asc"}else if(e(s).attr("sort-expression")==null||e(s).attr("sort-expression")=="asc"){e(s).attr("sort-expression","desc");u="desc"}var a=0;var f=1;if(r.find(".active-page").length>0){a=(r.find(".active-page").attr("data-p")-1)*o;f=r.find(".active-page").attr("data-p")}i.createTable(a,o,e(s).attr("field-name"),u,f)}};i.initialize()})}})(jQuery)
