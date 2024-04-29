---
layout: page
title: Home
id: home
permalink: /
image: https://cdn.0xcadams.com/0xcadams_streaks_of_amber_4d47bcf2-c950-4c67-80ca-06d571f2f8d7.png
---

<img alt="Streaks of amber above a lake" src="https://cdn.0xcadams.com/0xcadams_streaks_of_amber_4d47bcf2-c950-4c67-80ca-06d571f2f8d7.png" style="width: 100%; border-radius: 6px;" />

# Essays

<p style="padding: 1.5em 1em; outline: hsl(0, 0%, 30%) solid 1px; font-size: 0.8em; background: linear-gradient(to bottom right, hsl(0, 0%, 8%), hsl(0, 0%, 7%)); border-radius: 6px;">
  My goal is for these essays to be evergreen. I hope they help you in your life journey.
</p>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes %}
    <li>
      <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
