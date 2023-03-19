import React, { useState } from 'react';
import '../css/contact.css';
import { FaFileUpload } from "react-icons/fa";

function FileUploader() {
    const [fileList, setFileList] = useState([]);

    // 刪除檔案的函式
    const handleDeleteFile = (index) => {
        const newFileList = [...fileList];
        newFileList.splice(index, 1);
        setFileList(newFileList);
    }


    // 上傳檔案的函式
    function handleFileUpload(e) {
        const files = e.target.files;
        const newFileList = [...fileList];
        for (let i = 0; i < files.length; i++) {
            newFileList.push(files[i]);
        }
        setFileList(newFileList);
    }

    return (
        <div>
            <div className="question">
                <div className="parallelogram">附件</div>
                <label className="upload_cover">
                    <input type="file" id="file-uploader" onChange={handleFileUpload} 
                        accept=".jpg, .png" multiple data-target="file-uploader" name="uploadFile" />
                    <div className='upload_icon'><FaFileUpload ></FaFileUpload> &nbsp;點此上傳</div>
                </label>
            </div>

            <div id="fileNames">
                {fileList.map((file, index) => (
                    <h6 id="fileName" key={index}>附件 {index + 1}：{file.name}
                    <button onClick={() => handleDeleteFile(index)} className='deleteFile' >刪除</button>
                    </h6>
                ))}
            </div>

        </div>
    );
}

export default FileUploader;
