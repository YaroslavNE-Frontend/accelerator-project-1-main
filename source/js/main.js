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
  const playPauseBtn = document.querySelectorAll(".play-pause-btn")
  const theaterBtn = document.querySelector(".theater-btn")
  const fullScreenBtn = document.querySelector(".full-screen-btn")
  const miniPlayerBtn = document.querySelector(".mini-player-btn")
  const OptionsBtn = document.querySelector(".options-btn")
  const OptionsList = document.querySelector(".options-list")
  const muteBtn = document.querySelector(".mute-btn")
  const captionsBtn = document.querySelector(".captions-btn")
  const speedBtn = document.querySelector(".speed-btn")
  const rewindBtn = document.querySelector(".rewind-btn")
  const fastForwardBtn = document.querySelector(".fast-forward-btn")
  const restartBtn = document.querySelector(".restart-btn")
  const downloadLink = document.querySelector('.download-link');
  const optionsContainer = document.querySelector(".options-container")
  const speedList = document.querySelector(".options-speed-list")
  const speedListItem = document.querySelectorAll(".options-speed-item")
  const captionsList = document.querySelector(".options-captions-list")
  const captionsListItem = document.querySelectorAll(".options-captions-item")
  const itemSpeedEl = document.querySelector('.options-item.options-item--speed')
  const itemCaptionsEl = document.querySelector('.options-item.options-item--captions')
  const optionsBtnDown = document.querySelector('.options-button-down')
  const currentTimeElem = document.querySelector(".current-time")
  const totalTimeElem = document.querySelector(".total-time")
  const previewImg = document.querySelector(".preview-img")
  const thumbnailImg = document.querySelector(".thumbnail-img")
  const volumeSlider = document.querySelector(".volume-slider")
  const videoContainer = document.querySelector(".video-container")
  const timelineContainer = document.querySelector(".timeline-container")
  const video = document.querySelector("video")

  document.addEventListener("keydown", e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === "input") return

    switch (e.key.toLowerCase()) {
      case " ":
        if (tagName === "button") return
      case "k":
        togglePlay()
        break
      case "f":
        toggleFullScreenMode()
        break
      case "t":
        toggleTheaterMode()
        break
      case "i":
        toggleMiniPlayerMode()
        break
      case "m":
        toggleMute()
        break
      case "arrowleft":
      case "j":
        skip(-5)
        break
      case "arrowright":
      case "l":
        skip(5)
        break
      case "v":
        firstTime()
        break
      case "c":
        toggleCaptions()
        break
    }
  })


  // Tach skip
  // Restart Button

  restartBtn.addEventListener('click', firstTime)

  function  firstTime() {
    video.currentTime = 0
  }

  // Download Batton

  //// Text

  // const a = document.querySelector('.test');
  // const data = 'hello good';

  // const blob = new Blob([data], {type: 'text/plain'})

  // const url = URL.createObjectURL(blob)
  // console.log(url)

  // a.href = url 
  // a.download = 'blob-to-download.txt'


  //// VIDEO DOWNLOAD

  let xhr = new XMLHttpRequest();
  xhr.open('GET', '../video/video.webm');
  xhr.responseType = 'arraybuffer';
  xhr.onload = (e) => {
    let blob = new Blob([xhr.response], { type: 'video/webm' });
    let url = URL.createObjectURL(blob);
    console.log(url)
    video.src = url;
    downloadLink.href = url 
    downloadLink.download = 'Myvideo'
  }

  xhr.send()

  // Skip Battons

  rewindBtn.addEventListener('click', toggleRewind)
  fastForwardBtn.addEventListener('click', toggleFastForward)

  function toggleRewind() {
    skip(-5)
  }

  function toggleFastForward() {
    skip(5)
  }

  // Double Tap Scip Tach

// video.addEventListener('click', (e) => {
//   let videoWidth = video.offsetWidth
//   let clickX = e.clientX
//     if (clickX > videoWidth/2) {
//       console.log("Div was clicked on the right");
//       console.log(clickX);
//       skip(10)
//   } else {
//       console.log("Div was clicked on the left");
//       console.log(e.clientY);
//       skip(-10)
//   }
// })


