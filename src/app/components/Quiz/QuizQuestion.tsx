"use client";

import { quizAnswer } from "@/app/(actions)/quiz";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuizQuestion(props: any) {
    const { question = "", answerA = "", answerB = "", answerC = "", answerD = "", answerE = "", name = "", valueA = "", valueB = "", valueC = "", valueD = "", valueE = "" } = props;

    const answerCurrent = useSelector((state: any) => state.quizReducer[name]);
    const dispatchQuiz = useDispatch();

    const [valueCurrent, setValueCurrent] = useState("");

    // Thiết lập valueCurrent từ answerCurrent mỗi khi answerCurrent hoặc name thay đổi
    useEffect(() => {
        setValueCurrent(answerCurrent || ""); // Nếu không có giá trị hiện tại, đặt thành chuỗi rỗng
    }, [answerCurrent, name]);

    const handleChange = (event: any) => {
        const selectedValue = event.target.value;
        dispatchQuiz(quizAnswer(name, selectedValue));
        setValueCurrent(selectedValue); // Cập nhật valueCurrent
    }

    return (
        <>
            <div className="h-[52vh]">
                <div className="max-w-[900px] flex justify-center mx-auto px-[16px] pt-[30px] pb-[30px]">
                    <div className="text-[18px] text-[#262626] font-[700]">{question}</div>
                </div>

                {answerA && (
                    <div className="w-[568px] relative flex justify-center mx-auto mb-[10px]">
                        <input type="radio" name={name} id={valueA} value={valueA} className="hidden" onChange={handleChange} checked={valueCurrent === valueA} />
                        <label htmlFor={valueA} className={`block w-full rounded-[6px] bg-[#F7F8FB] py-[16px] pl-[24px] pr-[65px] cursor-pointer ` + (valueCurrent === valueA || answerCurrent === valueA ? "border border-solid border-[#478AF4]" : "")}>
                            {answerA}
                        </label>
                        <span className={`cursor-pointer ${valueCurrent === valueA || answerCurrent === valueA ? "circle-quiz-check" : "circle-quiz"}`}></span>
                    </div>
                )}

                {answerB && (
                    <div className="w-[568px] relative flex justify-center mx-auto mb-[10px]">
                        <input type="radio" name={name} id={valueB} value={valueB} className="hidden" onChange={handleChange} checked={valueCurrent === valueB} />
                        <label htmlFor={valueB} className={`block w-full rounded-[6px] bg-[#F7F8FB] py-[16px] pl-[24px] pr-[65px] cursor-pointer ` + (valueCurrent === valueB || answerCurrent === valueB ? "border border-solid border-[#478AF4]" : "")}>
                            {answerB}
                        </label>
                        <span className={`cursor-pointer ${valueCurrent === valueB || answerCurrent === valueB ? "circle-quiz-check" : "circle-quiz"}`}></span>
                    </div>
                )}

                {answerC && (
                    <div className="w-[568px] relative flex justify-center mx-auto mb-[10px]">
                        <input type="radio" name={name} id={valueC} value={valueC} className="hidden" onChange={handleChange} checked={valueCurrent === valueC} />
                        <label htmlFor={valueC} className={`block w-full rounded-[6px] bg-[#F7F8FB] py-[16px] pl-[24px] pr-[65px] cursor-pointer ` + (valueCurrent === valueC || answerCurrent === valueC ? "border border-solid border-[#478AF4]" : "")}>
                            {answerC}
                        </label>
                        <span className={`cursor-pointer ${valueCurrent === valueC || answerCurrent === valueC ? "circle-quiz-check" : "circle-quiz"}`}></span>
                    </div>
                )}

                {answerD && (
                    <div className="w-[568px] relative flex justify-center mx-auto mb-[10px]">
                        <input type="radio" name={name} id={valueD} value={valueD} className="hidden" onChange={handleChange} checked={valueCurrent === valueD} />
                        <label htmlFor={valueD} className={`block w-full rounded-[6px] bg-[#F7F8FB] py-[16px] pl-[24px] pr-[65px] cursor-pointer ` + (valueCurrent === valueD || answerCurrent === valueD ? "border border-solid border-[#478AF4]" : "")}>
                            {answerD}
                        </label>
                        <span className={`cursor-pointer ${valueCurrent === valueD || answerCurrent === valueD ? "circle-quiz-check" : "circle-quiz"}`}></span>
                    </div>
                )}

                {answerE && (
                    <div className="w-[568px] relative flex justify-center mx-auto mb-[10px]">
                        <input type="radio" name={name} id={valueE} value={valueE} className="hidden" onChange={handleChange} checked={valueCurrent === valueE} />
                        <label htmlFor={valueE} className={`block w-full rounded-[6px] bg-[#F7F8FB] py-[16px] pl-[24px] pr-[65px] cursor-pointer ` + (valueCurrent === valueE || answerCurrent === valueE ? "border border-solid border-[#478AF4]" : "")}>
                            {answerE}
                        </label>
                        <span className={`cursor-pointer ${valueCurrent === valueE || answerCurrent === valueE ? "circle-quiz-check" : "circle-quiz"}`}></span>
                    </div>
                )}
            </div>
        </>
    );
}