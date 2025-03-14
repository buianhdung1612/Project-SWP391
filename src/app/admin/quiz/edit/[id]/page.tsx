"use client";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

interface Answer {
  skinOption: string;
  score: number;
}

interface Question {
  question: string;
  answers: Answer[];
}

export default function EditQuizAdminPage() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null); 
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(
        `https://freshskinweb.onrender.com/admin/question/group/${id}`
      );
      const result = await response.json();
      const groupData = result.data;

      const mappedQuestions = groupData.questions.map((question: any) => ({
        question: question.questionText,
        answers: question.answers.map((answer: any) => ({
          skinOption: answer.score ? answer.score.toString() : "",
          score: answer.score,
        })),
      }));

      setQuestions(mappedQuestions);
      setData(groupData);
      setTitle(groupData.title); 
      setDescription(groupData.description); 
    };

    fetchInfo();
  }, [id]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const dataSubmit = {
      title: data.title, 
      description: data.description, 
      questions: questions.map((q) => ({
        questionText: q.question,
        answers: q.answers.map((a) => ({
          skinOption: a.skinOption,
          score: a.score ? Number(a.score) : 0,
        })),
      })),
    };

    const response = await fetch(
      `https://freshskinweb.onrender.com/admin/question/group/edit/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSubmit),
      }
    );

    const dataResponse = await response.json();

    if (dataResponse.code === 200) {
      location.reload();
    }
  };

  const handleInputChange = (
    index: number,
    field: "question" | "answerskinOption" | "answerscore",
    value: string | number,
    answerIndex?: number
  ) => {
    const newQuestions = [...questions];
    if (field === "question") {
      newQuestions[index][field] = value as string;
    } else if (field === "answerskinOption" && answerIndex !== undefined) {
      newQuestions[index].answers[answerIndex].skinOption = value as string;
    } else if (field === "answerscore" && answerIndex !== undefined) {
      newQuestions[index].answers[answerIndex].score = value
        ? parseFloat(value as string)
        : 0;
    }
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answers: [{ skinOption: "", score: 0 }] },
    ]);
  };

  const handleRemoveQuestion = (indexRemove: number) => {
    const newQuestions = questions.filter((_, index) => index !== indexRemove);
    setQuestions(newQuestions);
  };

  const handleAddAnswer = (questionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push({ skinOption: "", score: 0 });
    setQuestions(newQuestions);
  };

  const handleRemoveAnswer = (questionIndex: number, answerIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers = newQuestions[questionIndex].answers.filter(
      (_, index) => index !== answerIndex
    );
    setQuestions(newQuestions);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#ffffff" }}>
      <Typography variant="h5" gutterBottom>
        Trang tạo mới bộ câu hỏi
      </Typography>

      {data && (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Bộ đề"
              name="title"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 3 }}
              value={data.title} 
              onChange={(e) => 
                setData((prevData: any) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
              required
            />
            <TextField
              label="Mô tả bộ đề"
              name="description"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 3 }}
              value={data.description} 
              onChange={(e) => 
                setData((prevData: any) => ({
                  ...prevData,
                  description: e.target.value,
                })) 
              }
              required
            />
            <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
              {questions.map((question, questionIndex) => (
                <Box key={questionIndex} sx={{ marginBottom: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TextField
                      label="Câu hỏi"
                      variant="outlined"
                      size="small"
                      value={question.question}
                      onChange={(e) =>
                        handleInputChange(questionIndex, "question", e.target.value)
                      }
                      sx={{ width: "80%", mr: 5 }}
                    />
                    <MdDeleteForever
                      onClick={() => handleRemoveQuestion(questionIndex)}
                      className="text-red-400 text-[25px] ml-[10px] cursor-pointer"
                    />
                  </Box>
                  {question.answers.map((answer, answerIndex) => (
                    <Box
                      key={answerIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        pl: 5,
                      }}
                    >
                      <TextField
                        label="Đáp án"
                        variant="outlined"
                        size="small"
                        value={answer.skinOption}
                        onChange={(e) =>
                          handleInputChange(
                            questionIndex,
                            "answerskinOption",
                            e.target.value,
                            answerIndex
                          )
                        }
                        sx={{ mr: 1, width: "700px" }}
                      />
                      <Typography variant="h6">:</Typography>
                      <TextField
                        label="Điểm"
                        type="number"
                        variant="outlined"
                        size="small"
                        value={answer.score}
                        onChange={(e) =>
                          handleInputChange(
                            questionIndex,
                            "answerscore",
                            e.target.value,
                            answerIndex
                          )
                        }
                        sx={{ ml: 1, width: "100px" }}
                      />
                      <MdDeleteForever
                        onClick={() => handleRemoveAnswer(questionIndex, answerIndex)}
                        className="text-red-400 text-[25px] ml-[20px] cursor-pointer"
                      />
                      <Button
                        variant="contained"
                        sx={{ marginLeft: 5 }}
                        onClick={() => handleAddAnswer(questionIndex)}
                      >
                        Thêm đáp án
                      </Button>
                    </Box>
                  ))}
                  <Button variant="contained" onClick={handleAddQuestion}>
                    Thêm câu hỏi
                  </Button>
                </Box>
              ))}
            </Box>
            <Button type="submit" variant="contained" color="primary" sx={{ width: "100%" }}>
              Chỉnh sửa bộ đề
            </Button>
          </form>
        </Paper>
      )}
    </Box>
  );
}
