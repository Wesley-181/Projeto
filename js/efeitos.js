/* Como utilizar o JQuery
	
	<script>       
		$(document).ready(function(){
				
		});
	</script>

*/

/* Teste no Logotipo
	<script>
		$(document).ready(function(){

			$("#logotipo").on("mouseover",function(){
				console.log("passou o mouse no logotipo!")
			});

		});
	</script>
*/

/* 1ª forma de alterar CSS no JQuery
	<script>
		$(document).ready(function(){

			$("#logotipo").on("mouseover",function(){
				
				$("#banner h1").css("color","red");

			});

		});
	</script>
*/

/* 2ª forma de alterar CSS no JQuery
	<script>
		$(document).ready(function(){

			$("#logotipo").on("mouseover",function(){
				
				$("#banner h1").css({"color":"red", "font-size":"12em", "transition":"1s"});

			});

		});
	</script>
*/

// Efeito no NOME do CLUBE passando o MOUSE no LOGOTIPO
	$(document).ready(function(){

			$("#logotipo").on("mouseover",function(){
				
				$("#banner h1").addClass("efeito");

			}).on("mouseout", function(){

				$("#banner h1").removeClass("efeito");

			});

			$("#input-search").on("focus", function(){

				$("li.search").addClass("ativo");

			}).on("blur", function(){

				$("li.search").removeClass("ativo");

			});

	});


	$(document).ready(function(){

			$('.owl-carousel').owlCarousel({
			    loop:false,
			    margin:10,
			    nav:false,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:4
			        }
			    }
			})


	});