----

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

----

Use the [web-tool](http://openretractions.com) to check whether a paper has been retracted.

## API

To query the API, simply `GET` `http://openretractions.com/api/doi/${doi}/data.json`.

e.g.:

```bash
curl http://openretractions.com/api/doi/10.1002/job.1787/data.json
```

## openretraction response format

If the paper has no recorded update in the database, the API will return a 404 (not found) error.

If there's a recorded update, the API will return a JSON object.

If the paper was retracted, the `retracted` field will be `true`. If the field is false, it means a non-retraction update to the paper was recorded by the publisher. This could be:

- a correction or erratum
- an expression of concern
- a withdrawal

In some cases, publishers mis-label retractions as other updates. It is therefore best to follow the update link to check the full statement about any update.

Here's an example JSON response that shows the full format:

```js
{
  "retracted": false,  // whether or not the paper has been retracted
  "timestamp": 1361836800000, // the UNIXtime when the original paper was published
  "update": {
    "timestamp": 1491464002919, // the UNIXtime when the update was recorded
    "doi": "10.1002/job.1858", // the DOI of the update
    "type": "correction" // the publisher's description of the update
  },
  "doi": "10.1002/job.1787", // the DOI of the original paper
  "journal": "Journal of Organizational Behavior",
  "publisher": "Wiley-Blackwell",
  "title": "Erratum: Cognitive and affective identification: Exploring the links between different forms of social identification and personality with work attitudes and behavior"
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
