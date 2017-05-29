$(document).ready( function() {
		$('#CTA1').on('click', onClickCTA1 )
		$('#CTA2').on('click', onClickCTA2 )

		$('#ModalBKG, #CloseModal').on('click', closeModal )

		$('.mailchimpForm').on('submit', onSubmitEmail )
})

function onClickCTA1(){
	ga('send', 'event', 'actions', 'cta1')
	openModal()
}
function onClickCTA2(){
	ga('send', 'event', 'actions', 'cta2')
	openModal()
}

function openModal(){
	$('#Modal').css('visibility', 'visible')
}

function closeModal(){
	$('#Modal').css('visibility', 'hidden')
}

function onSubmitEmail(event){
	var email = $('.userEmail').val()
	ga('send', 'event', 'actions', 'newEmailSubscriber')
}
