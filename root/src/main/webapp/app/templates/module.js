                        define(["angular"], function (angular) {                            "use strict";                            var templates = angular.module("aos.templates", []);                            templates.run(function($templateCache) {                              'use strict';

  $templateCache.put('app/partials/category_type_products_tpl.html',
    "<div>\n" +
    "\n" +
    "    <div class=\"cell categoryLeft\">\n" +
    "        <p class=\"filterCount roboto-light\">\n" +
    "            <a class=\"titleItemsCount\">\n" +
    "                {{([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length}} {{ 'ITEMS' | translate }}\n" +
    "            </a>\n" +
    "            <span data-ng-click=\"toggleFilterSlide('mobileSlide')\">\n" +
    "                <img src=\"../../css/images/Filter.png\" alt=\"filter\"/>\n" +
    "                {{ 'Filter' | translate }}\n" +
    "                ({{([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length}})\n" +
    "            </span>\n" +
    "        </p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div id=\"mobileSlide\">\n" +
    "            <label class=\"roboto-regular\">{{ 'FILTER_BY' | translate }}\n" +
    "                <label class=\"roboto-regular clear\" ng-click=\"clearSelection()\" translate=\"Clear\"\n" +
    "                       ng-show=\"showClear\"></label>\n" +
    "            </label>\n" +
    "            <ul>\n" +
    "                <!--- categories filter Section -->\n" +
    "                <li ng-if=\"categoriesFilter != null\">\n" +
    "                    <h4 class=\"accordion roboto-regular arrowDown arrowUp\"\n" +
    "                        id=\"accordionCategories\"\n" +
    "                        ng-click=\"toggleColapse('accordionCategories')\"\n" +
    "                        translate=\"CATEGORIES\">\n" +
    "                    </h4>\n" +
    "                    <div class=\"option\" style=\"display: block\">\n" +
    "                        <div ng-repeat=\"categ in categoriesFilter\">\n" +
    "                            <div class=\"fill\">\n" +
    "                                <input type=\"checkbox\"\n" +
    "                                       ng-model=\"categ.checked\"\n" +
    "                                       ng-click=\"includeProducts(categ.id, 'CATEGORIES')\">\n" +
    "                                <span class=\"roboto-regular\">{{categ.name}}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <!--- END categories filter Section -->\n" +
    "\n" +
    "\n" +
    "                <!--- Price filter Section-->\n" +
    "                <li>\n" +
    "                    <!--data-ng-class=\"{ arrowUp : viewAll }\"-->\n" +
    "                    <h4 class=\"accordion roboto-regular arrowDown\"\n" +
    "                        id=\"accordionPrice\"\n" +
    "                        ng-click=\"toggleColapse('accordionPrice')\"\n" +
    "                        translate=\"PRICE\"></h4>\n" +
    "\n" +
    "                    <!--<div class=\"option\">-->\n" +
    "                    <div class=\"option\" style=\"text-align: center\"\n" +
    "                         data-ng-style=\"viewAll ? {'display': 'block'} : {}\">\n" +
    "                        <div id=\"slider\"></div>\n" +
    "                        <br/>\n" +
    "                        <p class=\"sliderSteps left\">${{ minPriceToFilter | number }}</p>\n" +
    "                        <p class=\"sliderSteps \">${{ maxPriceToFilter | number }}</p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </li>\n" +
    "                <!--- END Price filter Section -->\n" +
    "\n" +
    "\n" +
    "                <!--- attributes filter Section -->\n" +
    "                <li ng-repeat=\"attrib in attributesToShow\">\n" +
    "                    <h4 class=\"accordion roboto-regular arrowDown\" id=\"accordionAttrib{{$index}}\"\n" +
    "                        ng-click=\"toggleColapse('accordionAttrib' + $index)\">\n" +
    "                        {{attrib.name}}\n" +
    "                    </h4>\n" +
    "\n" +
    "                    <div class=\"option\">\n" +
    "                        <div ng-repeat=\"attrVal in attrib.values\">\n" +
    "                            <div class=\"fill iconCss\" >\n" +
    "                                <input type=\"checkbox\" ng-model=\"item.selected\"\n" +
    "                                       ng-click=\"includeProducts(attrVal, attrib.name)\">\n" +
    "                                <span class=\"roboto-regular\" data-ng-click=\"item.selected = !item.selected; includeProducts(attrVal, attrib.name)\">{{::attrVal}}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <!--- END attributes filter Section -->\n" +
    "\n" +
    "\n" +
    "                <!--- color filter Section -->\n" +
    "                <li ng-if=\"productsColors.length > 0\">\n" +
    "                    <h4 class=\"accordion roboto-regular arrowDown\" id=\"accordionColor\"\n" +
    "                        ng-click=\"toggleColapse('accordionColor')\" translate=\"COLOR\"></h4>\n" +
    "\n" +
    "                    <div class=\"option\">\n" +
    "                        <div ng-repeat=\"color in productsColors\" class=\"inline-block\">\n" +
    "                            <a title=\"{{color.name}}\" class=\"productColor \" id=\"productsColors{{color.code}}\"\n" +
    "                               ng-click=\"includeProducts(color, 'COLOR'); toggleColorSelectedClass(color.code)\"\n" +
    "                               ng-style=\" color.code == 'FFFFFF' ?\n" +
    "                              {'backgroundColor': '#' + color.code, 'border': 'solid 1px #9d9d9d' } :\n" +
    "                              {'backgroundColor': '#' + color.code, 'border': 'solid 1px transparent'}\">\n" +
    "                                <!--- <label></label> -->\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </li>\n" +
    "                <!--- END color filter Section -->\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"cell categoryRight\" data-ng-show=\"([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0\">\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"product in [] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude\"\n" +
    "                ng-click=\"$location.path('/product/' + product.productId)\">\n" +
    "                <div class=\"soulOut\" data-ng-show=\"product.productStatus == 'OutOfStock'\">\n" +
    "                    <span class=\"roboto-medium\" translate=\"SOUL_OUT\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"AddToCard\"\n" +
    "                     data-ng-class=\"{ outOfStock : product.productStatus == 'OutOfStock' } \">\n" +
    "                    <label translate=\"SHOP_NOW\"></label>\n" +
    "                    <div icon-cart-svg style=\"width: 18px; height: 18px; \"></div>\n" +
    "                </div>\n" +
    "                <img alt=\"\" class=\"imgProduct\"\n" +
    "                     data-ng-class=\"{ outOfStock : product.productStatus == 'OutOfStock' } \"\n" +
    "                     data-ng-src=\"/catalog/fetchImage?image_id={{product.imageUrl}}\">\n" +
    "                <p><a class=\"productName\">{{product.productName}}</a></p>\n" +
    "                <p><a class=\"productPrice\">{{product.price | currency:\"$\"}} </a></p>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"cell categoryRight textAlignCenter\" data-ng-show=\"([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length == 0\">\n" +
    "        <label class=\"noProducts roboto-bold \">\n" +
    "            <span translate=\"No_results\"></span>\n" +
    "        </label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/e-sec-plus-minus.html',
    "<div class=\"e-sec-plus-minus\">\n" +
    "\n" +
    "    <div class=\"minus\" increment-value-attr=\"-\" ></div>\n" +
    "\n" +
    "    <div>\n" +
    "        <input type=\"text\" ng-model=\"numAttr\" numbers-only />\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"plus\" increment-value-attr=\"+\" ></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/icon-cart-svg.html',
    "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "     width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n" +
    "    <path fill=\"#313131\" d=\"M9,20c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C11,20.9,10.1,20,9,20z M19,20c-1.1,0-2,0.9-2,2\n" +
    "        c0,1.1,0.9,2,2,2s2-0.9,2-2C21,20.9,20.1,20,19,20z M8.3,15h12.5L24,4H5.5L4.8,1H0v2h3.2l4,16H21v-2H8.8L8.3,15z M6,6h15.3l-2,7\n" +
    "        H7.8L6,6z\"/>\n" +
    "</svg>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/icon-home-svg.html',
    "<svg version=\"1.1\"\n" +
    "\t id=\"Layer_1\"\n" +
    "\t xmlns=\"http://www.w3.org/2000/svg\"\n" +
    "\t xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    "\t x=\"0px\"\n" +
    "\t y=\"0px\"\n" +
    "\t width=\"24px\"\n" +
    "\t height=\"24px\"\n" +
    "\t viewBox=\"0 0 24 24\"\n" +
    "\t enable-background=\"new 0 0 24 24\"\n" +
    "\t xml:space=\"preserve\">\n" +
    "\t<path fill=\"#313131\" d=\"M21,24H3V10l-1.7,1.4L0,9.8L12,0l12,9.8l-1.3,1.5L21,10V24z M16,22h3V8.3l-7-5.7L5,8.3V22h3v-8h8V22z M10,22 h4v-6h-4V22z\"/>\n" +
    "</svg>"
  );


  $templateCache.put('app/partials/icon-search-svg.html',
    "\n" +
    "\n" +
    "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n" +
    "<path fill=\"#313131\" d=\"M23.7,22l-6.8-5.6c0,0-0.1,0-0.1-0.1c3.1-3.8,2.9-9.4-0.6-12.9c-1.8-1.8-4.2-2.8-6.7-2.8\n" +
    "\tc-2.5,0-4.9,1-6.7,2.8c-3.7,3.7-3.7,9.8,0,13.6c1.8,1.8,4.2,2.8,6.7,2.8c2.3,0,4.4-0.8,6.1-2.2c0,0,0,0.1,0.1,0.1l6.8,5.6\n" +
    "\tc0.2,0.2,0.4,0.3,0.6,0.3c0.2,0,0.4-0.1,0.6-0.3C24.1,22.9,24.1,22.3,23.7,22z M9.5,17.9c-2.1,0-4-0.8-5.5-2.3c-3-3.1-3-8,0-11.1\n" +
    "\tc1.5-1.5,3.4-2.3,5.5-2.3c2.1,0,4,0.8,5.5,2.3c3,3.1,3,8,0,11.1C13.5,17.1,11.6,17.9,9.5,17.9z\"/>\n" +
    "</svg>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/icon-user-svg.html',
    "<a title=\"{{ 'USER' | translate }}\">\n" +
    "    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "     width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n" +
    "        <path fill=\"#313131\" d=\"M12,13.6c3.3,0,5.9-3.1,5.9-6.8C17.9,3.1,15.3,0,12,0C8.7,0,6.1,3.1,6.1,6.8C6.1,10.6,8.7,13.6,12,13.6z\n" +
    "             M12,2.1c2.1,0,3.8,2.1,3.8,4.7c0,2.6-1.7,4.7-3.8,4.7c-2.1,0-3.8-2.1-3.8-4.7C8.2,4.2,9.9,2.1,12,2.1z M20,14.3\n" +
    "            c-0.4-0.4-1.1-0.3-1.5,0.1c-0.4,0.4-0.3,1.1,0.1,1.5c0.6,0.5,1.1,1.8,1.1,2.4c0,1.4-0.3,2.3-0.8,2.8C18,22,16,22,13.3,21.9\n" +
    "            c-0.9,0-1.8,0-2.7,0C8,22,6,22,5.1,21.1c-0.5-0.5-0.8-1.4-0.8-2.8c0-0.9,0.3-1.7,1-2.5c0.4-0.4,0.3-1.1-0.1-1.4\n" +
    "            C4.7,14,4.1,14,3.7,14.5c-1,1.2-1.5,2.4-1.5,3.8c0,1.9,0.5,3.3,1.4,4.2c1.5,1.5,4,1.5,7.1,1.5c0.9,0,1.8,0,2.7,0\n" +
    "            c0.4,0,0.8,0,1.2,0c2.5,0,4.6-0.2,5.9-1.5c0.9-0.9,1.4-2.3,1.4-4.2C21.8,17.2,21.1,15.3,20,14.3z\"/>\n" +
    "    </svg>\n" +
    "</a>\n"
  );


  $templateCache.put('app/partials/mobileSearch.html',
    "<div id=\"mobileSearch\" data-ng-cloak>\n" +
    "    <input type=\"text\" class=\"roboto-medium\" placeholder=\"{{ 'Search' | translate}}\"\n" +
    "           data-ng-keypress=\"checkEnterKey($event)\"\n" +
    "           data-ng-model=\"autoCompleteValue\"\n" +
    "           data-ng-keyup=\"runAutocomplete()\"\n" +
    "    >\n" +
    "    <div class=\"img\" icon-search-svg data-ng-click=\"goToCategoryPage()\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/popular-Items-tpl.html',
    "\n" +
    "<!-- POPULAR ITEMS -->\n" +
    "<article>\n" +
    "    <h3 class=\"roboto-regular center\" translate=\"POPULAR_ITEMS\">\n" +
    "        <!-- {{'SPACIAL_OFFER' | translate}} -->\n" +
    "    </h3>\n" +
    "    <div class=\"grid-table\">\n" +
    "        <div ng-repeat=\"product in popularProducts\" ng-if=\"popularProducts.length > 0\">\n" +
    "            <figure>\n" +
    "                <img data-ng-src=\"{{product.imageUrl}}\" alt=\"Special-offer\" >\n" +
    "            </figure>\n" +
    "            <label class=\"shop_now center\">{{product.productName}}</label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>\n" +
    "<!-- end POPULAR ITEMS -->\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/scrollToTop.html',
    "<div id=\"scrollToTop\">\n" +
    "    <img src=\"css/images/GoUp.png\" alt=\"GO UP\"/>\n" +
    "\n" +
    "    <p translate=\"GO_UP\"></p>\n" +
    "</div>"
  );


  $templateCache.put('app/partials/secInput.html',
    "<div>\n" +
    "    <a class=\"must\" ng-show=\"warnings.length > 0 && !noRedStar\">*</a>\n" +
    "\n" +
    "    <label class=\"validate-label\"\n" +
    "           ng-class=\"{ validateInvalid : !textToShow.valid}\"\n" +
    "           ng-click=\"validateLabelClicked(id)\">\n" +
    "        {{textToShow.text}}\n" +
    "    </label>\n" +
    "\n" +
    "    <input type=\"{{inputType}}\" name=\"{{id}}\" autocapitalize=\"off\"\n" +
    "           autocomplete=\"off\" autocorrect=\"off\" class=\"inputtext\"\n" +
    "           data-ng-class=\"{ validateInvalid : !textToShow.valid }\"\n" +
    "           data-ng-hide=\"inputType == 'transclude'\"\n" +
    "           data-ng-model=\"modelAttr\"\n" +
    "           data-ng-focus=\"inputFocus(id)\"\n" +
    "           data-ng-blur=\"inputBlur(id)\"\n" +
    "           data-ng-keyup=\"inputKeyup(id)\"\n" +
    "           id=\"secInput_{{id}}\" />\n" +
    "\n" +
    "    <div ng-transclude data-ng-show=\"inputType == 'transclude'\"></div>\n" +
    "\n" +
    "    <div class=\"validate-info\" ng-show=\"warnings.length > 0 && !doNotShowInfo\">\n" +
    "        <ul>\n" +
    "            <li data-ng-repeat=\"info in warnings\" data-ng-show=\"info.info != '' && info.show\" >\n" +
    "                <a>{{ info.info }}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('app/partials/secTextarea.html',
    "<div>\n" +
    "    <a class=\"must\" ng-show=\"warnings.length > 0 && !noRedStar\">*</a>\n" +
    "\n" +
    "    <label class=\"validate-label\"\n" +
    "           ng-class=\"{ validateInvalid : !textToShow.valid}\"\n" +
    "           ng-click=\"validateLabelClicked(id)\">\n" +
    "        {{textToShow.text}}\n" +
    "    </label>\n" +
    "    <textarea name=\"{{id}}\" class=\"inputtext\"\n" +
    "           data-ng-class=\"{ validateInvalid : !textToShow.valid }\"\n" +
    "           data-ng-model=\"modelAttr\"\n" +
    "           data-ng-focus=\"inputFocus(id)\"\n" +
    "           data-ng-blur=\"inputBlur(id)\"\n" +
    "           data-ng-keyup=\"inputKeyup(id)\"\n" +
    "           id=\"secInput_{{id}}\" />\n" +
    "\n" +
    "    <div class=\"validate-info\" ng-show=\"warnings.length > 0\">\n" +
    "        <ul>\n" +
    "            <li data-ng-repeat=\"info in warnings\" data-ng-show=\"info.info != '' && info.show\" >\n" +
    "                <a>{{ info.info }}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/social-media-tpl.html',
    "\n" +
    "<footer>\n" +
    "    <div>\n" +
    "        <!-- FOLLOW US -->\n" +
    "        <h3 class=\"roboto-regular center\">\n" +
    "            FOLLOW US <!-- {{'FOLLOW_US' | translate}} -->\n" +
    "        </h3>\n" +
    "        <div id=\"follow\" class=\"center\">\n" +
    "            <a target=\"_blank\" href=\"https://www.facebook.com/pages/HP-Application-Lifecycle-Management/142893435778219?fref=ts\">\n" +
    "                <img src=\"css/images/facebook.png\" alt=\"icon\" data-ng-click=\"linkTo('')\" />\n" +
    "            </a>\n" +
    "            <a target=\"_blank\" href=\"https://twitter.com/HPE_ALM\">\n" +
    "                <img src=\"css/images/twitter.png\" alt=\"icon\" />\n" +
    "            </a>\n" +
    "            <a target=\"_blank\" href=\"https://www.linkedin.com/company/1024?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A1024%2Cidx%3A2-1-2%2CtarId%3A1454314829327%2Ctas%3Ahewlett%20packard%20enterprise%20software\">\n" +
    "                <img src=\"css/images/linkedin.png\" alt=\"icon\" />\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <label> © Advantage Inc, 2016. Release 1.0.5 </label>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/toolTipCart.html',
    "<div>\n" +
    "    <div ng-hide=\"cart.productsInCart.length > 0\" class=\"emptyCart\" data-ng-click=\"redirect('/shoppingCart')\">\n" +
    "        <label class=\"center items roboto-bold\"> {{ 'ITEMS' | translate}}\n" +
    "            <span class=\"roboto-regular\">(0)</span>\n" +
    "        </label>\n" +
    "        <label class=\"center roboto-medium\" translate=\"Your_shopping_cart_is_empty\"></label>\n" +
    "    </div>\n" +
    "    <table ng-show=\"cart.productsInCart.length > 0\"  >\n" +
    "        <tbody >\n" +
    "            <tr ng-repeat=\"product in cart.productsInCart track by $index\" id=\"product{{product.id}}\"\n" +
    "                data-ng-class=\"{ lastProduct : $last }\" >\n" +
    "                <td>\n" +
    "                    <a href=\"#/product/{{product.productId}}?color={{product.color.code}}&quantity={{product.quantity}}&pageState=edit\">\n" +
    "                        <img class=\"imageUrl\" ng-src=\"/catalog/fetchImage?image_id={{product.imageUrl}}\" alt=\"imgProduct\" />\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <a href=\"#/product/{{product.productId}}?color={{product.color.code}}&quantity={{product.quantity}}&pageState=edit\">\n" +
    "                        <h3>{{ product.productName  | uppercase | secCatWord:30 }}</h3>\n" +
    "                        <label>{{'QTY' | translate}} {{product.quantity}}</label>\n" +
    "                        <label>{{'Color' | translate }}\n" +
    "                            <span>{{product.color.name}}</span>\n" +
    "                        </label>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <p class=\"price roboto-regular\">{{ product.price * product.quantity | currency:'$' }}</p>\n" +
    "                    <div class=\"closeDiv\" ng-click=\"removeProduct($index, $event)\">\n" +
    "                        <div icon-x class=\"removeProduct\"></div>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "        <tfoot  data-ng-click=\"redirect('/shoppingCart')\">\n" +
    "            <tr>\n" +
    "                <td colspan=\"2\">\n" +
    "                    <span class=\"roboto-medium\">{{'TOTAL' | translate}}\n" +
    "                        <label class=\"roboto-regular\">({{cart | productsCartCount}} {{ (cart | productsCartCount) > 1 ? 'Items' : 'Item' | translate}})</label>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <span class=\"roboto-medium cart-total\" >{{cart | productsCartSum | currency:'$'}}</span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td colspan=\"3\">\n" +
    "                    <button class=\"roboto-medium\" data-ng-click=\"checkout($event)\">{{'CHECK_OUT' | translate}}  ({{ cart | productsCartSum:shippingCost | currency:'$' }})</button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tfoot>\n" +
    "\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/partials/toolTipSearch.html',
    "\n" +
    "<div id=\"searchSection\"\n" +
    "     data-ng-mouseenter=\"allowClosing = false\"\n" +
    "     data-ng-mouseleave=\"allowClosingLeave()\"\n" +
    "     data-ng-click=\"closeSearchSection()\">\n" +
    "\n" +
    "    <div id=\"input\" data-ng-click=\"$event.stopPropagation()\">\n" +
    "        <div id=\"search\">\n" +
    "            <a title=\"{{ 'SEARCH' | translate }}\">\n" +
    "                <div icon-search-svg data-ng-click=\"openSearchProducts()\" ></div>\n" +
    "            </a>\n" +
    "            <div class=\"autoCompleteCover\">\n" +
    "                <input id=\"autoComplete\" type=\"text\" class=\"roboto-regular\"\n" +
    "                       placeholder=\"{{'Search' | translate }} AdvantageOnlineShopping.com\"\n" +
    "                       data-ng-keypress=\"checkEnterKey($event)\"\n" +
    "                       data-ng-model=\"autoCompleteValue\"\n" +
    "                       data-ng-keyup=\"runAutocomplete()\"\n" +
    "                       data-ng-blur=\"closeSearchSection()\">\n" +
    "\n" +
    "                <div data-ng-click=\"closeSearchForce()\"  style=\"position: absolute; right: 0; top:0\" >\n" +
    "                    <img src=\"../../css/images/closeDark.png\" style=\"width:20px; height:20px; padding: 12px 0\" >\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div id=\"output\" data-ng-show=\"autoCompleteResult.length > 0\" >\n" +
    "        <div class=\"searchPopUp\" data-ng-click=\"$event.stopPropagation()\" >\n" +
    "            <div class=\"categories\">\n" +
    "                <h3 class=\"roboto-medium\" translate=\"CATEGORIES\"\n" +
    "                    data-ng-mouseenter=\"searchByCategoryId(null, '')\">\n" +
    "                </h3>\n" +
    "                <a href=\"#/search/{{categoryFilter}}?viewAll={{autoCompleteValue}}\">\n" +
    "                    <label class=\"roboto-light\"\n" +
    "                           data-ng-repeat=\"result in autoCompleteResult\"\n" +
    "                           data-ng-mouseenter=\"searchByCategoryId(result.categoryId, result.categoryName)\">\n" +
    "                        {{result.categoryName | lowercase}}\n" +
    "                    </label>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"top6Products\">\n" +
    "                <h3 class=\"roboto-medium\" >{{ 'TOP' | translate }} {{ 'RESULTS_FOR' | translate }}: \"{{autoCompleteValue}}\"\n" +
    "                    <p style=\"font-size: 11px !important; font-weight: 300 !important;\" > {{ categoryName }} </p>\n" +
    "                </h3>\n" +
    "                <a href=\"#/search/{{categoryFilter}}?viewAll={{autoCompleteValue}}\" translate=\"View_All\"\n" +
    "                   class=\"roboto-medium viewAll\"></a>\n" +
    "                <a class=\"product\" href=\"#/product/{{product.productId}}\"\n" +
    "                   data-ng-click=\"closeSearchSection()\"\n" +
    "                   data-ng-repeat=\"product in [] | filterFullArrayforAutoComplate:autoCompleteResult:categoryFilter\">\n" +
    "                    <img data-ng-src=\"/catalog/fetchImage?image_id={{product.imageUrl}}\" />\n" +
    "                    <p class=\"roboto-regular\">{{product.productName | uppercase}}</p>\n" +
    "                    <span>{{product.price | currency:'$'}}</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/user/partials/login.html',
    "<div class=\"PopUp\">\n" +
    "    <div>\n" +
    "\n" +
    "        <div class=\"loader\">\n" +
    "            <div>\n" +
    "                <svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <defs>\n" +
    "                        <linearGradient x1=\"8.042%\" y1=\"0%\" x2=\"65.682%\" y2=\"23.865%\" id=\"a\">\n" +
    "                            <stop stop-color=\"#54B3AD\" stop-opacity=\"0\" offset=\"0%\"/>\n" +
    "                            <stop stop-color=\"#54B3AD\" stop-opacity=\".631\" offset=\"63.146%\"/>\n" +
    "                            <stop stop-color=\"#54B3AD\" offset=\"100%\"/>\n" +
    "                        </linearGradient>\n" +
    "                    </defs>\n" +
    "                    <g fill=\"none\" fill-rule=\"evenodd\">\n" +
    "                        <g transform=\"translate(1 1)\">\n" +
    "                            <path d=\"M36 18c0-9.94-8.06-18-18-18\" id=\"Oval-2\" stroke=\"url(#a)\" stroke-width=\"2\">\n" +
    "                                <animateTransform\n" +
    "                                        attributeName=\"transform\"\n" +
    "                                        type=\"rotate\"\n" +
    "                                        from=\"0 18 18\"\n" +
    "                                        to=\"360 18 18\"\n" +
    "                                        dur=\"0.9s\"\n" +
    "                                        repeatCount=\"indefinite\"/>\n" +
    "                            </path>\n" +
    "                            <circle fill=\"#54B3AD\" cx=\"36\" cy=\"18\" r=\"1\">\n" +
    "                                <animateTransform\n" +
    "                                        attributeName=\"transform\"\n" +
    "                                        type=\"rotate\"\n" +
    "                                        from=\"0 18 18\"\n" +
    "                                        to=\"360 18 18\"\n" +
    "                                        dur=\"0.9s\"\n" +
    "                                        repeatCount=\"indefinite\"/>\n" +
    "                            </circle>\n" +
    "                        </g>\n" +
    "                    </g>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"closePopUpBtn\"></div>\n" +
    "\n" +
    "        <div class=\"login\" ng-controller=\"userController\">\n" +
    "\n" +
    "            <img src=\"../../css/images/logo.png\">\n" +
    "\n" +
    "            <span class=\"facebook\" translate=\"FACEBOOK_SIGN_IN\" data-ng-click=\"singWithFacebook()\"></span>\n" +
    "            <label class=\"or {{ message._class }} center\">\n" +
    "                {{message.text}}\n" +
    "            </label>\n" +
    "\n" +
    "            <sec-form>\n" +
    "\n" +
    "                <sec-view a-hint=\"{{'User_name' | translate}}\"\n" +
    "                          a-do-not-show-info=\"true\"\n" +
    "                          a-star=\"false\"\n" +
    "                          sec-model=\"loginUser.loginUser\"\n" +
    "                          sec-require=\"mainCtrl.getRequire('User_name')\">\n" +
    "                </sec-view>\n" +
    "\n" +
    "                <sec-view a-hint=\"{{'Password' | translate}}\"\n" +
    "                          a-do-not-show-info=\"true\"\n" +
    "                          a-star=\"false\"\n" +
    "                          a-type=\"password\"\n" +
    "                          sec-model=\"loginUser.loginPassword\"\n" +
    "                          sec-require=\"mainCtrl.getRequire('Password')\">\n" +
    "                </sec-view>\n" +
    "\n" +
    "                <sec-view a-hint=\"{{'Email' | translate}}\"\n" +
    "                          a-do-not-show-info=\"true\"\n" +
    "                          a-star=\"false\"\n" +
    "                          ng-show=\"mainCtrl.config.emailAddressInLogin\"\n" +
    "                          sec-disable-validation=\"!mainCtrl.config.emailAddressInLogin\"\n" +
    "                          sec-model=\"loginUser.email\">\n" +
    "                </sec-view>\n" +
    "\n" +
    "\n" +
    "                <div class=\"left option \" style=\"top: 20px\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"mainCtrl.rememberMe\">\n" +
    "                    <span translate=\"REMEMBER_ME\"></span>\n" +
    "                </div>\n" +
    "\n" +
    "                <sec-sender class=\"roboto-medium\" a-value=\"{{'SIGN_IN' | translate}}\"\n" +
    "                            sec-send=\"signIn(loginUser, mainCtrl.rememberMe)\"></sec-sender>\n" +
    "\n" +
    "\n" +
    "            </sec-form>\n" +
    "\n" +
    "            <label class=\"forgot-Passwowd\" translate=\"FORGOT_PASSWORD\"\n" +
    "                   data-ng-click=\"forgotPassword()\"></label>\n" +
    "            <label class=\"create-new-account\" translate=\"CREATE_NEW_ACCOUNT\"\n" +
    "                   data-ng-click=\"createNewAccount()\"></label>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/order/partials/order-payment-success.html',
    "<div>\n" +
    "\n" +
    "    <h2> <span class=\"roboto-regular\" translate=\"Thank_you_for_buying_with_Advantage\"> </span> </h2>\n" +
    "\n" +
    "    <p class=\"roboto-regular\"> {{ 'Yor_tracking_number_is' | translate }} {{ trackingNumber }}\n" +
    "        <span class=\"separator\">|</span>\n" +
    "        {{ 'Your_order_number_is' | translate }} {{orderNumber}}\n" +
    "    </p>\n" +
    "\n" +
    "    <div>\n" +
    "        <div class=\"seccion\">\n" +
    "            <span translate=\"Shipping_to\"> </span>\n" +
    "            <div>\n" +
    "                <div class=\"innerSeccion\">\n" +
    "                    <div icon-user ></div>\n" +
    "                    <label>{{user.firstName}} {{user.lastName}}</label>\n" +
    "                </div>\n" +
    "                <div class=\"innerSeccion\">\n" +
    "                    <div icon-home ></div>\n" +
    "                    <label>{{ user.address }}</label>\n" +
    "                    <label>{{ user.cityName }}</label>\n" +
    "                    <label>{{ user.stateProvince }}</label>\n" +
    "                </div>\n" +
    "                <div class=\"innerSeccion\">\n" +
    "                    <div icon-phone ></div>\n" +
    "                    <label>{{ user.phoneNumber }}</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"seccion\">\n" +
    "            <span translate=\"Payment_Method\"></span>\n" +
    "            <div class=\"innerSeccion\">\n" +
    "                <label>\n" +
    "                    {{TransPaymentMethod}}\n" +
    "                    <a class=\"floater\" data-ng-show=\"TransPaymentMethod == 'MasterCredit'\">\n" +
    "                        <span data-ng-repeat=\"_4numbers in cardNumber track by $index\" >\n" +
    "                            {{ _4numbers | showLast4DigitsCard:$last:$index }}\n" +
    "                        </span>\n" +
    "                    </a>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div class=\"innerSeccion\">\n" +
    "                <label>\n" +
    "                    {{ 'Date_Ordered' | translate}}\n" +
    "                    <a class=\"floater\">{{Date_Ordered}}</a>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"seccion\">\n" +
    "            <span translate=\"Order_Summary\"></span>\n" +
    "            <div class=\"innerSeccion\">\n" +
    "                <label>\n" +
    "                    {{ 'Subtotal' | translate}}\n" +
    "                    <a class=\"floater\"> {{ subTotal | currency:$ }} </a>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div class=\"innerSeccion\">\n" +
    "                <label>\n" +
    "                    {{ 'shipping' | translate}}\n" +
    "                    <a class=\"floater\"> {{shippingCost | currency:'$'}}</a>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div class=\"innerSeccion\">\n" +
    "                <label class=\"total\">\n" +
    "                    {{ 'TOTAL' | translate}}\n" +
    "                    <a class=\"floater\">  {{ total | currency:$ }} </a>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/order/partials/user-are-login.html',
    "<div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"detailslink\">\n" +
    "        <label class=\"roboto-regular\" ng-class=\"{ selected : firstTag }\">1. {{ mainCtrl.config.spellingMistakes ? 'SHIPING_DETAILS' : 'SHIPPING_DETAILS' | translate}} </label>\n" +
    "        <label class=\"roboto-regular\" ng-class=\"{ selected : !firstTag }\">2. {{ 'PAYMENT_METHOD' | translate }}</label>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- USER DETAILS SECTION-->\n" +
    "\n" +
    "    <div id=\"userSection\" ng-show=\"firstTag\">\n" +
    "\n" +
    "        <div data-ng-show=\"!userDetailsEditMode\">\n" +
    "            <div id=\"userDetails\">\n" +
    "                <div>\n" +
    "                    <img src=\"css/images/User.jpg\" alt=\"user\">\n" +
    "                    <!--<div icon-user></div>-->\n" +
    "                    <label>{{user.firstName}} {{user.lastName}}</label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <!--<img src=\"css/images/.jpg\" alt=\"user\">-->\n" +
    "                    <div icon-home></div>\n" +
    "                    <label data-ng-show=\"user.address != ''\">{{ user.address }}</label>\n" +
    "                    <label data-ng-show=\"user.cityName != ''\">{{ user.cityName }}</label>\n" +
    "                    <label data-ng-show=\"country.name != ''\">{{ country.name }}</label>\n" +
    "                    <label data-ng-show=\"user.stateProvince != ''\">{{ user.stateProvince }}</label>\n" +
    "                    <label data-ng-show=\"user.zipcode != ''\">{{ user.zipcode }}</label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <div icon-phone></div>\n" +
    "                    <label>{{ user.phoneNumber }}</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"blueLink\">\n" +
    "                <a data-ng-click=\"setUserDetailsEditMode()\"\n" +
    "                   translate=\"Edit_shipping_Details\"></a>\n" +
    "                <label class=\"float-button\">{{ 'SHIPPING_BY' | translate }}:\n" +
    "                    <img src=\"css/images/Shipex.png\" alt=\"ShipEx\"/></label>\n" +
    "            </div>\n" +
    "            <div class=\"mobileBtnHandler\">\n" +
    "                <button data-ng-click=\"shippingDetails_next()\" class=\"a-button nextBtn marginTop75\" translate=\"NEXT\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div data-ng-show=\"userDetailsEditMode\" id=\"userDetailsEditMode\">\n" +
    "\n" +
    "            <!-- EDIT USER DETAILS SECTION-->\n" +
    "\n" +
    "            <sec-form sec-get-form-validation-when-ready=\"validSecValidate(valid)\">\n" +
    "\n" +
    "                <h6 class=\"roboto-bold\"> {{ mainCtrl.config.spellingMistakes ? 'Reciever_Details' : 'Receiver_Details' | translate}} </h6>\n" +
    "\n" +
    "                <div class=\"spliter\">\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'First_Name' | translate}}\"\n" +
    "                              sec-model=\"user.firstName\"\n" +
    "                              sec-min-length=\"mainCtrl.getMin(2)\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(30)\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'Last_Name' | translate}}\"\n" +
    "                              sec-model=\"user.lastName\"\n" +
    "                              sec-min-length=\"mainCtrl.getMin(2)\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(30)\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spliter\">\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'Phone_Number' | translate}}\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(20)\"\n" +
    "                              sec-model=\"user.phoneNumber\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <h6 translate=\"Address\" class=\"roboto-bold\"></h6>\n" +
    "\n" +
    "                <div class=\"spliter\">\n" +
    "                    <sec-view a-hint=\"Country\"\n" +
    "                              sec-require=\"mainCtrl.getRequire('Country')\"\n" +
    "                              a-type=\"select\"\n" +
    "                              a-show=\"name\"\n" +
    "                              sec-model=\"country\"\n" +
    "                              sec-select-options=\"countries\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{ mainCtrl.config.spellingMistakes ? 'Ciity' : 'City' | translate}}\"\n" +
    "                              sec-model=\"user.cityName\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(25)\">\n" +
    "                    </sec-view>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spliter\">\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'Address' | translate}}\"\n" +
    "                              sec-model=\"user.address\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(50)\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'Postal_Code' | translate}}\"\n" +
    "                              sec-model=\"user.zipcode\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(10)\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spliter\">\n" +
    "                    <sec-view a-hint=\"{{'State__Province__Region' | translate}}\"\n" +
    "                              sec-model=\"user.stateProvince\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(10)\">\n" +
    "                    </sec-view>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"option marginTop\">\n" +
    "                    <input ng-model=\"agree_Agreement\" type=\"checkbox\"/>\n" +
    "                    <span class=\"roboto-light\" translate=\"Save_changes_in_profile_for_future_use\"></span>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"blueLink\">\n" +
    "                    <sec-sender class=\"roboto-medium\"\n" +
    "                                a-value=\"{{'NEXT' | translate}}\"\n" +
    "                                sec-send=\"accountUpdate()\">\n" +
    "                    </sec-sender>\n" +
    "                    <a class=\"roboto-medium float-button a-link linkToPress\"\n" +
    "                       data-ng-class=\"{ buttonDisable : invalidUser}\"\n" +
    "                       data-ng-click=\"backToMainShippingDetails()\" translate=\"BACK\">\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "            </sec-form>\n" +
    "\n" +
    "            <!-- END EDIT USER DETAILS SECTION-->\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- END USER DETAILS SECTION-->\n" +
    "\n" +
    "\n" +
    "    <!-- EDIT EDIT PAYMENT SECTION -->\n" +
    "\n" +
    "    <div id=\"paymentMethod\" data-ng-hide=\"firstTag\">\n" +
    "        <div>\n" +
    "            <label class=\"Choose_payment roboto-medium\" translate=\"Choose_payment_method_below\">\n" +
    "            </label>\n" +
    "            <div class=\"paymentMethods\">\n" +
    "                <div class=\"imgRadioButton\" data-ng-click=\"imgRadioButtonClicked(1)\"\n" +
    "                     data-ng-class=\"{ selected : imgRadioButton == 1 }\">\n" +
    "                    <img src=\"css/images/SafePay.png\" alt=\"Safepay\"/>\n" +
    "                </div>\n" +
    "                <div class=\"imgRadioButton\" data-ng-click=\"imgRadioButton = 2\"\n" +
    "                     data-ng-class=\"{ selected : imgRadioButton == 2 }\">\n" +
    "                    <img src=\"css/images/Master_credit.png\" alt=\"Master credit\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!---------------------------- SAFEPAY SECCION ---------------------------->\n" +
    "\n" +
    "            <div ng-show=\"imgRadioButton == 1\">\n" +
    "\n" +
    "                <div class=\"notice\">\n" +
    "                    <h4 translate=\"Notice\"></h4>\n" +
    "\n" +
    "                    <p class=\"roboto-light\">{{ 'This_is_a_demo' | translate }} {{ 'Please_enter_a_fake_data' |\n" +
    "                        translate }}</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <sec-form >\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'SafePay_User_name' | translate}}\"\n" +
    "                              sec-model=\"savePay.username\"\n" +
    "                              sec-require=\"mainCtrl.getRequire('SafePay_User_name')\"\n" +
    "                              sec-min-length=\"mainCtrl.getMin(5)\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(15)\"\n" +
    "                              sec-pattern=\"mainCtrl.getPattern('Username')\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                    <sec-view a-hint=\"{{'SafePay_Password' | translate}}\"\n" +
    "                              a-type=\"password\"\n" +
    "                              sec-model=\"savePay.password\"\n" +
    "                              sec-require=\"mainCtrl.getRequire('SafePay_Password')\"\n" +
    "                              sec-min-length=\"mainCtrl.getMin(4)\"\n" +
    "                              sec-max-length=\"mainCtrl.getMax(12)\"\n" +
    "                              sec-pattern=\"mainCtrl.getPattern('Password')\">\n" +
    "                    </sec-view>\n" +
    "\n" +
    "                    <div class=\"option marginTop\">\n" +
    "                        <input ng-model=\"saveSafePay\" type=\"checkbox\">\n" +
    "                        <span class=\"roboto-light ng-binding\" translate=\"Save_changes_in_profile_for_future_use\"> </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"blueLink margin15px\">\n" +
    "                        <a data-ng-click=\"Back_to_shipping_details()\" translate=\"Back_to_shipping_details\"></a>\n" +
    "                        <!--<a data-ng-click=\"firstTag = true\" translate=\"Back_to_shipping_details\"></a>-->\n" +
    "                        <label class=\"float_right\">\n" +
    "                            <sec-sender class=\"roboto-medium\" a-value=\"{{'PAY_NOW' | translate}}\"\n" +
    "                                        sec-send=\"payNow_SafePay()\"></sec-sender>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "\n" +
    "                </sec-form>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <!-------------------------- END SAFEPAY SECCION -------------------------->\n" +
    "\n" +
    "\n" +
    "            <!-------------------------- MASTERCREDIT SECCION --------------------------->\n" +
    "\n" +
    "            <div ng-show=\"imgRadioButton == 2 && !noCards && !showMasterCart\">\n" +
    "\n" +
    "                <div class=\"masterCreditSeccion\">\n" +
    "                    <div class=\"roboto-regular\">\n" +
    "                        <span class=\"MasterCredit\">MasterCredit</span>\n" +
    "                        <span data-ng-repeat=\"_4numbers in CardNumber track by $index\">\n" +
    "                            {{ _4numbers | showLast4DigitsCard:$last:$index}}\n" +
    "                        </span>\n" +
    "                        <label class=\"edit \" data-ng-click=\"toggleShowMasterCart()\" translate=\"Edit\">\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"blueLink marginBottom\">\n" +
    "                    <a ng-click=\"Back_to_shipping_details()\" translate=\"Back_to_shipping_details\"></a>\n" +
    "                    <label>\n" +
    "                        <button class=\"roboto-medium float-button a-button\" data-ng-click=\"payNow_manual()\">\n" +
    "                            {{'PAY_NOW' | translate}}\n" +
    "                        </button>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <!-------------------------- END MASTERCREDIT SECCION --------------------->\n" +
    "\n" +
    "\n" +
    "            <!---------------------------- MANUAL PAYMENT SECCION ---------------------------->\n" +
    "\n" +
    "            <div ng-show=\"(imgRadioButton == 2) && (noCards || showMasterCart)\">\n" +
    "\n" +
    "                <div class=\"notice\">\n" +
    "                    <h4 translate=\"Notice\"></h4>\n" +
    "                    <p class=\"roboto-light\">{{ 'This_is_a_demo' | translate }} {{ 'Please_enter_a_fake_data' | translate }}</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <sec-form>\n" +
    "\n" +
    "                    <div class=\"spliter\">\n" +
    "\n" +
    "                        <sec-view a-hint=\"{{'Card_number' | translate}}\"\n" +
    "                                  a-secret-field=\"true\"\n" +
    "                                  sec-model=\"card.number\"\n" +
    "                                  sec-require=\"mainCtrl.getRequire('Card_number')\"\n" +
    "                                  sec-card-number=\"mainCtrl.getCardNumber(16)\">\n" +
    "                        </sec-view>\n" +
    "\n" +
    "\n" +
    "                        <sec-view a-hint=\"{{'CCV_Number' | translate}}\" class=\"creditCard\"\n" +
    "                                  a-secret-field=\"true\"\n" +
    "                                  sec-model=\"card.cvv\"\n" +
    "                                  sec-require=\"mainCtrl.getRequire('CCV_Number')\"\n" +
    "                                  sec-pattern=\"mainCtrl.getPattern('CCV_Number')\">\n" +
    "                        </sec-view>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <label class=\"roboto-regular expiration_date_title\" translate=\"Expiration_Date\"></label>\n" +
    "                    <div class=\"spliter\">\n" +
    "\n" +
    "                        <div class=\"payment_date\">\n" +
    "\n" +
    "                            <sec-view a-hint=\"{{ 'MM' | translate }}\"\n" +
    "                                      a-type=\"select\"\n" +
    "                                      a-do-not-show-info=\"true\"\n" +
    "                                      sec-require=\"mainCtrl.getRequire('Month')\"\n" +
    "                                      sec-model=\"card.expirationDate.month\"\n" +
    "                                      sec-select-options=\"month\"\n" +
    "                            >\n" +
    "                            </sec-view>\n" +
    "\n" +
    "                            <sec-view a-hint=\"{{ 'YY' | translate }}\"\n" +
    "                                      a-type=\"select\"\n" +
    "                                      a-do-not-show-info=\"true\"\n" +
    "                                      sec-require=\"mainCtrl.getRequire('Year')\"\n" +
    "                                      sec-model=\"card.expirationDate.year\"\n" +
    "                                      sec-select-change=\"calculateMonths(value)\"\n" +
    "                                      sec-select-options=\"years\">\n" +
    "                            </sec-view>\n" +
    "                            <!--sec-value-change=\"\"-->\n" +
    "\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <sec-view a-hint=\"{{ 'Cartholder_Name' | translate }}\"\n" +
    "                                  sec-require=\"mainCtrl.getRequire('Cartholder_Name')\"\n" +
    "                                  sec-model=\"card.name\">\n" +
    "                        </sec-view>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"option marginTop\">\n" +
    "                        <input ng-model=\"saveMasterCredit\" type=\"checkbox\" class=\"ng-pristine ng-untouched ng-valid\">\n" +
    "                        <span class=\"roboto-light ng-binding\" translate=\"Save_changes_in_profile_for_future_use\"></span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"blueLink\">\n" +
    "                        <a ng-click=\"Back_to_shipping_details()\" translate=\"Back_to_shipping_details\"></a>\n" +
    "                        <label>\n" +
    "                            <sec-sender class=\"roboto-medium\" a-value=\"{{'PAY_NOW' | translate}}\"\n" +
    "                                        sec-send=\"payNow_masterCredit()\"></sec-sender>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "\n" +
    "                </sec-form>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <!---------------------------- END MANUAL PAYMENT SECCION ---------------------------->\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- END EDIT PAYMENT SECTION-->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/order/partials/user-not-login.html',
    "<div>\n" +
    "<!--<h5 class=\"roboto-regular bigPadding\" translate=\"IDENTIFICATION\"></h5>-->\n" +
    "<div class=\"noUserSection\">\n" +
    "    <label class=\"roboto-medium\" translate=\"Already_have_an_account\" ></label>\n" +
    "\n" +
    "    <sec-form>\n" +
    "\n" +
    "\n" +
    "        <sec-view a-hint=\"{{'User_name' | translate}}\"\n" +
    "                  a-star=\"false\"\n" +
    "                  sec-model=\"orderPaymenLogin.loginUser\"\n" +
    "                  sec-require=\"mainCtrl.getRequire('User_name')\"\n" +
    "                  sec-min-length=\"mainCtrl.getMin(5)\"\n" +
    "                  sec-max-length=\"mainCtrl.getMax(15)\"\n" +
    "                  sec-pattern=\"mainCtrl.getPattern('Username')\">\n" +
    "        </sec-view>\n" +
    "\n" +
    "        <!--sec-pattern=\"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{0,12})\" pattern-error-attr=\"Use_up_to_12_characters_Include_at_least_one_letter_and_one_number\"-->\n" +
    "\n" +
    "        <sec-view a-hint=\"{{'Password' | translate}}\"\n" +
    "                  a-star=\"false\"\n" +
    "                  a-type=\"password\"\n" +
    "                  sec-model=\"orderPaymenLogin.loginPassword\"\n" +
    "                  sec-require=\"mainCtrl.getRequire('Password')\"\n" +
    "                  sec-min-length=\"mainCtrl.getMin(4)\"\n" +
    "                  sec-max-length=\"mainCtrl.getMax(12)\"\n" +
    "                  sec-pattern=\"mainCtrl.getPattern('Password')\">\n" +
    "        </sec-view>\n" +
    "\n" +
    "\n" +
    "        <sec-view a-hint=\"{{'Email' | translate}}\"\n" +
    "                  a-star=\"false\"\n" +
    "                  ng-show=\"config.emailAddressInLogin\"\n" +
    "                  sec-model=\"orderPaymenLogin.email\"\n" +
    "                  sec-disable-validation=\"!config.emailAddressInLogin\"\n" +
    "                  sec-require=\"mainCtrl.getRequire('Email')\"\n" +
    "                  sec-pattern=\"mainCtrl.getPattern('Email')\">\n" +
    "        </sec-view>\n" +
    "\n" +
    "        <label translate=\"Forgot_your_password\"\n" +
    "               class=\"roboto-regular\"\n" +
    "               id=\"Forgot_your_password\">\n" +
    "        </label>\n" +
    "\n" +
    "        <br />\n" +
    "\n" +
    "        <sec-sender class=\"roboto-medium\" a-value=\"{{'LOGIN' | translate}}\"\n" +
    "                    sec-send=\"orderPaymenLogin_signIn()\"></sec-sender>\n" +
    "\n" +
    "        <br />\n" +
    "\n" +
    "\n" +
    "        <label ng-class=\"{ invalid : rsMessage._class == 'invalid' }\" > {{ rsMessage.text }}</label>\n" +
    "\n" +
    "    </sec-form>\n" +
    "</div>\n" +
    "<div id=\"newClient\" class=\"noUserSection .noUserLogin\">\n" +
    "    <div class=\"cover\">\n" +
    "        <div data-ng-class=\"{ noEmail : !config.emailAddressInLogin }\">\n" +
    "            <label class=\"roboto-medium\" translate=\"New_client\" ></label>\n" +
    "            <p translate=\"Create_your_account_easily\"></p>\n" +
    "        </div>\n" +
    "        <a href=\"#/register\" class=\"a-button roboto-medium\"\n" +
    "           data-ng-class=\"{ buttonDisable : invalidItems.length > 0 }\" translate=\"REGISTRATION\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/account/partials/a.html',
    "\n" +
    "\n" +
    "<h1></h1>"
  );
                            });                            return templates;                        });