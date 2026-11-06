// Preencha somente com o número oficial confirmado, no formato 55 + DDD + número.
const whatsappNumber = '';
const whatsappMessage = 'Olá! Gostaria de agendar uma consulta médica domiciliar de R$ 750 com o Dr. Matheus. Meu familiar recebeu alta hospitalar e gostaria de verificar a disponibilidade para atendimento.';
const booking = document.querySelector('#booking');
let bookingTrigger;
document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    if (/^55\d{10,11}$/.test(whatsappNumber)) {
      window.location.assign('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(whatsappMessage));
      return;
    }
    bookingTrigger = button;
    booking.showModal();
  });
});
booking.addEventListener('close', () => bookingTrigger?.focus());
booking.addEventListener('click', event => {
  if (event.target === booking) {
    const rect = booking.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) booking.close();
  }
});
