"use client"

import QuizQuestion from "@/app/components/Quiz/QuizQuestion";
import { useState } from "react";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { useSelector } from "react-redux";

export default function QuizQuestionPage() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const listAnswers = useSelector((state: any) => state.quizReducer);

    const data: any = [
        {
            question: "01. Giới tính của bạn là gì?",
            answerA: "Nam",
            answerB: "Nữ",
            name: "q1",
            valueA: "q1a",
            valueB: "q1b",
            valueC: "q1c",
            valueD: "q1d",
            valueE: "q1e",
        },
        {
            question: "02. Độ tuổi của bạn là bao nhiêu?",
            answerA: "Dưới 25",
            answerB: "Từ 25 đến 40",
            answerC: "Từ 40 đến 50",
            answerD: "Trên 50",
            name: "q2",
            valueA: "q2a",
            valueB: "q2b",
            valueC: "q2c",
            valueD: "q2d"
        },
        {
            question: "03. Da của bạn trông như thế nào vào buổi chiều?",
            answerA: "Trán, mũi và căm bị bóng dầu nhưng phân còn lại trên mặt bình thường hoặc khô.",
            answerB: "Da của tôi không bị bóng, khá khô và có cảm giác căng ở một số khu vực.",
            answerC: "Toàn bộ khuôn mặt tôi bị bóng, có cảm giác nhờn dầu và dễ bị mụn.",
            answerD: "Da của tôi mềm mại và cảm thấy dễ chịu khi chạm vào.",
            answerE: "Da của tôi bị khô và tôi có thể nhận thấy một số nếp nhăn.",
            name: "q3",
            valueA: "q3a",
            valueB: "q3b",
            valueC: "q3c",
            valueD: "q3d",
            valueE: "q3e",
        },
        {
            question: "04. Vùng trán của bạn trông ra sao?",
            answerA: "Da bóng nhờn và không được mịn. Có mụn nhỏ hoặc mụn đầu đen.",
            answerB: "Tôi nhận thấy một vài vết bong tróc dọc theo đường chân tóc và lông mày.",
            answerC: "Da mịn và láng mượt, không có dấu hiệu bong tróc.",
            answerD: "Da khá phẳng mịn, với một vài nếp nhăn nhẹ.",
            answerE: "Điều đầu tiên tôi nhận thấy là các nếp nhăn rõ rệt.",
            name: "q4",
            valueA: "q4a",
            valueB: "q4b",
            valueC: "q4c",
            valueD: "q4d",
            valueE: "q4e",
        },
        {
            question: "05. Phần má và vùng dưới mắt của bạn trông như thế nào?",
            answerA: "Lỗ chân lông nở rộng và có mụn đầu đen hoặc đốm mụn trắng.",
            answerB: "Hầu như không có vết nhăn dễ thấy nào, chỉ có một số vùng da khô.",
            answerC: "Da nhẵn mịn với lỗ chân lông se khít.",
            answerD: "Có các nếp nhăn rõ rệt và da khá khô.",
            answerE: "Da bị kích ứng, khô và có cảm giác căng.",
            name: "q5",
            valueA: "q5a",
            valueB: "q5b",
            valueC: "q5c",
            valueD: "q5d",
            valueE: "q5e",
        },
        {
            question: "06. Da của bạn có dễ gặp các vấn đề như thâm hay đỏ rát không?",
            answerA: "Có, nhưng chỉ ở vùng chữ T (trán, mũi, căm).",
            answerB: "Da hơi đỏ, có chút tấy và không đều độ ẩm.",
            answerC: "Có, tôi thường xuyên gặp phải.",
            answerD: "Đôi khi.",
            answerE: "Hầu như không bao giờ.",
            name: "q6",
            valueA: "q6a",
            valueB: "q6b",
            valueC: "q6c",
            valueD: "q6d",
            valueE: "q6e",
        },
        {
            question: "07. Điều gì là quan trọng nhất với bạn khi chọn sản phẩm chăm sóc da?",
            answerA: "Sản phẩm giúp đối phó với bóng dầu nhưng vẫn dưỡng ẩm.",
            answerB: "Sản phẩm làm dịu và nuôi dưỡng da sâu từ bên trong.",
            answerC: "Sản phẩm thẩm thấu nhanh và cải thiện da nhanh chóng.",
            answerD: "Sản phẩm giữ cho da mịn màng và mềm mại.",
            answerE: "Sản phẩm ngăn ngừa các dấu hiệu lão hóa sớm.",
            name: "q7",
            valueA: "q7a",
            valueB: "q7b",
            valueC: "q7c",
            valueD: "q7d",
            valueE: "q7e",
        },
        {
            question: "08. Da của bạn có dễ hình thành nếp nhăn không?",
            answerA: "Có, tôi bị nếp nhăn quanh mắt hoặc khóe miệng.",
            answerB: "Tôi có một vài vết hằn do da khô.",
            answerC: "Không, tôi hầu như không có nếp nhăn.",
            answerD: "Không hẳn, da tôi lão hóa chậm.",
            name: "q8",
            valueA: "q8a",
            valueB: "q8b",
            valueC: "q8c",
            valueD: "q8d"
        },
        {
            question: "09. Da mặt bạn thay đổi ra sao trong 5 năm qua?",
            answerA: "Da bóng dầu nhiều hơn ở vùng chữ T.",
            answerB: "Da dễ bong tróc và thường cảm thấy căng.",
            answerC: "Da có nhiều khuyết điểm hơn so với trước.",
            answerD: "Da tôi vẫn ổn định và dễ chăm sóc.",
            answerE: "Da tôi có vẻ mỏng đi, kém đàn hồi và có thêm nếp nhăn.",
            name: "q9",
            valueA: "q9a",
            valueB: "q9b",
            valueC: "q9c",
            valueD: "q9d",
            valueE: "q9e",
        }
    ]

    const handlePreviousQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestion < data.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }


    const handleSubmitQuiz = () => {
        console.log(listAnswers);
        

    }

    return (
        <>
            <QuizQuestion
                question={data[currentQuestion - 1].question}
                answerA={data[currentQuestion - 1].answerA}
                answerB={data[currentQuestion - 1].answerB}
                answerC={data[currentQuestion - 1].answerC}
                answerD={data[currentQuestion - 1].answerD}
                answerE={data[currentQuestion - 1].answerE}
                name={data[currentQuestion - 1].name}
                valueA={data[currentQuestion - 1].valueA}
                valueB={data[currentQuestion - 1].valueB}
                valueC={data[currentQuestion - 1].valueC}
                valueD={data[currentQuestion - 1].valueD}
                valueE={data[currentQuestion - 1].valueE}
            />
            <div className="border-t-4 border-solid border-[#f7f9fc] mt-[100px] flex justify-center pt-[22px]">
                <div className="w-[568px] flex justify-end h-[40px]">
                    <div
                        onClick={() => {
                            if (currentQuestion > 1) {
                                handlePreviousQuestion();
                            }
                        }}
                        className={`px-[22px] cursor-pointer rounded-[8px] text-[#478AF4] text-[14px] hover:bg-[#BFBFBF] font-[600] border border-solid border-[#478AF4] hover:border-[#BFBFBF] flex items-center mr-[10px] ${currentQuestion === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        <IoChevronBack className="mr-[5px]" />
                        Trở lại
                    </div>
                    {currentQuestion != data.length ? (
                        <div
                            onClick={handleNextQuestion}
                            className="px-[22px] cursor-pointer rounded-[8px] text-white text-[14px] bg-[#478AF4] hover:bg-[#4177E0] font-[600] flex items-center border border-solid"
                        >
                            Tiếp theo
                            <IoChevronForwardOutline className="ml-[5px]" />
                        </div>
                    ) : (
                        <button
                            className="px-[22px] cursor-pointer rounded-[8px] text-white text-[14px] bg-[#478AF4] hover:bg-[#4177E0] font-[600] flex items-center border border-solid"
                            type="submit"
                            onClick={handleSubmitQuiz}
                        >
                            Hoàn thành
                            <SiTicktick className="ml-[5px]" />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}