$(document).on('pageinit', function() {
			$('#soci_form').on('submit', function (e) {
				if($(this).attr('data-c-submitted') === 'stop' ) {
					e.preventDefault();
				} else {
					e.preventDefault();
					$(this).attr('data-c-submitted', 'stop');
					$.mobile.loading('show', {
						text: "Estem enviant la informació",
						textVisible: true,
						theme: 'a',
						textonly: false,

					});
				
					var data = new FormData();
					var cid = 1;
					data.append('webform', 'daa2c448-c7d5-43a9-974e-9e615226ec9b');
					$(this).find('input, textarea').each(function (i) {
						if($(this).attr('type') == 'radio' && !$(this).is(':checked')) {
							return; // next loop iteration
						}
						data.append('submission[data]['+cid+'][values][0]', $(this).val());
						cid++;
					});
					data.append('submission[data]['+cid+'][values][0]', 'butlleti');
					$.ajax({
						url: "http://caltemerari.cat/socisapp/submission",
						data: data,
						cache: false,
						mimeType: 'multipart/form-data',
						contentType: false,
						processData: false,
						type: 'POST',
						error: function (xhr, status, error) {
							alert("Sembla que alguna dada no és correcte, revisa els camps i torna a enviar");
						},
						complete: function () {
							$.mobile.loading('hide');
							alert("Informació enviada correctament. Benvingut/da a Cal Temerari!");
							$(this).attr('data-c-submitted', '');
							parent.history.back();
						}
					});
				}

			});

		});
