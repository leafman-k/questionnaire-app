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
          questionId: '',
          description: '',
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
          questionId: '',
          description: '',
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
