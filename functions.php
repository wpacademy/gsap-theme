<?php
/**
 * GSAP Theme Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package GSAP Theme
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_GSAP_THEME_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'gsap-theme-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_GSAP_THEME_VERSION, 'all' );
    //jQuery
    wp_enqueue_script( 'jquery' );

	wp_enqueue_script( 'gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js', array(), false, true );
    // ScrollTrigger - with gsap.js passed as a dependency
    wp_enqueue_script( 'gsap-st', 'https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js', array('gsap-js'), false, true );

    // Split Type
    wp_enqueue_script( 'split-type', 'https://unpkg.com/split-type', array(), '0.3.4', true );

    wp_enqueue_script( 'gsap-text-animate', get_stylesheet_directory_uri() . '/assets/js/text.js', array('gsap-js', 'split-type', 'gsap-st'), CHILD_THEME_GSAP_THEME_VERSION, true );

    // Testimonial
    wp_enqueue_script( 'gsap-testimonial-animate', get_stylesheet_directory_uri() . '/assets/js/testimonial.js', array('gsap-js', 'split-type', 'jquery'), CHILD_THEME_GSAP_THEME_VERSION, true );

    // Image Borders
    wp_enqueue_script( 'gsap-images-animate', get_stylesheet_directory_uri() . '/assets/js/images.js', array('gsap-js', 'gsap-st'), CHILD_THEME_GSAP_THEME_VERSION, true );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );
