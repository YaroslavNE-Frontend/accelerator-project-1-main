// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';

// const { getAttribute } = require('video.js/dist/types/utils/dom');

// import Plyr from 'plyr';
// import { compile } from 'sass';
// import 'plyr/dist/plyr.css'
// const i18n = {
//   restart: 'Повтор',
//   rewind: 'Назад на {seektime} сек',
//   play: 'Воспроизвести',
//   pause: 'Пауза',
//   fastForward: 'Вперёд на {seektime} сек',
//   seek: 'Seek',
//   seekLabel: '{currentTime} of {duration}',
//   played: 'Played',
//   buffered: 'Бюферизация',
//   currentTime: 'Текущее время',
//   duration: 'Продолжительность',
//   volume: 'Volume',
//   mute: 'Без звука',
//   unmute: 'Включить звук',
//   enableCaptions: 'Включить субтитры',
//   disableCaptions: 'Выключить субтитры',
//   download: 'Скачать',
//   enterFullscreen: 'Во весь экран',
//   exitFullscreen: 'Выход из полноэкранного режима',
//   frameTitle: 'Player for {title}',
//   captions: 'Субтитры',
//   settings: 'Опции',
//   pip: 'Мини-проигрыватель',
//   menuBack: 'Go back to previous menu',
//   speed: 'Скорость',
//   normal: 'Нормальная',
//   quality: 'Качество',
//   loop: 'Loop',
//   start: 'Start',
//   end: 'End',
//   all: 'All',
//   reset: 'Сброс',
//   disabled: 'Откоючено',
//   enabled: 'Включено',
//   advertisement: 'Реклама',
//   qualityBadge: {
//     2160: '4K',
//     1440: 'HD',
//     1080: 'HD',
//     720: 'HD',
//     576: 'SD',
//     480: 'SD',
//   },
// };

// document.addEventListener('DOMContentLoaded', () => {
//   // Controls (as seen below) works in such a way that as soon as you explicitly define (add) one control
//   // to the settings, ALL default controls are removed and you have to add them back in by defining those below.
//   // For example, let's say you just simply wanted to add 'restart' to the control bar in addition to the default.
//   // Once you specify *just* the 'restart' property below, ALL of the controls (progress bar, play, speed, etc) will be removed,
//   // meaning that you MUST specify 'play', 'progress', 'speed' and the other default controls to see them again.
//   const controls = [
//     'play-large', // The large play button in the center
//     'restart', // Restart playback
//     'rewind', // Rewind by the seek time (default 10 seconds)
//     'play', // Play/pause playback
//     'fast-forward', // Fast forward by the seek time (default 10 seconds)
//     'progress', // The progress bar and scrubber for playback and buffering
//     'current-time', // The current time of playback
//     'duration', // The full duration of the media
//     'mute', // Toggle mute
//     'volume', // Volume control
//     'captions', // Toggle captions
//     'settings', // Settings menu
//     'pip', // Picture-in-picture (currently Safari only)
//     'airplay', // Airplay (currently Safari only)
//     'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
//     'fullscreen', // Toggle fullscreen
//   ];
//   const Player = new Plyr('#player', {
//     controls,
//     i18n,
//     iconPrefix: 'player',
//     autoplay: true,
//     loop: { active: true },
//     invertTime: false,
//     volume: 0,
//     muted: true
//   });
// });

// const PressedAttr = document.querySelector('plyr__volume');

// if (PressedAttr.hasAttribute('aria-pressed', 'false')) {
//   PressedAttr.classList.add('none')
// } else {
//   PressedAttr.classList.remove('none')
// }

// const controls = [
//       'play-large', // The large play button in the center
//       'restart', // Restart playback
//       'rewind', // Rewind by the seek time (default 10 seconds)
//       'play', // Play/pause playback
//       'fast-forward', // Fast forward by the seek time (default 10 seconds)
//       'progress', // The progress bar and scrubber for playback and buffering
//       'current-time', // The current time of playback
//       'duration', // The full duration of the media
//       'mute', // Toggle mute
//       'volume', // Volume control
//       'captions', // Toggle captions
//       'settings', // Settings menu
//       'pip', // Picture-in-picture (currently Safari only)
//       'airplay', // Airplay (currently Safari only)
//       'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
//       'fullscreen', // Toggle fullscreen
//     ];

// window.plyr = new Plyr('#player', {
//   controls,
//   autoplay: true,
//   loop: { active: true },
//   invertTime: false,
//   volume: 0,
//   muted: true
// })

