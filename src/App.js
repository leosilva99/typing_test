import React, { useEffect, useState } from "react";
import wordList from './resources/words.json';

const MAX_TYPED_KEYS = 30;

const getWord = () => {
    const index = Math.floor(Math.random() * wordList.length);
    const word = wordList[index];
    return word.toLowerCase();
};

const isValidKey = (key, word) => {
    if(!word) return false;
    const result = word.split('').includes(key);
    return result;
};

const Word = ({word, validKeys}) => {
    if(!word) return null;
    const joinedKeys = validKeys.join('');
    const matched = word.slice(0, joinedKeys.length);
    const remainder = word.slice(joinedKeys.length);

    return(<>
        <span className="matched">{matched}</span>
        <span className="remainder">{remainder}</span>
    </>)
};


const App = () => {
    const [typedKeys, setTypedKeys] = useState([]);
    const [validKeys, setValidKeys] = useState([]);
    const [word, setWord] = useState('');

    useEffect(() => {
        setWord(getWord());
    }, []);

    const handleKeyDown = (e) => {
        e.preventDefault();
        const { key } = e;
        console.log('key', key);

        setTypedKeys((prevTypedKeys) => {
            return [...prevTypedKeys, key].slice(-MAX_TYPED_KEYS);
        });

        if(isValidKey(key, word)) {
            setValidKeys((prevValidKeys) => {
                const isValidLength = prevValidKeys.length <= word.length;
                const isNextChar = isValidLength && word[prevValidKeys.length] === key;

                return isNextChar ? [...prevValidKeys, key] : prevValidKeys;
            });
        }

        console.log('key', key);
    };

    return (
        <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
            <div className="valid-keys">
                <Word word ={word} validKeys={validKeys}/>
            </div>
            <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
            <div className="completed-words"> 
                <ol>
                    <li>leonardo</li>
                    <li>leo</li>
                    <li>nardo</li>
                </ol>
            </div>
        </div>
    );
};

export default App;