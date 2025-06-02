import { useEffect, useRef } from 'react';

export default function EditorPage() {
  const containerRef = useRef(null);

  useEffect(() => {
  import('@cesdk/cesdk').then(({ createEditor }) => {
      createEditor({
        license: 'zGUzBjUGn5lefVoeENFrdIWFhISxnPCGRGnM1qFiHfpH4bkKuUxmy0o3kKX8d_s9'
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
