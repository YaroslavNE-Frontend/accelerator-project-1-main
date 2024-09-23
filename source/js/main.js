// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';

// const { getAttribute } = require('video.js/dist/types/utils/dom');


import Plyr from 'plyr';
import { compile } from 'sass';
// import "plyr/dist/plyr.css"
const i18n = {
  restart: 'Повтор',
  rewind: 'Назад на {seektime} сек',
  play: 'Воспроизвести',
  pause: 'Пауза',
  fastForward: 'Вперёд на {seektime} сек',
  seek: 'Seek',
  seekLabel: '{currentTime} of {duration}',
  played: 'Played',
  buffered: 'Бюферизация',
  currentTime: 'Текущее время',
  duration: 'Продолжительность',
  volume: 'Volume',
  mute: 'Без звука',
  unmute: 'Включить звук',
  enableCaptions: 'Включить субтитры',
  disableCaptions: 'Выключить субтитры',
  download: 'Скачать',
  enterFullscreen: 'Во весь экран',
  exitFullscreen: 'Выход из полноэкранного режима',
  frameTitle: 'Player for {title}',
  captions: 'Субтитры',
  settings: 'Опции',
  pip: 'Мини-проигрыватель',
  menuBack: 'Go back to previous menu',
  speed: 'Скорость',
  normal: 'Нормальная',
  quality: 'Качество',
  loop: 'Loop',
  start: 'Start',
  end: 'End',
  all: 'All',
  reset: 'Сброс',
  disabled: 'Откоючено',
  enabled: 'Включено',
  advertisement: 'Реклама',
  qualityBadge: {
    2160: '4K',
    1440: 'HD',
    1080: 'HD',
    720: 'HD',
    576: 'SD',
    480: 'SD',
  },
};

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


const controls = [
      'play-large', // The large play button in the center
      'restart', // Restart playback
      'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      'fast-forward', // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      'captions', // Toggle captions
      'settings', // Settings menu
      'pip', // Picture-in-picture (currently Safari only)
      'airplay', // Airplay (currently Safari only)
      'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen', // Toggle fullscreen
    ];

window.plyr = new Plyr('#player', {
  controls,
  autoplay: true,
  loop: { active: true },
  invertTime: false,
  volume: 0,
  muted: true
})



// const video = document.getElementById('player');
// // video.addEventListener('timeupdate', (e) => console.log('time updated!'));
// video.addEventListener('enterfullscreen', (e) => {
//   let PressedAttr = document.querySelector('.plyr__volume');
//   PressedAttr.classList.add('none');
//   console.log(plyr.fullscreen.enter().value)
// });

