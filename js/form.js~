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

			$('#i_form').on('submit', function (e) {
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
					data.append('webform', '361bc09f-2e1e-4e00-8f71-ea8538ccd793');
					data.append('submission[data][1][values][0]', $(this).find('#nom').val());
					data.append('submission[data][4][values][0]', $(this).find('#email').val());
					data.append('submission[data][5][values][0]', $(this).find('#tel').val());
					data.append('submission[data][2][values][0]', $(this).find('#nif').val());
					data.append('submission[data][3][values][0]', $(this).find('#comentaris').val());
					var valid = '0';
					$(this).find('input[type=checkbox]').each(function() {
						if($(this).is(':checked')) {
							data.append('submission[data][6][values]['+valid+']', $(this).val());
							valid++;
						}
					});
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
							alert("Gràcies per inscriure't, en breu ens posarem amb contacte amb tu!");
							$(this).attr('data-c-submitted', '');
							parent.history.back();
						}
					});
				}

			});

		});
