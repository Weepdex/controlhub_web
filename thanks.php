<?php

$file_url = 'https://sicanzi.com/images/nah.png';
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"" . "weepdex.png" . "\"");
readfile($file_url);

require_once __DIR__. '/counter/counter.php';

addUniqueHit();
header("Location: /thanks.html");
die();
