import React, {useState} from 'react';
import ImageUpload from './ImageUpload';

export default function IngredientInput({onChange}){
  const [text, setText] = useState('');
  function addIngredient(){
    const item = text.trim().toLowerCase();
    if(item){ onChange(prev => Array.from(new Set([...prev, item]))); setText(''); }
  }
  return (
    <div>
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="e.g. tomato" />
      <button onClick={addIngredient}>Add</button>
      <ImageUpload onDetected={detected => onChange(prev => Array.from(new Set([...prev, ...detected])))}/>
    </div>
  );
}
