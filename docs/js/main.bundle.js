!function(e){var i={};function t(r){if(i[r])return i[r].exports;var u=i[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var u in e)t.d(r,u,function(i){return e[i]}.bind(null,u));return r},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=0)}([function(e,i){$(".slideshow").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,dots:!0,infinite:!0,fade:!0,cssEase:"linear"});const t="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt auctor leo, ut ultricies lectus feugiat id. Duis sagittis erat id varius hendrerit. Etiam et hendrerit lectus. Nullam mattis, mauris vitae vestibulum gravida, enim ante adipiscing leo, sed imperdiet lacus dui bibendum erat. Sed convallis sed leo ac dapibus. Phasellus posuere lobortis euismod. Nam tempor elit ut justo tempor, eget egestas lectus sollicitudin. Cras vehicula sapien quis nisi ultricies rutrum. Nam ornare lorem mollis ullamcorper vestibulum.</p><p>Nullam in vulputate erat, in mattis enim. Curabitur consequat velit a sem ornare adipiscing. Pellentesque nisl lectus, venenatis sed dui ut, placerat mollis urna. Nulla diam diam, consectetur et magna id, lobortis cursus risus. Curabitur feugiat purus sed massa imperdiet rutrum. Mauris eu sodales libero, eu ultrices orci. Nunc vel metus erat. Donec ornare bibendum leo id fermentum. Fusce nec justo consectetur, posuere elit ac, tincidunt odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Etiam et magna in dui convallis consectetur sit amet sed quam. Vestibulum non libero et justo porttitor cursus nec ac arcu. Aliquam feugiat non ipsum et interdum. Aenean ac lectus erat. Integer vulputate turpis ac accumsan fermentum. Curabitur nec feugiat enim. Nullam lobortis mauris odio, a commodo mauris facilisis quis. Praesent id dapibus lectus. Morbi id blandit magna. Quisque adipiscing viverra massa, vitae sagittis eros dignissim sed. Praesent ornare placerat malesuada. Quisque nec eros dictum, ornare erat non, fringilla felis. Proin sollicitudin arcu ac turpis euismod rhoncus.</p>",r=["300","600","900","1200"];var u;$("#myInfiniteScroll1").infinitescroll({dataSource(e,i){setTimeout(()=>{i({content:t})},r[Math.floor(4*Math.random())])}}),u="#myInfiniteScroll1",$(u).append(t+t+t),$(u).scrollTop(0)}]);