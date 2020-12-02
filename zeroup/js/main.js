$(() => {
  // Toggles Dark Mode
  $('#darkToggle').on("change", function() {
    $("html").toggleClass('dark')
  })
})


var $autoplay = document.querySelector('#autoplay');
var autoPlay = new Vimeo.Player($autoplay);

function playVideo() {
  $('.play-overlay').removeClass("z-10");
  autoPlay.play();
}

var contents = $('.contents'); // Get header
    contents.fadeOut(0);

var fadeInContents = function(data) { // Fade header in on time
  // console.log(data.seconds)
  if(data.seconds > 1148000) {
    contents.fadeIn(3000);
  }
}
autoPlay.ready().then(function() { // The player is ready to fire function
  autoPlay.on('timeupdate', fadeInContents);
});

const iframe = $('#modal-video');

const overlay = $('.modal-overlay')

overlay.on('click', function(){
  toggleModal()
  const player = new Vimeo.Player(iframe);
  player.pause()
})

var closemodal = $('.modal-close')

for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
  isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
  isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
  toggleModal()
  }
  if(isEscape) {
    const player = new Vimeo.Player(iframe);
    player.pause()
  }
};

const body = $('body')
const modal = $('.modal')

function toggleModal () {
  modal.toggleClass('opacity-0')
  modal.toggleClass('pointer-events-none')
  body.toggleClass('modal-active')
}

const populateModal = (target) => {
  const url = target.find($("iframe")).attr("src")
  console.log(url)
  const name = target.find($(".name")).text()
  const location = target.find($(".location")).text()
  modal.find(".modal-video").attr("src", url)
  modal.find(".modal-name").text(name)
  modal.find(".modal-location").text(location)
  const player = new Vimeo.Player(iframe);
  player.play()
}

const videoCard = ({id, src, name, location}) => `
  <div id="testimonial-${id}" class="w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
    <button class="modal-open block w-full z-10 border rounded-md overflow-hidden shadow-md">
      <div class="aspect-16x9 relative bg-black">
        <iframe class="absolute w-full h-full pointer-events-none" src="${src}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div class="bg-white w-full p-4 text-left">
        <p class="name font-bold text-gray-800">${name}</p>
        <p class="location text-gray-600">${location}</p>
      </div>
    </button>
  </div>
`;

$('.video-listing').html(
  testimonials.map(videoCard).join('')
)

$('.modal-open').on('click', function(event) {
  event.preventDefault()
  toggleModal()
  populateModal($(this))
})

function handleTickInit () {
  var ticker = $('.tick');
  var value = '';
  $.ajax({
  url: 'https://new.zerouplab.com/api/total_sales',
  success: result => {
      value = result.value;
  },
  async: false
  });
  ticker.attr('data-value', value - 7);
  setTimeout(() => {
    ticker.attr('data-value', value);
  }, 500);
}