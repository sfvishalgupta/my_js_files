<?php
function callback($buffer){
 	$buffer = preg_replace(array('/ {2,}/','/<!--.*?-->|\t|(?:\r?\n[ \t]*)+/s'),array(' ',''),$buffer);
	return $buffer;
}
ob_start("callback");?>
//html
<?php ob_end_flush();?>
