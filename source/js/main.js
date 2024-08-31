// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


// let play_pause_btn = document.getElementById("play-pause-btn")
// let container = document.getElementById("container")
// let wrapper = document.querySelector(".wrapper")
// let play__btn = document.querySelector(".play__btn")
// let video = document.getElementById("video")
// let volume_input = document.getElementById("volume-input")
// let volume_mute_btn = document.getElementById("volume-mute-btn")
// let video_ctime = document.getElementById("video-ctime")
// let video_duration = document.getElementById("video-duration")
// let progressbar = document.getElementById("progressbar")
// let progressbar_input = document.getElementById("progressbar-input")
// let playback_options_display_btn = document.getElementById("playback-options-display-btn")
// let playback_options = document.getElementById("playback-options")
// let plackback_option_btns = document.querySelectorAll(".plackback-option-btn");
// let play_in_pip_btn = document.getElementById("play-in-pip-btn")
// let fullscreen_btn = document.getElementById("fullscreen-btn")

// wrapper.addEventListener('click', () => {
// 	play__btn.classList.toggle('play__btn--none')
// 	video.paused ? video.play() : video.pause();
// });

// play_pause_btn.onclick = () => {
// 	play__btn.classList.toggle('play__btn--none')
// 	video.paused ? video.play() : video.pause();
// }

// video.onplay = () => {
// 	play_pause_btn.innerHTML = `<path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>`;
// }

// video.onpause = () => {
// 	play_pause_btn.innerHTML = `<path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>`;
// }

// volume_input.oninput = () => {
// 	video.volume = volume_input.value;
// 	if (volume_input.value == 0) {
// 		volume_mute_btn.innerHTML = `<path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path>`;
// 	} else {
// 		if (!video.muted) {
// 			volume_mute_btn.innerHTML = `<path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff"></path>`;
// 		}
// 	}
// }

// volume_mute_btn.onclick = () => {
// 	if (video.muted) {
// 		video.muted = false;
// 		volume_mute_btn.innerHTML = `<path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff"></path>`;
// 	} else {
// 		video.muted = true;
// 		volume_mute_btn.innerHTML = `<path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path>`;
// 	}
// }

// const formatTime = time => {
// 	let seconds = Math.floor(time % 60),
// 		minutes = Math.floor(time / 60) % 60,
// 		hours = Math.floor(time / 3600);

// 	seconds = seconds < 10 ? `0${seconds}` : seconds;
// 	minutes = minutes < 10 ? `0${minutes}` : minutes;
// 	hours = hours < 10 ? `0${hours}` : hours;

// 	if (hours == 0) {
// 		return `${minutes}:${seconds}`;
// 	}
// 	return `${hours}:${minutes}:${seconds}`;
// }

// video.onloadeddata = () => {
// 	video_duration.innerText = formatTime(video.duration)
// }

// video.ontimeupdate = () => {
// 	video_ctime.innerText = formatTime(video.currentTime)
// 	let progress = (video.currentTime / video.duration) * 100
// 	progressbar_input.value = progress;
// 	progressbar.style.width = `${progress}%`
// }

// progressbar_input.oninput = () => {
// 	let ctime = (progressbar_input.value / 100) * video.duration;
// 	progressbar.style.width = `${progressbar_input.value}%`
// 	video.currentTime = ctime;
// }

// playback_options_display_btn.onclick = () => {
// 	if (playback_options.style.display == "grid") {
// 		playback_options.style.display = "none";
// 	} else {
// 		playback_options.style.display = "grid";
// 	}
// }

// plackback_option_btns.forEach(e => {
// 	e.onclick = () => {
// 		video.playbackRate = e.dataset.speed;
// 		playback_options.style.display = "none";
// 	}
// })

// play_in_pip_btn.onclick = () => {
// 	video.requestPictureInPicture();
// }

// fullscreen_btn.onclick = () => {
// 	if (document.fullscreen) {
// 		document.exitFullscreen()
// 		fullscreen_btn.innerHTML = `
// 			<path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
// 		    <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
// 		    <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
// 		    <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>`
// 	} else {
// 		conntainer.requestFullscreen()
// 		fullscreen_btn.innerHTML = `
// 			<path d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path>
// 		    <path d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"></path>
// 		    <path d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"></path>
// 		    <path d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"></path>`
// 	}
// }

// // Range //

// const rangeInputs = document.querySelectorAll('input[type="range"]')
// let isRTL = document.documentElement.dir === 'rtl'

