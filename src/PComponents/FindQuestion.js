import React, { useState, useEffect } from 'react';
import './FindQuestion.css';
import { getFirestore, collection, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { app } from "../utils/firebase"; 

function FindQuestion() {
  const [questions, setQuestions] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterType, setFilterType] = useState("title"); 
  const db = getFirestore(app);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const questionsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQuestions(questionsArray);
    });
    return () => unsubscribe();
  }, [db]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Error deleting post. Please try again.");
    }
  };

  const filteredQuestions = questions.filter(question => {
    if (filterType === "title") {
      return question.title.toLowerCase().includes(filterText.toLowerCase());
    } else if (filterType === "tags") {
      return question.tags.toLowerCase().includes(filterText.toLowerCase());
    }
    return false;
  });

  return (
    <div className="find-container">
      <div className="filter-controls">
        <select 
          className="filter-dropdown" 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="tags">Tags</option>
        </select>
        <input 
          className="filter-input"
          type="text" 
          placeholder={`Filter by ${filterType}...`} 
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)} 
        />
      </div>

      {filteredQuestions.length === 0 ? (
        <p className="no-posts-message">No posts added yet.</p>
      ) : (
        filteredQuestions.map(question => (
          <div className="question-card" key={question.id}>
            {question.imageUrl && (
              <img src={question.imageUrl} alt="Post" className="question-image" />
            )}
            <h3 className="question-title">{question.title}</h3>
            <p className="question-description">{question.description}</p>
            <span className="question-tags">Tags: {question.tags}</span>
            <span className="question-date">Date: {new Date(question.date).toLocaleDateString()}</span>
            <button className="delete-button" onClick={() => handleDelete(question.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FindQuestion;
