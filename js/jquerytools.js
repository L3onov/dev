
/**
 * @file
 * Provides the jQuery Tools Drupal behaviors.
 */

/**
 * The jQuery Tools Drupal behavior.
 */
Drupal.behaviors.jquerytools = function(context) {
  if (Drupal.settings.jquerytools) {
    // Iterate through each tool and apply the tool to the elements.
    jQuery.each(Drupal.settings.jquerytools, function(tool, elements) {
      // Iterate through each tool and apply the options.
      jQuery.each(elements, function(selector, options) {
        // Apply the tool's effect.
        $(selector + ':not(.jquerytools-' + tool + '-processed)', context).addClass('jquerytools-' + tool + '-processed')[tool](options);
      });
    });
  }
}
