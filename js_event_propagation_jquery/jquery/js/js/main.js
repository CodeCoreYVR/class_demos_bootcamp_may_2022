d// select the second button
$("#button-2");
// select all anchor tags inside of li tags
$("li a");
// count the number of blue circles
$('.blue.circle').length

// Demo: Attributes, Classes and Removal

// Change the href of all links on the page
$('a').attr('href', 'http://www.nyan.cat')
// Change all blue shapes to red shapes
$('.blue').removeClass('blue').addClass('red')

// Exercise: Practice
$('a').attr('class', 'highlight')
$('.circle').removeClass('circle').addClass('diamond')
$('#green-container .shape, #purple-container .shape').remove()
$('#green-container, #purple-container').empty()

// html, children and parent
// get html of reset button
$('#reset').html()
// try and get html of all links
$('a').map((index, node) => {
  console.log($(node).html());
})
// change reset button to read "launch doggos!"
$('#reset').html('Launch Doggos!')

// Exercise: Practice
// 1. change all td's to the content 'yass'
$('td').html('yass')
// 2. select parents of all td tags
$('td').parent()

// Demo: Creating nodes
// 1. create a small blue diamond with $
const newElement = $('<div class="small blue diamond shape"></div>')
// 2. append it to all containers
$('.container').append(newElement)
// 3. prepend new link nyan.cat to the link list
$('ul').prepend('<li><a href="http://www.nyan.cat">New Li</a></li>')

// Exercise: Practice
// 1. Create a div with container class
const container = $('<div class="container"></div>')
// 2. prepend it to the first section tag in the body
$('section').first().prepend(container)
// 3. append a small black circle to the container
container.append('<div class="small black circle shape"></div>')

// This is the jQuery version of DOMContentLoaded
$(document).ready(() => {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle: GO AWAY!');
  })
  $('.blue.circle').on('mouseleave', event => {
    console.log('Blue circle: Goodbye');
  })
  $('#button-1').on('click', event => {
    $('.shape').remove()
  })  

  $('#button-2').on('click', event => {
    // $('#button-2').attr('disabled', 'true')
    $(event.currentTarget).attr('disabled', 'true')
  })
  $('#button-3').on('click', event => {
    $('#button-3').html('Button 3 was clicked')
  })
  $('tr').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight")
  })
  $('tr').on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight")
  })
})