Bootzilla
=========

Bootzilla is a suite of CSS components and JS features for developing apps in B2G
You should not modifie your local copy of bootzilla, if you have some extra requirments or need and new component just make a pull request,
or contact directly with the owners/collaborators.

Folder structure:
=========
	/bootzilla
		/css
			/base
				root.css 			=> All base styles that we need to normalize the starting point for cross-browser development.
				fonts.css 			=> All the font families used in B2G
				app.css 			=> Common set-up for creating app layouts
				package.css 		=> Includes: All the CSS files in the same folde
			/componets
				buttons.css 		=> All the button types and structures related that the system provides
				icons.css 			=> Icons provided by the system, could be bitmaps, fonts, or svg
				layout.css 			=> Low and medium level components for setting up responsive strcutures
				forms.css 			=> Low and medium structures for creating forms
				lists.css 			=> High level strcutures for crafting lists
				navigations.css 	=> High level strcutures for navigation use cases
				package.css 		=> Includes: All the CSS files in the same folde
			package.css 			=> Includes: All the CSS files in bootzilla
		/js
			/base
				responsive.js 		=> Calculation for setting-up the amount of UI resize that the device needs
				template.js 		=> A custom template system
			/components
				infinite-scroll.js 	=> Component for creating typical autoload items list
		/gphx
			/bitmap
				/default
					loader.gif
				/high
				/xhigh
			/vector

	/examples
		block-list.html 			=> Example of .block-list
		selection-list.html 		=> Example of .selection-list