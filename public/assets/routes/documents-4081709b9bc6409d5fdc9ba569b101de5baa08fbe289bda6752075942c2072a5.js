"use strict";define(["jquery","lodash","collections/document_collection","components/document/documents","postal","react"],function(e,t,n,o,c,u){var r=function(r){var i=!1,l={};l.route=c.channel("route"),t.has(r,"documentList")||(i=!0,r.documentList=new n),i?r.documentList.fetch().then(function(){u.render(u.createElement(o,{collection:r.documentList}),e("#app").get(0)),l.route.publish("ready")}):(u.render(u.createElement(o,{collection:r.documentList}),e("#app").get(0)),l.route.publish("ready"))};return r});