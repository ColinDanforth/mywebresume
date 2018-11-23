export default [
  {
    rootText: [
      "The last half of 2018 has been spent designing and building a Vendor Payment tool for our companies " +
      "finance team. This is application is internally facing and integrates with services involved in all aspects " +
      "of redemption in digital media. My main focus was in building the react front-end for finance to utilize the " +
      "Scala API that handles all actions related to vendor payments, invoicing, order updates and reporting. ",
      "One of the most interesting challenges with this tool was designing a fully dynamic table structure that allowed " +
      "for pagination and display of 200,000+ records all of which could be selected and removed from selection for the " +
      "purpose of invoicing and status updates. We decided to build the table custom to allow for the table to adequately " +
      "update headers and layout depending on what fields were returned from the database. By designing the table in this " +
      "way we were able to decouple the function of the front end from any changes to the data structure. " +
      "This was particularly relevant as the system is still in an MVP stage and as more channels of the business's " +
      "redemption streams are added there will be significant updates required to the data structure and fields used for " +
      "each type of order object and use case. This paid off dramatically as since we finished the front-end core elements " +
      "several months ago fields in our PostGres DB have been updated on numerous occasions, reordered and renamed. No work " +
      "has been required for this on the front-end what so ever.",
      "The other really interesting element to this work was configuring the selectable features for the table. This required " +
      "a ton of logical design consideration implementing a select all that would affect thousands of pages keeping track of " +
      "what orders had been added to an invoice batch or excluded from an invoice batch. Solving this problem was incredibly " +
      "rewarding and still puts a smile on my face thinking back to the efficient solution we managed to get integrated with " +
      "the design."
    ],
    title: 'Accounts Payable SOR',
  },
  {
    rootText: [
      "Early this year my team and I organized around an automation opportunity in some of the systems were " +
      "involved in supporting. We completely redesigned an existing service and built it with an all new technology stack." +
      " Our focus was on functional programming practices and TDD. The application was built entirely with node and used " +
      "an AWS deployment pipeline with full CI/CD integration through Jenkins.",
      "One of the best parts of this project was working with my team in all new technologies. " +
      "While parts of the stack weren't new to me it was great to work with a new team through the learning process. " +
      "We spent most of our time mobbing and building in tandem.",
      "The project was a great success and is fore-casted to save the company 1 million plus dollars each year in manual errors " +
      "and call times for flight changes. Our team developed a solid base of design experience and was able to better show " +
      "our superiors the teams capabilities."
    ],
    title: 'RCGCalculator - Airmiles Call Center Flight Automation',
  },
  {
    rootText: [
      "just under four years ago I began working at LoyaltyOne as a software developer. " +
      "I have worked for the company now for just a little over 10 years. We I first started " +
      "developing I was given a support role working on adding new features, and trouble shooting " +
      "issues for their Instant Platform. Instant is real time redemption at sponsor locations " +
      "using your Airmiles Cash balance to lower the cost at point of sale. For this work I was " +
      "updating and maintaining a lagacy Java Application. The platform was very fast and consistent " +
      "and required trouble shooting across multiple systems as Instant works as an aggregated service " +
      "coordinating calls and organizing responses back to external vender built services.",
      "During this project I learned that Java is not a platform I am particularly happy to work on. I " +
      "personally find that defining your services, classes, variables in multiple places to maintain context " +
      "very tedious. It was still great experience and learned a ton about service design, and some of " +
      "the give and take that occurs when you have competing requirements with in a service."
    ],
    title: 'The L1 Instant Platform',
  },
]