// function handleInputChange(e) {
// 	let target = e.target
// 	if (e.target.type !== 'range') {
// 		target = document.getElementById('range')
// 	}
// 	const min = target.min
// 	const max = target.max
// 	const val = target.value
// 	let percentage = (val - min) * 100 / (max - min)
// 	if (isRTL) {
// 		percentage = (max - val)
// 	}

// 	target.style.backgroundSize = percentage + '% 100%'
// }

// rangeInputs.forEach(input => {
// 	input.addEventListener('input', handleInputChange)
// })


// // Handle element change, check for dir attribute value change
// function callback(mutationList, observer) {
// 	mutationList.forEach(function (mutation) {
// 		if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
// 			isRTL = mutation.target.dir === 'rtl'
// 		}
// 	})
// }


// import VideoJs from "video.js";

// let player = VideoJs('my-player', {
// 	language: 'ru',
// 	controls: true,
// 	autoplay: false,
// 	preload: 'auto'
// });

import Plyr from 'plyr';
// import "plyr/dist/plyr.css"

let contentController = document.getElementById("#controler");

console.log(contentController);

// var controls = text

// var controls = [

//     ` <div class="plyr__controls"><button class="plyr__controls__item plyr__control" type="button" data-plyr="restart"
//     aria-pressed="false"><svg aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-restart"></use>
//     </svg><span class="plyr__tooltip">Повтор</span></button><button class="plyr__controls__item plyr__control"
//     type="button" data-plyr="rewind" aria-pressed="false"><svg aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-rewind"></use>
//     </svg><span class="plyr__tooltip">Назад на 10 сек</span></button><button
//     class="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-pressed="false"
//     aria-label="Воспроизвести"><svg class="icon--pressed" aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-pause"></use>
//     </svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-play"></use>
//     </svg><span class="label--pressed plyr__tooltip">Пауза</span><span
//       class="label--not-pressed plyr__tooltip">Воспроизвести</span></button><button
//     class="plyr__controls__item plyr__control" type="button" data-plyr="fast-forward" aria-pressed="false"><svg
//       aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-fast-forward"></use>
//     </svg><span class="plyr__tooltip">Вперёд на 10 сек</span></button>
//   <div class="plyr__controls__item plyr__progress__container">
//     <div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0"
//         autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="519.856"
//         aria-valuenow="13.099284" id="plyr-seek-912" aria-valuetext="00:13 of 08:39"
//         style="--value: 2.52%; user-select: none; touch-action: manipulation;"><progress
//         class="plyr__progress__buffer" min="0" max="100" value="16.16062909728848" role="progressbar"
//         aria-hidden="true">% бюферизация</progress><span class="plyr__tooltip">00:00</span></div>
//   </div>
//   <div class="plyr__controls__item plyr__time--current plyr__time" aria-label="Текущее время" role="timer">00:13
//   </div>
//   <div class="plyr__controls__item plyr__time--duration plyr__time" aria-label="Продолжительность" role="timer">
//     08:39</div>
//   <div class="plyr__controls__item plyr__volume"><button type="button" class="plyr__control" data-plyr="mute"
//       aria-pressed="false"><svg class="icon--pressed" aria-hidden="true" focusable="false">
//         <use xlink:href="#plyr-muted"></use>
//       </svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
//         <use xlink:href="#plyr-volume"></use>
//       </svg><span class="label--pressed plyr__tooltip">Включить звук</span><span
//         class="label--not-pressed plyr__tooltip">Без звука</span></button><input data-plyr="volume" type="range"
//       min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0"
//       aria-valuemax="100" aria-valuenow="75" id="plyr-volume-912" aria-valuetext="75.0%"
//       style="--value: 75%; user-select: none; touch-action: manipulation;"></div><button
//     class="plyr__controls__item plyr__control" type="button" data-plyr="captions" aria-pressed="false"><svg
//       class="icon--pressed" aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-captions-on"></use>
//     </svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-captions-off"></use>
//     </svg><span class="label--pressed plyr__tooltip">Выключить субтитры</span><span
//       class="label--not-pressed plyr__tooltip">Включить субтитры</span></button>
//   <div class="plyr__controls__item plyr__menu"><button aria-haspopup="true" aria-controls="plyr-settings-912"
//       aria-expanded="false" type="button" class="plyr__control" data-plyr="settings" aria-pressed="false"><svg
//         aria-hidden="true" focusable="false">
//         <use xlink:href="#plyr-settings"></use>
//       </svg><span class="plyr__tooltip">Опции</span></button>
//     <div class="plyr__menu__container" id="plyr-settings-912">
//       <div>
//         <div id="plyr-settings-912-home">
//           <div role="menu"><button data-plyr="settings" type="button" class="plyr__control plyr__control--forward"
//               role="menuitem" aria-haspopup="true"><span>Язык<span
//                   class="plyr__menu__value">Откоючено</span></span></button><button data-plyr="settings"
//               type="button" class="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"
//               hidden=""><span>Качество<span class="plyr__menu__value">undefined</span></span></button><button
//               data-plyr="settings" type="button" class="plyr__control plyr__control--forward" role="menuitem"
//               aria-haspopup="true"><span>Скорость<span class="plyr__menu__value">Нормальная</span></span></button>
//           </div>
//         </div>
//         <div id="plyr-settings-912-captions"><button type="button"
//             class="plyr__control plyr__control--back"><span aria-hidden="true">Язык</span><span
//               class="plyr__sr-only">Go back to previous menu</span></button>
//           <div role="menu"><button data-plyr="language" type="button" role="menuitemradio" class="plyr__control"
//               aria-checked="true" value="-1"><span>Откоючено</span></button><button data-plyr="language"
//               type="button" role="menuitemradio" class="plyr__control" aria-checked="false"
//               value="0"><span>Русский<span class="plyr__menu__value"><span
//                     class="plyr__badge">RU</span></span></span></button></div>
//         </div>
//         <div id="plyr-settings-912-quality"><button type="button"
//             class="plyr__control plyr__control--back"><span aria-hidden="true">Качество</span><span
//               class="plyr__sr-only">Go back to previous menu</span></button>
//           <div role="menu"></div>
//         </div>
//         <div id="plyr-settings-912-speed"><button type="button"
//             class="plyr__control plyr__control--back"><span aria-hidden="true">Скорость</span><span
//               class="plyr__sr-only">Go back to previous menu</span></button>
//           <div role="menu"><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control"
//               aria-checked="false" value="0.5"><span>0.5×</span></button><button data-plyr="speed" type="button"
//               role="menuitemradio" class="plyr__control" aria-checked="false"
//               value="0.75"><span>0.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio"
//               class="plyr__control" aria-checked="true" value="1"><span>Нормальная</span></button><button
//               data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false"
//               value="1.25"><span>1.25×</span></button><button data-plyr="speed" type="button" role="menuitemradio"
//               class="plyr__control" aria-checked="false" value="1.5"><span>1.5×</span></button><button
//               data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false"
//               value="1.75"><span>1.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio"
//               class="plyr__control" aria-checked="false" value="2"><span>2×</span></button><button data-plyr="speed"
//               type="button" role="menuitemradio" class="plyr__control" aria-checked="false"
//               value="4"><span>4×</span></button></div>
//         </div>
//       </div>
//     </div>
//   </div><button class="plyr__controls__item plyr__control" type="button" data-plyr="pip" aria-pressed="false"><svg
//       aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-pip"></use>
//     </svg><span class="plyr__tooltip">Мини-проигрыватель</span></button><a
//     class="plyr__controls__item plyr__control" href="http://localhost:3000/path/to/video.mp4" target="_blank"
//     download="" data-plyr="download" aria-pressed="false"><svg aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-download"></use>
//     </svg><span class="plyr__tooltip">Скачать</span></a><button class="plyr__controls__item plyr__control"
//     type="button" data-plyr="fullscreen" aria-pressed="false"><svg class="icon--pressed" aria-hidden="true"
//       focusable="false">
//       <use xlink:href="#plyr-exit-fullscreen"></use>
//     </svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
//       <use xlink:href="#plyr-enter-fullscreen"></use>
//     </svg><span class="label--pressed plyr__tooltip" >Выход из полноэкранного режима</span><span
//       class="label--not-pressed plyr__tooltip">Во весь экран</span></button>
// </div>`
// ].join("");

