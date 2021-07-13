var $section = jQuery(".gt_section-<%=id%>");
if (!$section || !$section.length) {
    return;
}

store.change("optimal-<%=id%>-contentPosition", function(value) {
  console.log('check ', $gtSection_<%=id%>.find('.banner_body'));
  if(value == 'left'){
    $section.find('.banner_body').addClass('banner_body_change')
  }else{
    $section.find('.banner_body').removeClass('banner_body_change')
  }
})

