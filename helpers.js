Handlebars.registerHelper('mailbuilder-cerberus-responsive-paragraph', function(data) {
  var returnValue = data.replace(/\n/g, '<br />');
  var returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
  return returnValue;
});