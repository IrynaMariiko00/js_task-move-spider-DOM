document.addEventListener("click",function(t){var e=document.querySelector(".wall").getBoundingClientRect(),o=document.querySelector(".spider"),c=o.offsetWidth,n=o.offsetHeight,l=t.clientX,i=t.clientY;l>=e.left&&l<=e.right&&i>=e.top&&i<=e.bottom&&(o.style.left="".concat(l-e.left-c/2,"px"),o.style.top="".concat(i-e.top-n/2,"px"))});
//# sourceMappingURL=index.7b126a49.js.map
