import React, { useEffect, useState } from 'react';

function DemoTextBlock() {
  const [data, setData] = useState<{ title: string; message: string } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/demo-block');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: '1em', backgroundColor: '#f9f9f9', border: '1px solid #ddd', marginTop: '1em' }}>
      <h2>{data?.title || 'Loading...'}</h2>
      <p>{data?.message || 'Loading...'}</p>
    </div>
  );
}

export default DemoTextBlock;