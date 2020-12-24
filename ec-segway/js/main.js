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

var contents = $(''); // Get header
    contents.fadeOut(0);

var fadeInContents = function(data) { // Fade header in on time
  // console.log(data.seconds)
  if(data.seconds > 331) {
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
  closemodal[i].addEventListener('click', function(){
    toggleModal()
    const player = new Vimeo.Player(iframe);
    player.pause()
  })
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
      <div class="embed-responsive aspect-ratio-16/9 bg-black">
        <iframe class="pointer-events-none embed-responsive-item" src="${src}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div class="bg-white w-full p-4 text-left">
        <p class="name font-bold text-gray-800">${name}</p>
        <p class="location text-gray-600">${location}</p>
      </div>
    </button>
  </div>
`;

const testimonials = [
  {
    name: "Mahidhar Nyayapati",
    location: "India",
    src: "https://player.vimeo.com/video/393508094",
    id: "393508094"
  },
  {
    name: "Lynda Bathory",
    location: "Canada",
    src: "https://player.vimeo.com/video/393507886",
    id: "393507886"
  },
  {
    name: "Watel Guerin",
    location: "United States",
    src: "https://player.vimeo.com/video/393508796",
    id: "393508796"
  },
  {
    name: "Andres Monsalvo",
    location: "Canada",
    src: "https://player.vimeo.com/video/394055553",
    id: "394055553"
  },
  {
    name: "Asif Nazeer",
    location: "Sri Lanka",
    src: "https://player.vimeo.com/video/394059097",
    id: "394059097"
  },
  {
    name: "Amberlyn Murray",
    location: "United States",
    src: "https://player.vimeo.com/video/394059052",
    id: "394059052"
  },
  {
    name: "Kishor Akshinthala",
    location: "United States",
    src: "https://player.vimeo.com/video/394059109",
    id: "394059109"
  },
  {
    name: "Daniel Jimenez Peralta",
    location: "Spain",
    src: "https://player.vimeo.com/video/395031168",
    id: "395031168"
  },
  {
    name: "Freddy Tay",
    location: "Singapore",
    src: "https://player.vimeo.com/video/395341024",
    id: "395341024"
  },
  {
    name: "Yarob Al-Taay",
    location: "Scotland",
    src: "https://player.vimeo.com/video/395337010",
    id: "395337010"
  },
  {
    name: "Melvin Johnson",
    location: "United States",
    src: "https://player.vimeo.com/video/405237340",
    id: "405237340"
  },
  {
    name: "Duke Nguyen",
    location: "Canada",
    src: "https://player.vimeo.com/video/405238972",
    id: "405238972"
  },
  {
    name: "Jocelyn Canaya",
    location: "Canada",
    src: "https://player.vimeo.com/video/405239030",
    id: "405239030"
  },
  {
    name: "Kentia Tucker",
    location: "United States",
    src: "https://player.vimeo.com/video/405239042",
    id: "405239042"
  },
  {
    name: "Vivian Flores",
    location: "United States",
    src: "https://player.vimeo.com/video/405239107",
    id: "405239107"
  },
  {
    name: "Samuel Pierrot",
    location: "United States",
    src: "https://player.vimeo.com/video/405239071",
    id: "405239071"
  },
]

$('.video-listing').html(
  testimonials.map(videoCard).join('')
)

$('.modal-open').on('click', function(event) {
  event.preventDefault()
  toggleModal()
  populateModal($(this))
})