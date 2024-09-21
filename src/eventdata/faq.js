import { FAQCodeOfConduct, FAQDeadline, FAQPrizes, FAQRegister, FAQWhen } from './FAQComponents';

export default [
  {
    category: "About HackTJ",
    questions: [
      {
        question: 'What is HackTJ?',
        answer: 'HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or work with your friends to make your idea come to life.'
      },
      {
        question: 'When is HackTJ?',
        answerComponent: FAQWhen
      },
      {
        question: "Isn't hacking illegal?",
        answer: 'In the context of a hackathon, "hacking" is to build a real application over the length of the event. It\'s important to not confuse this with illegal hacking, which is gaining unauthorized access to a computer.'
      },
      {
        question: 'Is there a code of conduct?',
        answerComponent: FAQCodeOfConduct
      }
    ]
  },
  {
    category: "Registration",
    questions: [
      {
        question: 'How do I register?',
        answerComponent: FAQRegister
      },
      {
        question: 'Is there a deadline?',
        answerComponent: FAQDeadline
      },
      {
        question: 'How are ticket decisions made?',
        answer: 'Tickets decisions are made based on a variety of factors, including the registration time. Sign up quickly to increase the chance that you are given a HackTJ 12.0 ticket!'
      },
      {
        question: 'Is there any cost?',
        answer: 'Nope! Thanks to our sponsors, HackTJ is completely free!'
      }
    ]
  },
  {
    category: "Prizes and Eligibility",
    questions: [
      {
        question: 'What prizes can I win?',
        answerComponent: FAQPrizes
      },
      {
        question: 'Who can attend?',
        answer: "HackTJ is open to all current high school students attending Fairfax County Public Schools. If you're not a high school student but would like to attend, consider coming as a judge, mentor, or volunteer."
      },
      {
        question: 'Do I need a team?',
        answer: "If you already have a team of 2-4 people you want to work with, that's awesome! If not don't worry because we'll have an opportunity for people to join a team if they need one."
      }
    ]
  }
];