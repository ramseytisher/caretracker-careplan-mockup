export const mockData = [
  {
    key: "1",
    patient: "Ramsey Tisher",
    healthConcerns: [
      {
        name: "Anxiety",
        status: "Active",
        onsetDate: "11/21/2017",
      },
      {
        name: "Chronic Knee Pain",
        status: "Active",
        onsetDate: "11/21/2017",
      },
      {
        name: "Depression",
        status: "Active",
        onsetDate: "11/21/2017",
      },
      {
        name: "Hypertension",
        status: "Active",
        onsetDate: "11/21/2017",
      },
      {
        name: "No Access to Reliable Transportation",
        status: "Active",
        onsetDate: "11/21/2017",
      },
    ],
    goals: {
      longTermGoals: [
        {
          description: "Louie wants to be able to play with his grandchilren.",
          targetDate: "11/30/2019",
          status: "In Progress",
          owner: "REED, LOUIE",
          progression: "Progressing",
          discipline: "Medical, Behavioral, Patient",
          progressionUpdated: "9/6/2019 12:05PM",
          comments: "No long term goal comments",
          shortTermGoals: [
            {
              description: "Improve knee pain",
              targetDate: "11/01/2019",
              status: "In Progress",
              owner: "REED, LOUIE",
              progression: "Progressing",
              discipline: "Medical",
              progressionUpdated: "9/6/2019 12:05PM",
              comments: "No short term goal comments",
              activities: [
                {
                  actDescription: "Hamstring stretches daily",
                  schedule: "1 times every 1 Days for 6 Months",
                  owner: "--",
                  discipline: "Physical Terapy, Patient",
                },
                {
                  actDescription: "Walk for 30 minutes daily",
                  schedule: "1 times every 1 Days for 6 Months",
                  owner: "--",
                  discipline: "Physical Terapy, Patient",
                },
              ],
            },
          ],
        },
      ],
      otherGoals: [
        {
          description: "Maintain a Healthy Blood Pressure",
          targetDate: "12/31/2019",
          status: "In Progress",
          owner: "REED, LOUIE",
          progression: "Regressing",
          discipline: "Medical",
          progressionUpdated: "10/9/2019 12:05PM",
          comments: "No goal comments",
          activities: [
            {
              actDescription: "Take Medication As Prescribed",
              schedule: "No",
              owner: "REED, LOUIE",
              discipline: "Medical",
            },
            {
              actDescription: "Walk for 30 minutes daily",
              schedule: "1 times every 1 Days for 6 Months",
              owner: "--",
              discipline: "Physical Terapy, Patient",
            },
          ],
        },
      ],
    },
    strengths: [
      { description: "Adaptable" },
      { description: "Adequate Decision-making Skills" },
      { description: "Stable Environment" },
      { description: "Taking Action for Personal Change" },
    ],
  },
]
