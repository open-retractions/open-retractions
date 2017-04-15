<div align="center">
  <h1>:bangbang: :page_facing_up: :mag_right: Open retractions :mag: :page_facing_up: :bangbang:</h1>
  <h2>An API and web interface to check whether a paper has been retracted</h2>
</div>

<div align="center">
  <a href="https://github.com/fathomlabs/crossref-cli/blob/master/LICENSE" alt="MIT license"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" /></a>&nbsp;
  <a href="http://fathomlabs.io" target="_blank">
  <img src="https://img.shields.io/badge/made_with-❤️💛💚💙💜💖-e6e6e6.svg?style=flat-square" /></a>
</div>

Use the [web-tool](http://openretractions.com) to check whether a paper has been retracted.

## API

To query the API, simply `GET` `http://openretractions.com/api/doi/${doi}/data.json`.

For example:

```bash
curl http://openretractions.com/api/doi/10.7860/JCDR/2013/4833.2724/data.json | jq
{
  "retracted": true,
  "title": "A prevalence of thyroid disorder in Western part of Nepal.",
  "url": "http://doi.org/10.7860/JCDR/2013/4833.2724",
  "journal": "Journal of clinical and diagnostic research : JCDR",
  "update": "retracted"
}
```
