<div align="center">
  <h1>:bangbang: :page_facing_up: :mag_right: Open retractions :mag: :page_facing_up: :bangbang:</h1>
  <h2>An API and web interface to check whether a paper has been retracted</h2>
</div>

<div align="center">
  <a href="https://github.com/fathomlabs/crossref-cli/blob/master/LICENSE" alt="MIT license">
    <img src="https://img.shields.io/badge/code_license-MIT-green.svg?style=flat-square" />
  </a>&nbsp;
  <a href="https://github.com/fathomlabs/crossref-cli/blob/master/api/LICENSE" alt="MIT license">
    <img src="https://img.shields.io/badge/data-public_domain_(CC0_v1.0)-yellow.svg?style=flat-square" />
  </a>&nbsp;
  <a href="http://fathomlabs.io" target="_blank">
    <img src="https://img.shields.io/badge/made_with-❤️💛💚💙💜💖-e6e6e6.svg?style=flat-square" />
  </a>
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

## credits

- The web app is built with [choo](https://github.com/yoshuawuyts/choo) :steam_locomotive::train::train::train::train: by [@yoshuawuyts](https://github.com/yoshuawuyts) - we really :heart: choo.
- The data currently comes from:
  - the [PubMed API](https://www.ncbi.nlm.nih.gov/home/develop/api.shtml), using [bionode-ncbi](https://github.com/bionode/bionode-ncbi)
  - the [CrossRef API](http://api.crossref.org), using [crossref-retractions](https://github.com/fathomlabs/crossref-retractions)
- We use [jq](https://github.com/stedolan/jq) by [@stedolan](https://github.com/stedolan) a lot for manipulating streams of JSON data.

## copyright and licenses

**The code** in this repository is released under the [MIT license](https://github.com/fathomlabs/crossref-cli/blob/master/LICENSE).

**The data** are factual and therefore not subject to copyright. To the extent that we have accrued any rights to the data (such as compilation, arrangement and presentation rights), we waive those rights to the extent permitted by law, and place all such works in the public domain. Specifically, we do so using the [CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).
