<?php
  header("Content-type: application/octet-stream");
  header("Content-disposition: attachment; filename= yahoorespuesta.png");
  $data = $_REQUEST['data'];
  $uri = explode(",", $data);
  echo base64_decode($uri[1]);
?>
