export const quizAnswer = (question: string, answer: string) => {
    return {
        type: "ANSWER_QUESTION",
        question: question,
        answer: answer
    }
}