// const controls =
// 	[
// 		'play-large', // The large play button in the center
// 		'restart', // Restart playback
// 		'rewind', // Rewind by the seek time (default 10 seconds)
// 		'play', // Play/pause playback
// 		'fast-forward', // Fast forward by the seek time (default 10 seconds)
// 		'progress', // The progress bar and scrubber for playback and buffering
// 		'current-time', // The current time of playback
// 		'duration', // The full duration of the media
// 		'mute', // Toggle mute
// 		'volume', // Volume control
// 		'captions', // Toggle captions
// 		'settings', // Settings menu
// 		'pip', // Picture-in-picture (currently Safari only)
// 		'airplay', // Airplay (currently Safari only)
// 		'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
// 		'fullscreen' // Toggle fullscreen
// 	];




const i18n =
{
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
    480: 'SD'
  }
};


// let player = new Plyr('#player', {
//   // captions: {
//   // 	active: false
//   // },
//   tooltips: {
//       controls: true,
//       seek: true
//   },
// //   controls,
//   i18n
// });



// window.player = player;


let Menu = document.querySelector('[data-plyr="settings"]');
const aria = document.querySelector('[aria-controls="plyr-settings-912"]');
const conttt = document.querySelector('[role="menu"]');
const cap = document.querySelector('[data-plyr="captions"]');
const conter = document.querySelector('.plyr__menu__container');
const men = document.querySelector('.plyr__menu');




