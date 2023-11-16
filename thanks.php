<?php
$file_url = 'http://localhost/img/logo.png';
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\"");
readfile($file_url);
require_once __DIR__. '/counter/counter.php';
addUniqueHit();
header("Location: /thanks.html");
die();