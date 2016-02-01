# swimming-webtask

Webtask to store my swimming records from my twitter stream when I use
the hashtag #apbarreroswimming like
[this](https://twitter.com/apbarrero/status/693067908293988352).

Detailed information on how to create your own webtasks in this
[article](https://auth0.com/blog/2015/07/28/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/).

## Set up

### Mac OSX

    brew install node.js
    npm install -g wt-cli

## Use

    wt init
    wt create --secret MONGO_URL=<mongodb_url> swimming.js
    curl <returned_url>&createdAt=<date>&text=<text>

## Results

Check DB contents (read-only access):

    $ mongo ds049854.mongolab.com:49854/stats -u guest -p guest