let PlurHome = document.getElementById('#plyr-settings-8577-home')
let PlurCaptions = document.getElementById('#plyr-settings-4773-captions')
let PlurQuality = document.getElementById('#plyr-settings-4773-quality')
let PlurSpeed = document.getElementById('#plyr-settings-7224-speed')
// && PlurCaptions.getAttribute('hidden') === null) && PlurQuality.getAttribute('hidden') === null && PlurSpeed.getAttribute('hidden') === null

// Menu.addEventListener("click", () => {
//   if(PlurHome.getAttribute('hidden') === "0"){
//     PlurHome.removeAttribute(hidden) && PlurCaptions.removeAttribute(hidden) && PlurQuality.removeAttribute(hidden)  && PlurSpeed.removeAttribute(hidden)
//     // если обе возвращают true что то делаем. 

//   // PlurHome.setAttribute(hidden, para);
//   //   console.log("click")
//   //   conter.classList.toggle("plyr__menu__container--open")
// }});


//   Menu.addEventListener( "click" , () => {
//     console.log("click")
//     cap.classList.toggle("hidden");
// });


// `<div id="plyr-settings-5457-captions" hidden=""><button type="button"
//               class="plyr__control plyr__control--back"><span aria-hidden="true">Язык</span><span
//                 class="plyr__sr-only">Go back to previous menu</span></button>
//             <div role="menu"><button data-plyr="language" type="button" role="menuitemradio" class="plyr__control"
//                 aria-checked="false" value="-1"><span>Откоючено</span></button><button data-plyr="language"
//                 type="button" role="menuitemradio" class="plyr__control" aria-checked="true"
//                 value="0"><span>Русский<span class="plyr__menu__value"><span
//                       class="plyr__badge">RU</span></span></span></button></div>`


// ` aria-checked="true" С TRUE НА fALSE`


// i18n: {
// 	restart: 'Restart',
// 	rewind: 'Rewind {seektime}s',
// 	play: 'Play',
// 	pause: 'Pause',
// 	fastForward: 'Forward {seektime}s',
// 	seek: 'Seek',
// 	seekLabel: '{currentTime} of {duration}',
// 	played: 'Played',
// 	buffered: 'Buffered',
// 	currentTime: 'Current time',
// 	duration: 'Duration',
// 	volume: 'Volume',
// 	mute: 'Mute',
// 	unmute: 'Unmute',
// 	enableCaptions: 'Enable captions',
// 	disableCaptions: 'Disable captions',
// 	download: 'Download',
// 	enterFullscreen: 'Enter fullscreen',
// 	exitFullscreen: 'Exit fullscreen',
// 	frameTitle: 'Player for {title}',
// 	captions: 'Captions',
// 	settings: 'Settings',
// 	pip: 'PIP',
// 	menuBack: 'Go back to previous menu',
// 	speed: 'Speed',
// 	normal: 'Normal',
// 	quality: 'Quality',
// 	loop: 'Loop',
// 	start: 'Start',
// 	end: 'End',
// 	all: 'All',
// 	reset: 'Reset',
// 	disabled: 'Disabled',
// 	enabled: 'Enabled',
// 	advertisement: 'Ad',
// 	qualityBadge: {
// 	  2160: '4K',
// 	  1440: 'HD',
// 	  1080: 'HD',
// 	  720: 'HD',
// 	  576: 'SD',
// 	  480: 'SD'
// 	},


document.addEventListener('DOMContentLoaded', () => {
  // Controls (as seen below) works in such a way that as soon as you explicitly define (add) one control
  // to the settings, ALL default controls are removed and you have to add them back in by defining those below.
  // For example, let's say you just simply wanted to add 'restart' to the control bar in addition to the default.
  // Once you specify *just* the 'restart' property below, ALL of the controls (progress bar, play, speed, etc) will be removed,
  // meaning that you MUST specify 'play', 'progress', 'speed' and the other default controls to see them again.
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
    'fullscreen' // Toggle fullscreen
  ];
  const player = Plyr.setup('#player', { controls,  i18n});
});



// document.addEventListener('DOMContentLoaded', () => {
// alert("DoomLoad")
// });
