---
template: homepage.html
---

<style>.md-typeset .md-button {
    border: none;
}

.md-typeset img, .md-typeset svg {
    height: auto;
    max-width: 100%;
}

.md-header {
    position: initial
}

.md-content {
    display: block;
    margin-left: auto;
    margin-right: auto
}

}
@media screen and (min-width: 60em) {
    .md-sidebar--secondary {
        display: none
    }
}

@media screen and (min-width: 76.25em) {
    .md-sidebar--primary {
        display: none
    }
}</style>
<style>.mdx-hero__more {
    bottom: -2.4rem;
    display: block;
    left: 50%;
    margin-left: -.6rem;
    pointer-events: none;
    position: absolute;
    text-align: center;
}

@media screen and (max-width: 29.9375em) {
    .md-typeset .mdx-columns ol, .md-typeset .mdx-columns ul {
        -moz-columns: initial;
        columns: initial
    }
}

.mdx-container {
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: hsla(0, 0%, 100%, 1)' /></svg>") no-repeat bottom, linear-gradient(to bottom, var(--md-primary-fg-color), #a63fd9 99%, var(--md-default-bg-color) 99%);
    padding-top: 1rem
}

[data-md-color-scheme=slate] .mdx-container {
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: hsla(232, 15%, 21%, 1)' /></svg>") no-repeat bottom, linear-gradient(to bottom, var(--md-primary-fg-color), #a63fd9 99%, var(--md-default-bg-color) 99%)
}

.mdx-hero {
    color: var(--md-primary-bg-color);
    margin: 0 .8rem
}

.mdx-hero h1 {
    color: currentcolor;
    font-weight: 700;
    margin-bottom: 1rem
}

@media screen and (max-width: 29.9375em) {
    .mdx-hero h1 {
        font-size: 1.4rem
    }
}

.mdx-hero__content {
    padding-bottom: 6rem
}

@media screen and (min-width: 60em) {
    .mdx-hero {
        align-items: stretch;
        display: flex
    }

    .mdx-hero__content {
        margin-top: 3.5rem;
        max-width: 19rem;
        padding-bottom: 14vw
    }

    .mdx-hero__image {
        order: 1;
        transform: translateX(4rem);
        width: 38rem
    }
}

@media screen and (min-width: 76.25em) {
    .mdx-hero__image {
        transform: translateX(8rem)
    }
}

.mdx-hero .md-button {
    color: var(--md-primary-bg-color);
    margin-right: .5rem;
    margin-top: .5rem
}

.mdx-hero .md-button--primary {
    background-color: var(--md-primary-bg-color);
    border: none;
    color: #894da8
}

.AboutPageMetric {
    padding-right: 90px;
}

.AboutPageHeader__metrics {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: 2em;
}

.AboutPageMetric__value {
    font-size: 5em;
    font-weight: 600;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    line-height: 1.5;
    /*color: var(--md-primary-fg-color);*/
}

.AboutPageMetric__title {
    font-size: 16px;
    line-height: 1.4;
}

</style>
<section class="mdx-container">
    <div class="md-grid md-typeset">
        <div class="mdx-hero">
            <div class="mdx-hero__image">
                <img src="assets/images/stadium_3d.png" alt="" width="1659" height="1200" draggable="false">
            </div>
            <div class="mdx-hero__content">
                <h1>Добро пожаловать на блок А 👋</h1>
                <p>Здесь ты найдешь полезную информацию о работе на стадионе и блоке</p>
                <a href="https://callistoboy.github.io/stewards-a-book/articles/basic/block/" class="md-button md-button--primary">
                    О блоке</span></a>
                <a href="https://forms.gle/E8k9f4WAYLC4x2eq5" target="_blank" class="md-button">
                    Хочу на блок <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                        d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4Z"></path></svg></span>
                </a>
                <div class="AboutPageHeader__metrics">
                    <div class="AboutPageMetric">
                        <div class="AboutPageMetric__value">{{ overall_ste }}</div>
                        <div class="AboutPageMetric__title">активных стюардов</div>
                    </div>
                    <div class="AboutPageMetric">
                        <div class="AboutPageMetric__value">{{ avg_ste }}</div>
                        <div class="AboutPageMetric__title">средний выход</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
