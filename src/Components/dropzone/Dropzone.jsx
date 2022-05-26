import React from 'react';
import {useDropzone} from 'react-dropzone';
import "./dropbox.css";

export default function Dropzone(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="dropzoneWrapper">
            <section className="sectionContainer">
                <div className="dropContainer">
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <i className="ri-image-line"></i>
                        <p>Add pictures of you doing this action <br/>(optional)</p>
                    </div>
                </div>
            </section>
            <button type="submit" id="submitButton">Done</button>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}