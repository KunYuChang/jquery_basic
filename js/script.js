// jQuery的語法邏輯 : $(selector).action();

$(document).ready(function () {
  $('button').click(function () {
    $('ul li:first-child').hide(1000)
    $('ul li:last-child').hide(1000)
    // $('[href]').hide(1000)
    // $('a[target!="_blank"]').hide(1000)

    // 操作DOM
    $(':text').val('Good')
    $('p').empty()
    $('p').remove()
    $('h1').addClass('heading')
    $('p').removeClass('text')

    // 更改css
    $('p').css('color', 'red')
    $('tr:odd').css('background-color', 'orange')

    // Events
    // $('p').hide(3000)
    // $('p').open(3000)
    // $('h2').toggle(1000)
    // $('h2').fadeOut(1000)
    // $('h2').fadeIn(1000)
    // $('h2').fadeToggle(1000)
    // $('h2').fadeTo(1000, 0.4) // 速度,透明度
    // $('h2').slideDown('5000')
    // $('h2').slideToggle('5000')

    // animate methods
    // $(selector).animate({ parameters }, speed, callback)
    $('h2').animate(
      {
        left: '100px',
        height: '+=200px',
      },
      1000
    )
  })
})
