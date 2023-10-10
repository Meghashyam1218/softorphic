
<!-- Inspiration: https://dribbble.com/shots/4397812-Click-Me -->

<a href="/#" class="cta inline-flex items-center">
	<span class="text-sm text-neutral-700">Get Started</span>
	<svg width="13px" height="10px" class="text-neutral-700 stroke-neutral-700" viewBox="0 0 13 10">
		<path d="M1,5 L11,5" />
		<polyline points="8 1 12 5 8 9" />
	</svg>
</a>

<style lang="sass">
$color: #111
$primary: #FFAB9D

a
  text-decoration: none

.cta
  position: relative

  
  padding: 19px 22px
  transition: all .2s ease
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    border-radius: 28px
    background: rgba($primary,.5)
    width: 56px
    height: 56px
    transition: all .3s ease
  span
    position: relative
    
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    position: relative
    top: 0
    margin-left: 10px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 100%
      background: rgba($primary,1)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)
</style>
