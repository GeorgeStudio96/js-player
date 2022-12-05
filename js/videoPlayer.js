export const videoPlayerInit = () => {
    console.log('Video Player')

    const videoPlayer = document.querySelector('.video-player')
    const faPlay = document.querySelector('.fa-play')
    const faStop = document.querySelector('.fa-stop')
    const videoTimePassed = document.querySelector('.video-time__passed')
    const videoProgress = document.querySelector('.video-progress')
    const videoTimeTotal = document.querySelector('.video-time__total')

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            faPlay.classList.remove('fa-pause')
        } else {
            faPlay.classList.add('fa-pause')
        }
    }

    const videoPlayInit = () => {
        videoPlayer.muted = true // true — отключает звук, false – включает

        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    }

    videoPlayer.addEventListener('click', videoPlayInit)
    faPlay.addEventListener('click', videoPlayInit)


    // при клике на faStop остановим видео
    const videoStop = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0
        toggleIcon();
    }

    faStop.addEventListener('click', videoStop)

    const addZero = n => n < 10 ? '0' + n : n



    const videoTimeUpdate = () => {

        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100


        let minutePassed = Math.floor(currentTime / 60)
        let seccondPassed = Math.floor(currentTime % 60)

        let minuteTotal = Math.floor(duration / 60)
        let seccondTotal = Math.floor(duration % 60)

        // videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(seccondPassed)
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(seccondPassed)}`
        videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(seccondTotal)

    }

    videoPlayer.addEventListener('timeupdate', videoTimeUpdate)

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100
    })







}
