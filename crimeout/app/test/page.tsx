'use client';

import { useState } from 'react';
import { getExample, isCrime, useGemini } from '../api/gemini';
import { handleImageUpload, uploadImage } from '../api/uploadImage';
import ReactMarkdown from 'react-markdown';

export default function Test() {
  // CASE 1. 피싱 확률 (메세지 입력)
  const [question1, setQuestion1] = useState<string>('');

  const [answer1, setAnswer1] = useState<string>('');
  const geminiFunc1 = async () => {
    // isCrime(피싱 메세지 내용) : return값으로 피싱 확률 전달
    setAnswer1(await isCrime(question1));
    setQuestion1('');
  };

  // CASE 2. 피싱 확률(이미지 첨부)
  const [answer2, setAnswer2] = useState<string>('');
  // 업로드 후 화면에 보여줄 이미지
  const [image, setImage] = useState<string>('');
  // 업로드한 이미지 파일
  const [imageFile, setImageFile] = useState<File>();
  const geminiFunc2 = async () => {
    // uploadImage(이미지 파일) : firebase에 이미지 파일을 업로드하고 return 값으로 피싱 확률 전달
    if (imageFile) setAnswer2(await uploadImage(imageFile));
    setImage('');
  };

  // CASE 3. 사례 확인
  const [answer3, setAnswer3] = useState<string>('');
  const geminiFunc3 = async () => {
    // getExample() : return값으로 최근 피싱 사례 호출
    setAnswer3(await getExample());
  };

  // CASE 4. 크아에게 질문하기
  const [question4, setQuestion4] = useState<string>('');
  const [answer4, setAnswer4] = useState<string>('');
  const geminiFunc4 = async () => {
    // isCrime(피싱 메세지 내용) : return값으로 피싱 확률 전달
    setAnswer4(await useGemini(question4));
    setQuestion4('');
  };
  return (
    <>
      <p>피싱 확률(메세지 입력)</p>
      <form>
        <input
          type="text"
          placeholder="질문을 입력하세요"
          value={question1}
          onChange={(e) => setQuestion1(e.target.value)}
        />
        <button type="button" onClick={geminiFunc1}>
          입력
        </button>
      </form>
      <div>
        답변
        <ReactMarkdown children={answer1} />
      </div>
      <br />
      <br />
      <p>피싱 확률(이미지 첨부)</p>
      <form>
        <input
          type="file"
          placeholder="이미지를 첨부해주세요"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setImageFile(e.target.files[0]);
              handleImageUpload(e.target.files[0], setImage);
            }
          }}
        />
        <button type="button" onClick={geminiFunc2}>
          입력
        </button>
      </form>
      {image && <img src={image} />}
      {image}
      <div>
        답변
        <ReactMarkdown children={answer2} />
      </div>
      <br />
      <br />
      <p>사례 확인</p>
      <button type="button" onClick={geminiFunc3}>
        확인하기
      </button>
      <div>
        답변
        <ReactMarkdown children={answer3} />
      </div>
      <br />
      <br />
      <p>크아에게 질문하기</p>
      <form>
        <input
          type="text"
          placeholder="질문을 입력하세요"
          value={question4}
          onChange={(e) => setQuestion4(e.target.value)}
        />
        <button type="button" onClick={geminiFunc4}>
          입력
        </button>
      </form>
      <div>
        답변
        <ReactMarkdown children={answer4} />
      </div>
    </>
  );
}
