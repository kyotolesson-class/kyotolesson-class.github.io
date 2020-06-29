---
layout: default
title: Using Markdown Across the site
title2: Instructions
---

## Preamble

First add the following to your preamble, including the triple dashes:

```
---
layout: default
title: (yout title)
title2: (your subtitle)
---
```

## Markdown version

The main text should be in the [kramdown](https://kramdown.gettalong.org/quickref.html) version of Markdown, which is the flavor used by [the jekyll processor](https://jekyllrb.com/docs/configuration/markdown/#kramdown). For most purposes this is the standard markdown.

The following plugins and settings are used: 

plugins:
  - jekyll-relative-links
theme: jekyll-theme-leap-day
kramdown:
    parse_block_html: true
    input: GFM 
    hard_wrap: false
github: [metadata] 
encoding: UTF-8 

## Caveats

### Your content headings

You should start all your content headings with level 2 "##" headers. The level 1 header is reserved for the title.

### links to other markdown pages/jekyll-relative-links

links to other markdown pages should have their file extenstion modified from "md" to "html". 

For example, a link like this in a Markdown file:


* [link to original md file](junior_coders/0c23f5f29d83139f13fc32a19c49dee01bfcd93f/monday_pm/a_mon0500pm.md)
```
[link to original md file](junior_coders/0c23f5f29d83139f13fc32a19c49dee01bfcd93f/monday_pm/a_mon0500pm.md)

```
will render as a valid link on GitHub.com, but it will not be a valid link on Pages. Instead, this plugin converts that link to:

* [how link should appear for pages](junior_coders/0c23f5f29d83139f13fc32a19c49dee01bfcd93f/monday_pm/a_mon0500pm.md)


```
[how link should appear for pages](junior_coders/0c23f5f29d83139f13fc32a19c49dee01bfcd93f/monday_pm/a_mon0500pm.md)

```

The plugin above "jekyll-relative-links" should force it to happen automatically, but it is better if you code it right from the start.

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

Note that you **MUST** to repeat the main heading (h1, h2, etc.) to make it appear correctly in the table of contents. 

If you do this, it should properly handle clicks in the table of contents/sidebar.



