---
hide:
  - toc
---

# Приложение для сканирования билетов
Приложение `StewardApp` позволят идентифицировать входные билеты на различные мероприятия, в том числе на спортивные и музыкальные представления, действуя в составе билетно-пропуской системы Газпром Арены и является обязательным для использования всеми стюардами чаши стадиона.

## Ссылки на скачивание приложения

=== "iOS"

    | iOS |
    | :-------------: |
    | ![iOS StewardApp](../../assets/images/qr-code-ios.svg){ width="100" } <br> [Скачать :material-download-box:](https://apps.apple.com/ru/app/stewardapp/id1591816993){ .md-button .md-button--primary } |

=== "Android"

    | Android |
    | :-------------: |
    | ![Android StewardApp](../../assets/images/qr-code-android.svg){ width="100" } <br> [Скачать :material-download-box:](https://play.google.com/store/apps/details?id=ru.infotec.ticketcheck){ .md-button .md-button--primary } [apk :material-android:](#){ .md-button } |


<style>
.md-annotation {
    font-weight: 400;
    outline: none;
    white-space:normal
}

[dir=rtl] .md-annotation {
    direction:rtl
}

.md-annotation:not([hidden]) {
    display: inline-block;
    line-height:1.325
}

.md-annotation__index {
    cursor: pointer;
    font-family: var(--md-code-font-family);
    font-size: .85em;
    margin: 0 1ch;
    outline: none;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index:0
}

.md-annotation .md-annotation__index {
    color: #fff;
    transition:z-index .25s
}

.md-annotation .md-annotation__index:-webkit-any(:focus, :hover) {
    color:#fff
}

.md-annotation .md-annotation__index:-moz-any(:focus, :hover) {
    color:#fff
}

.md-annotation .md-annotation__index:is(:focus, :hover) {
    color:#fff
}

.md-annotation__index:after {
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    background-color: var(--md-default-fg-color--lighter);
    border-radius: 2ch;
    content: "";
    height: 2.2ch;
    left: -.125em;
    margin: 0 -.4ch;
    padding: 0 .4ch;
    position: absolute;
    top: .0367647059em;
    transition: color .25s, background-color .25s;
    width: calc(100% + 1.2ch);
    width: max(2.2ch, 100% + 1.2ch);
    z-index:-1
}

@media (prefers-reduced-motion) {
    .md-annotation__index:after {
        -webkit-animation: none;
        animation:none
    }
}

.md-tooltip--active + .md-annotation__index:after {
    -webkit-animation: none;
    animation: none;
    transition:color .25s, background-color .25s
}

code .md-annotation__index {
    font-family: var(--md-code-font-family);
    font-size:inherit
}

:-webkit-any(.md-tooltip--active + .md-annotation__index, :hover > .md-annotation__index) {
    color:var(--md-accent-bg-color)
}

:-moz-any(.md-tooltip--active + .md-annotation__index, :hover > .md-annotation__index) {
    color:var(--md-accent-bg-color)
}

:is(.md-tooltip--active + .md-annotation__index, :hover > .md-annotation__index) {
    color:var(--md-accent-bg-color)
}

:-webkit-any(.md-tooltip--active + .md-annotation__index, :hover > .md-annotation__index):after {
    background-color:var(--md-accent-fg-color)
}

:-moz-any(.md-tooltip--active + .md-annotation__index, :hover > .md-annotation__index):after {
    background-color:var(--md-accent-fg-color)
}

:is(.md-tooltip--active + .md-annotation__index, :hover > .md-annotation__index):after {
    background-color:var(--md-accent-fg-color)
}

.md-tooltip--active + .md-annotation__index {
    -webkit-animation: none;
    animation: none;
    transition: none;
    z-index:2
}

.md-annotation__index [data-md-annotation-id]:before {
    content: attr(data-md-annotation-id);
    display: inline-block;
    transition: transform .4s cubic-bezier(.1, .7, .1, 1);
    vertical-align:text-bottom
}

@media not print {
    .md-annotation__index [data-md-annotation-id]:before {
        content: "+"
    }

    :focus-within > .md-annotation__index [data-md-annotation-id]:before {
        transform:rotate(45deg)
    }
}

[dir=ltr] .md-top {
    margin-left:50%
}

[dir=rtl] .md-top {
    margin-right:50%
}

.md-top {
    background-color: var(--md-default-bg-color);
    border-radius: 1.6rem;
    box-shadow: var(--md-shadow-z2);
    color: var(--md-default-fg-color--light);
    font-size: .7rem;
    outline: none;
    padding: .4rem .8rem;
    position: fixed;
    top: 3.2rem;
    transform: translate(-50%);
    transition: color 125ms, background-color 125ms, transform 125ms cubic-bezier(.4, 0, .2, 1), opacity 125ms;
    z-index:2
}

@media print {
    .md-top {
        display:none
    }
}

[dir=rtl] .md-top {
    transform:translate(50%)
}

.md-top--hidden {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, .2rem);
    transition-duration:0ms
}

[dir=rtl] .md-top--hidden {
    transform:translate(50%, .2rem)
}

.md-top:-webkit-any(:focus, :hover) {
    background-color: var(--md-accent-fg-color);
    color:var(--md-accent-bg-color)
}

.md-top:-moz-any(:focus, :hover) {
    background-color: var(--md-accent-fg-color);
    color:var(--md-accent-bg-color)
}

.md-top:is(:focus, :hover) {
    background-color: var(--md-accent-fg-color);
    color:var(--md-accent-bg-color)
}

.md-top svg {
    display: inline-block;
    vertical-align:-.5em
}

@-webkit-keyframes hoverfix {
    0% {
        pointer-events:none
    }
}

@keyframes hoverfix {
    0% {
        pointer-events:none
    }
}

:root {
    --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>')
}

.md-version {
    flex-shrink: 0;
    font-size: .8rem;
    height:2.4rem
}

[dir=ltr] .md-version__current {
    margin-left: 1.4rem;
    margin-right:.4rem
}

[dir=rtl] .md-version__current {
    margin-left: .4rem;
    margin-right:1.4rem
}

.md-version__current {
    color: inherit;
    cursor: pointer;
    outline: none;
    position: relative;
    top:.05rem
}

[dir=ltr] .md-version__current:after {
    margin-left:.4rem
}

[dir=rtl] .md-version__current:after {
    margin-right:.4rem
}

.md-version__current:after {
    background-color: currentcolor;
    content: "";
    display: inline-block;
    height: .6rem;
    -webkit-mask-image: var(--md-version-icon);
    mask-image: var(--md-version-icon);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    width:.4rem
}

.md-version__list {
    background-color: var(--md-default-bg-color);
    border-radius: .1rem;
    box-shadow: var(--md-shadow-z2);
    color: var(--md-default-fg-color);
    list-style-type: none;
    margin: .2rem .8rem;
    max-height: 0;
    opacity: 0;
    overflow: auto;
    padding: 0;
    position: absolute;
    -ms-scroll-snap-type: y mandatory;
    scroll-snap-type: y mandatory;
    top: .15rem;
    transition: max-height 0ms .5s, opacity .25s .25s;
    z-index:3
}

.md-version:-webkit-any(:focus-within, :hover) .md-version__list {
    max-height: 10rem;
    opacity: 1;
    -webkit-transition: max-height 0ms, opacity .25s;
    transition:max-height 0ms, opacity .25s
}

.md-version:-moz-any(:focus-within, :hover) .md-version__list {
    max-height: 10rem;
    opacity: 1;
    -moz-transition: max-height 0ms, opacity .25s;
    transition:max-height 0ms, opacity .25s
}

.md-version:is(:focus-within, :hover) .md-version__list {
    max-height: 10rem;
    opacity: 1;
    transition:max-height 0ms, opacity .25s
}

@media (pointer: coarse) {
    .md-version:hover .md-version__list {
        -webkit-animation: hoverfix .25s forwards;
        animation:hoverfix .25s forwards
    }

    .md-version:focus-within .md-version__list {
        -webkit-animation: none;
        animation:none
    }
}

.md-version__item {
    line-height:1.8rem
}

[dir=ltr] .md-version__link {
    padding-left: .6rem;
    padding-right:1.2rem
}

[dir=rtl] .md-version__link {
    padding-left: 1.2rem;
    padding-right:.6rem
}

.md-version__link {
    cursor: pointer;
    display: block;
    outline: none;
    scroll-snap-align: start;
    transition: color .25s, background-color .25s;
    white-space: nowrap;
    width:100%
}

.md-version__link:-webkit-any(:focus, :hover) {
    color:var(--md-accent-fg-color)
}

.md-version__link:-moz-any(:focus, :hover) {
    color:var(--md-accent-fg-color)
}

.md-version__link:is(:focus, :hover) {
    color:var(--md-accent-fg-color)
}

.md-version__link:focus {
    background-color:var(--md-default-fg-color--lightest)
}

:root {
    --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
    --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 9H7V7h10m0 6H7v-2h10m-3 6H7v-2h7M12 3a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>');
    --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/></svg>');
    --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32-2.59 2.08-3.61 5.75-2.39 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 4.43-.12 6.07-1.6 1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6-1.12.4-2.24-.16-2.9-.82 1.19-.28 1.9-1.16 2.11-2.05.17-.8-.15-1.46-.28-2.23-.12-.74-.1-1.37.17-2.06.19.38.39.76.63 1.06.77 1 1.98 1.44 2.24 2.8.04.14.06.28.06.43.03.82-.33 1.72-.93 2.27z"/></svg>');
    --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 20.42-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z"/></svg>');
    --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15.07 11.25-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2 2 2 0 0 0-2 2H8a4 4 0 0 1 4-4 4 4 0 0 1 4 4 3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"/></svg>');
    --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
    --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6.91 17.09 4 12 9.09 6.91 4 4 6.91 9.09 12 4 17.09 6.91 20 12 14.91 17.09 20 20 17.09 14.91 12 20 6.91z"/></svg>');
    --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15H6l7-14v8h5l-7 14v-8z"/></svg>');
    --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 0 0-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
    --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
    --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>')
}

.md-typeset :-webkit-any(.admonition, details) {
    background-color: var(--md-admonition-bg-color);
    border: 0 solid #448aff;
    border-radius: .1rem;
    box-shadow: var(--md-shadow-z1);
    color: var(--md-admonition-fg-color);
    display: flow-root;
    font-size: .64rem;
    margin: 1.5625em 0;
    padding: 0 .6rem;
    page-break-inside:avoid
}

.md-typeset :-moz-any(.admonition, details) {
    background-color: var(--md-admonition-bg-color);
    border: 0 solid #448aff;
    border-radius: .1rem;
    box-shadow: var(--md-shadow-z1);
    color: var(--md-admonition-fg-color);
    display: flow-root;
    font-size: .64rem;
    margin: 1.5625em 0;
    padding: 0 .6rem;
    page-break-inside:avoid
}

[dir=ltr] .md-typeset :-webkit-any(.admonition, details) {
    border-left-width:.2rem
}

[dir=ltr] .md-typeset :-moz-any(.admonition, details) {
    border-left-width:.2rem
}

[dir=ltr] .md-typeset :is(.admonition, details) {
    border-left-width:.2rem
}

[dir=rtl] .md-typeset :-webkit-any(.admonition, details) {
    border-right-width:.2rem
}

[dir=rtl] .md-typeset :-moz-any(.admonition, details) {
    border-right-width:.2rem
}

[dir=rtl] .md-typeset :is(.admonition, details) {
    border-right-width:.2rem
}

.md-typeset :is(.admonition, details) {
    background-color: var(--md-admonition-bg-color);
    border: 0 solid #448aff;
    border-radius: .1rem;
    box-shadow: var(--md-shadow-z1);
    color: var(--md-admonition-fg-color);
    display: flow-root;
    font-size: .64rem;
    margin: 1.5625em 0;
    padding: 0 .6rem;
    page-break-inside:avoid
}

@media print {
    .md-typeset :-webkit-any(.admonition, details) {
        box-shadow:none
    }

    .md-typeset :-moz-any(.admonition, details) {
        box-shadow:none
    }

    .md-typeset :is(.admonition, details) {
        box-shadow:none
    }
}

.md-typeset :-webkit-any(.admonition, details) > * {
    box-sizing:border-box
}

.md-typeset :-moz-any(.admonition, details) > * {
    box-sizing:border-box
}

.md-typeset :is(.admonition, details) > * {
    box-sizing:border-box
}

.md-typeset :-webkit-any(.admonition, details) :-webkit-any(.admonition, details) {
    margin-bottom: 1em;
    margin-top:1em
}

.md-typeset :-moz-any(.admonition, details) :-moz-any(.admonition, details) {
    margin-bottom: 1em;
    margin-top:1em
}

.md-typeset :is(.admonition, details) :is(.admonition, details) {
    margin-bottom: 1em;
    margin-top:1em
}

.md-typeset :-webkit-any(.admonition, details) .md-typeset__scrollwrap {
    margin:1em -.6rem
}

.md-typeset :-moz-any(.admonition, details) .md-typeset__scrollwrap {
    margin:1em -.6rem
}

.md-typeset :is(.admonition, details) .md-typeset__scrollwrap {
    margin:1em -.6rem
}

.md-typeset :-webkit-any(.admonition, details) .md-typeset__table {
    padding:0 .6rem
}

.md-typeset :-moz-any(.admonition, details) .md-typeset__table {
    padding:0 .6rem
}

.md-typeset :is(.admonition, details) .md-typeset__table {
    padding:0 .6rem
}

.md-typeset :-webkit-any(.admonition, details) > .tabbed-set:only-child {
    margin-top:0
}

.md-typeset :-moz-any(.admonition, details) > .tabbed-set:only-child {
    margin-top:0
}

.md-typeset :is(.admonition, details) > .tabbed-set:only-child {
    margin-top:0
}

html .md-typeset :-webkit-any(.admonition, details) > :last-child {
    margin-bottom:.6rem
}

html .md-typeset :-moz-any(.admonition, details) > :last-child {
    margin-bottom:.6rem
}

html .md-typeset :is(.admonition, details) > :last-child {
    margin-bottom:.6rem
}

.md-typeset :-webkit-any(.admonition-title, summary) {
    background-color: rgba(68, 138, 255, .1);
    border: 0 solid #448aff;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: .4rem;
    padding-top: .4rem;
    position:relative
}

.md-typeset :-moz-any(.admonition-title, summary) {
    background-color: rgba(68, 138, 255, .1);
    border: 0 solid #448aff;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: .4rem;
    padding-top: .4rem;
    position:relative
}

[dir=ltr] .md-typeset :-webkit-any(.admonition-title, summary) {
    margin-left: -.8rem;
    margin-right:-.6rem
}

[dir=ltr] .md-typeset :-moz-any(.admonition-title, summary) {
    margin-left: -.8rem;
    margin-right:-.6rem
}

</style>
    
    
<p class="annotate">Lorem ipsum dolor sit amet, <aside class="md-annotation" tabindex="0" style="--md-tooltip-x: 607.5px; --md-tooltip-y: 1133.5px;"><div class="md-tooltip"><div class="md-tooltip__inner md-typeset"><img alt="🙋‍♂️" class="twemoji" src="https://twemoji.maxcdn.com/v/latest/svg/1f64b-200d-2642-fe0f.svg" title=":man_raising_hand:"> I'm an annotation! I can contain <code>code</code>, <strong>formatted text</strong>, images, ... basically anything that can be written in Markdown.</div></div><a class="md-annotation__index" tabindex="-1"><span data-md-annotation-id="1"></span></a></aside> consectetur adipiscing elit.</p>
