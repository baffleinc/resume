angular.module('templates-main', ['template/job-modal.html', 'template/menu-bar.html', 'template/menu-popup.html', 'template/modal/backdrop.html', 'template/modal/modal-close.html', 'template/modal/window.html', 'template/nav-menu.html']);

angular.module("template/job-modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/job-modal.html",
    "<div class=\"modal-bar\">\n" +
    "	<a ng-click=\"prev()\" class=\"control previous-button\"><i class=\"fa fa-arrow-left fa-2x\"></i> <span class=\"hide-for-small\">{{ prevTitle }}</span></a>\n" +
    "	<a ng-click=\"$close()\" class=\"close-button\"><i class=\"fa fa-times fa-2x\"></i></a>\n" +
    "	<a ng-click=\"next()\" class=\"control next-button\"><i class=\"fa fa-arrow-right fa-2x\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"scroll\" ng-keydown=\"keypressed()\">\n" +
    "	<div class=\"work-detail\">\n" +
    "		<div class=\"job-desc row\">\n" +
    "			<div class=\"small-12 columns\">\n" +
    "				<h3>{{ job.company }}</h3>\n" +
    "				<h2>{{ job.title }}</h2>\n" +
    "				<p>{{ job.when }}</p>\n" +
    "				<div class=\"desc\" ng-bind-html=\"job.descSafe\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"job-work\" ng-show=\"job.work\">\n" +
    "			<div class=\"scroller\">\n" +
    "				<h2 class=\"next-title\">Some of my work from here</h2>\n" +
    "				<div ng-repeat=\"work in job.work\"  class=\"work\" work-tile ng-class=\"{ 'show-info' : hovering }\">\n" +
    "					<div class=\"info row small-12 columns\">\n" +
    "						<h3>{{ work.title }}</h3>\n" +
    "						<hr class=\"show-for-small\">\n" +
    "					</div>\n" +
    "					<img ng-show=\"work.img\" ng-src=\"images/work/{{ work.img }}\" alt=\"\">\n" +
    "					<div class=\"clearfix\"></div>\n" +
    "					<div class=\"small-12 columns extra-info\">\n" +
    "						<p>{{ work.desc }}</p>\n" +
    "						<a ng-show=\"work.link\" ng-href=\"{{ work.link }}\" target=\"_blank\" class=\"small button\"><i class=\"fa fa-square-share-o\"> See</i></a>\n" +
    "					</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<span class=\"ref\">reference: <a ng-repeat=\"ref in job.ref\" ng-href=\"{{ ref.link }}\" target=\"_blank\">{{ ref.name }} &bull;</a> (Numbers on request).</span> \n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- <a hamburger-button open=\"true\" callback=\"$close()\"></a> -->");
}]);

angular.module("template/menu-bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/menu-bar.html",
    "");
}]);

angular.module("template/menu-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/menu-popup.html",
    "<div class=\"modal-bar\">\n" +
    "      <a ng-click=\"$close()\" class=\"close-button\"><i class=\"fa fa-times fa-2x\"></i></a>\n" +
    "    </div>\n" +
    "\n" +
    "<nav class=\"menu scroll\" ng-cloak>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"small-12 large-6 columns\">\n" +
    "      <ul class=\"no-bullet\">\n" +
    "        <li><a ng-click=\"goTo('profile')\">Meet me</a></li>\n" +
    "        <li><a ng-click=\"goTo('intro')\">A word</a></li>\n" +
    "        <li><a ng-click=\"goTo('employment')\">Work</a></li>\n" +
    "        <li><a ng-click=\"goTo('value')\">Values</a></li>\n" +
    "        <li><a ng-click=\"goTo('skills')\">Skills</a></li>\n" +
    "        <li><a ng-click=\"goTo('education')\">Education</a></li>\n" +
    "        <li><a ng-click=\"goTo('links')\">Links</a></li>\n" +
    "        <li><a ng-click=\"goTo('contact')\">Say hello!</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div class=\"large-6 columns hide-for-medium-down aux\">\n" +
    "      <div class=\"table-cell\">\n" +
    "        <p><img src=\"../images/logo.png\" spinning-logo width=\"64px\" height=\"64px\" alt=\"\" class=\"spinning\"></p>\n" +
    "        <h1>Harley Alexander</h1>\n" +
    "      <p><em>User Experience Designer<br>\n" +
    "              Digital &amp; Print Designer<br>\n" +
    "              Front-end Developer</em></p>\n" +
    "\n" +
    "              <p>0422 808 381 • <a href=\"mailto:harley@baffleinc.com\">email</a> • <a href=\"http://au.linkedin.com/pub/harley-alexander/35/7b9/59b\">linkedin</a></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <footer class=\"row\">\n" +
    "    <div class=\"small-12 columns\">\n" +
    "      \n" +
    "      <p><span class=\"right\">&copy; Harley '14</span>\n" +
    "        <a href=\"tel:+61422808381\" class=\"fa fa-phone\"></a>\n" +
    "        <a href=\"mailto:harley@baffleinc.com\" class=\"fa fa-envelope\"></a>\n" +
    "        <a href=\"http://au.linkedin.com/pub/harley-alexander/35/7b9/59b\" target=\"_blank\" class=\"fa fa-linkedin\"></a>\n" +
    "        <a href=\"fonts/harley.vcf\" class=\"fa fa-download\"></a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </footer>\n" +
    "</nav>");
}]);

angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html",
    "<div class=\"reveal-modal-bg fade\" ng-click=\"close($event)\" style=\"display: none\"></div>");
}]);

angular.module("template/modal/modal-close.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/modal-close.html",
    "<div class=\"hamburger-cross-button\" ng-class=\"{ 'open' : open }\" ng-click=\"callback()\">\n" +
    "  <span name=\"bun\"></span>\n" +
    "  <span name=\"patty-and-cheese\"></span>\n" +
    "  <span name=\"bun\"></span>\n" +
    "</div>");
}]);

angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html",
    "<div tabindex=\"-1\" class=\"reveal-modal fade {{ windowClass }}\"\n" +
    "    	ng-class=\"{in: animate}\" ng-click=\"close($event)\"\n" +
    "    style=\"display: block; position: fixed; visibility: visible\">    \n" +
    "    <div ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("template/nav-menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/nav-menu.html",
    "<nav class=\"bar\" ng-class=\"{ 'scrolled' : showBar, 'visible' : barVisible }\">\n" +
    "  <a ng-click=\"openMenu()\" class=\"fa fa-bars show-for-large-up desktop-menu-button\"> menu</a>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"small-12 columns\">\n" +
    "      <strong>Harley Alexander</strong>\n" +
    "      <span class=\"right hide-for-large-up\">\n" +
    "        <!-- <a ng-click=\"toTheTop()\" class=\"fa fa-chevron-up\"></a> -->\n" +
    "        <a href=\"tel:+61422808381\" class=\"fa fa-phone\"></a>\n" +
    "        <a href=\"mailto:harley@baffleinc.com\" class=\"fa fa-envelope\"></a>\n" +
    "        <!-- <a href=\"http://www.linkedin.com/profile/view?id=124411655\" class=\"fa fa-linkedin\"></a> -->\n" +
    "        <a ng-click=\"openMenu()\" class=\"fa fa-bars\"></a>\n" +
    "      </span>\n" +
    "\n" +
    "      <span class=\"right show-for-large-up info\">\n" +
    "        <a href=\"mailto:harley@baffleinc.com\"><i class=\"fa fa-envelope\"></i></a> &bull; \n" +
    "        0422 808 381\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>");
}]);