var elm1 = document.getElementById('test1');
var elm2 = document.getElementById('test2');
var timeout;
var lastTap = 0;
elm1.addEventListener('touchend', function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0) {
        elm2.innerHTML = 'Double Tap';
        event.preventDefault();
    } else {
        elm2.innerHTML = 'Single Tap';
        timeout = setTimeout(function() {
            elm2.innerHTML = 'Single Tap (timeout)';
            clearTimeout(timeout);
        }, 500);
    }
    lastTap = currentTime;
});




function doubleClickHandler(e){
  const videoWidth = video.offsetWidth;
  (e.offsetX < videoWidth/2) ? skip(-10) : skip(10);
}

video.addEventListener('dblclick', doubleClickHandler);

  // Options


  // Timeline
  timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
  timelineContainer.addEventListener("mousedown", toggleScrubbing)
  document.addEventListener("mouseup", e => {
    if (isScrubbing) toggleScrubbing(e)
  })
  document.addEventListener("mousemove", e => {
    if (isScrubbing) handleTimelineUpdate(e)
  })

  let isScrubbing = false
  let wasPaused
  function toggleScrubbing(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    isScrubbing = (e.buttons & 1) === 1
    videoContainer.classList.toggle("scrubbing", isScrubbing)
    if (isScrubbing) {
      wasPaused = video.paused
      video.pause()
    } else {
      video.currentTime = percent * video.duration
      if (!wasPaused) video.play()
    }

    handleTimelineUpdate(e)
  }

  function handleTimelineUpdate(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    const previewImgNumber = Math.max(
      1,
      Math.floor((percent * video.duration) / 10)
    )
    const previewImgSrc = `video/previewImgs/preview${previewImgNumber}.jpg`
    previewImg.src = previewImgSrc
    timelineContainer.style.setProperty("--preview-position", percent)

    if (isScrubbing) {
      e.preventDefault()
      thumbnailImg.src = previewImgSrc
      timelineContainer.style.setProperty("--progress-position", percent)
    }
  }

  // Способ 1 --нажатие на ячейку скорости 

  // Playback Speed

  // speedBtn.addEventListener("click", changePlaybackSpeed) // 0.25 0.5 0.75

  // function changePlaybackSpeed() {
  //   let newPlaybackRate = video.playbackRate + 0.25
  //   if (newPlaybackRate > 2) newPlaybackRate = 0.25
  //   video.playbackRate = newPlaybackRate
  //   speedBtn.textContent = `${newPlaybackRate}x`
  // }

  // Способ 2 -- Выпадающий список скорости

  OptionsBtn.addEventListener('click', toggleOptions)


  function toggleOptions() {
    videoContainer.classList.toggle('open-settings')
    optionsContainer?.classList.remove('open-settings--speed')
    optionsContainer?.classList.remove('open-settings--captions')
  }

  speedListItem.forEach(item => {
    item.addEventListener('click', () => {
      const activeSpeedListItem = document.querySelector('.options-speed-item--active');
      activeSpeedListItem?.classList.remove('options-speed-item--active')
      item.classList.add('options-speed-item--active')
      OptionsList.classList.remove('open')
    });
  });

  captionsListItem.forEach(item => {
    item.addEventListener('click', () => {
      const activeCaptionListItem = document.querySelector('.options-captions-item--active');
      activeCaptionListItem?.classList.remove('options-captions-item--active')
      item.classList.add('options-captions-item--active')
      OptionsList.classList.remove('open')
    });
  });

  speedList.addEventListener('click', (e) => {
    // console.log(e.target.dataset.speedItem);
    let newPlaybackRate = video.playbackRate = 0.25
    newPlaybackRate = e.target.dataset.speedItem
    video.playbackRate = newPlaybackRate
    speedBtn.textContent = `${video.playbackRate}x`

    if (e.target.dataset.speedItem) {
      optionsContainer.classList.remove('open-settings--speed')
      optionsContainer.classList.remove('open-settings')
      optionsBtnDown.classList.remove('options-button-down--none')
    }


    videoContainer.classList.remove("open-settings")
  })

  optionsBtnDown.addEventListener('click', () => {
    optionsContainer.classList.remove('open-settings--speed')
    optionsContainer.classList.remove('open-settings--captions')
    optionsBtnDown.classList.remove('options-button-down--none')
  })

  itemSpeedEl.addEventListener('click', () => {
    optionsContainer.classList.toggle('open-settings--speed')
    optionsBtnDown.classList.add('options-button-down--none')
  })

  itemCaptionsEl.addEventListener('click', () => {
    optionsContainer.classList.toggle('open-settings--captions')
    optionsBtnDown.classList.add('options-button-down--none')
  })



  // Captions
  // const captions = video.textTracks[0]
  // captions.mode = "hidden"

  // captionsBtn.addEventListener("click", toggleCaptions)

  // function toggleCaptions() {
  //   const isHidden = captions.mode === "hidden"
  //   captions.mode = isHidden ? "showing" : "hidden"
  //   videoContainer.classList.toggle("captions", isHidden)
  // }

  let track = video.addTextTrack("captions", "Captions", "en-US");
  track.mode = "showing";
  console.log(track.language);



  captionsList.addEventListener('click', (e) => {
    console.log(e.target.dataset.caption)


    function isHiddenCaptions() {
      for (let i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = "hidden";
      }
    }



    if (e.target.dataset.caption === 'ru') {
      isHiddenCaptions()
      video.textTracks[1].mode = "showing"
    }

    if (e.target.dataset.caption === 'en') {
      isHiddenCaptions()
      video.textTracks[0].mode = "showing"
    }

    if (e.target.dataset.caption === 'off') {
      isHiddenCaptions()
    }

    if (e.target.dataset.caption) {
      optionsContainer.classList.remove('open-settings--captions')
      videoContainer.classList.remove('open-settings')
      optionsBtnDown.classList.remove('options-button-down--none')
    }
  })


  // Duration
  video.addEventListener("loadeddata", () => {
    totalTimeElem.textContent = formatDuration(video.duration)
  })

  video.addEventListener("timeupdate", () => {
    currentTimeElem.textContent = formatDuration(video.currentTime)
    const percent = video.currentTime / video.duration
    timelineContainer.style.setProperty("--progress-position", percent)
  })

  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  })
  function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
      return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
      return `${hours}:${leadingZeroFormatter.format(
        minutes
      )}:${leadingZeroFormatter.format(seconds)}`
    }
  }

  function skip(duration) {
    video.currentTime += duration
  }

  // Volume
  muteBtn.addEventListener("click", toggleMute)
  volumeSlider.addEventListener("input", e => {
    video.volume = e.target.value
    video.muted = e.target.value === 0
  })

  function toggleMute() {
    video.muted = !video.muted
  }

  video.addEventListener("volumechange", () => {
    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
      volumeSlider.value = 0
      volumeLevel = "muted"
    } else if (video.volume >= 0.5) {
      volumeLevel = "high"
    } else {
      volumeLevel = "low"
    }

    videoContainer.dataset.volumeLevel = volumeLevel
  })

  // View Modes
  theaterBtn.addEventListener("click", toggleTheaterMode)
  fullScreenBtn.addEventListener("click", toggleFullScreenMode)
  miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)


  function reportWindowSize() {
    console.log(window.innerWidth, window.innerHeight) 
  }
  
  window.onresize = reportWindowSize;


  function toggleTheaterMode() {
    videoContainer.classList.toggle("theater")
  }

  function toggleFullScreenMode() {
    if (document.fullscreenElement == null && window.innerWidth >= 768) {
      videoContainer.requestFullscreen()
      muteBtn.classList.remove("proverka")
    } else {
      document.exitFullscreen()
      muteBtn.classList.add("proverka")
    }
  }

  function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains("mini-player")) {
      document.exitPictureInPicture()
    } else {
      video.requestPictureInPicture()
    }
  }

  document.addEventListener("fullscreenchange", () => {
    videoContainer.classList.toggle("full-screen", document.fullscreenElement)
  })

  video.addEventListener("enterpictureinpicture", () => {
    videoContainer.classList.add("mini-player")
  })

  video.addEventListener("leavepictureinpicture", () => {
    videoContainer.classList.remove("mini-player")
  })

  // Play/Pause
  playPauseBtn.forEach(e => {
    e.addEventListener("click", togglePlay)
  })
  // video.addEventListener("click", togglePlay)

  function togglePlay() {
    video.paused ? video.play() : video.pause()
  }

  video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
  })

  video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
  })

});













