jQuery Fancy Custom Radio Buttons and Checkboxes
=================================================

This is a modification of the plugin written by Dharmavirsinh Jhala available here: http://blogs.digitss.com/javascript/jquery-javascript/jquery-fancy-custom-radio-and-checkbox/

Originally this plugin depended on using CSS sprites, it has been modified to toggle a css class leaving the actual implementation up to you.

Example Usage:

javascript:
`
  $(document).ready(function(){
    $('.fancyRadio').dgStyle();
  })
`

html:
`
  <div class="fancyRadio">
    <input type="radio" value="1" name="category" />
  </div>
`

css:
`
  .fancyRadio {
    height: 16px;
  	width: 16px;
  	margin: 0 0 3px;
  	background-repeat:no-repeat;
  	cursor: default;
  	display: block;
  	float: left;
  }

  .fancyRadio.checked {
    background:url("checked-ico.png") !important;
  }
`
  

`