# Usage
## Read js file
Example code:
  <script src="xxxxx/jquery.js">
  <!-- or -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

  <script src="xxxxx/jquery.plchldr.js">
  <!-- or -->
  <script src="xxxxx/jquery.plchldr.min.js">

## Run script
  $(function () {
    $('.foo').placeholder({
      stringHold: 'sample',
      foregroundHold: '#999999'
    });
  });
