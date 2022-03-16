const rippleElements = document.querySelectorAll('.ath-btn');
rippleEffect(rippleElements);

let openModal = true,
    joinModal = false,
    openModalNew = true

function rippleEffect(elements) {
    let i = {};
    for (let a = 0; a < elements.length; a++) {
        i = elements[a];
        i.onclick = function(e) {
            let X = e.clientX - this.getBoundingClientRect().left;
            let Y = e.clientY - this.getBoundingClientRect().top;
            let rippleDiv = document.createElement('div');
            rippleDiv.classList.add('ripple');
            rippleDiv.setAttribute('style', 'top:' + Y + 'px; left:' + X + 'px;');
            this.appendChild(rippleDiv);
            setTimeout(function() {
                rippleDiv.parentElement.removeChild(rippleDiv);
            }, 1000);
        }
    }
}

// Toggle navbar
function openNavbar() {
    let elem = document.querySelector('#wrapper');
    let htmlElement = document.querySelector('html');
    let navLinks = document.querySelectorAll('.anchor');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].onclick = function() {
            htmlElement.style.overflow = 'inherit';
            elem.classList.remove('open-menu');
        }
    }

    elem.classList.toggle('open-menu');

    if (!elem.classList.contains('open-menu')) {
        htmlElement.style.overflow = 'inherit';
    } else {
        htmlElement.style.overflow = 'hidden';
    }
}

// Scroll function
$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".ath-header").addClass("sticky-head");
    } else {
        $(".ath-header").removeClass("sticky-head");
    }
});
window.addEventListener('scroll', function() {
    //roadmap
    roadmapScroll()

    //let's talk
    letsTalk()
})

//roadmap
function roadmapScroll() {
    let topPosition = $(window).scrollTop() + window.screen.availHeight * 0.7,
        roadmap = $('.rbrm-list'),
        roadmapHeight = roadmap.height(),
        roadmapTop = roadmap.offset().top,
        roadmapLine = roadmap.find('.rbrm-line'),
        roadmapLineHeight = (roadmapTop - topPosition) / roadmapHeight * -100.9,
        roadmapItems = roadmap.find('.rbrm-item')

    if (roadmapLineHeight > 0 && roadmapLineHeight <= 100) {
        roadmapLine.css('height', `${roadmapLineHeight}%`)
    } else if (roadmapLineHeight <= 0) {
        roadmapLine.css('height', '0')
    } else if (roadmapLineHeight > 100) {
        roadmapLine.css('height', '100%')
    }
    roadmapItems.each(function() {
        let thisItem = $(this),
            thisItemHeight = thisItem.height(),
            thisItemTop = thisItem.offset().top,
            thisItemDot = thisItem.find('.rbrm-dot-wrapper'),
            thisItemDotHeight = (thisItemTop - topPosition) / thisItemHeight * -100 + 6
        thisItemDotHeight >= 0 ? thisItem.addClass('active') : thisItem.removeClass('active')

        if (thisItemDotHeight > 0 && thisItemDotHeight <= 100) {
            thisItemDot.css('top', `${thisItemDotHeight}%`)
        } else if (thisItemDotHeight <= 0) {
            thisItemDot.css('top', '0.9rem')
        } else if (thisItemDotHeight > 100) {
            thisItemDot.css('top', '100%')
        }

    })
}


let hellopreloader = document.getElementById("preloader");

function fadeOut(el) {
    el.classList.remove('loading');
    el.classList.add('loaded');
}
window.onload = function() {
    hellopreloader.classList.add('loading');
    setTimeout(function() {
        fadeOut(hellopreloader);
        if (window.location.hash === '#whitelistlastchance') {
            setTimeout(() => modalOpen('#whitelistlastchance'), 1500)

        }
    }, 1000);
};

$(document).on('click', '.anchor', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
});

//let's talk
letsTalk()

function letsTalk() {
    $(window).scrollTop() > window.screen.availHeight - 300 ? $('.lets-talk').removeClass('hide') : $('.lets-talk').addClass('hide')
}


//modal
setTimeout(() => {
    if (openModal) modalOpen('#joinModal')
}, 30000)
$('.subscribe-open').click(() => {
    modalOpen('#subscribe')
})
$('.lets-talk').click(() => {
    modalOpen('#letsTalk')
})
$('.iggyboy-quiz').click(() => {
    modalOpen('#iggyboyQuiz')
})
// $('.wl-link').click(()=>{modalOpen('#whitelistlastchance')})
$('.pp-link').click(() => {
    modalOpen('#privacyPolicy')
})
// $('.btn-join').click(()=>{
//     setTimeout(()=> modalOpen('#whitelistlastchance'),600)
// })

$('.close-subscribe-now-open-subscribe-form').click(function() {
    $('#joinModal').css('opacity', 0)
    setTimeout(() => $('#joinModal').addClass('close'), 500)
    setTimeout(() => $('#joinModal').css('opacity', ''), 1000)
})

// function modalOpen(modalName) {
//     openModal = false
//     openModalNew = false
//     $(modalName).removeClass('close')
//     $('body').append('<div class="rbpu-bg"></div>').css('overflow', 'hidden')
//     $('.rbpu-bg').fadeIn(500)
//     $('.rbh-nav-wrapper').css('pointer-events', 'none')
//     modalClose()
// }


// function modalClose() {
//     $('.rbpu-close, .rbpu-bg, .btn-join').click(function() {
//         let modal = $('.rbpu-wrapper').not($('.close'))
//         if ($(this).hasClass('rbpu-bg') && modal.hasClass('bg-off')) return
//         if (modal.hasClass('jm-open') && !joinModal) {
//             openModalNew = true
//             setTimeout(() => {
//                 if (openModalNew) modalOpen('#joinModal')
//             }, 30000)
//         }
//         modal.css('opacity', 0)
//         setTimeout(() => modal.addClass('close'), 500)
//         setTimeout(() => modal.css('opacity', ''), 1000)
//         $('body').css('overflow', '')
//         $('.rbpu-bg').fadeOut(500, function() {
//             $(this).remove()
//         })
//         $('.rbh-nav-wrapper').css('pointer-events', '')
//     })
// }

setInterval(() => {
    $('.tada-btn').addClass('btn-tada')
    setTimeout(() => {
        $('.tada-btn').removeClass('btn-tada')
    }, 1500)
}, 8000)