---
template: homepage2.html
---

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
