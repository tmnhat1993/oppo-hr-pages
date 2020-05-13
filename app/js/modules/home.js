export default class Home {
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
        this.SetupHome();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupHome() {
        this.SetupBannerSlider();
        this.DrawGlobe();
        this.SetupTestimonialQuote();
    }

    DrawGlobe() {
        var width = 1440,
            height = 1440;

        var radius = height / 2 - 5,
            scale = radius,
            velocity = 0.02;

        var projection = d3
            .geoOrthographic()
            .translate([width / 2, height / 2])
            .scale(scale)
            .clipAngle(90);

        var canvas = d3
            .select("#the-globe")
            .append("canvas")
            .attr("width", width)
            .attr("height", height);

        var context = canvas.node().getContext("2d");

        var path = d3.geoPath().projection(projection).context(context);

        d3.json(
            "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json",
            function (error, world) {
                if (error) throw error;

                var land = topojson.feature(world, world.objects.land);

                d3.timer(function (elapsed) {
                    context.clearRect(0, 0, width, height);

                    projection.rotate([velocity * elapsed, 0]);
                    context.beginPath();
                    path(land);
                    context.fill();
                    context.beginPath();

                    // context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
                    // context.lineWidth = .5;
                    // context.stroke();
                });
            }
        );

        d3.select(self.frameElement).style("height", height + "px");
    }

    SetupBannerSlider() {
        this.$bannerSliderElement = $('#home-banner .banner-slider');
        this.$bannerSliderElement.slick({
            dots: true,
            infinite: true,
            nextArrow: `<div class="banner-control banner-next"><div class="shape-holder"></div></div>`,
            prevArrow: `<div class="banner-control banner-prev"><div class="shape-holder"></div></div>`
        });
    }

    SetupTestimonialQuote() {
        this.$memberImageSlider = $('.oppo-member-image-slider');
        this.$memberQuoteSlider = $('.oppo-member-quote-slider');

        this.$sliderControlNextBtn = $('.testimonial-control.next-slide')
        this.$sliderControlPrevBtn = $('.testimonial-control.next-slide')

        this.$memberQuoteSlider.on('init', () => {
            this.$sliderControlNextBtn.on('click', () => {
                $('.oppo-member-image-slider').slick('next');
            });

            this.$sliderControlPrevBtn.on('click', () => {
                $('.oppo-member-image-slider').slick('prev');
            });
        });

        this.$memberImageSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.oppo-member-quote-slider',
            dots: false,
        });

        this.$memberQuoteSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.oppo-member-image-slider',
            dots: true,
            fade: true,
            arrows: false,
        });
    }
}