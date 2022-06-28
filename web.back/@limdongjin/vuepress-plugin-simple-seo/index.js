const { path } = require('@vuepress/shared-utils');

module.exports = (options = {}, context) => ({
    extendPageData($page) {
        const {
            frontmatter,
            path
        } = $page;

        let root_url = options.root_url || "";
        if (frontmatter.root_url) {
            root_url = frontmatter.root_url
        }
        const full_url = root_url + path;

        const is_duplicate_og = property => has_property(frontmatter, property);
        const is_duplicate_tw = name => has_name(frontmatter, name);
        const is_duplicate_ite = ite => has_itemprop(frontmatter, ite);

        const push_og = (property, content) => frontmatter.meta.push(og_template(property, content));
        const push_twit = (name, content) => frontmatter.meta.push(twitter_template(name, content));

        const image_seo = (options = {}, frontmatter) => {
            const {
                default_image,
                default_image_type,
                default_image_width,
                default_image_height,
                default_image_alt
            } = options;

            const {
                image,
                image_type,
                image_width,
                image_height,
                image_alt
            } = frontmatter;

            let default_image_full_path;
            if (default_image)
                default_image_full_path = root_url + default_image;

            // Default
            if (!is_duplicate_og('og:image') && !image) {
                const push_og_image_default = {
                    'og:image': default_image_full_path,
                    'og:image:type': default_image_type,
                    'og:image:width': default_image_width,
                    'og:image:height': default_image_height,
                    'og:image:alt': default_image_alt
                };

                Object.keys(push_og_image_default).forEach((property) => {
                    if (!is_duplicate_og(property) && push_og_image_default[property])
                        push_og(property, push_og_image_default[property])
                })

                if (!is_duplicate_tw('twitter:image') && !image) // case. image empty
                    push_twit('twitter:image', default_image_full_path);
            }

            // frontmatter
            if (image) {
                const push_og_image_front = {
                    'og:image': image,
                    'og:image:type': image_type,
                    'og:image:width': image_width,
                    'og:image:height': image_height,
                    'og:image:alt': image_alt
                }
                Object.keys(push_og_image_front).forEach((property) => {
                    if (!is_duplicate_og(property)) push_og(property, push_og_image_front[property]);
                })

                if (!is_duplicate_tw('twitter:image')) push_twit('twitter:image', image)
                if (!is_duplicate_ite('image'))
                    frontmatter.meta.push(itemprop_template('image', image))
            }
        };


        const description_seo = () => {
            const {
                description
            } = frontmatter
            let meta_description = find_meta_description(frontmatter);

            const { default_description } = options

            if (default_description) {
                if (!is_duplicate_og('og:description'))
                    push_og('og:description', default_description);
                if (!is_duplicate_tw('twitter:description'))
                    push_twit('twitter:description', default_description);
                if (!meta_description)
                    frontmatter.meta.push({ 'name': 'description', 'content': default_description });
                if (!is_duplicate_ite('description'))
                    frontmatter.meta.push(itemprop_template('description', default_description))
            }

            if (description) {
                if (!is_duplicate_og('og:description'))
                    push_og('og:description', description);
                if (!is_duplicate_tw('twitter:description'))
                    push_twit('twitter:description', description);
                if (!meta_description)
                    frontmatter.meta.push({ 'name': 'description', 'content': description });
                if (!is_duplicate_ite('description'))
                    frontmatter.meta.push(itemprop_template('description', description))
            }

            meta_description = find_meta_description(frontmatter);

            if (meta_description) {
                if (!is_duplicate_og('og:description')) {
                    push_og('og:description', meta_description);
                }
                if (!is_duplicate_tw('twitter:description'))
                    push_twit('twitter:description', meta_description);
                if (!is_duplicate_ite('description'))
                    frontmatter.meta.push(itemprop_template('description', meta_description))
            }
        };

        const url_seo = () => {
            if (!is_duplicate_og('og:url'))
                push_og('og:url', full_url);
            if (!has_name(frontmatter, 'twitter:url'))
                push_twit('twitter:url', full_url)
        };

        const title_seo = () => {
            const { title } = $page
            const { default_title } = options

            if (default_title) {
                if (!is_duplicate_og('og:title'))
                    push_og('og:title', default_title);
                if (!is_duplicate_tw('twitter:title'))
                    push_twit('twitter:title', default_title);
                if (!is_duplicate_ite('name'))
                    frontmatter.meta.push(itemprop_template('name', default_title))
                return
            }

            if (frontmatter.title) {
                if (!is_duplicate_og('og:title'))
                    push_og('og:title', frontmatter.title);
                if (!is_duplicate_tw('twitter:title'))
                    push_twit('twitter:title', frontmatter.title);
                if (!is_duplicate_ite('name'))
                    frontmatter.meta.push(itemprop_template('name', frontmatter.title))
                return
            }
    
            if (!is_duplicate_og('og:title'))
                push_og('og:title', title);
            if (!is_duplicate_tw('twitter:title'))
                push_twit('twitter:title', title);
            if (!is_duplicate_ite('name'))
                frontmatter.meta.push(itemprop_template('name', title))
        };

        const twitter_creator_seo = () => {
            const { default_twitter_creator } = options
            const { twitter_creator } = frontmatter
            let creator;
            if (is_duplicate_tw('twitter:creator')) return

            if (twitter_creator) {
                if (!twitter_creator.includes("@")) {
                    creator = "@" + twitter_creator
                } else {
                    creator = twitter_creator
                }
                push_twit('twitter:creator', creator);
            }
            else if (default_twitter_creator) {
                //console.log("default_twitter_creator", default_twitter_creator)
                if (!default_twitter_creator.includes("@")) {
                    creator = "@" + default_twitter_creator
                } else {
                    creator = default_twitter_creator
                }
                push_twit('twitter:creator', creator)
            }
        };

        const og_type_seo = () => {
            const { og_type } = frontmatter
            let default_og_type = options.default_og_type || "article";

            if (is_duplicate_og('og:type')) return

            if (og_type)
                push_og('og:type', og_type);
            else
                push_og('og:type', default_og_type)
        };

        const twitter_card_seo = () => {
            let default_twitter_card = options.default_twitter_card || "summary";
            const { twitter_card } = frontmatter

            if (!is_duplicate_tw('twitter:card') && twitter_card)
                push_twit('twitter:card', twitter_card);
            if (!is_duplicate_tw('twitter:card'))
                push_twit('twitter:card', default_twitter_card)
        };

        const site_name_seo = () => {
            const { default_site_name } = options
            const { site_name } = frontmatter

            if (!is_duplicate_og('og:site_name') && site_name)
                push_og('og:site_name', site_name);
            if (!is_duplicate_og('og:site_name') && default_site_name)
                push_og('og:site_name', default_site_name)
        };

        const twitter_site_seo = () => {
            const { default_twitter_site } = options
            const { twitter_site } = frontmatter
            let sit;

            if (!is_duplicate_tw('twitter:site') && twitter_site) {
                if (!twitter_site.includes("@")) {
                    sit = "@" + twitter_site
                } else {
                    sit = twitter_site
                }
                push_twit('twitter:site', sit);
                return
            }

            if (!is_duplicate_tw('twitter:site') && default_twitter_site) {
                if (!twitter_site.includes("@")) {
                    sit = "@" + default_twitter_site
                } else {
                    sit = default_twitter_site
                }
                push_twit('twitter:site', sit)
            }
        };

        if (!exists_meta(frontmatter)) frontmatter.meta = [];
        /* IMAGE SEO */
        image_seo(options, frontmatter);
        /* DESCRIPTION SEO */
        description_seo();
        /* URL SEO */
        url_seo();
        /* TITLE SEO */
        title_seo();
        /* OG TYPE SEO */
        og_type_seo();
        /* TWITTER CARD SEO */
        twitter_card_seo();
        /* SITE NAME SEO */
        site_name_seo();
        /* TWITTER SITE SEO */
        twitter_site_seo();
        /* TWITTER CREATOR SEO */
        twitter_creator_seo();
    }
});

