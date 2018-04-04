import delay from './delay'
const questionnaire = {
  formId: 1,
  questionnaireId: 1,
  status: 'NOT_STARTED',
  pages: [
    {
      pageId: 0,
      descriptions: 'Page 1',
      isComplated: false,
      questions: [
        {
          type: 'text',
          questionId: 'yearly_income',
          question: 'Yearly incomes',
          description: 'Yearly income',
          answer: ''
        },
        {
          type: 'text',
          questionId: 'monthly_income',
          question: 'Monthly incomes',
          description: 'Monthly income',
          answer: ''
        },
        {
          type: 'dropdown',
          questionId: 'age_group',
          question: 'Age',
          description: 'Age',
          options:[{value: "18_20", text: "18-20"},{value: "21_25", text:"21-25"},{value:"26_30", text:"26-30"}],
          answer: ''
        }
      ]
    },
    {
      pageId: 1,
      descriptions: 'Page 2',
      isComplated: false,
      questions: [
        {
          questionId: 'yearly_income',
          question: 'Yearly incomes',
          description: 'Yearly income',
          answer: ''
        }
      ]
    },
  ]
}

class QuestionnaireApi {
  static getQuestionnaireById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], questionnaire))
      }, delay);
    });
  }
}

export default QuestionnaireApi;