// const video = document.getElementById('player');
// // video.addEventListener('timeupdate', (e) => console.log('time updated!'));
// video.addEventListener('enterfullscreen', (e) => {
//   let PressedAttr = document.querySelector('.plyr__volume');
//   PressedAttr.classList.add('none');
//   console.log(plyr.fullscreen.enter().value)
// });



// Custom video playr

document.addEventListener('DOMContentLoaded', () => {
const PlayPauseBtn = document.querySelector('.play-pause-btn');
const theaterBtn = document.querySelector('.theater-btn');
const fullScreenBtn = document.querySelector('.full-screen-btn');
const miniPlayerBtn = document.querySelector('.mini-player-btn');
const muteBtn = document.querySelector('.mute-btn');
const CaptionsBtn = document.querySelector('.caption-btn');
const currentTimeElem = document.querySelector('.current-time');
const totalTimeElem = document.querySelector('.total-time');
const volumeSlider = document.querySelector('.volume-slider');
const VideoContainer = document.querySelector('.video-container');
const timelineContainer = document.querySelector('.timeline-container');
const video = document.querySelector('video');

document.addEventListener('keydown', (e) => {
  const tagName = document.activeElement.tagName.toLocaleLowerCase();

  if (tagName === 'input') return;

  switch (e.key.toLowerCase()) {
    case ' ':
      if (tagName === 'button') return;

    case 'k':
      TogglePlay();
      break;
    case 'f':
      toggleFullScreenMode();
      break;
    case 't':
      toggleTheaterMode();
      break;
    case 'i':
      toggleMiniPlayerMode();
      break;
    case 'm':
      toggleMute();
      break;
    case 'arrowleft':
    case 'j':
      skip(-5);
      break;
    case 'arrowright':
    case 'l':
      skip(5);
      break;
      case 'c':
        toggleCaptions()
        break
  }
});

// Captions

const caption = video.textTracks[0]
caption.mode = 'hidden'

CaptionsBtn.addEventListener('click', toggleCaptions)

function toggleCaptions() {
  const isHidden = caption.mode === 'hidden'
  caption.mode = isHidden ? 'showing' : 'hidden'
  VideoContainer.classList.toggle('captions', isHidden)
}

// Duration 53-40 https://www.youtube.com/watch?v=ZeNyjnneq_w&t=2088s

// Duration
video.addEventListener('loadeddata', () => {
  totalTimeElem.textContent = formatDuration(video.duration);
});

video.addEventListener('timeupdate', () => {
  currentTimeElem.textContent = formatDuration(video.currentTime);
  const percent = video.currentTime / video.duration;
  timelineContainer.style.setProperty('--progress-position', percent);
});

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});
function formatDuration(time) {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`;
  }
}

function skip(duration) {
  video.currentTime += duration;
}

// Volume

muteBtn.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', (e) => {
  video.volume = e.target.value;
  video.muted = e.target.value === 0;
});

function toggleMute() {
  video.muted = !video.muted;
}

video.addEventListener('volumechange', () => {
  volumeSlider.value = video.volume;
  let volumeLevel;
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0;
    volumeLevel = 'muted';
  } else if (video.volume >= 0.5) {
    volumeLevel = 'hight';
  } else {
    volumeLevel = 'low';
  }
  VideoContainer.dataset.volumeLevel = volumeLevel;
});

// View Modes

theaterBtn.addEventListener('click', toggleTheaterMode);
fullScreenBtn.addEventListener('click', toggleFullScreenMode);
miniPlayerBtn.addEventListener('click', toggleMiniPlayerMode);

function toggleTheaterMode() {
  VideoContainer.classList.toggle('theater');
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    VideoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function toggleMiniPlayerMode() {
  if (VideoContainer.classList.contains('mini-player')) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}

// function get_ya_browser(){
//   var ua = navigator.userAgent;
//   if (ua.search(/YaBrowser/) > 0) return miniPlayerBtn.disabled = true;
//   return 'Noyandex'
// }

// var browser = get_ya_browser();
// alert(browser);

document.addEventListener('fullscreenchange', () => {
  VideoContainer.classList.toggle('full-screen', document.fullscreenElement);
});

video.addEventListener('enterpictureinpicture', () => {
  VideoContainer.classList.add('mini-player');
});

video.addEventListener('leavepictureinpicture', () => {
  VideoContainer.classList.remove('mini-player');
});

// Play/Pause

PlayPauseBtn.addEventListener('click', TogglePlay);
video.addEventListener('click', TogglePlay);

function TogglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener('play', () => {
  VideoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
  VideoContainer.classList.add('paused');
});
  });






