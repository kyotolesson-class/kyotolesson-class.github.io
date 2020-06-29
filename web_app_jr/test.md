---
layout: default
title: Using Markdown Across the site
title2: Instructions
---

* [Preamble](#preamble)
* [Markdown version](#markdown-version)
  * [tech specs](#tech-specs)
* [Usage Instructions](#usage-instructions)
  * [Your content headings](#your-content-headings)
  * [Making expandable sections](#making-expandable-sections)
* [your main heading](#your-main-heading)
  * [links to other markdown pages/jekyll-relative-links](#links-to-other-markdown-pagesjekyll-relative-links)


## Preamble

First add the following to your preamble, **including the triple dashes**:

```
---
layout: default
title: (yout title)
title2: (your subtitle)
---
```
If needed, we can create different layouts for different classes. For example, the menu items at the top of this page are junior coder specific and don't work because we are in a different folder. I would need to create a new layout or modify the default to be more class-neutral. The method of use should be about the same. 


## Markdown version

The main text should be in the [kramdown](https://kramdown.gettalong.org/quickref.html) version of Markdown, which is the flavor used by [the jekyll processor](https://jekyllrb.com/docs/configuration/markdown/#kramdown). For most purposes this is the same as standard markdown.

<details>
<summary>### tech specs
</summary>

### tech specs

The following plugins and settings are used: 

```
plugins:
  - jekyll-relative-links
theme: jekyll-theme-leap-day
kramdown:
    parse_block_html: true
    input: GFM 
    hard_wrap: false
github: [metadata] 
encoding: UTF-8 

```
</details>

## Usage Instructions

### Your content headings

You should start your top level content headings, such as "Preamble", "Markdown Version" and "Usage Instructions" above, with level 2 "##" headers. The level 1 header is reserved for the title.



### Making expandable sections

Wrap your content in a details/summary tag as follows to make an expandable section:

<details>
<summary>## your main heading
</summary>

## your main heading


your content, including headings, etc.

</details>


```
<details>
<summary>## your main heading
</summary>

## your main heading


your content, including headings, etc.

</details>
```

Note that you **MUST REPEAT** the main heading (h2, h3, etc.) to make it appear correctly in the table of contents. That repeated first heading in the content is erased via js/css, so if you omit it it may delete some of your lower-lying content...

If you do this, it should properly handle clicks in the table of contents/sidebar.


### links to other markdown pages/jekyll-relative-links

The "jekyll-relative-links" plugin should automagically convert direct links to markdown pages by changing their file extension in the output html from "md" to "html":


* [link to original md file](testlink.md) 

```
[link to original md file](testlink.md) 

```

is rendered as: 


* [how link should appear for pages](testlink.html)


```
[how link should appear for pages](testlink.html)

```

The reason is that the original link while it will render as a valid link on GitHub.com, but it is not (supposed to be) a valid link on Pages. With the plugin it should work now, but if something doesn't work, in some situations you may need to know this.
