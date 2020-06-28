# Integrations

## What is a Project?
A project is a website that you desire to check broken resources.

## What is a Schedule?
Schedule is a time which defines when Crawly will start to crawl your project. You can add more than one schedule
 depending on your plan.
 
## What is a Regex Filter?
Sometimes you would not like to crawl some pages/resources of your website, or external reference links. In this
cases you can use Regex Filter to define which pages/resources will be crawled. Sometimes, you would like to separate
your website pages into sections, for example you have your landing page and docs. You can create two different
projects then define Regex Filter for each to filter out the sections.
- My Site Landing
    - Regex Filter: `mysite.com/docs`
- My Site Docs
    - Regex Filter: `mysite.com/landing`
    
    
You can define filters as many as you would like. Each regex must be places in a line.