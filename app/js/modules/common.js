import YouTubePlayer from 'youtube-player';

export default class Common {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.SetupCommon();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupCommon() {
        this.SetupVideoPlayer();
        this.SmoothScrollSetup();
    }

    // Smooth Scrolling Setup
    SmoothScrollSetup() {
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 700, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    }

    // Video Popup Utilities
    SetupVideoPlayer() {
        this.playerYT = YouTubePlayer('video-modal-video', {
            videoId: 'VoI7_SmxJmQ', // Default Clip
            playerVars: {
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                rel: 0,
                controls: 0,
                playlist: 'VoI7_SmxJmQ',
                loop: 1,
            },
        });

        $('.play-modal-video').on('click', (e) => {
            this.videoCode = 'VoI7_SmxJmQ'; // Default Youtube Video ID

            if ($(e.target).parents('.play-modal-video').length > 0) {
                this.videoCode = $(e.target).parents('.play-modal-video').data('video-id');
            } else {
                this.videoCode = $(e.target).data('video-id');
            }
            this.PlayModalClip(this.videoCode);
        });

        $('.close-video-modal').on('click', (e) => {
            this.CloseModalClip();
        });
    }

    PlayModalClip(clipID = 'VoI7_SmxJmQ') {
        $('body').addClass('show-modal');
        $('.video-modal').addClass('active');
        this.playerYT.cueVideoById(clipID);
        this.playerYT.unMute();
        this.playerYT.playVideo();

        this.playerYT.addEventListener('onStateChange', (e) => {
            if (e.data == 0) {
                this.CloseModalClip();
            }
        })

        console.log(clipID)
    }

    CloseModalClip() {
        this.playerYT.mute();
        $('body').removeClass('show-modal');
        $('.video-modal').removeClass('active');
        setTimeout(() => { this.playerYT.stopVideo(); }, 200);
    }
}