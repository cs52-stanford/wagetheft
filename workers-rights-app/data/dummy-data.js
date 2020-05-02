import RightsCategory from "../models/rightsCategory";
import SubRight from "../models/subRight";
import Organization from "../models/organization";
import Event from "../models/event";
import LearnMore from "../models/learnMore";

export const RIGHTSCATEGORIES = [
  new RightsCategory(
    "c1",
    "Getting Hired",
    require("../images/hiring-icon.png"),
    "Not getting paid what your employer owes you? Are you not allowed to take sick leaves?",
    "This section addresses the facts on wage and hours as well as your rights when it comes to leaves."
  ),
  new RightsCategory(
    "c2",
    "Mistreatment",
    require("../images/mistreatment-icon.png"),
    "Are you being harrassed or discriminated against at work? Is your employer being unfair or unreasonably disrespectful?",
    "This section addresses your rights to fair treatment, and other topics related to discrimination and general mistreatment."
  ),
  new RightsCategory(
    "c3",
    "Getting Paid",
    require("../images/payments-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c4",
    "Safety & Health",
    require("../images/health-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c5",
    "Unions",
    require("../images/unions-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c6",
    "Unemployment",
    require("../images/unemployment-icon.png"),
    "",
    ""
  ),
  // new RightsCategory(
  //   "c7",
  //   "Favorites",
  //   require("../images/favorites-icon.png"),
  //   "",
  //   "View your saved rights and most useful information, all in one place!"
  // )
];

// https://www.workplacefairness.org/federalagencies for federal agencies!
export const ORGANIZATIONS = [
    new Organization(
      'o1',
      'Wage Theft Coalition',
      require('../images/wage-theft-coalition-logo.png'),
      'The Santa Clara County Wage Theft Coalition actively works to end wage theft, defend workers’ rights, and enforce wage theft judgments.  We hope to accomplish this through policy advocacy, community organizing and outreach, direct action, education, leadership development, and resource coordination.  We work with affected workers and their families, particularly low-wage workers who have been victims of the crime of wage theft.',
      'https://wagetheftcoalition.com/',
      ["c3"]
    ),
    new Organization(
      'o2',
      'OSHA',
      require('../images/osha-logo.png'),
      'The Occupational Safety and Health Administration is an agency of the United States Department of Labor. OSHA ensure safe and healthful working conditions for working men and women by setting and enforcing standards and by providing training, outreach, education and assistance.',
      'https://www.osha.gov/',
      ["c4"]
      ),
    new Organization(
      'o3',
      'NLRB',
      require('../images/NLRB-logo.png'),
      'The National Labor Relations Board is an independent agency of the federal government of the United States with responsibilities for enforcing U.S. labor law in relation to collective bargaining and unfair labor practices.',
      'https://www.nlrb.gov/',
      ["c6"]
      ),
    new Organization(
      'o4',
      'PERB',
      require('../images/PERB-logo.png'),
      'The Public Employment Relations Board (PERB or Board) is a quasi-judicial administrative agency charged with administering the eight collective bargaining statutes covering employees of California’s public schools, colleges, and universities, employees of the State of California, employees of California local public agencies (cities, counties and special districts), trial court employees, trial court interpreters, supervisory employees of the Los Angeles County Metropolitan Transportation Authority, and judicial council employees.',
      'https://perb.ca.gov/',
      ["c6"]
      ),
    new Organization(
      'o5',
      'DFEH',
      require('../images/DFEH-logo.png'),
      'The Department of Fair Employment and Housing is the state agency charged with enforcing California’s civil rights laws. The mission of the DFEH is to protect the people of California from unlawful discrimination in employment, housing, and public accommodations and from hate violence and human trafficking.',
      'https://www.dfeh.ca.gov/',
      ["c2"]
      ),
    new Organization(
      'o6',
      'U.S. Commission on Civil Rights',
      require('../images/commission-civil-rights-logo.png'),
      'The Civil Rights Act of 1957 created the U.S. Commission on Civil Rights. Since then, Congress has reauthorized or extended the legislation creating the Commission several times; the last reauthorization was in 1994 by the Civil Rights Commission Amendments Act of 1994. \n Established as an independent, bipartisan, fact-finding federal agency, our mission is to inform the development of national civil rights policy and enhance enforcement of federal civil rights laws. We pursue this mission by studying alleged deprivations of voting rights and alleged discrimination based on race, color, religion, sex, age, disability, or national origin, or in the administration of justice. We play a vital role in advancing civil rights through objective and comprehensive investigation, research, and analysis on issues of fundamental concern to the federal government and the public.',
      'www.usccr.gov',
      ["c2"]
    ),
    new Organization(
      'o7',
      'EBSA',
      require('../images/EBSA-logo.png'),
      'EBSA is committed to educating and assisting over 200 million pension, health and other employee benefit plan participants and beneficiaries and more than 3 million plan sponsors and members of the employee benefit community. EBSA promotes voluntary compliance and facilitates self-regulation, working diligently to provide quality assistance to plan participants and beneficiaries. EBSA\'s goal in providing direct assistance is to raise the knowledge level of plan participants and beneficiaries, service providers and other interested parties and to ensure that they have access to available plan documents filed with the Department of Labor. This enables participants to better understand and exercise their rights under the law and, when possible, to recover any benefits to which they may be entitled.',
      'https://www.dol.gov/agencies/ebsa',
      ["c3"]
    ),
    new Organization(
      'o8',
      'EEOC',
      require('../images/EEOC-logo.png'),
      'The U.S. Equal Employment Opportunity Commission (EEOC) is responsible for enforcing federal laws that make it illegal to discriminate against a job applicant or an employee because of the person\'s race, color, religion, sex (including pregnancy, gender identity, and sexual orientation), national origin, age (40 or older), disability or genetic information. It is also illegal to discriminate against a person because the person complained about discrimination, filed a charge of discrimination, or participated in an employment discrimination investigation or lawsuit.',
      'https://eeoc.custhelp.com/app/home',
      ["c2"]
    )
];

export const SUBRIGHTS = [
  new SubRight(
    "w1",
    ["c3"],
    "Deductions from Pay",
    require("../images/payments-icon.png"),
    "💵",
    ["lm1", "lm2", "lm3"],
    "An employer has the right to make many types of deductions from an employee’s pay. These deductions include the cost of work-specific uniforms, tools, meals, lodging, and more. For anything that is for the employee’s benefit, the employer must first get the employee’s consent before providing the good or service and deducting the cost of the employee’s pay. However, there are limits on what employers can deduct from pay. ",
    ["o1","o7"]
  ),
  new SubRight(
    "w2",
    ["c3"],
    "Final Paycheck Laws",
    require("../images/payments-icon.png"),
    "💵",
    ["lm1", "lm2"],
    "Getting your final paycheck and being paid everything you are owed can be a tricky situation. What do you do with your accrued vacation days? What if your former employer doesn’t want to pay? Do you get paid during your two-week notice? This page can help answer many questions you may have. To learn more about your rights with respect to final pay, contact the following agencies and read the information below.",
    ["o1","o7"]
  ),
  new SubRight(
    "w3",
    ["c3"],
    "Meal and Rest Breaks",
    require("../images/payments-icon.png"),
    "💵",
    [],
    "Surprisingly, there are no federal laws requiring meal and rest breaks. This area of the law has been left mostly to states with only 20 requiring meal breaks and 9 requiring rest breaks. However, most employers do provide meal breaks and may be required to provide breaks for specific religious or health reasons. To learn more about meal and rest breaks, read below.",
    ["o1","o7"]
    ),
  new SubRight(
    "w4",
    ["c3"],
    "Overtime Pay",
    require("../images/payments-icon.png"),
    "💵",
    [],
    "The subject of overtime pay is one of the most confusing subject for workers seeking to learn more about their employment rights. Many workers do not understand whether or not they are eligible for overtime, or what they should do in the event their employer is not paying them correctly for the extra time that they work. Many of the overtime regulations have very different interpretations and may not yet have been clarified by court decisions. \n\nThis Overtime Pay page explains what types of work are covered by overtime laws, including which kinds of construction work are covered. It also explains how overtime pay is calculated, whether it applies to weekends/holidays, and how overtime pay may apply to salaried employees.",
    ["o1","o7"]
    ),
  new SubRight(
    "h1",
    ["c1"],
    "Interview / Application",
    require("../images/hiring-icon.png"),
    "🔖",
    [],
    "Applying for a new job can be stressful and time-consuming. It is important to know what to expect so you can be prepared and confident during the application and interview process. The following information explains what kind of questions employers can ask you on an application or in an interview for a new job. Additionally, these questions and answers give information about when and how employers can use drug testing, lie detectors, background checks, and credit checks. Lastly, they discuss illegal discrimination against jobs applicants.",
    ["o8"]
  ),
  new SubRight(
    "h2",
    ["c1"],
    "Background Checks",
    require("../images/hiring-icon.png"),
    "🔖",
    [],
    "While an employer may have reasons for wanting to do a background check, as a potential employee, you also have rights and an expectation of privacy. For many types of information, an employer needs to get your written permission before they can get information about you. Once an employer has information about you, they must inform you if they take any adverse action against you because of that information. Additionally, an employer cannot use any of the information in a discriminatory manner. For more information about your rights concerning background checks, read below.",
    ["o8"]
  ),
  new SubRight(
    "h3",
    ["c1"],
    "Non-Disclosure Agreements (NDAs)",
    require("../images/hiring-icon.png"),
    "🔖",
    [],
    "Over one-third of the US workforce is bound to their company by a non-disclosure agreement (NDA). NDAs can force employees to be silent about anything from trade secrets to sexual harassment and assault and have been growing in number as companies become increasingly worried about competition and reputation. It is important as an employee to understand what your employer is asking you to sign. To learn more about NDAs and the workplace, read below.",
    ["o8"]
  ),
  new SubRight(
    "m1",
    ["c2"],
    "Race Discrimination",
    require("../images/mistreatment-icon.png"),
    "✋",
    [],
    "Racial discrimination refers to the practice of treating individuals differently because of their race or color. Federal law prohibits race discrimination in the workplace and incidents of race discrimination can take many forms, in the workplace particularly, race discrimination can be hard to identify. For more information about race discrimination, read below.",
    ["o5", "o6", "o8"]
  ),
  new SubRight(
    "m2",
    ["c2"],
    "Age Discrimination",
    require("../images/mistreatment-icon.png"),
    "✋",
    [],
    "Elderly and youthful employees sometimes experience age discrimination in the workplace. Ageism, is stereotyping and discriminating against individuals or groups on the basis of their age. Employers are generally not allowed to hire, fire, promote, or decide an employee’s compensation based on their age. However, it can be difficult to determine whether an employer’s actions were motivated by age discrimination, or by a genuine belief that another person can perform a particular job better. States have extensive complaint and fact finding procedures to help employees determine when they have been victims of age discrimination and to assert their rights. Read below to learn more about age discrimination and how the law protects you.",
    ["o5", "o6", "o8"]
  ),
  new SubRight(
    "m3",
    ["c2"],
    "Sex / Gender Discrimination",
    require("../images/mistreatment-icon.png"),
    "✋",
    [],
    "Sex or gender discrimination in employment involves treating someone unfavorably because of the person’s sex, whether they are applying for a job or are a current employee. Although women have made clear they have the ability to perform with the same skill and success in every endeavor engaged in by men, the issue of sex discrimination still holds many back. Sex discrimination, although predominantly an issue for women, can sometimes be directed towards men as well. Below, we answer many of the questions that commonly arise with respect to this issue.", 
    ["o5", "o6", "o8"]
  ),
  new SubRight(
    "s1",
    ["c4"],
    "Workplace Safety Protections",
    require("../images/health-icon.png"),
    "⛑",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o2"]
  ),
  new SubRight(
    "s2",
    ["c4"],
    "Infectious Diseases in Workplace",
    require("../images/health-icon.png"),
    "⛑",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o2"]
  ),
  new SubRight(
    "s3",
    ["c4"],
    "Injured at Work",
    require("../images/health-icon.png"),
    "⛑",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o2"]
  ),
  new SubRight(
    "g1",
    ["c5"],
    "Retaliation for Collective Action",
    require("../images/unions-icon.png"),
    "👫",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o3", "o4"]
  ),
  new SubRight(
    "g2",
    ["c5"],
    "Right to Work Laws",
    require("../images/unions-icon.png"),
    "👫",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o3", "o4"]
  ),
  new SubRight(
    "u1",
    ["c6"],
    "Unemployment Insurance Benefits",
    require("../images/unemployment-icon.png"),
    "👩‍💼",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o7", "o8"]
  ),
  new SubRight(
    "u2",
    ["c6"],
    "Fired For No Reason",
    require("../images/unemployment-icon.png"),
    "👩‍💼",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o7", "o8"]
  ),
  new SubRight(
    "u3",
    ["c6"],
    "Unemployment Compensation App",
    require("../images/unemployment-icon.png"),
    "👩‍💼",
    [],
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lacus eget lectus suscipit faucibus. Suspendisse potenti. Proin posuere tellus sit amet urna sodales aliquam. Aliquam accumsan felis et nulla molestie, sit amet iaculis erat malesuada. Pellentesque vel est justo. Vestibulum justo sem, porta sed orci vitae, vestibulum tempor nisl. Nunc vestibulum porta odio, vitae placerat lectus interdum nec. Ut sagittis congue mattis. Etiam mollis, nulla ut pharetra ultricies, urna libero sodales enim, sit amet mattis elit tellus vel lectus. Donec sit amet ligula et enim varius pretium.",
    ["o3"]
  ),
];

export const LEARNMORES = [
  new LearnMore(
    "lm1",
    "How much is overtime pay?",
    require("../images/question.png"),
    [
      {
        header: "Introductory Paragraph",
        body:
          "Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh",
      },
      {
        header: "Elaboration Paragraph",
        body: "ipsum ipsum ipsum. Dolor sit amet.",
      },
    ]
  ),
  new LearnMore(
    "lm2",
    "Which federal laws cover deductions?",
    require("../images/question.png"),
    [
      {
        header: "Introductory Paragraph 2",
        body: "Lorem ipsum dolor ipsum lorem 2.",
      },
      {
        header: "Elaboration Paragraph 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        header: "Look out!",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        header: "",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]
  ),
  new LearnMore(
    "lm3",
    "How do I file a complaint?",
    require("../images/question.png"),
    [
      {
        header: "Introductory Paragraph 3",
        body: "Lorem ipsum dolor ipsum lorem 3.",
      },
      {
        header: "Elaboration Paragraph 3",
        body: "ipsum ipsum ipsum. Dolor sit amet 3.",
      },
    ]
  ),
];

export const EVENTS = [
  new Event(
    "e1",
    "Know Your Rights Workshop",
    "05/20/2020",
    "5:00 pm",
    "https://540westmain.files.wordpress.com/2018/01/know.jpg",
    "WTC",
    "San Jose",
    0,
    "Workshops",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e2",
    "Legal Workshop",
    "06/11/2020",
    "7:00 pm",
    "https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180286505/96155278-word-law-with-judges-gavel-and-legal-books-on-wooden-background.jpg",
    "Stanford Law Clinic",
    "Stanford",
    0,
    "Workshops",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e3",
    "PAWIS Potluck",
    "04/29/2020",
    "2:00 pm",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "Social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e4",
    "PAWIS Church Meeting",
    "04/29/2020",
    "10:00 am",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "Social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
];
