import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // Dark theme
import 'codemirror/theme/eclipse.css'; // Light theme
import 'codemirror/mode/javascript/javascript';

// Validation logic for each topic
const validateCode = (code, topic) => {
  switch (topic) {
    case 'Comments and Printing':
      return /\/\/.*|console\.log\(.*\);/.test(code);
    case 'Variables & Data Types':
      return /(let|const|var) \w+ ?= ?(.*);/.test(code);
    case 'Basic Operations':
      return /\d+ [+\-*/] \d+/.test(code);
    case 'Conditionals':
      return /if ?\(.*\) ?{/.test(code);
    case 'Strings':
      return /".*"|'.*'/.test(code);
    case 'Loops':
      return /for ?\(.*;.*;.*\) ?{/.test(code);
    case 'Casting':
      return /Number|String|Boolean/.test(code);
    case 'Object Oriented Programming':
      return /class \w+ ?{/.test(code);
    default:
      return false;
  }
};

const getInstruction = (topic) => {
  switch (topic) {
    case 'Comments and Printing':
      return 'Write a comment using // and print a message to the console using console.log().';
    case 'Variables & Data Types':
      return 'Declare variables using let, const, or var and assign them values.';
    case 'Basic Operations':
      return 'Perform basic arithmetic operations like addition, subtraction, multiplication, and division.';
    case 'Conditionals':
      return 'Write an if statement to check a condition and execute code based on it.';
    case 'Strings':
      return 'Create a string by enclosing text in quotes, either single or double.';
    case 'Loops':
      return 'Write a for loop to iterate over a block of code a specified number of times.';
    case 'Casting':
      return 'Convert data from one type to another using Number, String, or Boolean.';
    case 'Object Oriented Programming':
      return 'Create a class with properties and methods.';
    default:
      return '';
  }
};

const LearnFrame = () => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [theme, setTheme] = useState('material'); // Default theme to dark

  const topics = [
    'Comments and Printing',
    'Variables & Data Types',
    'Basic Operations',
    'Conditionals',
    'Strings',
    'Loops',
    'Casting',
    'Object Oriented Programming'
  ];

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  const handleValidate = (topic) => {
    if (validateCode(code, topic)) {
      setFeedback(`✅ Correct for ${topic}!`);
    } else {
      setFeedback(`❌ Try Again for ${topic}.`);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'material' ? 'eclipse' : 'material'));
  };

  return (
    <div className='flex flex-col items-center justify-center text-white pt-10 text-center'>
      <h1 className='text-4xl font-bold py-2'>Learn to Code</h1>
      <div>
        <h2>Watch this Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='my-10'
        ></iframe>
      </div>
      <button onClick={toggleTheme} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
        Toggle {theme === 'material' ? 'Light' : 'Dark'} Mode
      </button>

      {topics.map((topic, index) => (
        <div key={index} className='mb-10 bg-gray-800 rounded-2xl py-6 w-1/2'>
          <h2 className='text-yellow-500 text-2xl pb-5 font-bold'>{topic}</h2>
          <p>{getInstruction(topic)}</p>
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: theme,
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
            editorDidMount={editor => {
              editor.setSize("100%", "150px"); // Set the height of the editor
            }}
          />
          <button onClick={() => handleValidate(topic)} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Validate
          </button>
        </div>
      ))}
      <p className='text-2xl my-6' >{feedback}</p>
    </div>
  );
};

export default LearnFrame;
