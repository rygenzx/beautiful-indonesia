<?php


namespace Nextend\SmartSlider3\Platform\WordPress\Widget;


use Nextend\SmartSlider3\Settings;

class WidgetHelper {

    public function __construct() {

        add_action('widgets_init', array(
            $this,
            'widgets_init'
        ), 11);
        add_action('widgets_admin_page', array(
            $this,
            'widgets_admin_page'
        ));
    }

    public function widgets_init() {

        /**
         * Fix for Siteorigin and other plugins. They stored the class name...
         */
        class_alias(WidgetSmartSlider3::class, 'N2SS3Widget');

        register_widget('N2SS3Widget');

        $widgetAreas = intval(Settings::get('wordpress-widget-areas', 1));
        if ($widgetAreas > 0) {
            for ($i = 1; $i <= $widgetAreas; $i++) {

                register_sidebar(array(
                    'name'          => 'Custom Widget Area - #' . $i,
                    'description'   => '',
                    'id'            => 'smartslider_area_' . $i,
                    'before_widget' => '',
                    'after_widget'  => '',
                    'before_title'  => '<div style="display:none;">',
                    'after_title'   => '</div>',
                ));
            }
        }
    }

    public function widgets_admin_page() {
        add_action('dynamic_sidebar_before', array(
            $this,
            'dynamic_sidebar_before'
        ));
    }

    public function dynamic_sidebar_before($index) {
        if (substr($index, 0, strlen('smartslider_area_')) === 'smartslider_area_') {
            echo '<div class="description">Display this widget area in your theme with: <pre style="white-space: pre-wrap;overflow:hidden;">&lt;?php dynamic_sidebar(\'' . $index . '\'); ?&gt;</pre></div>';
        }

    }
}