import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const fetchPageData = async (pageName) => {
  try {
    const response = await fetch(`/data/${pageName}.json`);
    if (!response.ok) throw new Error('Page-specific JSON not found.');
    const data = await response.json();
    return data;
  } catch (error) {
    const mainResponse = await fetch('/data/data.json');
    const mainData = await mainResponse.json();
    return mainData[pageName];
  }
};

const PageContent = ({ pageName }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchPageData(pageName).then(setContent).catch(console.error);
  }, [pageName]);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <div>{content.content}</div>
    </div>
  );
};

export default PageContent;
