## The "styles" folder

This folder contains global css stylesheets.  These are only included by
@import directives in component-specific stylesheets.

The `reset.css` style sheet is the one exception to the rule.  Instead it's
referenced in `app/client.jsx` to make sure it's included before anything else.
