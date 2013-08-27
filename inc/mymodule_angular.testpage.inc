<?php

/**
 * @file
 * replace all mymodule_angular with your shit.
 */

/**
 * misc test page call back
 */
function mymodule_angular_misctestpage() {
  drupal_add_js(libraries_get_path('angular') .'/angular.min.js', array('type'=>'file', 'scope' => 'footer', 'weight' => 0));
  drupal_add_js(drupal_get_path('module', 'mymodule_angular') . '/app/js/misc.js', array('type'=>'file', 'scope' => 'footer', 'weight' => 1));
  drupal_add_css(drupal_get_path('module', 'mymodule_angular') .'/app/css/app.css');

  $data = _mymodule_angular_default_info();
  drupal_add_js(array('mymodule_angular' => $data), 'setting');
  return theme('mymodule-angular-misc', array());
}
/**
 * app test page call back
 */
function mymodule_angular_apptestpage() {
  drupal_add_js(libraries_get_path('angular') .'/angular.min.js', array('type'=>'file', 'scope' => 'footer', 'weight' => 0));
  drupal_add_js(drupal_get_path('module', 'mymodule_angular') . '/app/js/app.js', array('type'=>'file', 'scope' => 'footer', 'weight' => 1));
  drupal_add_css(drupal_get_path('module', 'mymodule_angular') .'/app/css/app.css');
 
  $data = _mymodule_angular_default_info();
  drupal_add_js(array('mymodule_angular' => $data), 'setting');
  return theme('mymodule-angular-app', array());
}

//data i always want my apps to have.
function _mymodule_angular_default_info() {
  global $user;
  return array(
    'basepath' => base_path(),
    'mymodule_angular_path' => base_path() . drupal_get_path('module', 'mymodule_angular'),
    'user' => $user,
  );
}


function mymodule_angular_ajax() {
  $output = array(array('nid' => '1', 'title' => 'Fake Angular Node'),array('nid' => '2', 'title' => 'Fake Angular Node 2'));
  return drupal_json_output($output);
}