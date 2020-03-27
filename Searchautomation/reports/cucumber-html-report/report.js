$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/search.feature");
formatter.feature({
  "line": 2,
  "name": "Loga_search",
  "description": "",
  "id": "loga-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check Login credentials are valid",
  "description": "",
  "id": "loga-search;to-check-login-credentials-are-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open the URL in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click signin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter valid Usernameandpassword",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on signin",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_def.open_the_URL_in_the_browser()"
});
formatter.result({
  "duration": 20638665200,
  "status": "passed"
});
formatter.match({
  "location": "Login_def.click_signin()"
});
formatter.result({
  "duration": 7234081700,
  "status": "passed"
});
formatter.match({
  "location": "Login_def.enter_valid_Usernameandpassword()"
});
formatter.result({
  "duration": 39716862800,
  "status": "passed"
});
formatter.match({
  "location": "Login_def.click_on_Signin()"
});
formatter.result({
  "duration": 5862934100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To check valid Search option",
  "description": "",
  "id": "loga-search;to-check-valid-search-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open the URL in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter the valid value in Search option",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on enter",
  "keyword": "Then "
});
formatter.match({
  "location": "Validsearch_def.open_the_URL_in_browser()"
});
formatter.result({
  "duration": 15433774700,
  "status": "passed"
});
formatter.match({
  "location": "Validsearch_def.enter_the_valid_value_in_Search_option()"
});
formatter.result({
  "duration": 254707400,
  "status": "passed"
});
formatter.match({
  "location": "Validsearch_def.click_on_enter()"
});
formatter.result({
  "duration": 7462272100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To check if searchbox shows related searches",
  "description": "",
  "id": "loga-search;to-check-if-searchbox-shows-related-searches",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Open the website url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Enter the partial value in search option",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Suggestions are displayed under search tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Relatedsearch_def.open_the_website_url_in_browser()"
});
formatter.result({
  "duration": 18424494300,
  "status": "passed"
});
formatter.match({
  "location": "Relatedsearch_def.enter_the_partial_value_in_search_option()"
});
formatter.result({
  "duration": 286987300,
  "status": "passed"
});
formatter.match({
  "location": "Relatedsearch_def.suggestions_are_displayed_under_search_tab()"
});
formatter.result({
  "duration": 9107466200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To check if items can be searched by size,color,compositions and style",
  "description": "",
  "id": "loga-search;to-check-if-items-can-be-searched-by-size,color,compositions-and-style",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TC_04"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the site url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user search the product by size,color",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user search the product by compositions,style",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "products are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Searchbyfeatures_def.open_the_site_url_in_browser()"
});
formatter.result({
  "duration": 13621293800,
  "status": "passed"
});
formatter.match({
  "location": "Searchbyfeatures_def.the_user_search_the_product_by_size_color()"
});
formatter.result({
  "duration": 2969400900,
  "status": "passed"
});
formatter.match({
  "location": "Searchbyfeatures_def.the_user_search_the_product_by_compositions_style()"
});
formatter.result({
  "duration": 297782700,
  "status": "passed"
});
formatter.match({
  "location": "Searchbyfeatures_def.products_are_displayed()"
});
formatter.result({
  "duration": 4686444200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To check if website displays more info when more option is clicked",
  "description": "",
  "id": "loga-search;to-check-if-website-displays-more-info-when-more-option-is-clicked",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Open the web url in the  browser",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "the user clicks the more button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the website navigates to the next page and displays the additional information",
  "keyword": "Then "
});
formatter.match({
  "location": "Moreinfo_def.open_the_web_url_in_the_browser()"
});
formatter.result({
  "duration": 16913011600,
  "status": "passed"
});
formatter.match({
  "location": "Moreinfo_def.the_user_clicks_the_more_button()"
});
formatter.result({
  "duration": 1497432200,
  "status": "passed"
});
formatter.match({
  "location": "Moreinfo_def.the_website_navigates_to_the_next_page_and_displays_the_additional_information()"
});
formatter.result({
  "duration": 6914563900,
  "status": "passed"
});
});