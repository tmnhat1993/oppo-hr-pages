import Common from './modules/common';
import Home from './modules/home';
// import VideoLazyLoad from './modules/lazy-load-video';

// let lazyLoadVideo = new VideoLazyLoad();

$(document).ready(function () {
    // Behavior Use For All Page
    let common = new Common();

    // Behavior for HomePage
    if ($('#hr-home-page').length > 0) {
        let home = new Home();
    }
});