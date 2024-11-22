import React, { useState } from 'react';
import './Post.css';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../utils/firebase"; 
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import Label from './Label.js';
import VerticalBox from './VerticalBox.js';
import Button from './Button.js';
import Selector from './Selector.js';
import ReactMarkdown from 'react-markdown';

function Post() {
  const [postType, setPostType] = useState("Question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [code, setCode] = useState(""); // New state for code input
  const [preview, setPreview] = useState(false); // Toggle markdown preview

  const db = getFirestore(app);
  const storage = getStorage(app);

  const handleImageUpload = async () => {
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      return await getDownloadURL(imageRef);
    }
    return null;
  };

  const handleSubmit = async () => {
    try {
      const imageUrl = await handleImageUpload();
      await addDoc(collection(db, "posts"), {
        postType,
        title,
        description: postType === "Question" ? description : articleText,
        abstract: postType === "Article" ? abstract : null,
        tags,
        imageUrl,
        code, // Save the code input to Firebase
        date: new Date().toISOString(),
      });
      alert("Post added successfully!");

      setTitle("");
      setDescription("");
      setAbstract("");
      setArticleText("");
      setTags("");
      setImage(null);
      setCode(""); // Reset the code input
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding post. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <VerticalBox>
        <h2>New Post</h2>
        <VerticalBox>
          <br></br>
          <Label text="Post Type:" />
          <Selector
            options={[
              { value: "Question", label: "Question" },
              { value: "Article", label: "Article" },
            ]}
            selectedValue={postType}
            onChange={setPostType}
          />
          <br></br>
        </VerticalBox>

        <VerticalBox>
          <Label text="Title:" htmlFor="title" />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a descriptive title"
          />
        </VerticalBox>
        <br></br>
        {postType === "Question" ? (
          <VerticalBox>
            <Label text="Description:" htmlFor="description" />
            <textarea rows={10}
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your problem in detail"
            />
          </VerticalBox>
        ) : (
          <>
            <VerticalBox>
              <Label text="Abstract:" htmlFor="abstract" />
              <textarea rows={5}
                id="abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                placeholder="Enter a 1-paragraph abstract"
              />
            </VerticalBox>
            <br></br>
            <VerticalBox>
              <Label text="Article Text:" htmlFor="articleText" />
              <textarea rows={10}
                id="articleText"
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
                placeholder="Enter the main content of your article"
              />
            </VerticalBox>
          </>
        )}
        <br></br>
        <VerticalBox>
          <Label text="Tags:" htmlFor="tags" />
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Add up to 3 tags, e.g., 'javascript'"
          />
        </VerticalBox>
        <br></br>
        <VerticalBox>
          <Label text="Add an Image:" htmlFor="image" />
          <input className="image1" type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
        </VerticalBox>
        <br></br>
        <VerticalBox>
          <Label text="Code Snippet (Markdown):" />
          <CodeMirror
            value={code}
            height="200px"
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={(value) => setCode(value)}
            placeholder="Write your code or markdown here..."
          />
          <br />
          <button className="button-2"onClick={() => setPreview((prev) => !prev)}>
            {preview ? "Hide Preview" : "Show Preview"}
          </button>
          {preview && (
            <div className="markdown-preview">
              <ReactMarkdown>{code}</ReactMarkdown>
            </div>
          )}
        </VerticalBox>
        <br></br>
        <Button className="button" text="Post" onClick={handleSubmit} />
      </VerticalBox>
    </div>
  );
}

export default Post;
