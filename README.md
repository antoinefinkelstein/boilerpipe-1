# boilerpipe

## API

GET /extractor/method?url=URL

| Parameters  | Descriptions |
| ----------  | ------------ |
| extractor   | name of the extractor to use |
| method      | extraction method |
| url         | the url to extract content from |

### Extractors

| Name                        | Descriptions |
| ----                        | ------------ |
| article                     | A full-text extractor which is tuned towards news articles. In this scenario it achieves higher accuracy than DefaultExtractor. |
| keepeverything              | Treats everything as "content". Useful to track down SAX parsing errors. |
| keepeverythingwithminkwords | - |
| largestcontent              | Like DefaultExtractor, but only keeps the largest content block. Good for non-article style texts with only one main content block. |
| numwordsrules               | - |
| canola                      | - |
| default                     |  quite generic full-text extractor, but usually not as good as ArticleExtractor. |

### Methods

| Name    | Descriptions |
| ----    | ------------ |
| text    | Output the extracted main content as plain text |
| images  | - |
| html    | Output the whole HTML document and highlight the extracted main content |
