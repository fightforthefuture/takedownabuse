---
layout: story
featured: false
class: toc
title: 'DMCA Horror Stories'
description: 'DMCA takedown abuse is turning the Internet into a Free Speech graveyard.'
---
### ~ Table of Contents ~

DMCA takedown abuse is censoring online content and turning the Internet into a
graveyard for Free Speech. We've gathered some of the worst examples of DMCA abuse.
Do you have a DMCA Horror Story? [Submit it here!](https://docs.google.com/forms/d/18z4-YyRmhJvjm4U5htHVVcXM2wpE_IiidXfHH9Jn0JU/viewform)

{% for page in site.stories %}{% if page.class != 'toc' %}
  * [{{ page.title | replace: 'DMCA Horror Stories: ', '' }}]({{ page.url }})
{% endif %}{% endfor %}
