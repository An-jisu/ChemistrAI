import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Get_picture = () => {
  const webcamRef = useRef(null); // 웹캠 요소를 참조하기 위한 ref
  const canvasRef = useRef(null); // 캔버스 요소를 참조하기 위한 ref
  const [webcamStream, setWebcamStream] = useState(null); // 웹캠 스트림을 저장하는 상태
  const [capturedPhoto, setCapturedPhoto] = useState(null); // 캡처된 사진을 저장하는 상태
  const [answer, setAnswer] = useState(null); // 상태 초기값을 null로 설정

  // URL 파라미터를 가져오기 위해 useLocation 훅을 사용
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedSkinType = searchParams.get('skinType');

  useEffect(() => {
    // 컴포넌트가 마운트될 때 웹캠 스트림을 가져오기 위한 함수
    const getWebcamStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setWebcamStream(stream);
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    getWebcamStream();

    // 사진을 찍거나, 사진을 업로드했을 때만 complete 버튼이 활성화되도록 함
    const isCompleteButtonActive = capturedPhoto !== null;

    // 컴포넌트 언마운트 시 웹캠 스트림 해제
    return () => {
      if (webcamStream) {
        webcamStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);
  useEffect(() => {
    // 웹캠 스트림이 업데이트될 때마다 비디오 요소에 연결하여 화면에 보이도록 설정
    if (webcamStream && webcamRef.current) {
      webcamRef.current.srcObject = webcamStream;
    }
  }, [webcamStream]);

  const handleCapturePhoto = () => {
    // 사진 캡처 로직 구현
    if (webcamRef.current && canvasRef.current) {
      const video = webcamRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      const capturedImageURL = canvas.toDataURL();
      setCapturedPhoto(capturedImageURL);
    }
  };

  const handleUploadPhoto = (event) => {
    // 사진 업로드 로직 구현
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const apiUrl = 'http://54.245.9.226:58292' + '/upload_info?skinType='+selectedSkinType;

  const handleFormSubmit = async () => {
    if (!selectedSkinType || !capturedPhoto) {
      alert('Please select skin type and capture/upload a photo.');
      return;
    }
  
    const apiUrl = 'http://54.245.9.226:58292/upload_info?skinType=' + selectedSkinType;
  
    const formData = new FormData();
    formData.append('image', capturedPhoto);
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          // 여기서 헤더에 'multipart/form-data'를 지정해줍니다.
          'Content-Type': 'multipart/form-data',
          'Connection' : 'keep-alive',
          'Accept': 'application/json'
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Upload success!', data);
      setAnswer(data.status === 1);
    } catch (error) {
      console.error('Upload error!!!!!:', error);
      // Handle the error here.
    }
  };

  // 사진을 찍거나, 사진을 업로드했을 때만 complete 버튼이 활성화되도록 함
  const isCompleteButtonActive = capturedPhoto !== null;

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg p-2">
        {/* Header */}
        <header className="mb-10 text-center flex items-center justify-center p-5">
          <Link to="/" className="pl-6 absolute left-0 text-2xl">
            <IoIosArrowBack className="mr-2" />
          </Link>
          <div className="flex">
            <h1 className="text-xl font-bold">Chemistr</h1>
            <h1 className="text-xl font-bold text-primary">AI</h1>
          </div>
        </header>

        {/* Webcam */}
        <div className="text-center items-center flex flex-col justify-center">
          {webcamStream ? (
            <video
              ref={webcamRef}
              autoPlay
              playsInline
              className="w-360px h-240px rounded-md"
            />
          ) : (
            <div>No webcam access</div>
          )}
        </div>

        {/* Capture and Upload Buttons */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={handleCapturePhoto}
            className="bg-primary text-black py-2 px-4 rounded-xl focus:bg-green_2 hover:bg-green_2"
          >
            Capture
          </button>
          <label className="bg-primary text-black py-2 px-4 rounded-xl focus:bg-green_2 hover:bg-green_2">
            Upload
            <input type="file" accept="image/*" onChange={handleUploadPhoto} className="hidden" />
          </label>
        </div>

        {/* Display Captured Photo */}
        {capturedPhoto && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Captured Photo</h2>
            <img src={capturedPhoto} alt="Captured" className="w-360px h-240px mt-2 rounded-md" />
          </div>
        )}
        <Link to="/result">
          {/* 사진이 캡처되거나 업로드된 경우에만 버튼이 활성화됨 */}
          <button
            className={`w-full mt-4 py-3 px-5 bg-primary text-black py-2 px-4 text-lg rounded-xl focus:bg-green_2 hover:bg-green_2 ${
              isCompleteButtonActive ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isCompleteButtonActive} // 버튼을 비활성화함
            onClick={handleFormSubmit}
          >
            Complete
          </button>
        </Link>

        {/* Hidden Canvas for Capturing Photo */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default Get_picture;