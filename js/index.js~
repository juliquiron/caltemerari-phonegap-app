/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
				// Get time to contextualize content
				var timestamp = window.localStorage.getItem("last_run");
				var now_timestamp = new Date().getTime();
				window.localStorage.setItem("last_run", '' + now_timestamp);
				if (timestamp == null) { timestamp = new Date(now_timestamp - 60*24*60*60*1000).getTime(); }
				var last_run = new Date(parseInt(timestamp));

				// remote content
				var base_url = 'http://caltemerari.cat/';
				var url_noticies = base_url + 'noticies.rss';
				var url_activitats = base_url + 'agenda.rss';
				var url_inscripcions = base_url + 'inscripcions.rss';
				var home_static_pages = {
					'sincrocoop': ['SincroCoop', 'img/soci.jpg', base_url + 'app/node/7.json'],
					'lacassola': ['La Cassola', 'img/soci.jpg', base_url + 'app/node/10.json'],
					'lateulada': ['La Teulada', 'img/soci.jpg', base_url + 'app/node/11.json'],
					'elcarro': ['El Carro', 'img/soci.jpg', base_url + 'app/node/9.json'],
					'lataverna': ['La Taverna', 'img/restaurant.jpg', base_url + 'app/node/8.json'],
					'lespai': ["L'espai", 'img/soci.jpg', base_url + 'app/node/3.json'],
					'participar': ['Com participar', 'img/soci.jpg', base_url + 'app/node/4.json']
				};
					
				// Get and display news
				$.get(url_noticies, function (data) {
					var new_elements_count = 0;
					$(data).find('item').each(function () {
						var pubDate = $(this).find("pubDate").text();
						var item_date = new Date(pubDate);
						if (item_date < last_run) {return false;}
						new_elements_count++;
						var item_date_text = item_date.getDate() + '/' + (item_date.getMonth() + 1) + '/' + item_date.getFullYear();
						$('#news_list_wrapper').append('<li><a data-inline="true" href="#news_'+new_elements_count+'"><h3>' +  $(this).find('title').text() + '</h3><p>' + item_date_text + '</p></a></li>');
						var new_page = '';
						new_page += '<div data-role="page" id="news_'+new_elements_count+'">';
						new_page += '<div data-role="header" data-add-back-btn="true" data-back-btn-text="&nbsp;"><h1>';
						new_page += $(this).find('title').text() + '</h1></div>';
						new_page += '<div data-role="main" class="ui-content">' + $(this).find('description').text() + '</div></div>';
						$('body').append(new_page);
						$('#news_list_count').text(new_elements_count);
					});
					if (new_elements_count == 0) {
						$('#news_list').remove();
					} else {
						var last_date_text = last_run.getDate() + '/' + (last_run.getMonth() + 1 )+ '/' + last_run.getFullYear();
						$('#news_list_wrapper li[data-role=list-divider]').text('notícies des del ' + last_date_text);
						// Rebuild theme for dinamically appended HTML
						$('#news_list_wrapper').listview('refresh');
					}
				});

				// Get and display activitats
				$.get(url_activitats, function (data) {
					var some_content = true;
					var new_page = '';
					new_page += '<div data-role="page" id="activitats">';
					new_page += '<div data-role="header" data-add-back-btn="true" data-back-btn-text="&nbsp;"><h1 style="white-space: normal;">Pròximes Activitats</h1></div>';
					new_page += '<div data-role="main" class="ui-content">';
					$(data).find('item').each(function () {
						new_page += '<div data-iconpos="right" data-role="collapsible"><h4 style="white-space: normal !important;">' + $(this).find('title').text() + '</h4>';
						new_page += '<ul data-role="listview" data-inset="false">';
						new_page += '<li>' + $(this).find('pubDate').text() + '</li>';
						new_page += '<li>' + $(this).find('description').text() + '</li>';
						new_page += '<li><a href="'+ $(this).find('link').text() +'"><small>Més informació al web</small></a></li>';
						new_page += '</ul></div>';
						//if(some_content == false) { some_content = true; }
					});
					new_page += '</div>';
					if(some_content == true) {
						$('<div class="ui-block-a"><a data_role="button" data-inline="true" href="#activitats"><p><img src="img/activitats.jpg" /><br />Activitats</p></a></div>').appendTo('#main_grid_buttons').enhanceWithin();
						$(new_page).appendTo('body').enhanceWithin();
					}
					// botton to acces fer-se soci form
					$('<div class="ui-block-b"><a data_role="button" data-inline="true" href="#soci-form"><p><img src="img/soci.jpg" /><br />Fer-me sòci/a</p></a></div>').appendTo('#main_grid_buttons').enhanceWithin();
					$.get(url_inscripcions, function (data) {
						var some_content = true;
						var new_page = '';
						new_page += '<div data-role="page" id="inscripcions">';
						new_page += '<div data-role="header" data-add-back-btn="true" data-back-btn-text="&nbsp;"><h1 style="white-space: normal;">Cursos i tallers</h1></div>';
						new_page += '<div data-role="main" class="ui-content">';
						$(data).find('item').each(function () {
							new_page += '<div data-iconpos="right" data-role="collapsible"><h4 style="white-space: normal !important;">' + $(this).find('title').text() + '</h4>';
							new_page += '<ul data-role="listview" data-inset="false">';
							new_page += '<li>' + $(this).find('pubDate').text() + '</li>';
							new_page += '<li>' + $(this).find('description').text() + '</li>';
							new_page += '<li><a href="'+ $(this).find('link').text() +'"><small>Més informació al web</small></a></li>';
							new_page += '</ul></div>';
							//if(some_content == false) { some_content = true; }
						});
						new_page += '</div>';
						if(some_content == true) {
							$('<div class="ui-block-b"><a data_role="button" data-inline="true" href="#inscripcions"><p><img src="img/cursos.jpg" /><br />Cursos i tallers</p></a></div>').appendTo('#main_grid_buttons').enhanceWithin();
							$(new_page).appendTo('body').enhanceWithin();
						}
					});
				});



				// Rebuilt theme styles
				$('body').tigger('create');
				
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
