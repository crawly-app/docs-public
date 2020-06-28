# Introduction

## What is Crawly?
Crawly is a tool to gather all monitoring needs into one dashboard. It allows you to keep track uptime, certificate
, assets of your application. It is a more than uptime monitoring service, but a tool to enable your team to track
 your application behaviour.

Crawly supports E-mail, Slack, Webhook and PagerDuty integration to enable you to receive notification.

## What is a project?
A project is your web application that you would like to monitor, each application will have own uptime, certificate, 
resource monitoring dedicated to it. We strongly suggest creating a project for each microservice of your web
application. For example, API, Docs, Landing etc. Division to smaller application groups allow you to monitor your
web application better.

You can find detailed explanation about settings and notification under `Project` category.

## What is a team?
A team is a workspace that you can share applications with your team members. Each team has own integration,
notification, status pages and billing capacity. Once you create a team, your 7-days trial period will start then you
can add your projects. Afterwards, you will need to upgrade your plan to further usage.

## How alerting works?
Crawly keep ping your application randomly selected regions within 4 minutes. You may select 20 regions. When your
web application timeouts (4 seconds) or return a response code other than `2XX`, we will count it as downtime. When
the failed regions count reaches the threshold which you defined, we will create an `Outage` and alert you with E-mail,
Slack, Webhook and PagerDuty.