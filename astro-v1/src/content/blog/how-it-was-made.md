---
title: 'Why I Created This Website (and how)'
description: 'Creating things is a journey that never ends where you expect.'
pubDate: 'Jul 08 2024'
heroImage: '/blog-placeholder-3.jpg'
---

I built this website to play around with web development and front-end tooling.  However,
this was not my original goal. This site came about organically as I was inspired in 3 phases:

-  Debugging HTTPS
- Discovering Cloudflare
-  Learning About Static Sites

### HTTPS
For years, I've had a domain on Namecheap and I'd set up little redirects to have nicer URLs.
However, they always had the critical flaw that they were all `http`-only; if someone
who didn't know or care about HTTPS tried to plug in the URL, they'd get an error and the connection
would fail. Explaining the issue was never easy.

My first solution was to try and install a certificate on Namecheap. This was doomed to failure -
without a real website to host/store/serve the certificate, I was reliant on Namecheap to provide this
functionality. They do not offer this functionality.

This is where I got "the bug" and got interested in starting my own website. It turns out, creating a website
is completely ancillary to the problem I was trying to solve initially - but solving that initial problem
got me interested.

### Cloudflare
Cloudflare is awesome. This will come as no surprise to some people, but I was using it for the first time
and it offers so much functionality, basically for free. No wonder people like it so much.

All I actually needed to do was transfer my DNS to Cloudflare, set the SSL to ["Flexible" mode](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/flexible/) and my original redirect problem was completely solved!

However, I was excited by the possiblities and I liked the idea of creating something public. This led me to Static Sites...

### Static Sites
While debugging HTTPS and attempting to install a Certificate to an undefined location, I stumbled
across [this reddit post](https://www.reddit.com/r/googlecloud/comments/v33x2r/hosting_a_static_website_ssl_without_http_load/)
talking about hosting a static site on GCS for pennies/year. 

I've always liked the idea of a static site - sending raw HTML without servers, databases, or any of the bloat
that's overcome the modern web felt appealing and fun. I typically work with Data and Machine Learning - Frontend, CI/CD, and Dev Ops felt like a fun departure from my typical workflows.

I wanted to build something to experiment and play with, and once I found [this blog post](https://devopsdirective.com/posts/2020/10/gcs-cloudflare-hosting/) I was off to the races. My first website was a very simple, hand-coded HTML page with links. I wanted to do something more scalable and fun and landed on [Astro](https://astro.build/).

### Current Tech Stack
Currently the stack is:
* Cloudflare DNS and CDN
* GCS Bucket for storage
* Github Actions for CI/CD
* [Astro](https://astro.build/) for Static Site Generation

I'm pretty happy with it so far - it's lightning fast and easy to work with. I have very limited Astro experience - time
will tell if that's what I want to stay with.:w