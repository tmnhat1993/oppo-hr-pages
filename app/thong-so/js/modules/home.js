import { reachSection, pageListener } from './utils';
import Specs from './_specs';
export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        window.realme5iListener = new pageListener();
        let specs = new Specs()
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.LoadPageDetect();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    LoadPageDetect() {
        window.onload = () => {
            realme5iListener.emit('finished-load');
        }

        realme5iListener.on('finished-load', () => {
            $('body').removeClass('is-loading');
        })
    }
}