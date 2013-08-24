<?php

/**
 * @file
 * replace all mymodule_angular with your shit.
 */

/**
 * test page call back
 */
function mymodule_angular_testpage() {
  drupal_add_js(libraries_get_path('angular') .'/angular.min.js', array('type'=>'file', 'scope' => 'footer', 'weight' => 0));
  drupal_add_js(drupal_get_path('module', 'mymodule_angular') . '/app/js/app.js', array('type'=>'file', 'scope' => 'footer', 'weight' => 1));
  drupal_add_css(drupal_get_path('module', 'mymodule_angular') .'/app/css/app.css');

  global $user;
  $data = array(
    'basepath' => base_path(),
    'mymodule_angular_path' => base_path() . drupal_get_path('module', 'mymodule_angular'),
    'user' => $user,
  );
  drupal_add_js(array('mymodule_angular' => $data), 'setting');

  return theme('mymodule-angular', array());
}


function mymodule_angular_ajax() {
  $output = array('nid' => '68', 'title' => 'Fake Angular Node');
  return drupal_json_output($output);
}