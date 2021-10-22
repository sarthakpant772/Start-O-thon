import React from 'react';

function Home()  {
	window.DEMO = window.DEMO || {}

Utils = {
  'transform':
    Modernizr.prefixed('transform').replace(/([A-Z])/g, (str,m1) => 
      return '-' + m1.toLowerCase()
    ).replace(/^ms-/,'-ms-')
  ,
  'translate': (x, y) =>
    tran = if Modernizr.csstransforms3d then 'translate3d' else 'translate'
    vals = if Modernizr.csstransforms3d then '(' + x + ', ' + y + ', 0)' else '(' + x + ', ' + y + ')'
    return tran + vals
}

class Application

  constructor: ->
    DEMO.utils = Utils
    @$doc = $(document)
    @$roller = $('.roller')
    @$step = $('#steps li')
    @$title = $('#titles li')
    @min = 0
    @max = @$step.length - 1
    @active_index = 0
    
    @$step.eq(@active_index).addClass('active')
    @$title.eq(@active_index).addClass('active')
    
    @observe()
  
  observe: ->
    @$doc.on('keyup', @onKeyup)
    
  onKeyup: (e) =>
    kc = e.keyCode
    
    if kc is 38
      e.preventDefault()
      @previous()
    if kc is 40
      e.preventDefault()
      @next()
  
  previous: =>
    if @active_index > @min
      @active_index--
      @update()
  
  next: =>
    if @active_index < @max
      @active_index++
      @update()
  
  update: =>
    y = -(@active_index * 100)
    @$roller.css(DEMO.utils.transform, DEMO.utils.translate(0,"#{y}%"))
    
    @$step.removeClass('active')
    @$title.removeClass('active')
    
    @$step.eq(@active_index).addClass('active')
    @$title.eq(@active_index).addClass('active')

$ ->
  DEMO.instance = new Application()
return (
	<div>
		
	<div id="slides">
  <ul class="roller">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
<ul id="steps" class="roller">
  <li>01</li>
  <li>02</li>
  <li>03</li>
  <li>04</li>
  <li>05</li>
</ul>
<div id="titles">
  <ul class="roller">
    <li>
      <h2>First</h2>
      <h2>Slide</h2>
      <p>First, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Second</h2>
      <h2>Slide</h2>
      <p>Secondly, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Third</h2>
      <h2>Slide</h2>
      <p>Thirdly, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Fourth</h2>
      <h2>Slide</h2>
      <p>Fourthly, use the up and down arrow keys to navigate.</p>
    </li>
    <li>
      <h2>Fifth</h2>
      <h2>Slide</h2>
      <p>Lastly, use the up and down arrow keys to navigate.</p>
    </li>
  </ul>
</div>
<style>
@import url(https://fonts.googleapis.com/css?family=Abril+Fatface)
@import url(https://fonts.googleapis.com/css?family=Roboto:500)

$speed_metal: 666ms
$evil_ease: cubic-bezier(0.666, 0.000, 0.333, 1.000)

html, body
  width: 100%
  height: 100%
  overflow: hidden

body
  color: white
  font-family: 'Roboto', sans-serif
  font-size: 16px
  line-height: 1em
  background-color: black

#slides
  position: absolute
  top: 17%
  left: 10%
  right: 48%
  bottom: 17%
  overflow: hidden
  
  ul
    position: absolute
    top: 0px
    left: 0px
    width: 100%
    height: 100%
  
    li
      position: relative
      width: 100%
      height: 100%

      &:nth-child(1)
        background-color: #131313
      &:nth-child(2)
        background-color: #262626
      &:nth-child(3)
        background-color: #393939
      &:nth-child(4)
        background-color: #262626
      &:nth-child(5)
        background-color: #131313

ul#steps
  position: absolute
  top: 50%
  left: 20%
  height: 110px
  margin-top: -55px
  
  li
    position: relative
    height: 100%
    color: #999
    font-family: 'Abril Fatface', serif
    
    transform: translate3d(0,0,0)
    transition: color $speed_metal $evil_ease, font-size $speed_metal $evil_ease
    
    &.active
      color: #bf482c
      font-size: 96px

#titles
  position: absolute
  top: 50%
  left: 40%
  width: 60%
  height: 330px
  margin-top: -165px
  padding: 110px 0
  
  ul
    position: absolute
    top: 0px
    left: 0px
    width: 100%
    height: 100%
  
  li
    position: relative
    width: 100%
    height: 100%
    visibility: hidden
    opacity: 0
    
    transform: translate3d(0,0,0)
    transition: visibility 0ms linear $speed_metal, opacity $speed_metal $evil_ease
    
    &.active
      visibility: visible
      opacity: 1
      
      transition: visibility 0ms linear, opacity $speed_metal $evil_ease
    
    h2
      height: 110px
      font-family: 'Abril Fatface', serif
      font-size: 96px
      display: block

    p
      height: 110px
      color: #999

.roller
  transform: translate3d(0,0%,0)
  transition: transform $speed_metal $evil_ease




</style>
	</div>
);


}

export default Home;