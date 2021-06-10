import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PostManipulation from './PostManipulation/PostManipulation';

export default function NewStoryPage() {
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [content, setContent] = useState('');
  const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
  const history = useHistory();

  function onPostSaveButtonClick() {
    setSaveButtonDisable(true);
    const body = {
      "title": `${title}`,
      "coverUrl": `${coverUrl}`,
      "content": `${content}`,
      "contentPreview": `${content.replace("<p>", "").replace("</p>", "").slice(0,25)}${content.length >= 25?"...":""}`
    }
    const request = axios.post("http://localhost:4001/posts", body);
    request.then(() => {
      setSaveButtonDisable(false);
      setTitle("");
      setCoverUrl("");
      setContent("");
      history.push("/");
    })
    request.catch((error)=> {alert(error.response.data);
    setSaveButtonDisable(true);
  });
  }

  return (
    <PostManipulation
      title={title}
      onTitleChange={(newTitle) => setTitle(newTitle)}
      coverUrl={coverUrl}
      onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
      content={content}
      onContentChange={(newContent) => setContent(newContent)}
      onPostSaveButtonClick={onPostSaveButtonClick}
      isSaveButtonDisabled={isSaveButtonDisabled}
    />
  );
}
