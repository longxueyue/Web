//创建移动接口
function transform(container) {
        var element = container.find(':first'),
            transform = {}, //创建接口对象
            slides = element.find('li'),
            height = container.height(),
            width = container.width();

        //设置总体页面的大小
        element.css({
            'width':(slides.length * width)+'px',
            'height':height + 'px',
        });

        $.each(slides,function (index) {
            var slide = slides.eq(index);
            slide.css({
                'width':width+'px',
                'height':height+'px',
            });
        });
//建立接口方法
        transform.scrollTo = function (x,time) {
            element.css({
                'transition-timing-function':'linear',
                'transition-duration':time+'ms',
                'transform':'translate3d(-'+x+'px,0,0)',
            });
            return this;
        };

        return transform;


    }

