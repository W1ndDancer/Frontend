const articleItem = {
    props: ['imgSrc'],
    template: `
        <div class="articles-news-block__item-demo">
            <img :src="i.imgSrc" :alt="i.imgAlt" class="img img_articles-news-item">
            <div class="text text_16 articles-news-block__room-name-el">{{i.roomDesign}}</div>
        </div>
        <div class="articles-news-block__item-info">
            <h4 class="title title_25"><a href="blog_detailed/blog_detailed.html">{{i.articleTitle}}</a></h4>
            <div class="date-and-btn-block">
                <p class="text text_16">{{i.date}}</p>
                <a href="blog_detailed/blog_detailed.html">
                    <svg class="rnd-btn" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                        viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    `,
};