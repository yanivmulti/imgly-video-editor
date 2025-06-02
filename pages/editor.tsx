import { useEffect, useRef } from 'react';

export default function EditorPage() {
  const containerRef = useRef(null);

  useEffect(() => {
  import('@cesdk/cesdk').then(({ createEditor }) => {
      createEditor({
        license: 'הדבק כאן את המפתח שלך', // לדוגמה: zGUzBjUGn5lefVoe...
        container: containerRef.current!,
        editorConfig: {
          theme: 'dark',
          role: 'Creator',
          enableUpload: true,
          enableExport: true,
        },
      });
    });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