const find_meta_description = frontmatter => {
    let flag = false;
    let description = "";

    for (const elem of frontmatter.meta) if (elem.hasOwnProperty('name') && elem.name === 'description') {
        flag = true;
        description = elem.content
    }

    if (flag) return description
    return flag
};

const exists_meta = frontmatter => frontmatter.meta !== undefined;

const has_property = (frontmatter, property_name) => {
    let flag = false;
    frontmatter.meta.forEach(elem => {
        if (elem.hasOwnProperty('property') && elem.property === property_name) flag = true;
    })
    return flag
};

const has_name = (frontmatter, name) => {
    let flag = false;
    frontmatter.meta.forEach(elem => {
        if (elem.hasOwnProperty('name') && elem.name === name) flag = true;
    })
    return flag
};
const has_itemprop = (frontmatter, itemprop) => {
    let flag = false;
    frontmatter.meta.forEach(elem => {
        if (elem.hasOwnProperty('itemprop') && elem.itemprop === itemprop) flag = true;
    });
    return flag
};

const og_template = (property, content) => ({
    'property': property,
    'content': content
});

const twitter_template = (name, content) => ({
    'name': name,
    'content': content
});

const itemprop_template = (itemprop, content) => ({
    'itemprop': itemprop,
    'content': content
});
