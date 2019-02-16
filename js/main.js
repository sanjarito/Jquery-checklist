$(function(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let shopping_list_item = ($('#shopping-list-entry').val())
    $(".shopping-list").append("<li><span class='shopping-item'>" + shopping_list_item + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>" + 'check' + "</span></button><button class='shopping-item-delete'><span class='button-label'>" + 'delete' + "</span></button></div></li>")
  });

  $('ul').on('click','button',function(event) {
    let buttonSelection = ($(event.currentTarget).text())
    buttonSelection = buttonSelection.replace(/\s+/g, '');
    console.log(buttonSelection)
    if (buttonSelection == "check")  {
      let shoppingItem = ($(this).closest('li').children('span'))
      shoppingItem.toggleClass('shopping-item__checked')
    } else if (buttonSelection == "delete"){
       ($(this).parent().parent().remove())
    }
  });
})
