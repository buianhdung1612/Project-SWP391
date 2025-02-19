const initialState = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: ""
}

export const quizReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ANSWER_QUESTION":
            // Tìm key tương ứng với action.question
            const entry = Object.entries(state).find(([key]) => key === action.question);

            if (entry) {
                return {
                    ...state,
                    [entry[0]]: action.answer
                };
            }
        default:
            return state;
    }
}