---
title: What I Learned Creating a Geospatial Platform
date: 2026-04-07
tags: ["news", "applied-projects"]
authors: ["Yao Hua Law"]
---

# What I learned making a geospatial platform

During my 9-month [Nieman Fellowship for Journalism at Harvard](https://nieman.harvard.edu/), I built -- as a side project -- an online platform for tracking forest reserve changes in Peninsular Malaysia. While the platform has some rough edges, it works and is ready to improve on user feedback.

I have been mulling about this project when I was reporting for environmental newsroom [Macaranga](https://www.macaranga.org). Visiting the Harvard Map Collection spurred me into action. To my pleasant surprise, the Collection has land-use maps and atlas of 1970s Peninsular Malaysia that provided baselines for charting forest changes across decades. And I found a guide in librarian Belle Lipton. Chats with Belle kept me on course and shaped my design of the platform.

The platform, called "[Peninsular Malaysia Forest Reserve Tracker](https://yhlreporter.github.io/frt/)", shows changes in forest reserves since 2002. These changes were recorded in government notices called 'gazettes'. Users can study the changes via interactive tables, maps, and figures. Anybody can download the datasets for free.
## What's the need?

My main goal for the platform is to make Peninsular Malaysia forest data available and usable to everyone. Forest data comes in many forms. I chose to start with gazettes and reserve boundaries because I have received the most requests for these. 

I see forests as public assets that span generations. Everyone has a stake in sound and holistic forest management. The endeavor is complicated, but possible. Yet it would be impossible if forest data is kept in safe boxes or too technical for the public to make sense of. In such scenarios, the public could see only the trees the authorities point them to, and never the rest of the forest.

A recent case illustrates the need for open access to forest data, particularly gazettes.

In 2021, a state government in Malaysia approved a housing project that would cut through an urban forest. As bulldozers moved in, local environmental groups protested. They argued that the site was part of a protected forest reserve. The state government countered that they had removed the site from the forest reserve years ago.

Meanwhile, who would fact-check the government? To do so requires overcoming financial, psychological, and skill barriers.

In Malaysia, state governments have sole authority over land and forests. They decide where and when to add or remove forest reserves. The law requires the governments to publish these decisions and their effective dates in gazettes. But few people enjoy direct access to gazettes, except those in professional circles like lawyers and law researchers. Members of the public -- including the media -- must apply for a subscription, which reveals their identities, to read the gazettes. Furthermore, the annual subscription fee was at least $375 -- 25% more than the Malaysian minimum monthly salary in 2021.

Still, someone fact-checked the state government. Astonishingly, they found the gazette missing. Turned out the state government wanted to remove the forest reserve in the early 2000s but did not publish their decision in a gazette. The removal protocol required by law was not completed. Despite this revelation, the state government initially insisted that the removal was proper. Eventually, a year later in 2022, they published a gazette announcing that the site was removed...in 2000. The environmental groups filed to challenge the government's 'backdating' practice in court but their application was [denied by the judges](https://theedgemalaysia.com/node/798223).

The case above illustrates how important it is for the public to quickly know when and where forest reserves are added or removed. When such decisions stay in the shadows, nobody could question them, much less mount a timely and strong legal challenge. The urban forest case concerns a site of 1,000 acres that captured much attention because it was in the city. Yet many larger remote reserves were removed without public scrutiny, leading to losses for biodiversity, economy, and communities. E.g., the Bukit Ibam reserve in 2020 (21,000 acres),  the Jemaluang reserve in 2014 (19,800 acres), and the Perias reserve in 2019 (10,600 acres).

With this platform, anyone who wants the gazettes and forest reserve change data could have them in a few clicks. For free.

## Lessons learned building the platform

Here are the three main lessons I have learned in the process:
### 1. Focus on solving key problems
The platform is a product. It exists to solve specific problems for specific users. Having reported on forest issues in Peninsular Malaysia for 6 years, I found my target user: the journalist me. I began by creating a list of problems that the 'journalist me' faced and whittled it to one: getting verified records of forest reserve changes. I then focused on that problem -- planning the user experience, getting and cleaning the necessary datasets, designing the interface, etc. Only after I have solved that main problem did I look at others. I applied the same approach on a more granular scale too. I dissected a single problem into smaller ones and tackled each in order. This strategy shielded me from distraction and the lure of the countless exciting possibilities offered by powerful AI agents.

### 2. Have AI help me, not replace me
I used Claude Code to code the platform. With my amateurish coding skills, I would have needed many more months to build the platform. Claude has been a superb helper, and I have taken care not to let it be more. I had two main concerns in using AI: it might obstruct my journey to mastery or diminish my creative joy, and it incurs environmental costs. 

In practice, I drafted the user experience and sketched the platform designs on paper. I mixed and matched colors. I wrote every sentence. Then I have Claude tell me how the designs compare in terms of coding feasibility and efficiency. And in terms of reducing environmental cost, once Claude built a working template, I manually replicated and tweaked sections of the code to flesh out the platform.

If I had passed the seat of the artistic director to Claude, it might have created a more elegant and professional website. But I am happy that this rougher version is my creative product.

### 3. A flawed product beats a perfect vision
My journalist experience taught me to first aim for an ugly draft and not a sentence that could stop wars and win awards. A word on paper pushes a story to the end more than several juggling in the mind. I realized it's the same with product design.

One of the biggest challenges in this project is digitizing the maps from the National Atlas 1977. Scanning and georeferencing the 11 maps introduced enough errors that the borders of the states do not align perfectly (an understatement) when I stitched them together. No method proved satisfactory. I had to choose between a flawed digitized map or none. In the end, I decided to upload it because it could be useful for studying land use at the time -- just not along the state borders. 

Now that it's out there, I can improve the map based on user feedback.