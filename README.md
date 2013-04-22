# Usage
## Read js file
<pre><code>
<script src="xxxxx/jquery.js">
<!-- or -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script src="xxxxx/jquery.plchldr.js">
<!-- or -->
<script src="xxxxx/jquery.plchldr.min.js">
</code></pre>

## Run script
<pre><code>
$(function () {
  $('.foo').placeholder({
    stringHold: 'sample',
    foregroundHold: '#999999'
  });
});
</code></pre>
