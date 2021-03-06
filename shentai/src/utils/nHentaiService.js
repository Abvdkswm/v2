const cheerio = require('cheerio');

const blacklistEN = require('./blacklist')

class nHentai {
    #checker(doujin, characters, random) {
        if (characters.some(ch => ch === 'miku hatsune')) return random ? { status: 302, message: 'Random again.' } : { status: 403, message: 'We cannot display this material. And you better not look for it.' }
        return doujin;
    }

    #parseSearchLine($, e) {
        let object = { id: '', titles: { english: '' }, cover: '' }
        const $this = $(e)

        object.id = $this.find('a').attr('href').match(/\d+/)[0]
        object.cover = $this.find('.lazyload').attr('data-src')
        object.titles.english = $this.find('div.caption').html()
        
        if (object.titles.english.split(/ +/).some(word => blacklistEN.includes(word.toLowerCase()))) return;
        return object
    }

    parse(html, random) {
        let object = { id: 0, author: '', titles: {}, pages: [], tags: [] }
        const $ = cheerio.load(html)

        if ($('.error')[0]) return { status: 404, message: `Not Found. Looks like what you're looking for isn't here.`}

        const titleWriter = { 0: 'english', 1: 'original' }
        $('.title').each((i, e) => object.titles[titleWriter[i]] = $(e).find('> .pretty').html())

        object.id = $('#gallery_id').html().match(/\d+/)[0]

        $('.thumbs > div.thumb-container').each((i, e) => object.pages.push($(e).find('a>img').attr('data-src').replace(/t(\d)\./, (m, p) => `i${p}.`).replace('t.', '.')))
        object['cover'] = $('#cover').find('.lazyload').attr('data-src')

        const tagsBlock = $('.tag-container.field-name').eq(2).children().html()
        $(tagsBlock).each((i, e) => object.tags.push($(e).find('span.name').html().toLowerCase()))
        let author = $('.tag-container.field-name').eq(3).children().find('span.name').html()
        if (author) object[author] = author
        else delete object['author']

        let characters = [];
        const charactersBlock = $('.tag-container.field-name').next().children().html()
        $(charactersBlock).each((i, e) => characters.push($(e).find('span.name').html().toLowerCase()))

        return this.#checker(object, characters, random);
    }

    parseSearch(html, isArtist) {
        let results = [];
        const $ = cheerio.load(html)

        if (isArtist) if ($('.error')[0]) return { status: 404, message: `Not Found. Looks like what you're looking for isn't here.`}
        if (!isArtist) if (Boolean($('div.container.index-container > h2').html())) return { status: 400, message: 'No results found.' };
        let allPages, allCount = isArtist ? Number($('.count')[0].children[0].data.replace(',', '').match(/\d+/)[0]) : Number($('h1').children()[0].next.data.replace(',', '').match(/\d+/)[0])
        if ($('.last').length) allPages = Number($('.last').attr('href').match(/page=(\d+)/)[1])
        else if (isArtist) allPages = 1 
        else allPages = Number($('.page.current').attr('href').match(/page=(\d+)/)[1]);

        $('div.container.index-container').children().each((i, e) => {
            let object = this.#parseSearchLine($, e)
            if (object) results.push(object)
        })
        return { doujins: results, allPages, allCount };
    }

    parsePopular(html) {
        let results = [];
        const $ = cheerio.load(html)

        $('.index-popular').find('.gallery').each((i, e) => {
            let object = this.#parseSearchLine($, e)
            if (object) results.push(object)
        })
        return results;
    }

    parseNew(html) {
        let results = [];
        const $ = cheerio.load(html)

        $('.container.index-container').find('.gallery').each((i, e) => {
            let object = this.#parseSearchLine($, e)
            if (object) results.push(object)
        })
        return results;
    }
}

module.exports = nHentai